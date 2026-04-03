import React from "react";
import { Link } from "react-router-dom";

/**
 * AccianoVillas Page (React + TailwindCSS)
 * Responsive v2
 * - Maintains 2-col layout on md+ (tablet, laptop, desktop) and stacks on mobile
 * - Larger, fluid typography across breakpoints
 * - Containers use full width on mobile and 80% on large screens (centered)
 */

// --- Small helpers ---------------------------------------------------------
function Pill({ children, active = false }) {
  return (
    <Link
      to="/contact"
      className={`md:px-4 md:py-2 px-2 py-1  text-[8px] lg:text-2xl font-medium tracking-wide text-center transition-all ${
        active
          ? "bg-stone-800 text-white shadow-sm"
          : "bg-transparent border border-stone-800 text-stone-800"
      }`}
    >
      {children}
    </Link>
  );
}

const SectionHeading: React.FC<{
  kicker?: string;
  title: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}> = ({ kicker, title, align = "left", light = false }) => (
  <div
    className={[
      "space-y-1",
      align === "center"
        ? "text-center"
        : align === "right"
        ? "text-right"
        : "text-center",
    ].join(" ")}
  >
    {kicker && (
      <div
        className={`text-[12px] sm:text-[13px] tracking-[0.2em] ${
          light ? "text-white/70" : "text-stone-500"
        }`}
      >
        {kicker}
      </div>
    )}
    <h2
      className={`font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${
        light ? "text-white" : "text-stone-900"
      }`}
    >
      {title}
    </h2>
  </div>
);

const AmenityCard = ({ title, img }) => (
  <div className="group overflow-hidden h-[12vh] md:h-[27vh] xl:h-[37vh] w-[22vw] md:w-full rounded-sm border-t border-gray-700 ">
    <div className="h-[9vh] md:h-[20vh] xl:h-[28vh] w-[21vw] md:aspect-[4/3] overflow-hidden">
      <img
        src={img}
        alt={title}
        className="h-full mt-2 md:mt-4 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className=" md:px-3 md:py-2 text-[7px] md:text-[15px] xl:text-lg font-medium tracking-wide text-stone-700">
      {title}
    </div>
  </div>
);

const FeatureCard = ({ title, img }) => (
  <div className="group overflow-hidden h-[12vh] md:h-[27vh] xl:h-[37vh] w-[22vw] md:w-full rounded-sm border-t border-white  transition ">
    <div className="h-[9vh] md:h-[20vh] xl:h-[28vh] w-[21vw] md:aspect-[16/10] overflow-hidden">
      <img
        src={img}
        alt={title}
        className="h-full w-full mt-2 md:mt-4 object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="  md:px-3 md:py-2 text-[7px] md:text-[15px] xl:text-lg mt-1  font-semibold uppercase tracking-wide text-white ">
      {title}
    </div>
  </div>
);

