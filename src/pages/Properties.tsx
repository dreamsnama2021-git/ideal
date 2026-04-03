import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Home,
  Wrench,
  Building,
  MapPin,
  BedDouble,
  Bath,
  MoveRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useParallax } from "../hooks/useParallax";
import { ongoingProjects, completedProjects } from "../data.js";

gsap.registerPlugin(ScrollTrigger);
const ProjectCard = ({ proj, Icon }) => (
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
const Properties = () => {
  const primary = "#2A3361";
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const ongoingCardsRef = useRef([]);
  const completedCardsRef = useRef([]);
  const shapesRef = useRef([]);
  const ongoingSliderRef = useRef(null);
  const completedSliderRef = useRef(null);
  const parallaxRef = useParallax(0.4);

  // helper to scroll
  const scrollByAmount = (ref, dir) => {
    if (!ref.current) return;
    const amount = ref.current.clientWidth * 0.8; // scroll 80% of visible width
    ref.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

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
  }, []);

  const getIconComponent = (iconName) => {
    switch (iconName) {
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

  return (
    <div className="py-2 font-sans">
      <section
        ref={sectionRef}
        className="relative py-28 bg-white text-black overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          {/* Title */}
          <div
            ref={titleRef}
            className="text-4xl md:text-5xl font-serif mb-12 text-center relative max-w-3xl mx-auto"
          >
            Our <span className="text-[#2A3361] font-bold">Projects</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#2A3361] opacity-30" />
          </div>

          {/* Ongoing Projects */}
          <div className="mb-20 relative">
            <h3 className="text-2xl font-serif mb-8 pl-4 border-l-4 border-[#2A3361]">
              Ongoing Projects
            </h3>

            {/* Slider */}
            <div
              ref={ongoingSliderRef}
              className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth"
            >
              {ongoingProjects.map((project, index) => {
                const Icon = getIconComponent(project.icon);
                return (
                  <div
                    key={`ongoing-${index}`}
                    ref={(el) => (ongoingCardsRef.current[index] = el)}
                    className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden min-w-[300px] max-w-sm w-full"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image[0].img1}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <Icon className="text-[#2A3361] mt-1" size={20} />
                        <div>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <div className="flex items-center text-gray-600 text-sm">
                            <MapPin className="w-3 h-3 mr-1 text-[#2A3361]" />
                            {project.address}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-5 text-sm break-words">
                        {`${project.description.slice(0, 45)}...`}
                      </p>
                      <div className="flex justify-between mb-6 text-sm text-gray-600">
                        <span>{project.size}</span>
                        {project.bedrooms !== "N/A" && (
                          <span className="flex items-center">
                            <BedDouble className="w-4 h-4 mr-1 text-[#2A3361]" />
                            {project.bedrooms}
                          </span>
                        )}
                        <span className="flex items-center">
                          <Bath className="w-4 h-4 mr-1 text-[#2A3361]" />
                          {project.bathrooms}
                        </span>
                      </div>
                      <div className="pt-4 border-t border-gray-200 text-right">
                        <button
                          onClick={() => navigate(`/properties/${project.id}`)}
                          className="flex items-center text-[#2A3361] font-medium group"
                        >
                          View Details
                          <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <button
              onClick={() => scrollByAmount(ongoingSliderRef, "left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 border"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scrollByAmount(ongoingSliderRef, "right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 border"
            >
              <ChevronRight />
            </button>
          </div>

          <hr className="my-16 border-t border-gray-200" />

          {/* Completed Projects */}
          <div className="relative">
            <h3 className="text-2xl font-serif mb-8 pl-4 border-l-4 border-[#2A3361]">
              Completed Projects
            </h3>

            {/* Slider */}
            <div
              ref={completedSliderRef}
              className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth"
            >
              {completedProjects.map((project, index) => {
                const Icon = getIconComponent(project.icon);
                return (
                  // <div
                  //   key={`completed-${index}`}
                  //   ref={(el) => (completedCardsRef.current[index] = el)}
                  //   className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden min-w-[300px] max-w-sm w-full cursor-pointer"
                  // >
                  //   <div className="h-48 overflow-hidden">
                  //     <img
                  //       src={project.image[0].img1}
                  //       alt={project.title}
                  //       className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  //     />
                  //   </div>
                  //   <div className="p-6">
                  //     <div className="flex items-start gap-3 mb-3">
                  //       <Icon className="text-[#2A3361] mt-1" size={20} />
                  //       <div>
                  //         <h3 className="text-xl font-bold">{project.title}</h3>
                  //         <div className="flex items-center text-gray-600 text-sm">
                  //           <MapPin className="w-3 h-3 mr-1 text-[#2A3361]" />
                  //           {project.address}
                  //         </div>
                  //       </div>
                  //     </div>
                  //     <p className="text-gray-600 mb-5 text-sm line-clamp-2">
                  //       {project.description}
                  //     </p>
                  //     <div className="flex justify-between mb-6 text-sm text-gray-600">
                  //       <span>{project.size}</span>
                  //       {project.bedrooms !== "N/A" && (
                  //         <span className="flex items-center">
                  //           <BedDouble className="w-4 h-4 mr-1 text-[#2A3361]" />
                  //           {project.bedrooms}
                  //         </span>
                  //       )}
                  //       <span className="flex items-center">
                  //         <Bath className="w-4 h-4 mr-1 text-[#2A3361]" />
                  //         {project.bathrooms}
                  //       </span>
                  //     </div>
                  //   </div>
                  // </div>
                  <div
                    key={`completed-${index}`}
                    ref={(el) => (completedCardsRef.current[index] = el)}
                    className="flex-none w-[300px] bg-white rounded-xl border border-gray-200 transition-all duration-300 overflow-hidden cursor-pointer"
                    onClick={() =>
                      navigate("/completed-project", { state: { project } })
                    }
                  >
                    <ProjectCard proj={project} Icon={Icon} />
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <button
              onClick={() => scrollByAmount(completedSliderRef, "left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 border"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scrollByAmount(completedSliderRef, "right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 border"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
