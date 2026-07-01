import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import WhyNexora from "@/components/WhyNexora";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Process />
        <Pricing />
        <FAQ />
        <WhyNexora />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
