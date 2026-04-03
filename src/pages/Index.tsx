import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Testimonal from "../components/Testimonal";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import EMICalculator from "../components/EMICalculator";
// import WhatsAppButton from "../components/WhatsAppButton";
import useIsMobile from "../hooks/use-mobile";
import Home from "@/components/Home";
// import ThreeBackground from "@/components/ThreeBackground";

const SectionDivider = () => (
  <div className="flex items-center my-8">
    <div className="flex-grow border-t border-[#E5E5E5]" />
    <span className="mx-4 text-[#C98C34] font-bold text-xl">+</span>
    <div className="flex-grow border-t border-[#E5E5E5]" />
  </div>
);

const Index = () => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <div className="relative min-h-screen bg-clean-white text-navy-blue overflow-x-hidden">
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Navigation />
      <Home />
      {/* <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <EMICalculator />
      <SectionDivider />
      <Testimonal />
      <Footer />
      <WhatsAppButton /> */}
    </div>
  );
};

export default Index;
