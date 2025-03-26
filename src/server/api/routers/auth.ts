import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { users } from "~/server/db/schema";
import bcrypt from "bcryptjs";
import { TRPCError } from "@trpc/server";

const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        username: z
          .string()
          .min(3, "Username must be at least 3 characters long"),
        email: z.string().email(),
        password: z.string().min(8), // Example: Minimum password length of 8
      }),
    )
    .mutation(async ({ input }) => {
      const { email, password, username } = input;

      // Check if user already exists
      const existingEmail = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, email),
      });

      if (existingEmail)
        throw new TRPCError({
          code: "CONFLICT",
          message: "Email is alredy taken",
        });

      const existingUsername = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.name, username),
      });

      if (existingUsername) 
        throw new TRPCError({
          code: "CONFLICT",
          message: "Username is already taken",
        });
      

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

      // Create the new user
      const newUser = await db
        .insert(users)
        .values({
          name: username,
          email,
          password: hashedPassword, // Store the hashed password
        })
        .returning();

      return {
        success: true,
        user: newUser[0],
      };
    }),
});

export default authRouter;
