import React from "react";

export default function IdealGroupBrochure() {
  return (
    <div className=" bg-[#f4f1ec] text-[#0b0f2b] ">
      {/* Top Section */}
      <div className="relative h-[38vh] xs:h-[45vh]  md:h-[80vh] flex flex-row md:flex-row ">
        {/* Left - Architectural Drawing (50%) - Starts from extreme left */}
        <div className="absolute  left-0 top-0 bottom-0 w-[60%] md:w-1/2 lg:w-[50%] md:h-[80vh]">
          <img
            src="/archi2.png"
            alt="Architectural blueprint sketch"
            className="w-full  object-fill "
          />
        </div>

        {/* Right - Main Heading (50%) */}
        <div className="relative ml-[36%] md:ml-[40%] w-[85%]  md:w-full  flex flex-col items-start justify-start md:mt-[2rem] lg:mt-[2rem] p-4 md:p-12 h-[38vh] xs:h-[45vh] md:h-screen">
          <h1 className="text-xl text-[#0b0f2b] md:text-[30px] lg:text-[42px] xl:text-6xl leading-5 md:leading-none font-serif mb-2 md:mb-6">
            Over three decades of
            <br />
            <span className="italic">unwavering</span> trust.
          </h1>
          <div className="space-y-4 max-w-[740px] text-sm leading-3 md:leading-normal md:tracking-widest ">
            <p className="text-[10px] md:text-[18px] lg:text-[19px] xl:text-2xl ">
              More than three decades ago, we started out as a small contracting
              firm with a handful of people, a fierce work ethic, and an
              unwavering belief that every family deserves a space they can
              truly call their own. What kept us going was the satisfaction of
              seeing someone smile as they stepped into their first home.
            </p>
            <p className="text-[10px] md:text-[18px] lg:text-[19px] xl:text-2xl ">
              That dream, nurtured with every project we took on, slowly grew.
              From our first 214-unit residential-commercial development under
              Ideal Developers, to over 30 projects successfully delivered
              across Mira Road, Nalgaon, Vasai, and beyond - our journey has
              been shaped not just by what we have built, but who we have built
              for.
            </p>
          </div>

          {/* Decorative dots and arrows */}
          <div className="md:flex hidden  items-center gap-2 mt-8">
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-gray-400"
                ></div>
              ))}
            </div>
            <div className="flex gap-0.5 ml-2">
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-400">&gt;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative flex flex-row justify-start items-center md:flex-row h-[38vh] xs:h-[45vh] md:h-auto lg:h-auto ">
        {/* Left - Content (50%) */}
        <div className="relative w-full  ml-4 lg:ml-[2rem] xl:ml-[6rem] md:w-2/3 lg:w-[55%] flex flex-col justify-center p-1 md:p-12 h-[38vh] xs:h-[45vh] md:h-screen">
          <div className="space-y-4 mb-4 overflow-visible z-20  max-w-[740px] text-sm leading-3 md:leading-loose md:tracking-widest ">
            <p className="text-[10px] md:text-[18px]  lg:text-[19px] xl:text-2xl ">
              Today, with over 1,500 homes delivered and more than 11 lakh sq.
              ft. developed, Ideal Group is no longer just a name - it's a
              promise. A promise of quality and trust. Of creating living spaces
              that are as thoughtful as they are functional.
            </p>
            <p className="text-[10px] md:text-[18px] lg:text-[19px] xl:text-2xl ">
              As we've grown, so has our presence. Ideal Group has expanded its
              footprint through several successful ventures under various
              entities such as Ideal Homes, Ideal Shelters, Ideal Properties,
              Ideal Enterprises, and others - each reinforcing our commitment to
              building with integrity and purpose. Every home we build still
              gets the same attention and care. We focus on the details because
              we know it's not just a building. It's someone's story taking
              shape.
            </p>
            <h2 className="text-xl md:text-[30px] lg:text-[42px] xl:text-6xl overflow-visible z-20 text-[#0b0f2b]  font-serif mb-6">
              A family's <span className="italic">forever</span>.
            </h2>
          </div>
        </div>

        {/* Right - Architectural Drawing (50%) - Starts from extreme right */}
        <div className="relative  md:mt-3 right-0  top-0 bottom-0 w-[70%] md:w-2/3 lg:w-[55%] h-full">
          <img
            src="/archi1.jpg"
            alt="Architectural building sketch"
            className="w-full h-full object-contain opacity-100 "
          />
        </div>
      </div>
    </div>
  );
}
