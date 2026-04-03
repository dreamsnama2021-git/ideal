import React from "react";

/**
 * AccianoVillasCardExactReplica
 * Uses provided OC Received PNG stamp and matches the reference layout exactly.
 * (No "PROJECT GALLERY" line.)
 */

type AccianoVillasCardProps = {
  imageUrl?: string;
  ribbonSrc?: string; // PNG badge URL
  brandName?: string;
  brandSubtitle?: string;
  configLine?: string;
  locationText?: string;
  highlightLine?: string;
  subHighlightLine?: string;
};

function RibbonStamp({ src }: { src: string }) {
  return (
    <div
      className="absolute left-3 top-3 sm:left-4 sm:top-4 select-none"
      aria-hidden
    >
      <img
        src={src}
        alt="OC Received"
        className="w-20 sm:w-24 md:w-28 drop-shadow-xl"
        draggable={false}
      />
    </div>
  );
}

function LocationPill({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-xs font-medium shadow-sm">
      <svg aria-hidden viewBox="0 0 24 24" className="w-4 h-4 fill-white/90">
        <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 14 6 14s6-9.5 6-14c0-3.314-2.686-6-6-6Zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
      </svg>
      <span>{text}</span>
    </div>
  );
}

export default function AccianoVillasCard({
  imageUrl = "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=1887&auto=format&fit=crop",
  ribbonSrc = "https://magicmeters.com/wp-content/uploads/2024/09/stamp.png",
  brandName = "Acciano",
  brandSubtitle = "VILLAS",
  configLine = "3 BHK | 35+ INDEPENDENT VILLAS",
  locationText = "At Papdy Vasai (West) | Chobare",
  highlightLine = "Over 30+ Homes Successfully Handed Over To Families",
  subHighlightLine = "Our luxury villas are set in prime locations in Vasai west.",
}: AccianoVillasCardProps) {
  return (
    <main className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-4">
      <article className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Hero / Image */}
        <div className="relative h-64 sm:h-80">
          <img
            src={imageUrl}
            alt="Aerial view of independent villas and greenery"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* PNG stamp ribbon */}
          {ribbonSrc && <RibbonStamp src={ribbonSrc} />}
        </div>

        {/* Content (no PROJECT GALLERY line) */}
        <div className="px-6 sm:px-8 -mt-10 relative">
          <div className="bg-white shadow-md px-5 sm:px-8 py-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl tracking-tight leading-none text-emerald-700">
                {brandName}
              </div>
              <div className="mt-1 text-xs sm:text-sm tracking-[0.25em] font-semibold text-slate-800">
                {brandSubtitle}
              </div>

              {/* Config line */}
              <div className="mt-4 text-sm sm:text-base font-medium text-slate-900">
                {configLine}
              </div>

              {/* Location pill */}
              <div className="mt-4">
                <LocationPill text={locationText} />
              </div>

              {/* Highlights */}
              <p className="mt-6 text-sm sm:text-base font-semibold text-slate-900">
                {highlightLine}
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                {subHighlightLine}
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
