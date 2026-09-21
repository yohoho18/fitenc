import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="border-b border-border bg-gold text-gold-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight uppercase sm:text-4xl">
          Ready to start training?
        </h2>
        <p className="max-w-xl text-lg text-gold-foreground/80">
          Enroll today and see what Encore Fitness training feels like. No
          pressure, no long-term contract required.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gold-foreground text-gold hover:bg-gold-foreground/90"
        >
          <Link href="#contact">
            Enroll Now
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
