import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

const CONTACT_LINES = [
  { label: "Location", value: "Pepsicola, Kathmandu-32" },
  { label: "Phone", value: "+977-9841000000", href: "tel:+9779841000000" },
  {
    label: "Email",
    value: "encorefit83@gmail.com",
    href: "mailto:encorefit83@gmail.com",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Encore Fitness"
                width={40}
                height={40}
                className="size-10 rounded-full"
              />
              <span className="text-base font-bold tracking-tight uppercase">
                Encore Fitness
              </span>
            </div>
            <p className="max-w-xs text-sm text-background/70">
              A training environment built for real results, from your first
              session to your next personal best.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-widest text-gold uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-widest text-gold uppercase">
              Contact
            </h3>
            <ul className="flex flex-col gap-2">
              {CONTACT_LINES.map((line) => (
                <li key={line.label} className="text-sm text-background/70">
                  <span className="text-background">{line.label}:</span>{" "}
                  {line.href ? (
                    <a href={line.href} className="hover:text-background">
                      {line.value}
                    </a>
                  ) : (
                    line.value
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-6">
          <p className="text-xs text-background/60">
            &copy; {year} Encore Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
