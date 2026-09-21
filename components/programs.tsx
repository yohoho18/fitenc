import {
  Dumbbell,
  Flame,
  UserCheck,
  Users,
  Waves,
  Salad,
} from "lucide-react";

const PROGRAMS = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Progressive programming to build raw strength and muscle with proper technique.",
  },
  {
    icon: Flame,
    title: "HIIT & Conditioning",
    description:
      "High-intensity sessions engineered to build endurance and burn fat fast.",
  },
  {
    icon: UserCheck,
    title: "Personal Training",
    description:
      "One-on-one coaching with a program built entirely around your goals.",
  },
  {
    icon: Users,
    title: "Group Classes",
    description:
      "Coach-led sessions that bring energy, accountability, and community.",
  },
  {
    icon: Waves,
    title: "Mobility & Recovery",
    description:
      "Structured recovery work to move better, reduce injury, and train longer.",
  },
  {
    icon: Salad,
    title: "Nutrition Coaching",
    description:
      "Practical nutrition guidance that supports your training and your life.",
  },
];

export function Programs() {
  return (
    <section id="programs" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Programs
          </p>
          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            Training built around your goals.
          </h2>
          <p className="text-lg text-muted-foreground">
            Every program is coached, structured, and designed to move you
            forward, whether you are just starting out or chasing a
            competitive edge.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 border border-border bg-background p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-gold/10">
                <Icon className="size-6 text-gold" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
