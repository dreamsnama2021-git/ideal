// Projects.tsx
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  BedDouble,
  Bath,
  MoveRight,
  Wrench,
  Building,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ongoingProjects, completedProjects } from "../../src/data.js";
import { Link, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const primary = "#2A3361";
const secondary = "#18191E";
const light = "#FFFFFF";
const dark = "#1F1F1F";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"Ongoing" | "Completed">(
    "Ongoing"
  );
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const shapesRef = useRef<HTMLDivElement[]>([]);
  const navigate = useNavigate();

  const currentProjects =
    activeTab === "Ongoing" ? ongoingProjects : completedProjects;

  // New refs for desktop slider
  const desktopSliderRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );
    }

    shapesRef.current.forEach((shape, i) => {
      if (shape) {
        gsap.fromTo(
          shape,
          { opacity: 0, scale: 0.5, rotation: i % 2 === 0 ? -45 : 45 },
          {
            opacity: 0.15,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            delay: i * 0.3,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: ".projects-section",
              start: "top bottom",
            },
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    cardsRef.current.forEach((card, idx) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay: idx * 0.1,
            duration: 0.6,
            ease: "power3.out",
          }
        );

        const enter = () =>
          gsap.to(card, {
            y: -5,
            boxShadow: `0 10px 30px ${primary}25`,
            duration: 0.3,
          });
        const leave = () =>
          gsap.to(card, {
            y: 0,
            boxShadow: `0 5px 15px ${primary}1A`,
            duration: 0.3,
          });

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        return () => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        };
      }
    });
  }, [activeTab]);

  // Pointer/drag handlers for desktop slider
  useEffect(() => {
    const slider = desktopSliderRef.current;
    if (!slider) return;

    const onPointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      slider.classList.add("cursor-grabbing");
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      // capture pointer to get pointerup outside element
      (e.target as Element).setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1; // scroll-fast multiplier
      slider.scrollLeft = scrollLeft.current - walk;
    };

    const onPointerUp = (e: PointerEvent) => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
      try {
        (e.target as Element).releasePointerCapture?.(e.pointerId);
      } catch {}
    };

    // mouse leave should stop dragging
    const onPointerLeave = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
    };

    slider.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    slider.addEventListener("pointerleave", onPointerLeave);

    return () => {
      slider.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      slider.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [activeTab, desktopSliderRef.current]);

  const getIcon = (name: string) => {
    switch (name) {
      case "Home":
        return Home;
      case "Wrench":
        return Wrench;
      case "Building":
        return Building;
      default:
        return Home;
    }
  };

  const handleProjectClick = (proj: any) => {
    if (activeTab === "Completed") {
      navigate("/completed-project", { state: { project: proj } });
    } else {
      navigate(`/${proj.id}`, { state: { project: proj } });
    }
  };

  // Arrow button scroll (desktop)
  const scrollByWidth = (dir: "left" | "right") => {
    const slider = desktopSliderRef.current;
    if (!slider) return;
    const amount = Math.floor(slider.clientWidth * 0.7); // scroll by 70% of visible width
    slider.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="projects-section relative py-28 bg-white text-black overflow-hidden border-t border-[#F0F0F0]">
      {/* Background Shapes */}
      <div
        ref={(el) => (shapesRef.current[0] = el!)}
        className="absolute top-10 left-10 w-64 h-64 rounded-full"
        style={{ background: primary, opacity: 0.1, filter: "blur(80px)" }}
      />
      <div
        ref={(el) => (shapesRef.current[1] = el!)}
        className="absolute bottom-20 right-20 w-48 h-48"
        style={{ background: primary, opacity: 0.1, filter: "blur(80px)" }}
      />

      {/* Wave Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C150,200 350,0 500,100 C650,200 750,50 1000,150 L1000,0 L0,0 Z"
            fill={primary}
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-serif mb-12 text-center"
        >
          Our <span style={{ color: primary }}>Projects</span>
          <div
            className="mx-auto mt-2 w-24 h-1"
            style={{ background: primary, opacity: 0.3 }}
          />
        </h2>

        {/* Tabs */}
        <div className="flex justify-center items-center gap-4 mb-16">
          {["Ongoing", "Completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "Ongoing" | "Completed")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all border ${
                activeTab === tab
                  ? `bg-[${primary}] text-white border-[${primary}] shadow-md`
                  : `border-[${primary}]/40 text-black hover:bg-[${primary}]/10 hover:border-[${primary}]/60`
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="px-1">
          {/* Mobile Scroll (unchanged) */}
          <div className="block lg:hidden overflow-x-auto whitespace-nowrap scroll-smooth pb-4">
            {currentProjects.map((proj, idx) => {
              const Icon = getIcon(proj.icon);
              return (
                <div
                  key={idx}
                  ref={(el) => (cardsRef.current[idx] = el!)}
                  className="inline-block w-[300px] mx-2 bg-white rounded-xl border border-[#F0F0F0] transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => handleProjectClick(proj)}
                >
                  <ProjectCard proj={proj} Icon={Icon} />
                </div>
              );
            })}
          </div>

          {/* Desktop Slider (now slidable) */}
          <div className="hidden lg:block relative">
            {/* Left / Right arrows */}
            <button
              onClick={() => scrollByWidth("left")}
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-[#eee] absolute left-0 top-1/2 -translate-y-1/2 z-20"
              aria-label="scroll left"
            >
              <ChevronLeft size={18} />
            </button>

            <div
              ref={desktopSliderRef}
              className="flex gap-6 px-6 py-2 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
              // styles for drag cursor
              style={{ cursor: "grab" }}
            >
              {currentProjects.map((proj, idx) => {
                const Icon = getIcon(proj.icon);
                return (
                  <div
                    key={idx}
                    ref={(el) => (cardsRef.current[idx] = el!)}
                    className="flex-none w-[360px] bg-white rounded-xl border border-[#F0F0F0] transition-all duration-300 overflow-hidden cursor-pointer snap-start"
                    onClick={() => handleProjectClick(proj)}
                  >
                    <ProjectCard proj={proj} Icon={Icon} />
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => scrollByWidth("right")}
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-[#eee] absolute right-0 top-1/2 -translate-y-1/2 z-20"
              aria-label="scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Card Component
const ProjectCard = ({ proj, Icon }: any) => (
  <>
    <div className="h-48 overflow-hidden">
      <img
        src={String(
          Object.values(proj.image?.[0] || {})[0] || "/placeholder.jpg"
        )}
        alt={proj.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>

    <div className="p-6">
      <div className="flex items-start gap-3 mb-3">
        <Icon className="text-[#2A3361] mt-1" size={20} />
        <div className="w-full">
          <h3 className="text-lg font-bold truncate">{proj.title}</h3>
          <div className="flex items-center text-sm text-black/80">
            <MapPin className="w-3 h-3 mr-1 text-[#2A3361]" />
            <span className="truncate">{proj.address}</span>
          </div>
        </div>
      </div>

      <p className="text-black/70 mb-5 text-sm line-clamp-2">
        {proj.description}
      </p>

      <div className="pt-4 border-t border-[#F0F0F0] text-right">
        <div className="flex items-center justify-end text-[#2A3361] font-medium group">
          View Details
          <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </>
);

export default Projects;
