import React, { useEffect, useRef, useState } from "react";
import {
  Spa,
  LocalFlorist,
  Pets,
  Agriculture,
  ColorLens,
  WbSunny,
  CheckCircle,
  RestaurantMenu,
  AccessTime,
  CalendarToday,
  CurrencyRupee,
  SelfImprovement,
  NavigateNext,
  NavigateBefore,
  FiberManualRecord,
  WaterDrop,
  Favorite,
  LightMode,
  NightsStay,
  Restaurant,
  Hotel,
  School,
  EmojiPeople,
  LocalHospital,
} from "@mui/icons-material";
import { FaLeaf } from "react-icons/fa6";
import gsap from "gsap";
import { GiHerbsBundle } from "react-icons/gi";

const activities = [
  {
    id: 1,
    title: "स्वागतपूर्णदिनकर्षणा",
    subtitle: "Full-Day Activities",
    description:
      "Community Full Day Activity according to that day special. Experience Natural Lifestyle with two complete whole Diet Meals. Also, enjoy Aromatic Green Tea / Energy Drink / Wholesome...",
    date: "Apr 22, 2025 To Dec 31, 2025",
    time: "06:45 To 19:15",
    price: 2000,
    schedule: [
      { time: "06:45 - 07:00", activity: "आगमन CheckIn" },
      {
        time: "07:00 - 07:45",
        activity: "Morning Rituals : स्वागतशिवि Morning Rituals",
      },
      {
        time: "07:45 - 09:00",
        activity: "स्वागतःपूर्णाहार Morning Whole Meal",
      },
      { time: "09:00 - 09:30", activity: "Post meal Do & Don'ts" },
    ],
    icon: LocalFlorist,
    color: "from-emerald-600 to-teal-700",
    decorIcons: [FaLeaf, WaterDrop, Favorite],
  },
  {
    id: 2,
    title: "स्वआयुर्वेदसंस्कारकृति",
    subtitle: "Life Knowledge Subsistence Culture Kitchen",
    description:
      'On Mondays, the community focuses on Ayurvedic life knowledge and culinary traditions under the theme of "Ayurveda Kitchen". The day begins at 6:45 AM with aromatic herbal green tea.',
    day: "Every : Monday",
    time: "06:45 To 19:15",
    price: 2000,
    icon: RestaurantMenu,
    color: "from-amber-600 to-orange-700",
    decorIcons: [LocalFlorist, Spa, LightMode],
  },
  {
    id: 3,
    title: "स्वनादयोग ",
    subtitle: "Sonant Yoga",
    description:
      "Tuesdays are dedicated to deepening one's connection with body, mind, and spirit through Sonant Yoga. The day includes practices rooted in Ashtanga Yoga and therapeutic yoga routines.",
    day: "Every : Tuesday",
    time: "06:45 To 19:15",
    price: 2000,
    icon: SelfImprovement,
    color: "from-emerald-600 to-teal-700",
    decorIcons: [Favorite, NightsStay, Spa],
  },
  {
    id: 4,
    title: "स्वगोविसंस्कारसंस्कृति",
    subtitle: "Cow Herbs Wellness Culture",
    description:
      "Our tradition starts with relation between Agriculture & domestic animals. All these pet animals like cow, buffalo, goat, hen - cock, dog, cat, horse all are part of our family.",
    day: "Every : Wednesday",
    time: "06:45 To 19:15",
    price: 2000,
    icon: Pets,
    color: "from-amber-600 to-orange-700",
    decorIcons: [FaLeaf, LocalFlorist, WaterDrop],
  },
  {
    id: 5,
    title: "स्वसहमृतकृषिः",
    subtitle: "Community Farming",
    description:
      "Thursdays offer hands-on experience in natural community farming. The day includes seed selection, organic sowing, soil nurturing, and harvesting activities. Participants get to understand sustainable practices.",
    day: "Every : Thursday",
    time: "06:45 To 19:15",
    price: 2000,
    icon: Agriculture,
    color: "from-lime-600 to-green-700",
    decorIcons: [FaLeaf, WbSunny, WaterDrop],
  },
  {
    id: 6,
    title: "स्वसहमृतवस्तुनिर्माणः",
    subtitle: "Community Goods Instruments Production",
    description:
      "Fridays focus on the practical skills of self-reliant living through the creation of Ayurveda-based goods and natural infrastructure. Activities include the preparation of Ayurvedic oils, ghee.",
    day: "Every : Friday",
    time: "06:45 To 19:15",
    price: 2000,
    icon: ColorLens,
    color: "from-emerald-600 to-teal-700",
    decorIcons: [Spa, LocalFlorist, FaLeaf],
  },
  {
    id: 7,
    title: "स्वनैसर्गिकताराजीवनविधिकल्प",
    subtitle: "Natural Centenarian Lifestyle Rituals",
    description:
      "Weekends are dedicated to experiencing a lifestyle modeled on longevity and harmony with nature. These two days simulate village childhood life with community farming, open-air cooking.",
    day: "Every : Saturday",
    time: "06:45 To 19:15",
    price: 2000,
    schedule: [
      { time: "06:45 - 07:00", activity: "आगमन Check-In" },
      {
        time: "07:00 - 07:45",
        activity: "Morning Rituals: स्वागतशिवि Morning Rituals",
      },
      {
        time: "07:45 - 09:00",
        activity: "स्वागतःपूर्णाहार Morning Whole Meal",
      },
      { time: "09:00 - 09:30", activity: "Post meal Do & Don'ts" },
    ],
    icon: WbSunny,
    color: "from-yellow-600 to-amber-700",
    decorIcons: [LightMode, Favorite, FaLeaf],
  },
];

