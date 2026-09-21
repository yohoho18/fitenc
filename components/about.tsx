import { Dumbbell, Users, CalendarClock, Trophy } from "lucide-react";

const VALUE_PROPS = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description: "Fully equipped facility built for strength, conditioning, and recovery.",
  },
  {
    icon: Users,
    title: "Certified Coaches",
    description: "Experienced trainers who build programs around your goals.",
  },
  {
    icon: Trophy,
    title: "Proven Programs",
    description: "Structured training paths for beginners through competitive athletes.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Hours",
    description: "Train on your schedule with hours that fit real life.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            About Us
          </p>
          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            Built for people serious about progress.
          </h2>
          <p className="text-lg text-muted-foreground">
            We are a training facility focused on real results, not gimmicks.
            Whether you are stepping into a gym for the first time or chasing
            a competitive goal, our coaches and programs are built to meet
            you where you are and push you forward.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {VALUE_PROPS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-3">
              <Icon className="size-6 text-gold" strokeWidth={1.75} />
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
