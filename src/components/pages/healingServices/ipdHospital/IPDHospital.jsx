import React, { useEffect, useRef, useState } from "react";
import { Leaf, Users, Sparkles, Clock, Home, Trees, Sun } from "lucide-react";
import OPDBookingModal from "../opdClinic/OPDBookingModal";

export const wellnessServices = [
  {
    serviceName: "स्वातिदालनचर्वा Outdoor Living",
    person: "Single Person",
    checkIn: "14:15",
    checkOut: "11:15",
    description:
      "Outdoor stay in natural surroundings at Swagrama with Herbal Gud Tea & 2 wholesome meal.",
    benefits:
      "Immersion in nature, relaxation, fresh air, mental rejuvenation.",
    price: 3000,
    rooms: [],
  },
  {
    serviceName: "स्वस्तिदालनचर्वा IPD Single",
    person: "Single Person",
    checkIn: "14:15",
    checkOut: "11:15",
    description:
      "Single occupancy room with Herbal Gud Tea & 2 wholesome meal.",
    benefits: "Shared stay with comfort, suitable for couples or companions.",
    price: 3750,
    rooms: [
      "Eternity Room",
      "Eternal Room",
      "Perpetual Room",
      "Firmness Room",
      "Infinite Room",
    ],
  },
  {
    serviceName: "स्वस्तिदालनचर्वा IPD Double",
    person: "Two Person",
    checkIn: "14:15",
    checkOut: "11:15",
    description:
      "Double occupancy room with Herbal Gud Tea & 2 wholesome meal.",
    benefits: "Shared stay with comfort, suitable for couples or companions.",
    price: 6000,
    rooms: [
      "Eternity Room",
      "Eternal Room",
      "Perpetual Room",
      "Firmness Room",
      "Infinite Room",
    ],
  },
  {
    serviceName: "स्वस्थकृणगृहक Well House Single",
    person: "Single Person",
    checkIn: "14:15",
    checkOut: "11:15",
    description:
      "Well House Single occupancy with Herbal Gud Tea & 2 wholesome meal.",
    benefits:
      "Full wellness experience with facilities for relaxation and care.",
    price: 4250,
    rooms: [],
  },
  {
    serviceName: "स्वस्थकृणगृहक Well House Double",
    person: "Two Person",
    checkIn: "14:15",
    checkOut: "11:15",
    description:
      "Well House Double occupancy with Herbal Gud Tea & 2 wholesome meal.",
    benefits:
      "Full wellness experience with facilities for relaxation and care.",
    price: 7000,
    rooms: [],
  },
];

const ServiceCard = ({ service, index, setOpenModal }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    card.style.opacity = "0";
    card.style.transform = "translateY(50px) scale(0.95)";

    const timer = setTimeout(() => {
      card.style.transition = "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
    }, index * 150);

    return () => clearTimeout(timer);
  }, [index]);

  const getServiceIcon = () => {
    if (service.serviceName.includes("Outdoor")) return Trees;
    if (service.serviceName.includes("Well House")) return Home;
    return Sparkles;
  };

  const ServiceIcon = getServiceIcon();

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-white via-emerald-50/30 to-amber-50/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-200/50"
      style={{
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-400/20 to-transparent rounded-full blur-2xl"></div>

      <div className="relative p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-md">
                  <ServiceIcon className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                  {service.serviceName}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Users size={14} className="text-emerald-600" />
                  <span className="text-xs font-medium text-emerald-700">
                    {service.person}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-2 mb-4 bg-white/80 backdrop-blur-sm rounded-lg border border-emerald-200/50 shadow-sm">
          <Clock size={16} className="text-emerald-600" />
          <span className="text-sm font-medium text-gray-700">
            {service.checkIn} - {service.checkOut}
          </span>
        </div>
        <div className="space-y-3 mb-4">
          <div className="relative p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-200/50">
            <div className="flex gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="p-1.5 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg">
                  <Sun size={16} className="text-amber-600" />
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>

          <div className="relative p-3 bg-white/60 backdrop-blur-sm rounded-xl  border border-emerald-200/50">
            <div className="flex gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="p-1.5 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg">
                  <Leaf size={16} className="text-emerald-600" />
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {service.benefits}
              </p>
            </div>
          </div>
        </div>
        {service.rooms.length > 0 ? (
          <div className="mb-4 p-4 bg-gradient-to-br from-emerald-50/80 to-lime-50/60 backdrop-blur-sm rounded-xl border border-emerald-200/50">
            <div className="flex items-center gap-2 mb-3">
              <Home size={16} className="text-emerald-700" />
              <p className="text-sm font-semibold text-emerald-800">
                Available Rooms
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.rooms.map((room, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-3 py-1.5 bg-white/80 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-lg border border-emerald-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200"
                >
                  {room}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-4 h-3"></div>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-emerald-200/50">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Package Price
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                ₹{service.price}
              </span>
              <span className="text-sm text-gray-500">/stay</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="group/btn relative px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Now
              <Sparkles
                size={16}
                className="group-hover/btn:rotate-12 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

const FilterBar = ({ selectedRoom, setSelectedRoom, roomOptions }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-5">
      {roomOptions.map((room) => (
        <button
          key={room}
          onClick={() => setSelectedRoom(room)}
          className={`relative px-5 py-2.5 font-semibold rounded-xl transition-all duration-300 overflow-hidden ${
            selectedRoom === room
              ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg scale-105"
              : "bg-white text-gray-700 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-md"
          }`}
        >
          {selectedRoom === room && (
            <div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
              style={{
                animation: "shimmer 2s infinite",
              }}
            ></div>
          )}
          <span className="relative z-10">{room}</span>
        </button>
      ))}
    </div>
  );
};

const WellnessSection = () => {
  const headerRef = useRef(null);
  const [selectedRoom, setSelectedRoom] = useState("All");
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    header.style.opacity = "0";
    header.style.transform = "translateY(-30px)";

    setTimeout(() => {
      header.style.transition = "all 1s cubic-bezier(0.4, 0, 0.2, 1)";
      header.style.opacity = "1";
      header.style.transform = "translateY(0)";
    }, 100);
  }, []);

  const filteredData =
    selectedRoom === "All"
      ? wellnessServices
      : wellnessServices.filter((s) => s.rooms.some((r) => r === selectedRoom));

  const roomOptions = [
    "All",
    "Eternity Room",
    "Eternal Room",
    "Perpetual Room",
    "Firmness Room",
    "Infinite Room",
  ];

  return (
    <div className="min-h-screen py-5 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-3">
          <h1 className="text-2xl font-bold mb-2 py-1 bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent">
            आयुर्वेदिक Wellness Stay Packages
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Experience authentic Ayurvedic healing in the embrace of nature's
            tranquility
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Leaf className="text-emerald-600" size={20} />
            <span className="text-sm font-medium text-emerald-700">
              Holistic Wellness
            </span>
            <span className="text-gray-400">•</span>
            <Trees className="text-emerald-600" size={20} />
            <span className="text-sm font-medium text-emerald-700">
              Natural Healing
            </span>
          </div>
        </div>
        <FilterBar
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
          roomOptions={roomOptions}
        />
        <div className="grid md:grid-cols-2 gap-8">
          {filteredData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>
        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full">
              <Leaf className="text-emerald-600" size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No packages available
            </h3>
            <p className="text-gray-600">
              Please select a different room type to view available packages
            </p>
          </div>
        )}
      </div>
      {openModal && (
        <OPDBookingModal
          open={openModal}
          handleClose={() => setOpenModal(false)}
        />
      )}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default WellnessSection;
