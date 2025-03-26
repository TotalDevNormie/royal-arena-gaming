"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import PrimaryButton from "./Button";
import PopUpWrapper from "./PopUpWrapper";
import Auth from "./Auth";
import { auth } from "~/server/auth";
import type { Session } from "next-auth";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Button } from "~/components/ui/button";
import { signOut } from "next-auth/react";

type LinkButtonProps = {
  to: string;
  active?: boolean;
};

const LinkButton = ({ to, active }: LinkButtonProps) => {
  return (
    <Link
      href={`/#${to}`}
      className={`px-3 py-1 text-xl font-bold capitalize duration-300 ${active ? "color-white" : "text-blue-2"} hover:text-white hover:duration-100`}
    >
      {to}
    </Link>
  );
};

type HeaderProps = {
  session: Session | null;
};

const Header = ({ session }: HeaderProps) => {
  const links = ["home", "about", "services"];
  const [activeHash, setActiveHash] = useState("home");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const updateHash = () => {
      const windowHash = window.location.hash.replace("#", "");
      const validHash = links.includes(windowHash) ? windowHash : "home";

      setActiveHash(validHash);
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [pathname, searchParams]);
  return (
    <header className="bg-sapphire sticky top-0 z-10 flex items-center justify-between px-8 py-4">
      <img src="/full-logo.svg" alt="Royal Arena Gaming" className="h-10" />
      <div className="hidden items-center gap-4 md:flex">
        {links.map((link) => (
          <LinkButton key={link} to={link} active={link === activeHash} />
        ))}
        <PrimaryButton href={"#contact"} className="px-8">
          Contact
        </PrimaryButton>
        <div className="flex items-center gap-2">
          {session === null ? (
            <button
              className="bg-pink rounded-full px-8 py-2 text-xl text-white"
              onClick={() => setIsAuthOpen(true)}
            >
              Sign in
            </button>
          ) : (
            <Popover>
              <PopoverTrigger>{session.user.name}</PopoverTrigger>
              <PopoverContent>
                <div>
                  <Button onClick={() => signOut()}>Sign out</Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
      <button
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X size={32} color="white" />
        ) : (
          <Menu size={32} color="white" />
        )}
      </button>
      <div
        className={`absolute top-full right-0 grid w-full ${isMobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-[grid-template-rows] duration-300`}
      >
        <div className="overflow-hidden">
          <div
            className={`bg-sapphire z-20 flex flex-col items-end gap-4 px-8 py-4`}
          >
            {links.map((link) => (
              <LinkButton key={link} to={link} active={link === activeHash} />
            ))}
            <PrimaryButton href={"#contact"} className="px-8">
              Contact
            </PrimaryButton>
            <div className="flex items-center gap-2">
              {session === null ? (
                <button
                  className="bg-pink rounded-full px-8 py-2 text-xl text-white"
                  onClick={() => setIsAuthOpen(true)}
                >
                  Sign in
                </button>
              ) : (
                <Popover>
                  <PopoverTrigger>{session.user.name}</PopoverTrigger>
                  <PopoverContent>
                    <div>
                      <Button onClick={() => signOut()}>Sign out</Button>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </div>
          </div>
        </div>
      </div>
      <PopUpWrapper
        PopUpChild={Auth}
        isOpen={isAuthOpen}
        close={() => setIsAuthOpen(false)}
      />
    </header>
  );
};

export default Header;
