import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Programs } from "@/components/programs";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Facilities } from "@/components/facilities";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Facilities />
      </main>
    </>
  );
}
