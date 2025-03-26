import Link from "next/link";

import { HydrateClient } from "~/trpc/server";
import AboutUs from "./_components/AboutUs";
import Services from "./_components/Services";
import Contact from "./_components/Contact";
import HomeSection from "./_components/Home";

export default async function Home() {

  return (
    <HydrateClient>
      <main>
        <HomeSection />
        <AboutUs />
        <Services />
        <Contact />
      </main>
    </HydrateClient>
  );
}
