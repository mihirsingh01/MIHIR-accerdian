import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Features } from "@/components/sections/Features";
import { Domain } from "@/components/sections/Domain";
import { Courses } from "@/components/sections/Courses";
import { StrategicSkill } from "@/components/sections/StrategicSkill";
import { CAT } from "@/components/sections/CAT";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { LeadCapture } from "@/components/sections/LeadCapture";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Clients />
        <Features />
        <Domain />
        <Courses />
        <StrategicSkill />
        <CAT />
        <Process />
        <FAQ />
        <Testimonials />
        <CTA />
        <LeadCapture />
      </main>
      <Footer />
    </>
  );
}
