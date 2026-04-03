import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { log } from "console";

const slides = [
  {
    image: "/acciano1.jpg",
    title: "Your perfect villa—spacious, elegant, and nestled",
    description: "Contemporary designs that redefine urban living spaces",
  },
  {
    image: "/acciano2.jpg",
    title: "Luxury Interiors",
    description:
      "Premium finishes and thoughtful layouts for sophisticated living",
  },
  {
    image: "/acciano3.jpg",
    title: "Acciano Aurelia Bungalows",
    description: "Built to last with the finest materials and craftsmanship",
  },
];
// console.log(slides);
const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const changeSlide = (nextIndex: number) => {
    if (nextIndex === currentIndex) return;
    setPrevIndex(currentIndex);
    setCurrentIndex(nextIndex);

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  };

  const goToNext = () => {
    const next = (currentIndex + 1) % slides.length;
    changeSlide(next);
  };

  const goToPrev = () => {
    const prev = (currentIndex - 1 + slides.length) % slides.length;
    changeSlide(prev);
  };

  useEffect(() => {
    autoSlideRef.current = setTimeout(goToNext, 5000);
    return () => autoSlideRef.current && clearTimeout(autoSlideRef.current);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-[70vh] lg:h-[100vh] overflow-hidden font-[Montserrat]">
      {/* Background Images Crossfade */}
      <div className="absolute inset-0 z-0">
        {/* Previous Image */}
        {prevIndex !== null && (
          <img
            src={slides[prevIndex].image}
            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0"
            alt=""
            aria-hidden="true"
          />
        )}
        {/* Current Image */}
        <img
          key={slides[currentIndex].image}
          src={slides[currentIndex].image}
          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-100"
          alt={slides[currentIndex].title}
          loading="eager"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Slide Content */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col justify-end items-center text-center h-full px-4 pb-8 text-white"
      >
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
          {slides[currentIndex].title}
        </h1>
        <p className="mt-2 max-w-xs sm:max-w-md text-white/80 text-xs sm:text-sm">
          {slides[currentIndex].description}
        </p>
        <Link to="/properties/ongoing-1">
          <button
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            className="mt-4 bg-primary hover:bg-[#2a2184] text-white px-4 py-2 rounded-lg text-sm font-medium shadow transition-all"
          >
            Know More
          </button>
        </Link>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 px-4 z-30 flex justify-between items-center -translate-y-1/2">
        <button
          onClick={goToPrev}
          className="bg-[#0000] hover:bg-white text-primary p-2 sm:p-3 rounded-full shadow transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={goToNext}
          className="bg-[#0000] hover:bg-white text-primary p-2 sm:p-3 rounded-full shadow transition"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Brochure Button */}
      <div className="absolute bottom-4 right-4 z-30">
        <a
          href="#"
          className="bg-primary text-white hover:bg-[#2f1c74] px-3 py-1.5 rounded-lg text-xs font-medium border border-[#502eb8] transition-all flex items-center gap-1 shadow"
        >
          📄 Brochure
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
