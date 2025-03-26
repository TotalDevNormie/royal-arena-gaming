import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { auth } from "~/server/auth";
import ServerHeader from "./_components/ServerHeader";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Royal Arena Gaming",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        <TRPCReactProvider>
          <ServerHeader />
          <main>{children}</main>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
