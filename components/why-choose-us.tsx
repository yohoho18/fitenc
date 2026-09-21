const REASONS = [
  {
    number: "01",
    title: "No Long-Term Contracts",
    description:
      "Flexible membership options with no pressure and no lock-in periods.",
  },
  {
    number: "02",
    title: "Free Initial Assessment",
    description:
      "Every member starts with a coach-led consultation to build a real plan.",
  },
  {
    number: "03",
    title: "Small-Group Coaching",
    description:
      "Low coach-to-member ratios mean real attention, not a crowded room.",
  },
  {
    number: "04",
    title: "Proven Track Record",
    description:
      "A community built on consistent training and measurable results.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Why Choose Us
          </p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            The right environment makes the difference.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {REASONS.map(({ number, title, description }) => (
            <div key={number} className="flex gap-5">
              <span className="text-3xl font-bold text-gold">{number}</span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-background/70">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
