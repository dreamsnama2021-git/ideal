import React from "react";
import {
  HERO_LEFT,
  LOGO_IMG,
  logoAreaBG,
  livingImg,
  towerRight,
  featuresStrip1,
  amenities,
  features,
  commute,
  education,
  religious,
  picnic,
} from "../heavens-data";
import { Link } from "react-router-dom";

// ---------------------------------------------------------
// UI HELPERS
// ---------------------------------------------------------
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

const SectionHeading = ({ kicker, title, align = "left", light = false }) => (
  <div
    className={[
      "space-y-1",
      align === "center"
        ? "text-center"
        : align === "right"
        ? "text-right"
        : "text-left",
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
      className={`font-serif text-[13px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${
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
    <div className=" px-[2px] py-[2px] md:px-3 md:py-2 text-[7px] md:text-[15px] xl:text-lg font-medium tracking-wide text-stone-700">
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
    <div className=" px-[2px] py-[2px] md:px-3 md:py-2 text-[7px] md:text-[15px] xl:text-lg mt-1  font-semibold uppercase tracking-wide text-white ">
      {title}
    </div>
  </div>
);

const InfoCol = ({ title, items }) => (
  <div className="space-y-3">
    <div className="text-xl md:text-2xl font-semibold tracking-wide text-stone-800">
      {title}
    </div>
    <ul className="space-y-2 text-sm md:text-base text-stone-700">
      {items.map((it, idx) => (
        <li key={idx} className="flex items-center justify-between gap-4">
          <span>{it.label}</span>
          <span className="text-stone-500">{it.time}</span>
        </li>
      ))}
    </ul>
  </div>
);

// ---------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------
export default function HeavensPage() {
  const leftColumn = {
    title1: "Commute",
    commute: [
      ["Parnaka Bus Stop", "1 MIN"],
      ["Naigoan Station", "12 MIN"],
      ["Vasai Station", "15 MIN"],
      ["Ro-Ro Ferry", "7 MIN"],
      ["Mumbai-Ahmedabad Highway", "25 MIN"],
    ],
    title2: "Religious Places",
    religious: [
      ["Ram Mandir", "5 MIN"],
      ["Iskon Vasai", "5 MIN"],
      ["Our Lady of Grace Cathedral", "3 MIN"],
      ["Remedy Church", "2 MIN"],
      ["Shani Mandir", "2 MIN"],
    ],
  };

  const rightColumn = {
    title1: "Educational Institutes",
    education: [
      ["Thomas Baptista Jr. College", "4 MIN"],
      ["Treehouse School", "2 MIN"],
      ["Isaac Newton School", "3 MIN"],
      ["St. Gonsalo Gracia College", "2 MIN"],
      ["Podar International School", "7 MIN"],
    ],
    title2: "Picnic Spots",
    picnic: [
      ["Suruchi Beach", "4 MIN"],
      ["Vasai Fort", "6 MIN"],
      ["Rangaon Beach", "15 MIN"],
      ["Arnala Beach", "30 MIN"],
      ["Kalamb Beach", "25 MIN"],
    ],
  };
  return (
    <main className="min-h-screen w-full   text-stone-800">
      {/* HERO ------------------------------------------------ */}
      <section className="w-full h-[42vh]  bg-[#3a3a3a] md:h-auto max-w-full md:mt-6 mx-auto grid grid-cols-2  items-stretch">
        {/* LEFT: hero image */}
        <div className="  mt-[63px] bg-[#3a3a3a] md:mt-10  md:h-[90vh] w-[50vw] md:w-full overflow-hidden rounded-sm shadow-sm">
          <img
            src={HERO_LEFT}
            alt="Heavens tower"
            className="w-[50vw]  h-full object-cover overflow-hidden md:object-fit xl:object-fill block"
            // style={{ minHeight: 300, maxHeight: 920 }}
          />
        </div>

        {/* RIGHT: logo + headline card */}
        <div
          className="order-1 flex flex-col w-[50vw] md:w-full justify-center items-center md:gap-6 px-1 py-12 md:px-12 md:py-16"
          style={{ background: logoAreaBG }}
        >
          <div className="flex flex-col mt-6 md:mt-auto items-start md:items-start  lg:items-center ">
            {/* circular logo */}
            <div className="h-[100px] w-30 lg:h-[25rem] lg:w-[25rem] rounded-full  flex items-center justify-center mb-4 md:mb-6">
              <img
                src={LOGO_IMG}
                alt="Heavens logo"
                className="h-full w-full lg:h-[25rem] lg:w-[25rem] object-contain"
              />
            </div>

            {/* brand name (optional small) */}
            {/* <div className="hidden md:block font-serif text-2xl text-stone-700 mb-6">
              Heavens
            </div> */}

            {/* main heading */}
            <h1 className="font-serif text-[15px] sm:text-4xl md:text-4xl lg:text-5xl text-stone-800 leading-tight text-center md:text-left">
              READY TO START
              <br />A NEW CHAPTER?
            </h1>
          </div>

          {/* pills - centered on mobile, left on desktop */}
          <div className="flex justify-center md:justify-start gap-3 mt-2 md:mt-4">
            <Pill>
              COMMERCIAL <br /> SPACES
            </Pill>
            <Pill active>
              2BHK &amp; 3BHK <br />
              HOMES
            </Pill>
          </div>
        </div>
      </section>

      {/* EMBRACE LUXURY ------------------------------------- */}
      <section className="bg-[#3a3a3a] h-[30vh] xs:h-[40vh] lg:h-[65vh] xl:h-[80vh]  text-white w-full px-6 md:px-6 lg:py-[6rem] ">
        <div className="flex justify-end  items-end md:justify-around md:items-center gap-5 ">
          <div className="mt-[100px] xs:mt-[85px] md:mt-0 ">
            <SectionHeading light align="center" title="EMBRACE LUXURY" />
            <p className="text-white/80 text-[8px] md:ml-[55px] lg:text-2xl text-center mt-4 max-w-[340px] ">
              Step into a world where timeless design meets modern grace.
              HEAVENS by Keyators redefines luxurious living with its 14-storey
              tower, blending indoor and outdoor realms to craft a living
              experience that is both serene and sophisticated
            </p>
          </div>

          <div className="rounded-sm w-[500px] md:w-[50vw] xl:w-[40vw] overflow-hidden">
            <img
              src={livingImg}
              alt="Luxury Living"
              className="object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* ELEVATE LIFESTYLE ----------------------------------- */}
      <section className="w-full h-[67vh] xs:h-[72vh] md:h-full px-3 md:px-6 md:py-14">
        <div className=" py-2 flex h-[38vh] xs:h-[45vh] md:h-[80vh] items-center justify-around lg:px-20 gap-8 md:gap-12">
          {/* Left Section */}
          <div className="flex flex-col  items-center text-center max-w-xl">
            <div className="text-[15px] lg:text-3xl xl:text-5xl font-light ">
              READY TO ELEVATE <br /> YOUR LIFESTYLE?
            </div>

            <div className="text-stone-700 text-[8px] lg:text-2xl mt-2 md:mt-4 max-w-[370px]">
              With 3 levels of commercial spaces, 3 levels of secured parking
              and 9 levels of refined residences, every level is crafted to
              offer more — more convenience, more comfort, more life!
            </div>

            <Link
              to="/contact"
              className="md:mt-6 mt-3 bg-stone-900 px-2 py-1 md:px-8 md:py-3 rounded-sm text-[8px] text-white"
            >
              ENQUIRE NOW
            </Link>
          </div>

          <div className="rounded-sm h-[28vh] md:h-[70vh] w-[350px] md:w-[50vw] 2xl:w-[70vw]  max-h-[70vh] max-w-[40rem] overflow-hidden">
            <img
              src={towerRight}
              alt="Heavens Tower"
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        {/* Amenities */}
        <div className="md:mt-10 grid grid-cols-4 lg:px-20 gap-3 md:gap-5">
          {amenities.map((a, i) => (
            <AmenityCard key={i} title={a.title} img={a.img} />
          ))}
          <div className="flex items-center justify-center md:p-6 text-center lg:col-span-1">
            <div className="md:space-y-2">
              <div className="font-serif text-[10px] md:text-[22px] xl:text-4xl text-black">
                YOUR PRIVATE
              </div>
              <div className="font-serif text-[10px] md:text-[22px] xl:text-4xl text-black">
                ESCAPE UP IN
              </div>
              <div className="font-serif text-[10px] md:text-[22px] xl:text-4xl text-black">
                THE SKY
              </div>
            </div>
          </div>
          <p className="text-[7px] w-[10rem] md:w-full md:text-sm ">
            *For Illustration Purposes Only{" "}
          </p>
        </div>
      </section>

      {/* FEATURES ------------------------------------------- */}
      <section className="bg-[#333] h-[35vh] xs:h-[40vh] md:h-full py-6 md:py-12">
        <div className="grid grid-cols-4 gap-6 px-4 md:px-6 lg:px-20">
          {features.map((f, i) => (
            <FeatureCard key={i} title={f.title} img={f.img} />
          ))}
          <div className="flex items-center justify-center md:p-6 text-center lg:col-span-1">
            <div className="space-y-2">
              <div className="font-serif font-light text-[8px]  md:text-[20px] xl:text-4xl text-white">
                AN EVERYDAY
              </div>
              <div className="font-serif font-bold text-[8px]  md:text-[22px] xl:text-4xl text-white">
                'HEAVEN'
              </div>
              <div className="font-serif font-light text-[8px]  md:text-[22px] xl:text-4xl text-white">
                WHERE
              </div>
              <div className="font-serif font-light text-[8px]  md:text-[22px] xl:text-4xl text-white">
                COMFORT
              </div>
              <div className="font-serif font-light text-[8px]  md:text-[22px] xl:text-4xl text-white">
                MEET CLASS!
              </div>
            </div>
          </div>
          <p className="text-[7px] w-[10rem] text-gray-400 md:w-full md:text-sm ">
            *For Illustration Purposes Only{" "}
          </p>
        </div>
      </section>

      {/* PROXIMITY ----------------------------------------- */}
      <section className="bg-[#f6f3f0] px-4 py-6 2xl:px-20  md:py-14">
        <div className="w-full lg:px-[100px] mx-auto ">
          <h2 className="font-serif text-[12px] lg:text-3xl xl:text-5xl font-normal mb-6">
            LIFE, CLOSER THAN EVER...!
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

      {/* FOOTER -------------------------------------------- */}

      <section className="bg-[#3a3a3a] py-12 text-white">
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
              src={featuresStrip1}
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
                <br /> MahaRERA Reg No: P99000048740
              </div>
            </div>
            <div>
              <div className="font-semibold">
                <strong>Site Address:</strong> ‘HEAVENS’, Near VVCMC Office at
                <br />
                Parnaka, Vasai (W), Dist. Palghar - 401201
              </div>

              <div className="text-white/80">
                93226 32712 | 89289 83531 | 93240 06315
              </div>
            </div>
          </div>

          <p className="mt-6 text-left text-[6px] md:text-[10px] sm:text-xs text-white/60">
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
