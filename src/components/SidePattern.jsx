import React, { useEffect, useRef } from "react";

const palette = {
  navy: "#0b0f2b",
  gold: "#d3b06e",
  cream: "#f3eee6",
  muted: "#b1b6c6",
};

// --- Inline SVG side pattern (no external image) ---
const SidePattern = ({ side = "left", width = 56, opacity = 0.28 }) => {
  const isLeft = side === "left";
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 ${
        isLeft ? "left-0" : "right-0"
      }`}
      width={width}
      height="100%"
      viewBox="0 0 56 120"
      preserveAspectRatio="none"
      style={{ opacity }}
    >
      <defs>
        <pattern
          id={`edge-${side}`}
          x="0"
          y="0"
          width="56"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke={palette.gold} strokeWidth="0.6" opacity="0.65">
            {/* horizontal tiers */}
            <path d="M2 6h22M6 12h18M10 18h14M14 24h10M18 30h6" />
            <path d="M30 6h22M34 12h18M38 18h14M42 24h10M46 30h6" />
            <path d="M4 44h20M8 50h16M12 56h12M16 62h8M20 68h4" />
            <path d="M32 44h20M36 50h16M40 56h12M44 62h8M48 68h4" />
            {/* vertical risers */}
            <path
              d="M2 0v120M10 0v120M18 0v120M28 0v120M38 0v120M48 0v120"
              opacity=".35"
            />
            {/* little chevrons */}
            <path d="M8 86l4 4-4 4M40 92l4 4-4 4" />
          </g>
        </pattern>
      </defs>
      <rect x="0" y="0" width="56" height="100%" fill={`url(#edge-${side})`} />
    </svg>
  );
};

function useReveal() {
  const containerRef = useRef(null);
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

export default function CompletedProjects({ showSidePattern = true }) {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="w-full py-20 relative overflow-hidden"
      style={{ backgroundColor: palette.navy }}
    >
      {showSidePattern && (
        <>
          <SidePattern side="left" />
          <SidePattern side="right" />
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <header className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-serif tracking-tight"
            style={{ color: palette.gold }}
          >
            Delivered Projects
          </h2>
        </header>

        <div className="relative">
          <div
            aria-hidden
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full"
            style={{
              background: `linear-gradient(${palette.gold}, ${palette.cream})`,
            }}
          />
          <ol className="space-y-14">
            {projects.map((p, idx) => (
              <li key={`${p.id}-${idx}`} className="relative">
                <span
                  aria-hidden
                  className="hidden md:inline-block absolute left-1/2 -translate-x-1/2 mt-7 h-3 w-3 rounded-full"
                  style={{ backgroundColor: palette.gold }}
                />
                <article
                  data-reveal="true"
                  className={`opacity-0 translate-y-6 transition-all duration-700 will-change-transform ${
                    idx % 2 === 0
                      ? "md:ml-auto md:max-w-[46%]"
                      : "md:mr-auto md:max-w-[46%]"
                  }`}
                >
                  <div className="rounded-2xl p-6 md:p-7">
                    <div className="flex items-start gap-4">
                      <div className="grow">
                        <h3
                          className="font-serif text-xl md:text-2xl leading-tight mb-2"
                          style={{ color: palette.gold }}
                        >
                          {p.title}
                        </h3>
                        {p.blurb && (
                          <p
                            className="text-sm md:text-base leading-relaxed"
                            style={{ color: palette.muted }}
                          >
                            {p.blurb}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
