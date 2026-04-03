import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import { useParallax } from "../hooks/useParallax";

gsap.registerPlugin(ScrollTrigger);

const primary = "#2A3361";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Owner",
    quote:
      "Ideal Builder brought our vision to life. Exceptional service and attention to detail!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    role: "Business Owner",
    quote:
      "Professional, timely, and high-quality workmanship. Highly recommend for commercial builds.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    role: "Architect",
    quote:
      "They are collaborative, efficient, and innovative. A dream to work with on luxury homes.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const shapesRef = useRef<HTMLDivElement[]>([]);
  const parallaxRef = useParallax(0.4);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30, rotateY: 10 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            delay: index * 0.1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );

        const enter = () =>
          gsap.to(card, {
            y: -4,
            borderColor: primary,
            duration: 0.2,
            ease: "power2.out",
          });
        const leave = () =>
          gsap.to(card, {
            y: 0,
            borderColor: "#F0F0F0",
            duration: 0.2,
            ease: "power2.out",
          });

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
      }
    });

    shapesRef.current.forEach((shape, index) => {
      if (shape) {
        gsap.fromTo(
          shape,
          {
            opacity: 0,
            scale: 0.5,
            rotation: index % 2 === 0 ? -45 : 45,
          },
          {
            opacity: 0.15,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            delay: index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
            },
          }
        );
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          card.removeEventListener("mouseenter", () => {});
          card.removeEventListener("mouseleave", () => {});
        }
      });
    };
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-28 bg-[#FEFEFE] text-[#2F3530] overflow-hidden border-t border-[#F0F0F0]"
    >
      {/* Background shapes */}
      <div
        ref={(el) => (shapesRef.current[0] = el!)}
        className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#2A3361] opacity-10 blur-xl"
      />
      <div
        ref={(el) => (shapesRef.current[1] = el!)}
        className="absolute bottom-20 right-20 w-48 h-48 bg-[#2A3361] opacity-10 blur-xl clip-polygon"
      />
      <div
        ref={(el) => (shapesRef.current[2] = el!)}
        className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#2A3361] opacity-10 blur-xl rotate-45"
      />

      {/* Decorative SVG */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full"
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

      <div className="container mx-auto flex-col items-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 relative">
          What Our Clients{" "}
          <span className="text-[#2A3361] font-bold">Say About Us</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#2A3361] opacity-30"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full justify-items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el!)}
              className="w-full max-w-sm bg-white border border-[#F0F0F0] rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative"
            >
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#2A3361] opacity-10 rounded-full"></div>
              <Quote className="text-[#2A3361] mb-6" size={32} />
              <p className="text-[#2F3530]/80 italic mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#2A3361]/30"
                />
                <div>
                  <div className="font-serif">{testimonial.name}</div>
                  <div className="text-sm text-[#2F3530]/70">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
