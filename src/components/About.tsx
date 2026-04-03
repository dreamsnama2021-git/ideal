import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const primary = "#2A3361";
const secondary = "#18191E";
const light = "#FFFFFF";
const dark = "#1F1F1F";

const AboutCompany = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const featureCardsRef = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef(null);
  const shapesRef = useRef<HTMLDivElement[]>([]);

  const features = [
    { icon: Sparkles, text: "Over 30 Projects Completed" },
    { icon: ShieldCheck, text: "1500+ Families Served" },
    { icon: Clock, text: "Delivering Quality Since 1995" },
  ];

  useEffect(() => {
    const fadeIn = (el: any, delay = 0) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    };

    fadeIn(titleRef.current);
    fadeIn(contentRef.current, 0.1);
    fadeIn(imageRef.current, 0.2);
    fadeIn(buttonRef.current, 0.3);

    statsRef.current.forEach((el, i) => fadeIn(el, 0.05 * i));
    featureCardsRef.current.forEach((el, i) => fadeIn(el, 0.05 * i));

    // Skip blob + shape animations for simplicity/performance
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 text-black overflow-hidden border-t border-[#F0F0F0] bg-white"
    >
      {/* Background Blobs */}
      <div
        ref={(el) => (shapesRef.current[0] = el!)}
        className="absolute top-10 right-10 w-64 h-64 rounded-full"
        style={{ background: primary, opacity: 0.1, filter: "blur(80px)" }}
      />
      <div
        ref={(el) => (shapesRef.current[1] = el!)}
        className="absolute bottom-20 left-20 w-48 h-48"
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
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-serif mb-12 text-center"
        >
          About <span style={{ color: primary }}>Ideal Group Of Compamn</span>
          <div
            className="mx-auto mt-2 w-24 h-1"
            style={{ background: primary, opacity: 0.3 }}
          />
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-xl top-[10px] overflow-hidden border border-[#F0F0F0] transition-all duration-300 hover:border-[#C98C34] shadow-md hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1170&q=80"
                alt="Modern Property"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white px-5 py-2 rounded-full shadow-md">
              <span className="font-medium">Since 1990</span>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <p
              className="text-lg text-black/80 mb-4 leading-relaxed  pl-4"
              style={{ borderColor: primary }}
            >
              {isAboutPage ? (
                <>
                  More than three decades ago, we started out as a small
                  contracting firm with a handful of people, a fierce work
                  ethic, and an unwavering belief that every family deserves a
                  space they can truly call their own. What kept us going was
                  the satisfaction of seeing someone smile as they stepped into
                  their first home.
                  <br />
                  <br />
                  That dream, nurtured with every project we took on, slowly
                  grew. From our first 214-unit residential-commercial
                  development under Ideal Developers, to over 30 projects
                  completed across Mira Road, Naigaon, Vasai, and beyond — our
                  journey has been shaped not just by what we’ve built, but who
                  we’ve built for.
                  <br />
                  <br />
                  Today, with over 1,500 homes delivered and more than 11 lakh
                  sq. ft. developed, Ideal Group is no longer just a name — it’s
                  a promise. A promise of quality and trust. Of creating living
                  spaces that are as thoughtful as they are functional. As we’ve
                  grown, so has our presence. Ideal Group has expanded its
                  footprint through several successful ventures under various
                  entities such as Ideal Homes, Ideal Shelters, Ideal
                  Properties, Ideal Enterprises, and others — each reinforcing
                  our commitment to building with integrity and purpose.
                  <br />
                  <br />
                  Every home we build still gets the same attention and care. We
                  focus on the details because we know it’s not just a building.
                  It’s someone’s story taking shape. A family’s forever. Even
                  now, as we work on three new projects spanning 3.8 lakh sq.
                  ft., our purpose remains the same — to build spaces that are
                  lived in, loved, and remembered.
                  <br />
                  <br />
                  Ideal Group has always been about more than just construction.
                  For us, it’s about people — their stories, their needs, their
                  dreams. We’re proud of the journey so far and look forward to
                  continuing it with the same purpose.
                </>
              ) : (
                <>
                  More than three decades ago, we started out as a small
                  contracting firm with a handful of people, a fierce work
                  ethic, and an unwavering belief that every family deserves a
                  space they can truly call their own...
                </>
              )}
            </p>
            {!isAboutPage && (
              <Link to="/about">
                <span className="text-sm text-blue-700 underline hover:text-blue-900">
                  Read more
                </span>
              </Link>
            )}

            {/* Features */}
            <div className="space-y-4 mb-8 mt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => (featureCardsRef.current[index] = el!)}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#F0F0F0] transition-all duration-300 hover:shadow-md"
                >
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: `${primary}1A` }}
                  >
                    <feature.icon
                      className="w-5 h-5"
                      style={{ color: primary }}
                    />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { stat: "1,500+", label: "Homes Delivered" },
                { stat: "11+ Lakh", label: "Sq. Ft. Developed" },
                { stat: "30+", label: "Projects Completed" },
                { stat: "3.8 Lakh", label: "Ongoing Projects" },
              ].map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (statsRef.current[i] = el!)}
                  className="bg-white p-4 rounded-lg border border-[#F0F0F0] text-center transition-all duration-300"
                >
                  <span
                    className="text-2xl font-bold block mb-1"
                    style={{ color: primary }}
                  >
                    {item.stat}
                  </span>
                  <span className="text-black/80 text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}

            {!isAboutPage ? (
              <Link to="/about">
                <button
                  ref={buttonRef}
                  className="px-6 py-3 text-white rounded-lg transition-all flex items-center gap-2 group"
                  style={{ backgroundColor: primary }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = secondary)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = primary)
                  }
                >
                  Explore More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
