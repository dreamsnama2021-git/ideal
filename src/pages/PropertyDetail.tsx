// src/pages/PropertyDetail.tsx
import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { MapPinIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { ongoingProjects, completedProjects } from "../data.js"; // adjust path to your data file
// If you use lucide-react or other icons, install/replace accordingly
import { Download } from "lucide-react";

/**
 * PropertyDetail - pixel-faithful layout to uploaded PDF design.
 * Uses data from data.js (supports array export or keyed object).
 *
 * Expected data shape (example you provided):
 * {
 *   id: "ongoing-1",
 *   title: "Acciano Villas",
 *   address: "Papdy, Vasai West",
 *   description: `...`,
 *   image: [{ img1: '/acciano1.jpg' }, ...],
 *   video: '/accianovideo1.mp4',
 *   floorPlans: [{ type, size, image }, ...],
 *   totalArea, totalFloors, parkingLot, socialArea
 * }
 */

type FP = { type?: string; size?: string; image?: string };
type P = {
  id?: string;
  title?: string;
  address?: string;
  description?: string;
  image?: Array<Record<string, string>>;
  video?: string;
  floorPlans?: FP[];
  totalArea?: string;
  totalFloors?: string;
  parkingLot?: string;
  socialArea?: string;
  mapImage?: string;
};

const FALLBACK: P = {
  id: "fallback",
  title: "Acciano Villas",
  address: "Papdy, Vasai West",
  description: "Luxury 3 BHK villas. Limited units. Contact for booking.",
  image: [
    { img1: "/assets/property-hero.jpg" },
    { img2: "/assets/gallery-1.jpg" },
    { img3: "/assets/gallery-2.jpg" },
  ],
  video: "/assets/sample-walkthrough.mp4",
  floorPlans: [
    { type: "3 BHK", size: "2100 sq.ft", image: "/assets/floorplan.jpg" },
  ],
  totalArea: "2100 sq.ft",
  totalFloors: "2 Floor",
  parkingLot: "Ample Parking Space",
  socialArea: "860 m²",
  mapImage: "/assets/location-map.jpg",
};

const iconStyle = "w-6 h-6";

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // find property in imported data (handles array or keyed object)
  const item: P = useMemo(() => {
    if (!ongoingProjects) return FALLBACK;
    if (Array.isArray(ongoingProjects)) {
      return ongoingProjects.find((p: any) => p.id === id) ?? FALLBACK;
    }
    // keyed object
    // @ts-ignore
    return (
      (ongoingProjects[id as string] as P) ?? (ongoingProjects as P) ?? FALLBACK
    );
  }, [id]);

  // images flatten
  const images = (
    item.image && Array.isArray(item.image) ? item.image : FALLBACK.image || []
  ).map((o) => Object.values(o)[0]);

  const heroImg =
    images[0] ?? (FALLBACK.image![0] && Object.values(FALLBACK.image![0])[0]);
  const galleryImgs =
    images.length > 1
      ? images.slice(1)
      : ["/assets/gallery-1.jpg", "/assets/gallery-2.jpg"];

  const floorPlans =
    item.floorPlans && item.floorPlans.length
      ? item.floorPlans
      : FALLBACK.floorPlans;

  // extract phone numbers from description if present else use fallback
  const phones = (item.description &&
    item.description.match(/\+?\d[\d\s/-]{6,}\d/g)) || [
    "+91 89289 83353",
    "+91 93226 3271",
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Top - header/back */}
      <div className="max-w-4xl mx-auto p-4">
        <Link
          to="/ongoingProjects"
          className="inline-flex items-center gap-2 text-sm text-gray-700"
        >
          <ArrowLeftIcon className="w-5 h-5" /> Back
        </Link>
      </div>

      {/* Entire vertical canvas centered */}
      <div className="max-w-[770px] mx-auto">
        {/* HERO: tall aerial image with badge */}
        <div className="relative">
          <img
            src={heroImg}
            alt={item.title}
            className="w-full object-cover rounded-b-2xl shadow-lg"
            style={{ height: 460 }}
          />
          {/* OC badge top-left (from PDF) */}
          <div className="absolute left-6 top-6 bg-red-600 text-white px-3 py-1 rounded-md font-semibold text-sm shadow-md">
            O C Received
          </div>
          {/* Title overlay bottom-left */}
          <div className="absolute left-6 bottom-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-md shadow">
            <div className="text-base font-bold">{item.title}</div>
            <div className="text-xs text-gray-600">{item.address}</div>
          </div>
        </div>

        {/* Project gallery thumbnails + arrows */}
        <section className="mt-5 px-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-lg">Project Gallery</h3>
            <div className="flex gap-2">
              <button className="p-2 border rounded-md">◀</button>
              <button className="p-2 border rounded-md">▶</button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {galleryImgs.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`g-${i}`}
                className="w-full h-20 object-cover rounded-lg"
              />
            ))}
          </div>
        </section>

        {/* Amenities strip (icons + labels) */}
        <section className="mt-6 px-4">
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">
                A Plethora of All - Embracing Amenities
              </h4>
              <div className="text-sm text-indigo-600">View all</div>
            </div>

            <div className="mt-3 flex flex-wrap gap-4">
              {/* Use same icon set as earlier (6 icons) */}
              <div className="flex flex-col items-center w-20">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shadow-sm">
                  <svg className={iconStyle} viewBox="0 0 24 24" fill="none">
                    <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="text-xs text-center mt-2">Modular Kitchen</div>
              </div>

              <div className="flex flex-col items-center w-20">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shadow-sm">
                  <svg className={iconStyle} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13h14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="text-xs text-center mt-2">Car Parking</div>
              </div>

              <div className="flex flex-col items-center w-20">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shadow-sm">
                  <svg className={iconStyle} viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="text-xs text-center mt-2">Clubhouse</div>
              </div>

              <div className="flex flex-col items-center w-20">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shadow-sm">
                  <svg className={iconStyle} viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="7"
                      width="18"
                      height="10"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="text-xs text-center mt-2">Gym</div>
              </div>

              <div className="flex flex-col items-center w-20">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shadow-sm">
                  <svg className={iconStyle} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="text-xs text-center mt-2">Kids Play</div>
              </div>

              <div className="flex flex-col items-center w-20">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shadow-sm">
                  <svg className={iconStyle} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7v5c0 5 4 10 10 10s10-5 10-10V7L12 2z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>
                <div className="text-xs text-center mt-2">24x7 Security</div>
              </div>
            </div>
          </div>
        </section>

        {/* Walkthrough video (if present) */}
        {item.video && (
          <section className="mt-6 px-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">Watch the Walkthrough Video</h4>
              <div className="text-sm text-gray-500">Play</div>
            </div>
            <div className="bg-black rounded-lg overflow-hidden aspect-video">
              <video
                controls
                src={item.video}
                className="w-full h-full object-cover"
              />
              {/* optional overlay play icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <VideoCameraIcon className="w-12 h-12 text-white/80" />
              </div>
            </div>
          </section>
        )}

        {/* Download floorplans & brochure panel */}
        <section className="mt-6 px-4">
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-semibold">
                  Download All — Floor plans and Brochure
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  PDFs, layout maps & more
                </p>

                {/* Description (multiline from your data) */}
                <div className="mt-3 text-sm whitespace-pre-line text-gray-700">
                  {item.description}
                </div>

                {/* key stats */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>
                    <span className="font-medium">Total Area: </span>
                    {item.totalArea || FALLBACK.totalArea}
                  </div>
                  <div>
                    <span className="font-medium">Floors: </span>
                    {item.totalFloors || FALLBACK.totalFloors}
                  </div>
                  <div>
                    <span className="font-medium">Parking: </span>
                    {item.parkingLot || FALLBACK.parkingLot}
                  </div>
                  <div>
                    <span className="font-medium">Social Area: </span>
                    {item.socialArea || FALLBACK.socialArea}
                  </div>
                </div>
              </div>

              <div className="w-44 flex-shrink-0 flex flex-col items-end gap-3">
                <a
                  href="/assets/brochure.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md shadow"
                >
                  <Download className="w-4 h-4" /> Download Brochure
                </a>

                <div className="text-sm text-gray-600">Floor Plans</div>
                <div className="w-full">
                  {floorPlans.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 mb-2">
                      <img
                        src={f.image}
                        className="w-16 h-12 object-cover rounded"
                        alt={`fp-${idx}`}
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{f.type}</div>
                        <div className="text-xs text-gray-500">{f.size}</div>
                      </div>
                      <a
                        href={f.image}
                        download
                        className="text-xs text-indigo-600"
                      >
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location map + proximity list */}
        <section className="mt-6 px-4">
          <h4 className="font-semibold mb-3">Location Proximity</h4>
          <div className="bg-white border rounded-xl overflow-hidden">
            <img
              src={item.mapImage || FALLBACK.mapImage}
              alt="map"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div>
                  <MapPinIcon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.address}</div>
                </div>
              </div>

              {/* small proximity bullets replicate PDF style */}
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700">
                <li>• Healthcare – 10 Mins</li>
                <li>• Schools – 8 Mins</li>
                <li>• Shopping – 12 Mins</li>
                <li>• Highway – 6 Mins</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA block replicating design */}
        <section className="mt-6 px-4 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-white p-4 rounded-xl border shadow-sm">
              <h4 className="font-semibold">Why invest in our villas?</h4>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li>• All title & documentation clear</li>
                <li>• O.C Received — Fully Legal & Safe</li>
                <li>• Zero GST available (confirm)</li>
                <li>• Premium finishes & sustainable design</li>
              </ul>
            </div>

            <div className="w-full md:w-80 bg-red-600 p-4 rounded-xl text-white flex flex-col justify-between">
              <div>
                <div className="text-sm opacity-90">Enquire Now</div>
                <div className="text-2xl font-bold mt-2">{phones[0]}</div>
                <div className="text-sm mt-2">Or email: hello@company.com</div>
              </div>
              <a
                href="/contact"
                className="mt-4 inline-block text-center bg-white text-red-600 px-4 py-2 rounded-md font-medium"
              >
                Schedule Visit
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PropertyDetail;
