import { auth } from "~/server/auth";
import Header from "./Header";

export default async function ServerHeader() {
  const session = await auth();
  return <Header session={session} />;
}
