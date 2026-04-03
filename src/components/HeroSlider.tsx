import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { HERO_LEFT, LOGO_IMG, logoAreaBG } from "@/heavens-data";
import { Link } from "react-router-dom";

/* ---------- Pill Component ---------- */
import { useNavigate } from "react-router-dom";

function Pill({ children, active = false }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/contact")}
      className={`md:px-4 md:py-2 px-2 py-1 text-[8px] lg:text-2xl font-medium tracking-wide text-center transition-all ${
        active
          ? "bg-stone-800 text-white shadow-sm"
          : "bg-transparent border border-stone-800 text-stone-800"
      }`}
    >
      {children}
    </button>
  );
}

/* ---------- Hero Slider ---------- */
export default function HeroSlider() {
  const palette = {
    navy: "#0b0f2b",
    gold: "#d3b06e",
    cream: "#f4f1ec",
  };

  const heroVilla =
    "/home/1.png";

  const logo =
    "/home/Screenshot_2025-11-19_232238-removebg-preview.png";

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className=""
    >
      {/* ================= SLIDE 1 ================= */}
      <SwiperSlide className="h-auto">
        <section
          className="relative overflow-hidden flex justify-end items-center h-[38vh] xs:h-[45vh]  md:h-[80vh]  xl:h-screen"
          style={{
            backgroundColor: palette.navy,
          }}
        >
          {/* Background image */}
          <div
            className="absolute  inset-0 z-0 bg-contain md:bg-cover bg-bottom  "
            style={{
              backgroundImage: `url('/home/10.png')`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Overlay */}
          <div
            className="absolute inset-50 z-1"
            style={{
              backgroundColor: palette.navy,
              opacity: 0.4,
            }}
          ></div>

          {/* Content */}
          <div className="max-w-[1500px] mt-14 md:mt-0 mx-auto px-8  md:px-8 py-8 md:py-24 lg:py-2 xl:py-2 lg:px-4  flex flex-col md:flex-row justify-start items-start relative z-10">
            <div className="w-full  lg:w-[1100px] mr-0 md:mr-[12rem] lg:mr-[-11rem] xl:mr-[5rem] 2xl:mr-[21rem] md:pr-12 text-left">
              <div className="mb-2 md:mb-6">
                <div
                  className="text-sm w-[6rem] md:w-[10rem] lg:w-[15rem] uppercase tracking-[0.2em] opacity-70"
                  style={{ color: palette.cream }}
                >
                  <img src="/Ideal.png" />
                </div>
              </div>

              <h1
                className="font-serif text-xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-2 md:mb-6"
                style={{ color: palette.gold }}
              >
                Building legacies, one <br />
                landmark at a time.
              </h1>

              <p
                className="max-w-[600px] text-[10px] md:text-lg lg:text-xl line-clamp-5 mb-1 md:mb-8"
                style={{ color: palette.cream, opacity: 0.9 }}
              >
                For over 30 years, Ideal Group of Companies has built more than
                structures—we've built trust, communities, and a legacy of
                excellence. From elegant homes to iconic commercial spaces, our
                developments embody quality, vision, and enduring value.
              </p>

              <button
                onClick={() => {
                  const isMobile = window.innerWidth < 500; // Tailwind md breakpoint
                  const scrollVH = isMobile ? 0.3 : 0.9;

                  window.scrollTo({
                    top: window.innerHeight * scrollVH,
                    behavior: "smooth",
                  });
                }}
                className="inline-block px-5 py-1 md:px-8 md:py-3 rounded-[1px] text-[11px] lg:text-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: palette.gold, color: palette.navy }}
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </SwiperSlide>

      {/* ================= SLIDE 2 ================= */}
      <SwiperSlide className="h-auto">
        <section className="w-full h-[38vh] xs:h-[45vh]  md:h-[80vh]  xl:h-[95vh] bg-[#3a3a3a]  max-w-full md:mt-6 mx-auto grid grid-cols-2  items-stretch">
          <Link to="/heavens-villa" className="block h-full">
            {/* LEFT: hero image */}
            <div className="  mt-[63px] bg-[#3a3a3a] md:mt-10 2xl:mt-[2rem]  h-[38vh] xs:h-[45vh] md:h-[80vh]  xl:h-[95vh] w-[50vw] md:w-full overflow-hidden rounded-sm shadow-sm">
              <img
                src={HERO_LEFT}
                alt="Heavens tower"
                className="w-[50vw]  h-full object-cover overflow-hidden md:object-fit 2xl:object-fill block"
                // style={{ minHeight: 300, maxHeight: 920 }}
              />
            </div>
          </Link>
          {/* RIGHT: logo + headline card */}
          <div
            className="order-1 flex flex-col w-[50vw] md:w-full justify-center items-center  md:gap-6 px-1 py-12 md:px-12 md:py-16 2xl:py-[10rem] "
            style={{ background: logoAreaBG }}
          >
            <Link to="/heavens-villa" className="block h-full">
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
            </Link>
          </div>
        </section>
      </SwiperSlide>

      {/* ================= SLIDE 3 ================= */}
      <SwiperSlide className="h-auto">
        <section className="w-full h-[38vh] xs:h-[45vh] md:h-[80vh]  xl:h-[95vh] max-w-full md:mt-6 mx-auto grid grid-cols-2  items-stretch">
          <Link to="/acciano-villa" className="block h-full">
            <div className=" md:order-1 mt-[65px] md:mt-10  h-[38vh] xs:h-[45vh] md:h-[80vh]  xl:h-[95vh] w-[50vw] md:w-full overflow-hidden rounded-sm shadow-sm">
              {/* LEFT IMAGE */}

              <img
                src={heroVilla}
                alt="Acciano Villas"
                className="w-[50vw] h-full object-cover md:object-fit 2xl:object-fill block"
              />
            </div>
          </Link>
          {/* RIGHT PANEL */}
          <div className="order-1 flex bg-[#F6F2EE] flex-col w-[50vw] md:w-full justify-center items-center md:gap-6 px-1 py-12 md:px-12 md:py-16 2xl:py-[10rem] ">
            <Link to="/acciano-villa" className="block h-full">
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
            </Link>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
}
