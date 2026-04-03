import React, { useEffect, useRef, useState } from "react";
import IdealGroupBrochure from "./ideal-broucher";
import Footer from "./Footer";
import HeroSlider from "./HeroSlider";
import { useLocation } from "react-router-dom";

/**
 * DeliveredProjectsTimeline (Ideal Group style)
 * -------------------------------------------------
 * Drop required images into /public and update the paths below if needed:
 *  - /building7.png (hero illustration)
 *  - /building3.png (first cream bg section)
 *  - /building2.png (second cream bg section)
 *  - /images/closing-outline.png (bottom outline — e.g. /images/16d324eb-6004-49a7-ac33-d489ad76abe5.png)
 *  - /logo-ideal.svg (optional, footer logo)
 */

const palette = {
  navy: "#0b0f2b",
  gold: "#d3b06e",
  cream: "#f4f1ec",
  muted: "#b1b6c6",
};

type BgTextSectionProps = {
  bgImage: string;
  align?: "left" | "right"; // where the text sits (not the image)
  kicker?: string;
  title: React.ReactNode;
  body: React.ReactNode;
  imageSide?: "left" | "right"; // which side the illustration anchors to
};

const BgTextSection: React.FC<BgTextSectionProps> = ({
  bgImage,
  align = "right",
  kicker,
  title,
  body,
  imageSide = "left",
}) => {
  const textOnLeft = align === "left";
  const imageIsLeft = imageSide === "left";

  return (
    <section
      className="relative w-full overflow-hidden bg-[color:var(--cream,#f3eee6)]"
      style={{ minHeight: "90vh" }}
    >
      {/* Large anchored illustration (left or right). Low opacity to mimic brochure */}

      <div
        aria-hidden
        className={`absolute inset-y-0  ${
          imageIsLeft ? "left-0" : "right-0"
        } pointer-events-none`}
        style={{
          // Use a large width so the image visually anchors the page (adjust between 45-70vw)
          width: imageIsLeft ? "50vw" : "50vw",

          // valid background sizing (cover makes it fill the area; use `contain` or `auto 100%` if you prefer)
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: imageIsLeft ? "left bottom" : "right center",
          backgroundSize: "cover", // <-- important fix (was "fill" before)

          // subtle low-contrast effect so text sits above it like a brochure
          filter: " saturate(0.9)",
          // ensure it sits behind content
          zIndex: 1,
        }}
      />
      {/* ----- Gradient wash (no change required; small tweak to z-index) ----- */}
      <div
        aria-hidden
        className={`absolute inset-y-0 ${textOnLeft ? "left-0" : "right-0"}`}
        style={{
          width: "60%",
          background: `linear-gradient(${textOnLeft ? "to right" : "to left"},
      rgba(243,238,230,1) 0%,
      rgba(243,238,230,0.9) 30%,
      rgba(243,238,230,0.6) 60%,
      rgba(243,238,230,0) 100%)`,
          zIndex: 2, // sits above the image so text remains legible
        }}
      />
      {/* Subtle gradient wash on the side of the text to ensure legible copy */}
      <div
        aria-hidden
        className={`absolute inset-y-0 ${textOnLeft ? "left-0" : "right-0"}`}
        style={{
          width: "60%",
          background: `linear-gradient(${textOnLeft ? "to right" : "to left"},
            rgba(243,238,230,1) 0%,
            rgba(243,238,230,0.9) 30%,
            rgba(243,238,230,0.6) 60%,
            rgba(243,238,230,0) 100%)`,
        }}
      />
      {/* Content wrapper - vertically centered and constrained */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-13 items-end"
          style={{ minHeight: "60vh" }}
        >
          {/* If text is on the right we place it in cols 7-12, else cols 1-6 */}
          {textOnLeft ? (
            <div className="md:col-span-6 max-w-6xl md:col-start-1 flex items-center mt-4">
              <div>
                {kicker && (
                  <p className="text-xs tracking-[0.2em] uppercase mb-4 text-gray-600">
                    {kicker}
                  </p>
                )}
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-[#1a2240]">
                  {title}
                </h2>
                <div className="space-y-4 text-[15px] leading-relaxed text-slate-700 ">
                  {body}
                </div>
              </div>
            </div>
          ) : (
            // empty placeholder to keep layout consistent (image occupies left side visually)
            <div className="md:col-span-6 md:col-start-1" />
          )}

          {/* text on the right */}
          {!textOnLeft ? (
            <div className="md:col-span-6 max-w-[1000px] md:col-start-6 mt-4 lg:mt-[5rem] flex items-center">
              <div>
                {kicker && (
                  <p className="text-xs tracking-[0.2em] uppercase mb-4 text-gray-600">
                    {kicker}
                  </p>
                )}
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-[#1a2240]">
                  {title}
                </h2>
                <div className="space-y-4 text-[15px] leading-relaxed text-slate-700 max-w-xl">
                  {body}
                </div>
              </div>
            </div>
          ) : (
            <div className="md:col-span-6 md:col-start-7" />
          )}
        </div>
      </div>
      {/* Small decorative baseline/guide marks (optional) */}
      <div
        aria-hidden
        className="absolute left-0 right-0 bottom-6 pointer-events-none"
      >
        {/* You can add small SVG accents here if needed */}
      </div>
      {/* MOBILE: ensure image doesn't crowd text — stack with reasonable padding */}
      <style>{`
        @media (max-width: 767px) {
          section > div[aria-hidden] {
            display: none; /* hide anchored background on small screens to let text breathe */
          }
          section {
            padding: 3.5rem 0;
          }
        }
      `}</style>
    </section>
  );
};

const ImageTextSection = ({
  title = "Over three decades of unwavering trust.",
  subtitle = "More than three decades ago, we started out as a small contracting firm with a handful of people, a fierce work ethic, and an unwavering belief that every family deserves a space they can truly call their own. What kept us going was the satisfaction of seeing someone smile as they stepped into their first home.",
  description = "That dream, nurtured with every project we took on, slowly grew. From our first 214-unit residential-commercial development under Ideal Developers, to over 30 projects successfully delivered across Mira Road, Nalgaon, Vasai, and beyond - our journey has been shaped not just by what we have built, but who we have built for.",
  imageUrl = "https://via.placeholder.com/600x400", // Default placeholder
  imageAlt = "Ideal Group of Companies",
  imagePosition = "right", // "left" or "right"
  backgroundColor = "#f8f8f8",
  textColor = "#333",
  accentColor = "#b8860b",
  showDivider = true,
  className = "",
}) => {
  return (
    <section
      className={`overflow-hidden w-full ${className}`}
      style={{ backgroundColor }}
    >
      <div className="mx-auto w-full">
        <div
          className={`flex flex-col ${
            imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
          } items-stretch`}
        >
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="max-w-2xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-24">
              <div className="mb-8">
                <h1
                  className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
                  style={{ color: textColor }}
                >
                  {title}
                </h1>

                {showDivider && (
                  <div
                    className="w-20 h-1 mb-6"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                )}
              </div>

              <div className="space-y-6">
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ color: textColor, opacity: 0.9 }}
                >
                  {subtitle}
                </p>

                {description && (
                  <p
                    className="text-lg md:text-xl leading-relaxed"
                    style={{ color: textColor, opacity: 0.8 }}
                  >
                    {description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Image Content - Touches edge */}
          <div className="w-full md:w-1/3">
            <div className="relative ">
              <div className="relative ">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full  object-fill"
                  style={{
                    minHeight: "500px",
                    maxHeight: "80vh",
                  }}
                />

                {/* Optional decorative overlay */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `linear-gradient(45deg, ${accentColor}20, transparent)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Bottom purpose + contact section ---------- */
const ClosingPurposeSection: React.FC<{ bgUrl: string }> = ({ bgUrl }) => {
  const [bgSize, setBgSize] = useState(
    typeof window !== "undefined" && window.innerWidth >= 768 ? 1100 : 300,
  );

  useEffect(() => {
    const onResize = () => setBgSize(window.innerWidth >= 768 ? 1100 : 300);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return (
    <section className="relative ">
      {/* Top: cream block with light line-art bg */}
      <div
        className="relative flex justify-center items-center md:h-[75vh] lg:h-[80vh] h-[38vh] xs:h-[45vh] overflow-hidden"
        style={{ backgroundColor: palette.cream }}
      >
        {/* Left side background image */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-[40%] bg-center bg-cover"
          style={{ backgroundImage: `url(${bgUrl})` }}
        />

        {/* Right side background image */}
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-[40%] bg-center bg-cover"
          style={{
            backgroundImage: `url(/home/7 (2).png)`,
          }} // You can use a different image if needed
        />

        {/* Overlay for better text readability */}
        {/* <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "rgba(243,238,230,0.85)" }}
        /> */}

        <div className="relative h-full z-10 max-w-6xl w-[70vw] mx-auto px-4 md:px-8 py-6 md:py-20">
          <div className="space-y-4 flex flex-col justify-center  max-w-[760px] text-sm leading-3 md:leading-loose md:tracking-widest ">
            <p className="text-[10px] md:text-lg lg:text-xl 2xl:text-2xl ">
              Even now, as we work on three new projects spanning{" "}
              <span className="font-semibold">3.8 lakh sq. ft.</span>, our
              purpose remains the same – to build spaces that are lived in,
              loved, and remembered.
            </p>
            <p className="text-[10px] md:text-lg lg:text-xl 2xl:text-2xl ">
              Ideal Group has always been about more than just construction. For
              us, it's about the people – their stories, their needs, their
              dreams. We are proud of the journey so far and look forward to
              continuing it with the same purpose.
            </p>

            <h3 className="text-xl md:text-[30px] lg:text-[40px] xl:text-5xl text-[#0b0f2b] max-w-[800px] leading-5 md:leading-normal font-serif mb-6">
              Because true spaces aren't <br /> just built… they're{" "}
              <span className="italic">lived!</span>
            </h3>

            <a
              href="/completed-projects"
              className="inline-block mt-2 w-[5rem] md:w-[9rem] lg:w-[12rem] text-center px-2 py-2 lg:px-10 lg:py-3 text-[10px] md:text-lg lg:text-xl  font-semibold tracking-wide rounded-md shadow-sm"
              style={{ backgroundColor: palette.gold, color: palette.navy }}
            >
              COMPLETED <br /> PROJECTS
            </a>
          </div>
        </div>
      </div>

      {/* Bottom: navy contact band with building outline */}
      <div
        className="relative overflow-hidden h-[38vh] xs:h-[45vh] md:h-[75vh] lg:h-[80vh]"
        style={{ backgroundColor: palette.navy }}
      >
        {/* BACKGROUND IMAGE */}
        <div
          aria-hidden
          className="absolute inset-0 bg-right-bottom bg-no-repeat"
          style={{
            backgroundImage: `url("/9.png")`,
            backgroundSize: `${bgSize}px`,
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-10 h-full">
          <div className="h-full flex flex-col justify-start items-start  gap-2 md:gap-6">
            {/* LOGO */}
            <div className="flex justify-start mt-3 items-start ">
              <img
                src="/Ideal.png"
                alt="Ideal Logo"
                className="w-[5rem] md:w-[10rem] lg:w-[15rem]"
              />
            </div>

            {/* ADDRESS */}
            <div className=" flex flex-col justify-start items-start ">
              <div
                className="text-xs lg:text-xl leading-4 md:leading-5 text-left "
                style={{ color: palette.gold }}
              >
                <p>‘Ideal House’,</p>
                <p>Bellezon Complex,</p>
                <p>Mahalaxmi Temple Road,</p>
                <p>Opposite Vasai Bus Depot,</p>
                <p>Vasai (W) - 401 201</p>

                <div className="flex gap-6 mt-2 justify-start md:justify-start">
                  <a
                    href="https://www.instagram.com/idealgroupofcompanies?igsh=anhnbGxkcXE4dGFn"
                    className="fab fa-instagram text-lg lg:text-2xl"
                  />
                  <a
                    href="https://wa.me/918928983353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fab fa-whatsapp text-lg lg:text-2xl"
                  ></a>

                  <a
                    href="https://www.facebook.com/profile.php?id=100076346973060"
                    className="fab fa-facebook text-lg lg:text-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
    </section>
  );
};

/* ---------- Timeline helpers ---------- */

function useReveal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll('[data-reveal="true"]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 },
    );
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);
  return containerRef;
}

/* ---------- Main component ---------- */
export default function Home({
  showSidePattern = true,
}: {
  showSidePattern?: boolean;
}) {
  const ref = useReveal();

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "about") {
      const isMobile = window.innerWidth < 500; // Tailwind md breakpoint
      const scrollVH = isMobile ? 0.3 : 0.9;

      window.scrollTo({
        top: window.innerHeight * scrollVH,
        behavior: "smooth",
      });

      // Clear state so repeated clicks work
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      {/* HERO */}

      <HeroSlider />
      <IdealGroupBrochure />

      {/* Closing purpose + contact (uses your latest screenshot look) */}
      <ClosingPurposeSection
        bgUrl={
          "https://pub-ea0842920fce44c882e75d83c435cffb.r2.dev/home/6%20(2).png"
        }
      />
    </>
  );
}
