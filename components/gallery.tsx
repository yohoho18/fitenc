import { Camera } from "lucide-react";

const GALLERY_SLOTS = Array.from({ length: 8 });

export function Gallery() {
  return (
    <section id="gallery" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Gallery
          </p>
          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            A look inside Encore Fitness.
          </h2>
          <p className="text-lg text-muted-foreground">
            Photos from the floor are on the way. Check back soon for a look
            at our space, equipment, and members in action.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {GALLERY_SLOTS.map((_, index) => (
            <div
              key={index}
              className="flex aspect-square items-center justify-center border border-border bg-muted"
            >
              <Camera className="size-6 text-gold" strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
