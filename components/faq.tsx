import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Do I need prior gym experience to join?",
    answer:
      "Not at all. Our coaches build programs for every level, whether it's your first session or you're a competitive athlete.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes. Book a free trial and every new member starts with a coach-led assessment before beginning a program.",
  },
  {
    question: "What should I bring to my first session?",
    answer:
      "Comfortable workout clothes, athletic shoes, and a water bottle. Everything else is provided at the facility.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "No. Our membership plans are flexible with no long-term lock-in required.",
  },
  {
    question: "Do you offer personal training?",
    answer:
      "Yes, one-on-one personal training is available and can be added to any membership plan.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            Frequently asked questions.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-base font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
