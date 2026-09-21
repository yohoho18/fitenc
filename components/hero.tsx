import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <p className="text-sm font-semibold tracking-widest text-gold uppercase">
          Strength &middot; Conditioning &middot; Results
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
          Train harder. Build strength that lasts.
        </h1>

        <p className="max-w-xl text-lg text-background/80">
          A results-driven training environment built for beginners,
          athletes, and everyone working to become stronger. Expert coaching,
          proven programs, and a community that pushes you forward.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-gold text-gold-foreground hover:bg-gold/90"
          >
            <Link href="#contact">
              Enroll Now
              <ArrowRight />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
          >
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
