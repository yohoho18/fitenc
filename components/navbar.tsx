"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-r from-[#06070a] via-[#141922] to-[#06070a] text-background backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Encore Fitness"
            width={44}
            height={44}
            priority
            className="size-11 rounded-full"
          />
          <span className="hidden text-lg font-bold tracking-tight uppercase sm:inline">
            Encore Fitness
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-background/70 transition-colors hover:text-background"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            size="lg"
            className="bg-gold text-gold-foreground hover:bg-gold/90"
          >
            <Link href="#membership">Enroll Now</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 bg-[#06070a] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-background/70 transition-colors hover:bg-white/5 hover:text-background"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="lg"
              className="mt-2 bg-gold text-gold-foreground hover:bg-gold/90"
            >
              <Link href="#membership" onClick={() => setIsOpen(false)}>
                Enroll Now
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
