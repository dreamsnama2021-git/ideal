import { useState } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";

const FloorPlanSection = ({
  floorPlans = [],
  totalArea,
  totalFloors,
  parkingLot,
  socialArea,
}: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  if (!floorPlans.length) return null;

  const handleZoom = (type: "in" | "out") => {
    setZoom((prev) =>
      type === "in" ? Math.min(prev + 0.25, 3) : Math.max(prev - 0.25, 1)
    );
  };

  return (
    <section className="flex flex-col lg:flex-row justify-between items-start gap-10 py-16 border-t border-gray-200">
      {/* Left Info */}
      <div className="max-w-md">
        <h3 className="text-xl text-[#2A3361] font-medium">
          Independent Villas on 2 Guntha of land
        </h3>
        <h2 className="text-2xl font-bold mb-4">Modern G+1 Bungalows</h2>
        <p className="text-gray-600 mb-6">
          Who says dreams don’t come true? All you need is the courage to chase
          them! When you pour your heart, soul, and passion into your goals,
          magic happens.
        </p>
        <ul className="text-sm text-black/80 space-y-2">
          <li>
            <strong>Total area:</strong> {totalArea}
          </li>
          <li>
            <strong>Total Floor:</strong> {totalFloors}
          </li>
          <li>
            <strong>Parking Lot:</strong> {parkingLot}
          </li>
          <li>
            <strong>Social Area:</strong> {socialArea}
          </li>
        </ul>
      </div>

      {/* Right Tabs + Image */}
      <div className="flex-1 w-full">
        {/* Tabs */}
        <div className="flex overflow-x-auto gap-4 mb-4 scrollbar-hide">
          {floorPlans.map((plan: any, idx: number) => (
            <button
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                setZoom(1); // reset zoom on tab switch
              }}
              className={`text-sm pb-2 border-b-2 cursor-pointer whitespace-nowrap transition-all duration-200 ${
                activeIndex === idx
                  ? "border-black text-black font-semibold"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              {plan.type} {plan.size}
            </button>
          ))}
        </div>

        {/* Clickable Image */}
        <div
          className="border border-gray-200 p-4 rounded-md transition-all duration-300 cursor-zoom-in"
          onClick={() => {
            setIsModalOpen(true);
            setZoom(1); // reset zoom
          }}
        >
          <img
            key={floorPlans[activeIndex]?.image}
            src={floorPlans[activeIndex]?.image}
            alt={floorPlans[activeIndex]?.type}
            className="w-full h-auto object-contain rounded-md"
          />
        </div>
      </div>

      {/* Zoomable Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center px-4">
          {/* Controls */}
          <div className="absolute top-4 right-4 flex gap-3">
            <button
              onClick={() => handleZoom("in")}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-200 transition"
            >
              <ZoomIn className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={() => handleZoom("out")}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-200 transition"
            >
              <ZoomOut className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-200 transition"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Zoomable Image */}
          <img
            src={floorPlans[activeIndex]?.image}
            alt={floorPlans[activeIndex]?.type}
            style={{
              transform: `scale(${zoom})`,
              transition: "transform 0.3s ease",
            }}
            className="max-w-[90%] max-h-[90%] object-contain rounded-md"
          />
        </div>
      )}
    </section>
  );
};

export default FloorPlanSection;
