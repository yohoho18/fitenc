import { MapPin, Phone, Mail, Clock } from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Location",
    value: "Pepsicola, Kathmandu-32",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977-9841000000",
    href: "tel:+9779841000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "encorefit83@gmail.com",
    href: "mailto:encorefit83@gmail.com",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "6:00 AM - 9:00 PM",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-border bg-foreground text-background"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Contact / Location
          </p>
          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            Come train with us.
          </h2>
          <p className="text-lg text-background/70">
            Have a question or want to stop by? Reach out and our team will
            get back to you.
          </p>

          <dl className="mt-4 flex flex-col gap-6">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <Icon className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.75} />
                <div>
                  <dt className="text-sm font-semibold">{label}</dt>
                  <dd className="text-sm text-background/70">
                    {href ? (
                      <a href={href} className="hover:text-background">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex min-h-[320px] items-center justify-center border border-background/20 bg-background/10">
          <div className="flex flex-col items-center gap-3 text-background/60">
            <MapPin className="size-10 text-gold" strokeWidth={1.5} />
            <p className="text-sm">Map coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
