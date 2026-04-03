import {
  Home,
  Car,
  Bath,
  Bed,
  Shield,
  Building2,
  Droplets,
  Clock,
  Video,
  Hammer,
  Sofa,
  Coffee,
  Lightbulb,
} from "lucide-react";

function AccianoAmenities() {
  const amenities = [
    { icon: Home, label: "Modular Kitchen" },
    { icon: Car, label: "Car Parking" },
    { icon: Bath, label: "4 Bathrooms" },
    { icon: Bed, label: "3 Bedrooms" },
    { icon: Shield, label: "Borewell" },
    { icon: Building2, label: "Gated Community" },
    { icon: Droplets, label: "VVMC water" },
    { icon: Coffee, label: "RO Water Purifier" },
    { icon: Clock, label: "3 Geysers" },
    { icon: Video, label: "Parking CCTV" },
    { icon: Hammer, label: "Branded CP Fittings" },
    { icon: Sofa, label: "Open Terrace" },
    { icon: Shield, label: "24x7 Security" },
    { icon: Video, label: "Video Door Monitor" },
    { icon: Lightbulb, label: "Branded Switches" },
    { icon: Home, label: "Italian Finish Tiles" },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4 md:p-8">
      {/* Outer container with max width 1500px */}
      <div className="max-w-[1500px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden relative">
        {/* Search Bar */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3 px-4 py-3 bg-white border-2 border-gray-900 rounded-full">
            <span className="text-sm font-medium text-gray-900">
              A Plethora of
            </span>
            <span className="text-sm text-gray-600">
              All - Embracing Amenities
            </span>
            <button className="ml-auto">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="p-6">
          <div className="grid grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gray-800" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] text-center text-gray-700 leading-tight font-medium">
                    {amenity.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Video Section */}
        <div className="px-6 pb-6">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="text-sm font-semibold text-gray-900">
              Watch the Acciano Villas
            </span>
            <span className="text-sm text-gray-700">-</span>
            <button className="px-4 py-1.5 border-2 border-gray-900 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
              Walkthrough Video
            </button>
          </div>

          {/* Video Thumbnail */}
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Property walkthrough"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* Side Label */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-black text-xs font-bold py-8 px-2 -rotate-90 origin-left transform -translate-x-8 shadow-lg">
          Request a call back
        </div>
      </div>
    </div>
  );
}

export default AccianoAmenities;
