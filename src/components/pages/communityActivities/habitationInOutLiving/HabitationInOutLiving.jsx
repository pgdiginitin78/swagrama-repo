import { ChevronLeft, ChevronRight, Home, Waves } from "@mui/icons-material";
import { CalendarIcon, ClockIcon } from "@mui/x-date-pickers";
import { useEffect, useRef, useState } from "react";
import OutDoorLivingPng from "../../../assets/membership/community/outDoor.jpg";
import ipdSinglePng from "../../../assets/membership/community/ipdSingle.jpg";
import wellHouseSinglePng from "../../../assets/membership/community/wellHouseSingle.jpg";

import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
const retreatData = [
  {
    id: 1,
    title: "Outdoor Living",
    titleHindi: "खुलाआकाशजीवन",
    description:
      "In an era where artificial living conditions have distanced us from our natural essence, स्वस्थजीवनी offers a restorative return to nature. This unique experience within the Swagrama Community...",
    price: 2500,
    image: OutDoorLivingPng,
    date: "Jan 1, 2025 To Jan 31, 2026",
    time: "13:45 To 11:15",
    icon: HolidayVillageIcon,
    includes: [
      "Food",
      "Accommodation",
      "Training",
      "Guidance",
      "Medical Insurance",
    ],
  },
  {
    id: 2,
    title: "Single Room",
    titleHindi: "एकांतवासरकक्षFD",
    description:
      "In an era where artificial living conditions have distanced us from our natural essence, स्वस्थजीवनी offers a restorative return to nature. This unique experience within the Swagrama Community...",
    price: 3000,
    image: ipdSinglePng,
    date: "Jan 1, 2025 To Jan 31, 2026",
    time: "01:45 To 11:15",
    icon: Home,
    includes: [
      "Food",
      "Accommodation",
      "Training",
      "Guidance",
      "Medical Insurance",
    ],
  },
  {
    id: 3,
    title: "Wellness Single",
    titleHindi: "स्वास्थ्यमंगलएकFD",
    description:
      "In an era where artificial living conditions have distanced us from our natural essence, स्वस्थजीवनी offers a restorative return to nature. This unique experience within the Swagrama Community...",
    price: 3750,
    image: wellHouseSinglePng,
    date: "Jan 1, 2025 To Jan 31, 2026",
    time: "01:45 To 11:15",
    icon: Waves,
    includes: [
      "Food",
      "Accommodation",
      "Training",
      "Guidance",
      "Medical Insurance",
    ],
  },
];

const HabitationInOutLiving = () => {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef(null);

  const next = () => {
    setCurrent((prev) => (prev + 1) % retreatData?.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + retreatData?.length) % retreatData?.length
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window?.gsap) {
      window?.gsap.fromTo(
        cardRef?.current,
        { opacity: 0, x: 50, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [current]);

  const currentRetreat = retreatData[current];
  const IconComponent = currentRetreat?.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-green-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
            Swagrama Wellness Retreats
          </h1>
          <p className="text-amber-700 text-sm md:text-base">
            Reconnect with Nature, Rediscover Yourself
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-amber-600 hover:bg-amber-700 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-amber-600 hover:bg-amber-700 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Card */}
          <div
            ref={cardRef}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">

              <div className="relative h-64 md:h-auto">
                <img
                  src={currentRetreat.image}
                  alt={currentRetreat.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    {currentRetreat.titleHindi}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-3">
                    {currentRetreat.title}
                  </h2>

                  <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                    {currentRetreat.description}
                  </p>

                  {/* Date & Time */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-amber-800">
                      <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs md:text-sm">
                        {currentRetreat.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-800">
                      <ClockIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs md:text-sm">
                        {currentRetreat.time}
                      </span>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-600 mb-2">Including:</p>
                    <div className="flex flex-wrap gap-2">
                      {currentRetreat.includes.map((item, idx) => (
                        <span
                          key={idx}
                          className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-amber-200">
                  <div>
                    <p className="text-xs text-gray-600">Price per person</p>
                    <p className="text-2xl md:text-3xl font-bold text-amber-900">
                      ₹{currentRetreat.price}
                    </p>
                  </div>
                  <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-lg">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {retreatData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === current ? "w-8 bg-amber-600" : "w-2 bg-amber-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitationInOutLiving;
