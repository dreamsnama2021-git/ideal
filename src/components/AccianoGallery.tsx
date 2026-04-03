import React, { useState } from "react";

/**
 * AccianoGalleryExact
 * Exact layout: divider + "PROJECT GALLERY" button, hero image with arrows,
 * and a centered thumbnail strip. Uses your required image list.
 */

const images = [
  { src: "/acciano1.jpg" },
  { src: "/acciano2.jpg" },
  { src: "/acciano3.jpg" },
  { src: "/acciano4.jpg" },
  { src: "/acciano5.jpg" },
  { src: "/acciano6.jpg" },
  { src: "/acciano7.jpg" },
  { src: "/acciano8.jpg" },
  { src: "/acciano3.jpg" },
  { src: "/acciano2.jpg" },
];

export default function AccianoGalleryExact() {
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
  const goNext = () => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <section className="w-full max-w-5xl mx-auto p-4">
      {/* Divider */}
      <div className="mt-6 h-px w-full bg-slate-200" aria-hidden="true" />

      {/* Project Gallery CTA */}
      <div className="mt-4 flex justify-center">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
          aria-label="Open project gallery"
        >
          PROJECT GALLERY
        </button>
      </div>

      {/* Main Image (Hero) */}
      <div className="relative mt-4">
        <img
          src={images[current].src}
          alt={`Acciano Villa ${current + 1}`}
          className="w-full h-[400px] md:h-[520px] object-cover rounded-md"
        />

        {/* Left Arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white rounded-full shadow-md p-3 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white rounded-full shadow-md p-3 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-3 mt-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-md overflow-hidden border-2 ${
              i === current ? "border-black" : "border-transparent"
            }`}
            aria-label={`Go to image ${i + 1}`}
          >
            <img
              src={img.src}
              alt={`Thumbnail ${i + 1}`}
              className="w-24 h-16 object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
