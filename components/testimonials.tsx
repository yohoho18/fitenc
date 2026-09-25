import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Placeholder testimonial text. Real member feedback will be added here once collected.",
    name: "Member Name",
    role: "Placeholder",
  },
  {
    quote:
      "Placeholder testimonial text. Real member feedback will be added here once collected.",
    name: "Member Name",
    role: "Placeholder",
  },
  {
    quote:
      "Placeholder testimonial text. Real member feedback will be added here once collected.",
    name: "Member Name",
    role: "Placeholder",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            What our members say.
          </h2>
          <p className="text-lg text-muted-foreground">
            Real member testimonials are being collected and will replace the
            placeholders below.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 border border-border bg-muted/40 p-6"
            >
              <Quote className="size-6 text-gold" strokeWidth={1.75} />
              <p className="text-sm text-muted-foreground italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