const ActivityCard = ({ activity, index }) => {
  const cardRef = useRef(null);
  const Icon = activity.icon;

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <div
        className={`bg-gradient-to-r ${activity.color} p-5 relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 opacity-10">
          <Icon sx={{ fontSize: 120 }} />
        </div>

        {activity.decorIcons && (
          <div className="absolute bottom-2 left-2 flex gap-2 opacity-20">
            {activity.decorIcons.map((DecorIcon, i) => (
              <DecorIcon key={i} sx={{ fontSize: 20 }} className="text-white" />
            ))}
          </div>
        )}

        <div className="relative z-10 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex justify-between gap-2 mb-2">
              <div className="flex items-center space-x-3">
                <div className="bg-white/30 p-2 rounded-xl backdrop-blur-md">
                  <Icon className="text-white" sx={{ fontSize: 24 }} />
                </div>
                <h3 className="text-white font-bold text-base">
                  {activity.title}
                </h3>
              </div>

              {activity.day && (
                <div className="bg-white/30 px-3 py-1 text-center flex items-center justify-center rounded-full backdrop-blur-md">
                  <p className="text-white text-xs font-semibold">
                    {activity.day}
                  </p>
                </div>
              )}
            </div>
            <p className="text-white/90 text-sm font-medium">
              {activity.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-700 text-sm leading-relaxed mb-5">
          {activity.description}
        </p>

        {activity.schedule && (
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 mb-5 border border-amber-200">
            <h4 className="text-amber-900 font-bold mb-3 flex items-center gap-2">
              <AccessTime sx={{ fontSize: 20 }} />
              Daily Schedule
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {activity.schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 group border rounded-lg p-2 bg-white"
                >
                  <CheckCircle
                    className="text-green-600 mt-1 group-hover:scale-125 transition-transform"
                    sx={{ fontSize: 18 }}
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-amber-900 text-sm">
                      {item.time}
                    </div>
                    <div className="text-gray-700 text-xs">{item.activity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 mb-5 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <AccessTime sx={{ fontSize: 18 }} className="text-amber-600" />
            <span>{activity.time}</span>
          </div>
          {activity.date && (
            <div className="flex items-center gap-2 text-gray-600">
              <CalendarToday sx={{ fontSize: 16 }} className="text-amber-600" />
              <span className="text-xs">{activity.date}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-gray-200">
          <div className="flex items-baseline gap-1">
            <CurrencyRupee sx={{ fontSize: 28 }} className="text-amber-700" />
            <span className="text-3xl font-bold text-amber-900">
              {activity.price}
            </span>
            <span className="text-gray-600 text-sm ml-1">/ person</span>
          </div>
          <button
            className={`bg-gradient-to-r ${activity.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
          >
            Book Now
          </button>
        </div>
        <div className="mb-4 p-2 mt-1 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl border border-green-200">
          <p className="text-[10px] font-bold text-green-800 mb-2 flex items-center gap-1">
            <GiHerbsBundle className="text-sm" />
            WHAT'S INCLUDED
          </p>
          <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
            <div className="flex items-center gap-1 text-gray-600">
              <Restaurant sx={{ fontSize: 16 }} className="text-amber-600" />
              <span className="text-xs">Food</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <Hotel sx={{ fontSize: 16 }} className="text-green-600" />
              <span className="text-xs">Accommodation</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <School sx={{ fontSize: 16 }} className="text-red-600" />
              <span className="text-xs">Training</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <EmojiPeople sx={{ fontSize: 16 }} className="text-purple-600" />
              <span className="text-xs">Guidance</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <LocalHospital
                sx={{ fontSize: 16 }}
                className="text-indigo-600"
              />
              <span className="text-xs">Insurance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommunityActivity = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef(null);
  const headerRef = useRef(null);
  const totalPages = Math.ceil(activities.length / 2);

  useEffect(() => {
    if (!headerRef?.current) return;

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -70, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
    );

    gsap.to(".floating-icon", {
      y: "+=20",
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    });
  }, []);

  useEffect(() => {
    if (!carouselRef?.current) return;

    gsap.fromTo(
      carouselRef.current.children,
      { opacity: 0, x: 100, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, [currentPage]);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentActivities = activities.slice(
    currentPage * 2,
    currentPage * 2 + 2
  );

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextPage();
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [totalPages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-5 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="absolute top-2 left-10 floating-icon">
        <LocalFlorist className="text-amber-400" sx={{ fontSize: 32 }} />
      </div>
      <div className="absolute top-10 right-20 floating-icon">
        <FaLeaf className="text-green-400 text-3xl" />
      </div>
      <div className="absolute bottom-20 left-20 floating-icon">
        <WaterDrop className="text-blue-400" sx={{ fontSize: 30 }} />
      </div>
      <div className="absolute bottom-20 right-10 floating-icon">
        <Favorite className="text-rose-400" sx={{ fontSize: 35 }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-5 opacity-0">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Spa
              className="text-amber-700 animate-pulse"
              sx={{ fontSize: 38 }}
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700 bg-clip-text text-transparent">
              स्वसहभावकर्मण्य Community Activity
            </h1>
            <Spa
              className="text-amber-700 animate-pulse"
              sx={{ fontSize: 38 }}
            />
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-amber-600 rounded-full"></div>
            <LocalFlorist className="text-amber-600" sx={{ fontSize: 24 }} />
            <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-transparent rounded-full"></div>
          </div>
        </div>
        <div className="flex space-x-3 justify-end mb-2">
          <button
            onClick={prevPage}
            className=" bg-white/90 hover:bg-white p-2 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-20"
          >
            <NavigateBefore sx={{ fontSize: 28 }} className="text-amber-700" />
          </button>

          <button
            onClick={nextPage}
            className=" bg-white/90 hover:bg-white p-2 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-20"
          >
            <NavigateNext sx={{ fontSize: 28 }} className="text-amber-700" />
          </button>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            {currentActivities.map((activity, index) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`transition-all duration-300 ${
                currentPage === index
                  ? "scale-125"
                  : "hover:scale-110 opacity-50"
              }`}
            >
              <FiberManualRecord
                sx={{ fontSize: 16 }}
                className={
                  currentPage === index ? "text-amber-700" : "text-gray-400"
                }
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityActivity;
