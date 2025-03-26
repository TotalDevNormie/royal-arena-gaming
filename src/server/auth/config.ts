
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { db } from "~/server/db";
import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "~/server/db/schema";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authConfig = {
  providers: [
    DiscordProvider,

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Partial<Record<"identifier" | "password", unknown>>,
        _request: Request
      ) {
        if (
          !credentials ||
          typeof credentials.identifier !== "string" ||
          typeof credentials.password !== "string"
        ) {
          return null;
        }

        const identifier = credentials.identifier;
        const password = credentials.password;

        const user = await db.query.users.findFirst({
          where: (users, { eq }) =>
            eq(users.name, identifier) || eq(users.email, identifier),
        });

        console.log("user", user);

        if (user && user.password) {
          const checkPassword = await bcrypt.compare(
            password,
            user.password as string
          );

          if (checkPassword) {
            return user;
          }
          return null;
        }
        return null;
      },
    }),
  ],
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  callbacks: {
    jwt: async ({ token, user }) => {
      // When signing in, persist the user.id to the token.
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token?.id || (user && user.id),
        },
      };
    },
  },
  // Optionally, you can set the session strategy explicitly.
  session: { strategy: "jwt" },
} satisfies NextAuthConfig;
