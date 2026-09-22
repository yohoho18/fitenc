import { Dumbbell, Activity, LayoutGrid, ShowerHead } from "lucide-react";

const FACILITIES = [
  {
    icon: Dumbbell,
    title: "Free Weight Area",
    description: "A full range of barbells, plates, and racks for serious strength work.",
  },
  {
    icon: Activity,
    title: "Train Together",
    description: "A motivating fitness environment where energy, consistency, and community make every session count.",
  },
  {
    icon: LayoutGrid,
    title: "Functional Training Studio",
    description: "Open floor space for group classes, mobility work, and functional training.",
  },
  {
    icon: ShowerHead,
    title: "Locker Rooms & Showers",
    description: "Clean, private facilities so you can train and go straight to your day.",
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Facilities
          </p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            A facility built to train in.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {FACILITIES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col">
              <div className="flex aspect-video items-center justify-center border border-border bg-muted">
                <Icon className="size-10 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
