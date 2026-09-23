import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "Basic",
    price: "TBD",
    description: "Full access to train on your own schedule.",
    features: [
      "Full gym floor access",
      "Free weights & machines",
      "Locker room access",
    ],
    featured: false,
  },
  {
    name: "Standard",
    price: "TBD",
    description: "Our most popular plan for consistent training.",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "One free coaching assessment",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "TBD",
    description: "Full coaching support for serious progress.",
    features: [
      "Everything in Standard",
      "Personal training sessions",
      "Nutrition coaching",
    ],
    featured: false,
  },
];

export function Membership() {
  return (
    <section id="membership" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Membership Plans
          </p>
          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            Find the plan that fits your training.
          </h2>
          <p className="text-lg text-muted-foreground">
            Pricing is being finalized. Contact us for current rates and
            availability.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col gap-6 border bg-muted/40 p-8 ${
                plan.featured ? "border-gold" : "border-border"
              }`}
            >
              {plan.featured && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-gold px-3 py-1 text-xs font-semibold tracking-widest text-gold-foreground uppercase">
                  Most Popular
                </span>
              )}

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold uppercase tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <p className="text-3xl font-bold">{plan.price}</p>

              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={
                  plan.featured
                    ? "mt-auto bg-gold text-gold-foreground hover:bg-gold/90"
                    : "mt-auto"
                }
                variant={plan.featured ? undefined : "outline"}
              >
                <Link href="#contact">Enroll Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