const InfoCol: React.FC<{
  title: string;
  items: { label: string; time: string }[];
}> = ({ title, items }) => (
  <div className="space-y-3">
    <hr className="max-w-[10rem] text-black font-bold " />
    <div className="text-xl md:text-2xl  font-semibold tracking-wide text-stone-800">
      {title}
    </div>
    <ul className="space-y-2 text-sm md:text-base text-stone-700">
      {items.map((it, idx) => (
        <li key={idx} className="flex items-center justify-between gap-4">
          <span className="flex-1">{it.label}</span>
          <span className="shrink-0 tabular-nums text-stone-500">
            {it.time}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

// --- Main page -------------------------------------------------------------
export default function AccianoVillas() {
  const heroVilla =
    "/home/1.png";
  const logo =
    "/home/Screenshot_2025-11-19_232238-removebg-preview.png";
  const windowImg =
    "/acciano/26.png";
  const bungalow =
    "/acciano/25.png";

  const amenities = [
    {
      title: "GATED COMMUNITY",
      img: "/acciano/18.png",
    },
    {
      title: "GARDEN AREA",
      img: "https://i.pinimg.com/1200x/09/7f/05/097f05a11ba3f43b841346e6dac47450.jpg",
    },
    {
      title: "PET FRIENDLY",
      img: "/acciano/20.png",
    },
    {
      title: "JOGGING AREA",
      img: "/acciano/21.png",
    },
    {
      title: "RAINWATER HARVESTING",
      img: "/acciano/22.png",
    },
    {
      title: "KIDS PLAY AREA",
      img: "/acciano/23.png",
    },
    {
      title: "MONSOON READY DRAINAGE SYSTEM",
      img: "/acciano/24.png",
    },
  ];

  const features = [
    {
      title: "VILLAS NESTLED IN NATURE",
      img: "/acciano/11.png",
    },
    {
      title: "FALSE CEILING & MODULAR KITCHEN",
      img: "/acciano/12 (1).png",
    },
    {
      title: "BRANDED CP FITTINGS",
      img: "/acciano/13 (1).png",
    },
    {
      title: "COVERED CAR PARKING",
      img: "/acciano/14 (1).png",
    },
    {
      title: "VIDEO DOOR MONITOR",
      img: "/acciano/15.png",
    },
    {
      title: "RO WATER PURIFIER",
      img: "/acciano/16 (1).png",
    },
    {
      title: "HOTWATER GEYSER",
      img: "/acciano/17 (1).png",
    },
  ];

  const commute = [
    { label: "Papdy Bus Stop", time: "3 MIN" },
    { label: "Naigaon Station", time: "6 MIN" },
    { label: "Vasai Station", time: "10 MIN" },
    { label: "Ro-Ro Ferry", time: "10 MIN" },
    { label: "Mumbai-Ahmedabad Highway", time: "15 MIN" },
  ];
  const education = [
    ["Thomas Baptista Jr. College", "3 MIN"],
    ["St. Aloysius School", "3 MIN"],
    ["Isaac Newton School", "5 MIN"],
    ["St. Gonsalo Gracia College", "6 MIN"],
    ["Podar International School", "4 MIN"],
  ];
  const religious = [
    ["Ram Mandir", "7 MIN"],
    ["Iskon Vasai", "3 MIN"],
    ["Our Lady of Grace Cathedral", "3 MIN"],
    ["Mother of God Church", "5 MIN"],
    ["Shani Mandir", "7 MIN"],
  ];
  const picnic = [
    ["Suruchi Beach", "10 MIN"],
    ["Vasai Fort", "10 MIN"],
    ["Rangaon Beach", "15 MIN"],
    ["Arnala Beach", "30 MIN"],
    ["Kalamb Beach", "25 MIN"],
  ];
  const leftColumn = {
    title1: "Commute",
    commute: [
      ["Papdy Bus Stop", "3 MIN"],
      ["Naigaon Station", "6 MIN"],
      ["Vasai Station", "10 MIN"],
      ["Ro-Ro Ferry", "10 MIN"],
      ["Mumbai-Ahmedabad Highway", "15 MIN"],
    ],
    title2: "Religious Places",
    religious: [
      ["Ram Mandir", "7 MIN"],
      ["Iskon Vasai", "3 MIN"],
      ["Our Lady of Grace Cathedral", "3 MIN"],
      ["Mother of God Church", "5 MIN"],
      ["Shani Mandir", "7 MIN"],
    ],
  };

  const rightColumn = {
    title1: "Educational Institutes",
    education: [
      ["Thomas Baptista Jr. College", "3 MIN"],
      ["St. Aloysius School", "3 MIN"],
      ["Isaac Newton School", "5 MIN"],
      ["St. Gonsalo Gracia College", "6 MIN"],
      ["Podar International School", "4 MIN"],
    ],
    title2: "Picnic Spots",
    picnic: [
      ["Suruchi Beach", "10 MIN"],
      ["Vasai Fort", "10 MIN"],
      ["Rangaon Beach", "15 MIN"],
      ["Arnala Beach", "30 MIN"],
      ["Kalamb Beach", "25 MIN"],
    ],
  };
  return (
    <main className="min-h-screen w-full bg-stone-50 text-stone-800">
      {/* HERO -------------------------------------------------------------- */}
      <section className="w-full h-[37vh] xs:h-[43vh] md:h-auto max-w-full md:mt-6 mx-auto grid grid-cols-2  items-stretch">
        {/* LEFT IMAGE */}
        <div className=" md:order-1 mt-[65px] md:mt-10 h-[31vh] xs:h-[40vh] md:h-[90vh] w-[50vw] md:w-full overflow-hidden rounded-sm shadow-sm">
          <img
            src={heroVilla}
            alt="Acciano Villas"
            className="w-[50vw] h-full object-cover md:object-fit block"
          />
        </div>

        {/* RIGHT PANEL */}
        <div className="order-1 flex bg-[#F6F2EE] flex-col w-[50vw] md:w-full justify-center items-center md:gap-6 px-1 py-12 md:px-12 md:py-16">
          <div className="flex flex-col mt-8 md:mt-auto items-center md:items-start bg-[#F6F2EE] lg:items-center ">
            {/* LOGO – centered like screenshot */}

            <div className="h-[100px] w-30 lg:h-[25rem] lg:w-[25rem] rounded-full  flex items-center justify-center mb-4 md:mb-6">
              <img
                src={logo}
                alt="Acciano Villas Logo"
                className="h-full w-full lg:h-[25rem] lg:w-[25rem] object-contain"
              />
            </div>
            {/* HEADLINE */}
            <h1 className="font-serif text-[15px] sm:text-4xl md:text-4xl lg:text-5xl text-stone-800 leading-tight text-center md:text-left">
              DREAMING OF A HOME
              <br />
              AMONG THE TREES?
            </h1>

            {/* pills - centered on mobile, left on desktop */}
            <div className="flex justify-center md:justify-start gap-3 mt-2 md:mt-4">
              <Pill>
                INDEPENDENT <br /> VILLAS
              </Pill>
              <Pill active>
                ROW <br />
                HOUSES
              </Pill>
            </div>
          </div>
        </div>
      </section>

      {/* TRANQUILITY -------------------------------------------------------- */}
      <section className="bg-[#2d573c] h-[30vh] xs:h-[40vh] lg:h-[65vh] xl:h-[80vh]  text-white w-full px-6 md:px-6 lg:py-[6rem] ">
        <div className="flex justify-end  items-end md:justify-around md:items-center gap-5 ">
          <div className="mt-[10vh] xs:mt-[11vh] md:mt-0 ">
            <SectionHeading light align="center" title="Timeless Tranquility" />
            <p className="text-white/80 text-[8px] md:ml-[55px] lg:text-2xl text-center mt-4 max-w-[340px] ">
              A serene enclave of{" "}
              <span className="font-semibold text-white">40+ villas</span>{" "}
              nestled amidst verdant greens. Here, refined living blends
              seamlessly with nature's calm, offering an escape that's close to
              everything, yet away from it all.
            </p>
          </div>

          <div className="rounded-sm w-[500px] md:w-[50vw] xl:w-[40vw] overflow-hidden">
            <img
              src={windowImg}
              alt="Window with nature"
              className="object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* READY TO LIVE ----------------------------------------------------- */}
      <section className="w-full h-[65vh] xs:h-[72vh] md:h-full px-3 md:px-6 md:py-14">
        <div className=" py-2 flex h-[32vh] md:h-[80vh] items-center justify-around lg:px-20 gap-2  md:gap-12">
          <div className="rounded-sm h-[20vh] md:h-[60vh] xl:h-[70vh] w-[500px] md:w-[70vw] 2xl:w-[80vw]  max-h-[70vh] max-w-[60rem] overflow-hidden">
            <img
              src={bungalow}
              alt="Bungalow"
              className="object-cover h-full w-full"
            />
          </div>

          <div className="flex flex-col  items-center text-center max-w-xl">
            <div className="text-[15px] lg:text-3xl xl:text-5xl font-light ">
              READY TO LIVE YOUR <br /> DREAM?
            </div>

            <div className="text-stone-700 text-[8px] lg:text-2xl mt-2 md:mt-4 max-w-[370px]">
              Step into a life of quiet elegance in your own bungalow, embraced
              by lush greenery. Let the rustle of leaves replace the city's
              chaos, and experience a sanctuary where every moment is pure
              serenity.
            </div>

            <Link
              to="/contact"
              className="md:mt-6 mt-3 bg-stone-900 px-2 py-1 md:px-8 md:py-3 rounded-sm text-[8px] text-white"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
        <div className="md:mt-10 grid grid-cols-4 lg:px-20 gap-3 md:gap-5">
          {amenities.map((a, i) => (
            <AmenityCard key={i} title={a.title} img={a.img} />
          ))}
          <div className="rounded-2xl  flex justify-center items-center  p-6 text-center md:col-span-2 lg:col-span-1">
            <div className="font-serif text-[10px] md:text-[22px] xl:text-4xl tracking-wide text-[#1f3b2e]">
              YOUR PERSONAL RETREAT IN NATURE'S EMBRACE
            </div>
          </div>
          <p className="text-[7px] w-[10rem] text-gray-400 md:w-full md:text-sm ">
            *For Illustration Purposes Only{" "}
          </p>
        </div>
      </section>

      {/* FEATURES ---------------------------------------------------------- */}

      <section className="bg-[#2d573c] h-[35vh] xs:h-[40vh] md:h-full py-6 md:py-12">
        <div className="grid grid-cols-4 gap-6 px-4 md:px-6 lg:px-20">
          {features.map((f, i) => (
            <FeatureCard key={i} title={f.title} img={f.img} />
          ))}
          <div className="flex items-center justify-center md:p-6 text-center lg:col-span-1">
            <div className="space-y-2">
              <div className="font-serif font-light text-[8px]  md:text-[20px] xl:text-4xl text-white">
                WHERE NATURE
              </div>
              <div className="font-serif font-bold text-[8px]  md:text-[22px] xl:text-4xl text-white">
                AND
              </div>
              <div className="font-serif font-light text-[8px]  md:text-[22px] xl:text-4xl text-white">
                SOPHISTICATION
              </div>
              <div className="font-serif font-light text-[8px]  md:text-[22px] xl:text-4xl text-white">
                LIVE IN
              </div>
              <div className="font-serif font-light text-[8px]  md:text-[22px] xl:text-4xl text-white">
                HARMONY
              </div>
            </div>
          </div>
          <p className="text-[7px] w-[10rem] text-gray-400 md:w-full md:text-sm ">
            *For Illustration Purposes Only{" "}
          </p>
        </div>
      </section>

      {/* PROXIMITY LISTS --------------------------------------------------- */}

      <section className="bg-[#f6f3f0] px-4 py-6 2xl:px-20  md:py-14">
        <div className="w-full lg:px-[100px] mx-auto ">
          <h2 className="font-serif text-[12px] lg:text-3xl xl:text-5xl font-normal mb-6">
            CLOSER TO NATURE, CLOSER TO HOME..
          </h2>

          <div className="flex justify-between md:ml-3 2xl:ml-6 max-w-5xl gap-2 md:gap-4 2xl:gap-[22rem] ">
            {/* Left Column */}
            <div className="md:space-y-2 2xl:space-y-6">
              <SectionBlock
                heading={leftColumn.title1}
                items={leftColumn.commute}
              />
              <SectionBlock
                heading={leftColumn.title2}
                items={leftColumn.religious}
              />
            </div>

            {/* Right Column */}
            <div className="md:space-y-6">
              <SectionBlock
                heading={rightColumn.title1}
                items={rightColumn.education}
              />
              <SectionBlock
                heading={rightColumn.title2}
                items={rightColumn.picnic}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER -------------------------------------------------------- */}

      <section className="bg-[#2d573c] py-12 text-white">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
          <SectionHeading
            light
            align="center"
            title="READY TO EXPERIENCE IT YOURSELF?"
          />
          <div className=" mt-3 md:mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-sm border border-white/80 px-4 md:px-8 py-[4px] md:py-2.5 text-[10px] md:text-base font-semibold tracking-wide hover:bg-white hover:text-[#1f3b2e]"
            >
              CALL NOW
            </Link>
            <Link
              to="/contact"
              className="rounded-sm bg-white px-4 md:px-8 py-[4px] md:py-2.5 text-[10px] md:text-base font-semibold tracking-wide text-[#1f3b2e] hover:opacity-90"
            >
              BOOK A VISIT
            </Link>
          </div>

          <div className="mt-8 overflow-hidden rounded-sm ring-1 ring-white/10">
            <img
              src={windowImg}
              alt="Greenery strip"
              className="md:h-48 h-24 w-full object-cover"
            />
          </div>

          {/* Footer meta */}
          <div className="mt-8 grid  gap-6 text-[8px] md:text-base text-white/80 grid-cols-2">
            <div>
              <div className="font-semibold">
                More Details On:
                <br /> https://maharera.mahaonline.gov.in/
                <br /> MahaRERA Reg No: P99000035812
              </div>
            </div>
            <div>
              <div className="font-normal">
                <strong>Site Address:</strong> Acciano Villa Project, Papdy
                <br /> Naigaon Road, Chickoowadi, Papdy, Vasai (W)
              </div>

              <div className="text-white/80">
                93226 32712 | 89289 83353 | 93240 06315
              </div>
            </div>
          </div>

          <p className="mt-6 text-left text-[7px] sm:text-xs text-white/60">
            Disclaimer: The webpage is for informational purposes only and does
            not constitute a legal offer or invitation. The project is
            registered with MahaRERA (Registration No.: P99000035182. For
            details, please visit the MahaRERA website. All information,
            including images, specifications, and amenities, is indicative and
            subject to change without prior notice as per sanctioned plans and
            authority guidelines. The promoter is not responsible for any
            discrepancies in third-party information on future developments.
            Prospective buyers are advised to independently verify all details
            and rely solely on the final agreement for sale.
          </p>
        </div>
      </section>
    </main>
  );
}
function SectionBlock({ heading, items }) {
  return (
    <div className="mb-4 md:mb-6">
      <div className="w-10 md:w-20 h-[2px] bg-neutral-300 mt-1 mb-1 md:mb-4" />
      <h3 className="font-serif text-[9px] lg:text-base xl:text-3xl font-semibold tracking-wide mb-[2px] md:mb-3">
        {heading}
      </h3>

      <ul className=" space-y-1 md:space-y-3 md:p-4 md:ml-4">
        {items.map(([label, time], idx) => (
          <li
            key={idx}
            className="flex justify-between w-[165px] md:w-[19rem] xl:w-[33rem] items-center gap-1 md:gap-4"
          >
            <span className="text-[8px] lg:text-[16px] xl:text-xl tracking-wider text-neutral-800">
              • &nbsp;&nbsp;{label}
            </span>
            <span className="text-[8px] lg:text-base xl:text-xl text-neutral-600 font-normal md:ml-4">
              {time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
