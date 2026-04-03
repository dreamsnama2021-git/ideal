import { useEffect, Suspense, lazy, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Lenis } from "lenis/react";

// Static imports
import AboutCompany from "./components/About";
import Testimonials from "./components/Testimonal"; // Keep if file name is "Testimonal.tsx"
import AboutPage from "./pages/Aboutpage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import CompletedProjects from "./pages/CompletedProjects";
import HeavensPage from "./pages/Heavens";
// import AccianoVillasComponent from "./pages/Acciano";
// Lazy imports
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Index = lazy(() => import("./pages/Index"));
const Properties = lazy(() => import("./pages/Properties"));
const PropertyDetail = lazy(() => import("./pages/PropertyDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AccianoVillasComponent = lazy(() => import("./pages/Acciano"));

const queryClient = new QueryClient();

const App = () => {
  // useEffect(() => {
  //   const runLenis = () => {
  //     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  //     const lenis = new Lenis({
  //       duration: isMobile ? 1.0 : 1.2,
  //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //       smoothWheel: !isMobile,
  //       touchMultiplier: isMobile ? 1.5 : 1,
  //       infinite: false,
  //     });

  //     const raf = (time: number) => {
  //       lenis.raf(time);
  //       requestAnimationFrame(raf);
  //     };

  //     requestAnimationFrame(raf);

  //     // Cleanup function
  //     return () => lenis.destroy();
  //   };

  //   if ("requestIdleCallback" in window) {
  //     (window as any).requestIdleCallback(runLenis);
  //   } else {
  //     setTimeout(runLenis, 1);
  //   }
  // }, []);

  const routes = useMemo(
    () => (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="properties" element={<Properties />} />
          <Route path="properties/:id" element={<PropertyDetail />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="completed-projects" element={<CompletedProjects />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/acciano-villa" element={<AccianoVillasComponent />} />
          <Route path="/heavens-villa" element={<HeavensPage />} />
        </Route>
      </Routes>
    ),
    []
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
                Loading...
              </div>
            }
          >
            {routes}
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
