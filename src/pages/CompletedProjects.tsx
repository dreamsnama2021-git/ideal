import React, { useEffect, useRef } from "react";

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
  navy: "#000138",
  gold: "#d3b06e",
  cream: "#f3eee6",
  muted: "#b1b6c6",
};

/* ---------- Reusable full-bg section ---------- */
type BgTextSectionProps = {
  bgImage: string;
  align?: "left" | "right"; // side the text sits on
  kicker?: string;
  title: React.ReactNode;
  body: React.ReactNode;
};

const BgTextSection: React.FC<BgTextSectionProps> = ({
  bgImage,
  align = "right",
  kicker,
  title,
  body,
}) => {
  const textOnLeft = align === "left";
  return (
    <section
      className="relative min-h-[80vh] flex items-stretch overflow-hidden"
      style={{ backgroundColor: palette.cream }}
    ></section>
  );
};

/* ---------- Bottom purpose + contact section ---------- */
const ClosingPurposeSection: React.FC<{ bgUrl: string }> = ({ bgUrl }) => {
  return (
    <section className="relative h-[70vh]">
      {/* Top: cream block with light line-art bg */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: palette.cream }}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${bgUrl})` }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "rgba(243,238,230,0.85)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="space-y-5 text-[#202747]">
            <p className="text-[15px] leading-relaxed">
              Even now, as we work on three new projects spanning{" "}
              <span className="font-semibold">3.8 lakh sq. ft.</span>, our
              purpose remains the same – to build spaces that are lived in,
              loved, and remembered.
            </p>
            <p className="text-[15px] leading-relaxed">
              Ideal Group has always been about more than just construction. For
              us, it’s about the people – their stories, their needs, their
              dreams. We are proud of the journey so far and look forward to
              continuing it with the same purpose.
            </p>

            <h3 className="font-serif text-3xl md:text-4xl text-[#0f1840]">
              Because true spaces aren’t just built… they’re{" "}
              <span className="italic">lived!</span>
            </h3>

            <a
              href="#completed-projects"
              className="inline-block mt-2 px-5 py-3 text-xs font-semibold tracking-wide rounded-md shadow-sm"
              style={{ backgroundColor: palette.gold, color: palette.navy }}
            >
              COMPLETED PROJECTS
            </a>
          </div>
        </div>
      </div>

      {/* Bottom: navy contact band with building outline */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: palette.navy }}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-right-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: "1100px",
            opacity: 0.25,
            mixBlendMode: "screen",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <div className="space-y-4">
              {/* Swap to your actual logo path or keep text fallback */}
              <div className="flex items-center gap-3">
                <img
                  src="/logo-ideal.svg"
                  alt="Ideal Group of Companies"
                  className="h-10 w-auto hidden md:block"
                />
                <span
                  className="text-xl md:text-2xl font-semibold tracking-wide"
                  style={{ color: palette.gold }}
                >
                  IDEAL <span className="font-normal">GROUP OF COMPANIES</span>
                </span>
              </div>
              <div
                className="text-[15px] leading-7"
                style={{ color: palette.cream }}
              >
                <p
                  className="font-serif text-lg"
                  style={{ color: palette.gold }}
                >
                  ‘Ideal House’,
                </p>
                <p>Bellezon Complex,</p>
                <p>Mahalaxmi Temple Road,</p>
                <p>Opposite Vasai Bus Depot,</p>
                <p>Vasai (W) - 401 201</p>
              </div>
            </div>
            <div className="h-40 md:h-56" />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Timeline data ---------- */
const projects = [
  {
    id: "ideal-park",
    title: "Ideal Park — Mira Road",
    year: "1996",
    blurb:
      "Our story of scale began with Ideal Park — 238 residences across 118,420 sq. ft. Designed as more than just a housing project, it grew into a living, breathing township where families found connection, convenience, and a sense of belonging. It proved early on that our developments were never about structures alone, but about creating communities that endure.",
    image: "/idealpark.jpg",
  },
  {
    id: "ideal-tower",
    title: "Ideal Tower — Mira Road",
    year: "1998",
    blurb:
      "With Ideal Tower, we introduced a forward-looking idea for its time — bringing homes and businesses under one roof. Spread across 110,960 sq. ft. and 214 units, it became a space where life and work could thrive together, proving our ability to anticipate how cities were changing and design for what people truly needed.",
    image: "/idealtower.jpg",
  },
  {
    id: "mandar-villa",
    title: "Mandar Villa — Mira Road",
    year: "2006",
    blurb:
      " At the same time, we showed that scale wasn’t our only strength. Mandar Villa, a single bespoke residence of 5,000 sq. ft., reflected the same dedication and craftsmanship we brought to our largest communities. It was a reminder that every dream, whether one home or many, deserved to be fulfilled with care",
    image: "/mandarvilla.jpg",
  },
  {
    id: "ideal-homes",
    title: "Ideal Homes — Mira Road",
    year: "2004",
    blurb:
      "Ideal Homes was a step toward refinement. With just 11 residences, it wasn’t about numbers — it was about detail. Each home was crafted to offer a boutique living experience where thoughtful layouts and quality finishes spoke louder than scale.",
    image: "/Idealhomes.jpeg",
  },
  {
    id: "ideal-enclave",
    title: "Ideal Enclave — Mira Road",
    year: "2005",
    blurb:
      "Ideal Enclave raised the bar higher. With 276 units spread across 159,339 sq. ft., it required vision, planning, and long-term commitment. What emerged was a vibrant residential-commercial landmark designed to stand the test of time.",
    image: "/Idealenclave1.jpeg",
  },
  {
    id: "royal-residency",
    title: "Royal Residency — Mira Road",
    year: "2007",
    blurb:
      "Royal Residency marked the beginning of meaningful partnerships. In collaboration with Reliable Developers, we delivered 59 homes designed with practicality, comfort, and reliability — proving that the right partnership can create spaces that feel truly welcoming.",
    image: "/royalresidency.jpeg",
  },
  {
    id: "ivory-heights",
    title: "Ivory Heights — Mira Road",
    year: "2007",
    blurb:
      "Ivory Heights continued our spirit of collaboration, delivering 21 spacious residences designed for a modern way of living. It reflected our growing ability to align with partners while still upholding the quality and values that define our work.",
    image: "/ivoryhieghts.jpeg",
  },
  {
    id: "pereira-paradise",
    title: "Pereira Paradise — Vasai",
    year: "2012",
    blurb:
      "Pereira Paradise marked our return to Vasai — 43 residences that quickly became a sought-after address. It wasn’t just about meeting housing demand; it was about bringing thoughtful planning and a higher standard of living back to where our roots were.",
    image: "/perieraparadise.jpg",
  },
  {
    id: "cerejo-residency",
    title: "Cerejo Residency — Vasai",
    year: "2012",
    blurb:
      "Cerejo Residency was built in partnership with the landowner — a blend of local understanding and our development expertise. With 55 residences, it stands as an example of how collaboration can create meaningful value for both communities and stakeholders.",
    image: "/cerejo.jpg",
  },
  {
    id: "nirvana-villas",
    title: "Nirvana Villas — Vasai",
    year: "2013",
    blurb:
      "Nirvana Villas represented exclusivity and calm. With just four homes, the project emphasized privacy, serenity, and experience — proving that quality is defined not by size, but by the life a home offers its residents.",
    image: "/nirvana.jpg",
  },
  {
    id: "dynasty",
    title: "Dynasty — Vasai",
    year: "2013",
    blurb:
      "Dynasty, though compact with just nine units, showcased versatility. By combining residential and commercial use within 5,000 sq. ft., it reflected our adaptability to the evolving needs of a growing suburb.",
    image: "/dynasty.jpg",
  },
  {
    id: "dynasty",
    title: "Manish II – Dahisar",
    year: "2013",
    blurb:
      " Redevelopment brought new opportunities with Manish II, where 30 modern residences replaced an older structure. It was about giving a familiar location a fresh future — proof that renewal can be just as powerful as new beginnings",
    image: "/dynasty.jpg",
  },
  {
    id: "furtado-residency",
    title: "Furtado Residency — Vasai",
    year: "2014",
    blurb:
      "Furtado Residency blended residences with commercial spaces, offering versatility to families and entrepreneurs alike. Across 33 units, it demonstrated our ability to create developments that serve more than one purpose — places where living and livelihood coexist.",
    image: "/furtadoresidency.jpg",
  },
  {
    id: "gods-gift",
    title: "God’s Gift — Vasai",
    year: "2016",
    blurb:
      "God’s Gift reflected warmth both in name and design. With 42 homes, it brought families together in a community where comfort and connection enriched everyday living.",
    image: "/godsgift.jpg",
  },
  {
    id: "morning-star",
    title: "Morning Star — Vasai",
    year: "2018",
    blurb:
      "Morning Star carried forward our commitment to thoughtful design, delivering 28 homes that balanced practical layouts with contemporary finishes — homes created for effortless, everyday living.",
    image: "/morningstar.jpg",
  },
  {
    id: "acciano-villas",
    title: "Acciano Villas — Vasai",
    year: "2010",
    blurb:
      "Acciano Villas marked a milestone — 45 modern villas, each with its own identity yet part of a larger vision. Intimate, elegant, and thoughtfully planned, they reflected everything we had learned over the years: individuality, livability, and community woven together.",
    image: "/acciano.jpg",
  },
  {
    id: "furtado-chambers",
    title: "Furtado Chambers — Mira Road",
    year: "2019",
    blurb:
      "Furtado Chambers marked our natural evolution into commercial real estate. Designed as 9,000 sq. ft. of business-ready space, it represents not just a building, but an environment for enterprise, productivity, and the next chapter of our story.",
    image: "/furtadochambers.jpg",
  },
  {
    id: "bellezon",
    title: "Bellezon — Vasai",
    year: "2021",
    blurb:
      "Bellezon is an exclusive residential enclave comprising 6 elegant row houses, thoughtfully designed to offer both privacy and community living. Spread across 10,000 sq. ft. of crafted space, it stands as a testament to refined living and our enduring commitment to craftsmanship.",
    image: "/bellezon.jpg",
  },
  {
    id: "bellezon2",
    title: "...the Journey Continues",
    blurb: "",
  },
];

/* ---------- Timeline helpers ---------- */
/* Side pattern as fixed, repeating background */
const SidePatternFixed: React.FC<{
  side?: "left" | "right";
  width?: number; // px
  opacity?: number; // 0..1
  z?: number;
}> = ({ side = "right", width = 140, opacity = 1, z = 10 }) => {
  const isLeft = side === "left";

  const style: React.CSSProperties = {
    position: "fixed", // fixed -> spans viewport & stays while scroll
    top: 0,
    bottom: 0,
    width: `${width}px`,
    pointerEvents: "none",
    zIndex: z,
    opacity,
    backgroundImage: `url(${
      isLeft ? "/sidepattern.png" : "/sidepatternright.png"
    })`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "contain", // or "cover" / "auto" depending on artwork
    backgroundPosition: isLeft ? "left top" : "right top",
    // small horizontal offset so it sits outside padded content
    transform: isLeft ? `translateX(-8px)` : `translateX(8px)`,
  };

  if (isLeft) (style as any).left = 0;
  else (style as any).right = 0;

  return <div aria-hidden style={style} />;
};

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
      { threshold: 0.2 }
    );
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);
  return containerRef;
}

/* ---------- Main component ---------- */
export default function DeliveredProjectsTimeline({
  showSidePattern = true,
}: {
  showSidePattern?: boolean;
}) {
  const ref = useReveal();

  return (
    <>
      {/* Cream BG section 1 */}

      {/* Cream BG section 2 */}
      {/* <BgTextSection
        bgImage={"/building2.png"}
        align="left"
        title={
          <>
            A family’s <span className="italic">forever.</span>
          </>
        }
        body={
          <>
            <p>
              Today, with over 1,500 homes delivered and more than 11 lakh sq.
              ft. developed, Ideal Group is no longer just a name — it’s a
              promise. A promise of quality and trust. Of creating living spaces
              that are as thoughtful as they are functional.
            </p>
            <p>
              As we’ve grown, so has our presence. Ideal Group has expanded its
              footprint through several successful ventures — Ideal Homes, Ideal
              Shelters, Ideal Properties, Ideal Enterprises, and more — each
              reinforcing our commitment to building with integrity and purpose.
            </p>
            <p>
              Every home we build still gets the same attention and care. We
              focus on the details because we know it’s not just a building.
              It’s someone’s story taking shape.
            </p>
          </>
        }
      /> */}

      {/* Closing purpose + contact (uses your latest screenshot look) */}
      {/* <ClosingPurposeSection bgUrl={"/building5.png"} /> */}

      {/* Timeline */}
      <section
        ref={ref}
        className="w-full py-20 relative overflow-hidden"
        style={{ backgroundColor: palette.navy }}
      >
        {showSidePattern && (
          <>
            <SidePatternFixed side="left" width={100} opacity={0.2} z={10} />
            <SidePatternFixed side="right" width={100} opacity={0.2} z={10} />
          </>
        )}

        <div className="max-w-6xl mt-8 mx-auto px-6 md:px-8">
          <header className="text-center mb-8 md:mb-14">
            <h2
              className="text-3xl md:text-5xl font-serif tracking-tight"
              style={{ color: palette.gold }}
            >
              Delivered Projects
            </h2>
          </header>

          <div className="relative">
            <div
              aria-hidden
              className=" block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full"
              style={{
                background: `linear-gradient(${palette.gold}, ${palette.cream})`,
              }}
            />

            <ol className="md:space-y-14">
              {projects.map((p, idx) => (
                <li key={p.id} className="relative">
                  <span
                    aria-hidden
                    className=" inline-block absolute left-1/2 -translate-x-1/2 mt-7 h-3 w-3 rounded-full"
                    style={{ backgroundColor: palette.gold }}
                  />
                  <article
                    data-reveal="true"
                    className={`opacity-0 translate-y-6 transition-all duration-700 will-change-transform ${
                      idx % 2 === 0
                        ? "ml-auto max-w-[46%]"
                        : "mr-auto max-w-[46%]"
                    }`}
                  >
                    <div className="rounded-2xl p-4 md:p-7 lg:p-4">
                      <div className="flex items-start gap-4">
                        <div className="grow">
                          <h3
                            className="font-serif text-[12px] md:text-2xl lg:text-4xl leading-tight mb-2"
                            style={{ color: palette.gold }}
                          >
                            {p.title}
                          </h3>
                          <p
                            className="text-[7px] w-[40vw] md:w-full max-w-[460px] md:text-base lg:text-xl xl:text-[20px] tracking-wide "
                            style={{ color: palette.muted }}
                          >
                            {p.blurb}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
              {/* <div>
                <h2
                  className="text-white xl:text-5xl ml-2 md:ml-4 xl:mr-[12rem] font-serif text-right"
                  style={{ color: palette.gold }}
                >
                  ...the Journey <br />
                  Continues
                </h2>
              </div> */}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
