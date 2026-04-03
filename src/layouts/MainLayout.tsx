// layouts/MainLayout.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ThreeBackground from "../components/ThreeBackground";
import CopyrightStrip from "@/components/CopyRight";

gsap.registerPlugin(ScrollTrigger);

const MainLayout = () => {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Mobile-specific CSS fixes
    if (isMobile) {
      document.body.style.overflowX = "hidden";
      document.body.style.touchAction = "pan-y";
    }

    return () => {
      if (isMobile) {
        document.body.style.overflowX = "";
        document.body.style.touchAction = "";
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-clean-white text-navy-blue overflow-x-hidden">
      <style>{`
        html, body {
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
        }
        * {
          -webkit-tap-highlight-color: ;
        }
      `}</style>

      {/* <ThreeBackground /> */}
      <Navigation />
      <main>
        <Outlet /> {/* This renders the child routes */}
      </main>
      <CopyrightStrip />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
