import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Programs } from "@/components/programs";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Membership } from "@/components/membership";
import { Facilities } from "@/components/facilities";
import { Contact } from "@/components/contact";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Membership />
        <Facilities />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
