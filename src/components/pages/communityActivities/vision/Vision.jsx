import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaLeaf,
  FaMapMarkerAlt,
  FaMoon,
  FaSun,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { GiHerbsBundle, GiLotusFlower, GiMeditation } from "react-icons/gi";
import { MdEventAvailable } from "react-icons/md";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { NavigateBefore, NavigateNext, Spa } from "@mui/icons-material";

const eventsData = [
  {
    id: 1,
    title: "स्वागतदर्शन Morning Vision",
    subtitle: "Community Morning Visits Without Meal",
    description:
      "स्वग्रामCommunity Morning Visits Without Meal: 09.15 AM to 11.30 AM. This is simple activity to introduce स्वग्राम Community & गाईत्वग्राम CowVillage with Wholesome Bite. This is a small introductory tour with an expert guide to explore ideas of our village. ",
    dateRange: "Apr 22, 2025 To Nov 28, 2025",
    time: "09:15 To 13:30",
    price: 750,
    schedule: [
      {
        time: "9:15 AM - 11:15 AM",
        activity: "Morning Visit: प्रातःदर्शन MorningVision",
        icon: <FaSun />,
      },
      {
        time: "11:15 AM - 11:30 AM",
        activity: "निर्गम CheckOut",
        icon: <FaCheckCircle />,
      },
      {
        time: "9:00 AM - 9:15 AM",
        activity: "आगमन CheckIn",
        icon: <FaCheckCircle />,
      },
    ],
    type: "morning",
  },
  {
    id: 2,
    title: "स्वागतदर्शन Evening Vision",
    subtitle: "Sunset ritual overview (Agnihotra Demo)",
    description:
      "Sunset ritual overview (Agnihotra Demo) Natural landscape walk through herbal forest, sacred fire space, and healing circle Visit to Gurukul, Yoga corners, and community farms Betel Chewing (with local herbs) and Seasonal knowledge sharing.",
    dateRange: "Apr 22, 2025 To Dec 31, 2025",
    time: "14:15 To 17:30",
    price: 750,
    schedule: [
      {
        time: "3:15 PM - 3:30 PM",
        activity: "आगमन CheckIn",
        icon: <FaCheckCircle />,
      },
      {
        time: "3:30 PM - 5:00 PM",
        activity: "Evening Visit: स्वागतदर्शन EveningVision",
        icon: <FaMoon />,
      },
      {
        time: "5:00 PM - 5:15 PM",
        activity: "Evening Rituals: स्वसम्पन्निति EveningRituals",
        icon: <GiMeditation />,
      },
      {
        time: "5:15 PM - 5:30 PM",
        activity: "निर्गम CheckOut",
        icon: <FaCheckCircle />,
      },
    ],
    type: "evening",
  },
  {
    id: 3,
    title: "स्वागतदर्शन पूर्णाहार Morning Vision Whole Meal",
    subtitle: "Sunrise welcome & spiritual chanting",
    description:
      "Sunrise welcome & spiritual chanting Herbal tea followed by Ayurvedic breakfast (सात्म्यग्रास) Full facility tour including IPD/OPD, Vaidya consultation rooms, Panchakarma unit Herbal medicine garden exploration and seed saving demo Rituals.",
    dateRange: "Apr 22, 2025 To Jan 1, 2026",
    time: "06:45 To 11:30",
    price: 1000,
    schedule: [
      {
        time: "6:45 AM - 7:00 AM",
        activity: "आगमन CheckIn",
        icon: <FaCheckCircle />,
      },
      {
        time: "7:00 AM - 7:45 AM",
        activity: "Morning Rituals: स्वस्तिश्री MorningRituals",
        icon: <GiMeditation />,
      },
      {
        time: "7:45 AM - 9:00 AM",
        activity: "स्वागतपूर्णाहार MorningWholeMeal",
        icon: <FaUtensils />,
      },
      {
        time: "9:00 AM - 9:30 AM",
        activity: "Post meal Do & Don'ts",
        icon: <GiHerbsBundle />,
      },
    ],
    type: "morning",
  },
  {
    id: 4,
    title: "स्वागतदर्शन पूर्णाहार Evening Vision Whole Meal",
    subtitle: "Welcome with Ayurvedic Drink Evening farming rituals",
    description:
      "Welcome with Ayurvedic Drink Evening farming rituals, organic harvesting  Gau Raksha : Cow milking and Panchagavya demo WholeMeal dinner experience (Wholesome Bites) Agnihotra & Betel Leaf offering Guided moonlight reflection walk Community values interaction session.",
    dateRange: "Apr 22, 2025 To Dec 31, 2025",
    time: "15:15 To 19:30",
    price: 1000,
    schedule: [
      {
        time: "3:15 PM - 3:30 PM",
        activity: "आगमन CheckIn",
        icon: <FaCheckCircle />,
      },
      {
        time: "3:30 PM - 5:00 PM",
        activity: "Evening Visit: स्वागतदर्शन EveningVision",
        icon: <FaMoon />,
      },
      {
        time: "5:00 PM - 5:15 PM",
        activity: "Evening Rituals: स्वसम्पन्निति EveningRituals",
        icon: <GiMeditation />,
      },
      {
        time: "5:15 PM - 6:30 PM",
        activity: "स्वसम्पूर्णाहार EveningWholeMeal",
        icon: <FaUtensils />,
      },
    ],
    type: "evening",
  },
];

const FloatingLeaf = ({ delay }) => {
  const leafRef = useRef(null);

  useEffect(() => {
    const leaf = leafRef.current;
    if (!leaf) return;

    let animationFrame;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const duration = 15000;
      const progress = (elapsed % duration) / duration;

      const startX = parseFloat(
        leaf.dataset.startX || Math.random() * window.innerWidth
      );
      const y = progress * (window.innerHeight + 100);
      const x = startX + Math.sin(progress * Math.PI * 4) * 50;
      const rotation = progress * 360;
      const opacity = Math.sin(progress * Math.PI) * 0.4;

      leaf.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
      leaf.style.opacity = opacity;

      if (progress >= 0.99) {
        leaf.dataset.startX = Math.random() * window.innerWidth;
        startTime = timestamp;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const timeoutId = setTimeout(() => {
      leaf.dataset.startX = Math.random() * window.innerWidth;
      animationFrame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [delay]);

  return (
    <div
      ref={leafRef}
      className="fixed text-green-600 text-xl pointer-events-none z-0"
      style={{ opacity: 0, willChange: "transform, opacity" }}
    >
      <GiLotusFlower />
    </div>
  );
};

const EventCard = ({ event, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const isMorning = event.type === "morning";

  return (
    <div
      ref={cardRef}
      className="relative group opacity-0 translate-y-8 transition-all duration-700 ease-out
      flex flex-col h-full"
      style={{
        transitionDelay: `${index * 150}ms`,
        willChange: "transform, opacity",
      }}
    >
      <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>

      <div
        className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-green-100
      flex flex-col h-full"
      >
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 ${
            isMorning
              ? "bg-gradient-to-br from-emerald-400 via-lime-400 to-teal-400"
              : "bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600"
          }`}
        ></div>
        {/* Header */}
        <div className="relative overflow-hidden">
          <div
            className={`${
              isMorning
                ? "bg-gradient-to-r from-emerald-600 via-lime-600 to-teal-600"
                : "bg-gradient-to-r from-yellow-600  to-amber-700 "
            } p-3 relative `}
          >
            <div className="absolute inset-0 opacity-10 ">
              <div className="absolute top-0 left-0 w-24 h-24 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-28 h-28 border-2 border-white rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="relative md:flex items-center justify-between mb-2 gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-2xl text-white/90">
                    {isMorning ? <FaSun /> : <FaMoon />}
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white mb-0.5">
                      {event.title}
                    </h2>
                    <p className="text-white/90 text-xs">{event.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-md px-2 mb-3 md:px-4 py-2 rounded-xl border border-white/30 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                <div className="relative text-center">
                  <p className="text-xl font-bold text-white">₹{event.price}</p>
                  <p className="text-[10px] text-white/80">per person</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="p-3 relative h-full">
          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-3 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-2 p-3 rounded-lg border border-green-200 bg-white">
                <div className="text-xl text-ayuMysticBlue">
                  <FaCalendarAlt />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-medium">
                    Date Range
                  </p>
                  <p className="text-xs font-bold text-gray-800">
                    {event.dateRange}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-2 p-3 rounded-lg border border-blue-200 bg-white">
                <div className="text-xl text-ayuSaffron">
                  <AccessTimeIcon />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-medium">
                    Duration
                  </p>
                  <p className="text-xs font-bold text-gray-800">
                    {event.time}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-l-4 border border-orange-400">
            <p className="text-xs text-gray-700 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Schedule */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <MdEventAvailable className="text-lg text-ayuMysticBlue" />
              <h3 className="text-sm font-bold text-gray-800">
                Event Schedule
              </h3>
            </div>

            <div className="relative pl-4">
              <div
                className={`absolute left-1 top-0 bottom-0 w-0.5 ${
                  isMorning
                    ? "bg-gradient-to-b from-orange-400 to-amber-400"
                    : "bg-gradient-to-b from-indigo-400 to-purple-400"
                }`}
              ></div>

              {event.schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="relative mb-2 last:mb-0 transition-all duration-300"
                >
                  <div
                    className={`absolute -left-[17px] animate-pulse top-2 w-3 h-3 rounded-full ${
                      isMorning ? "bg-orange-500" : "bg-indigo-600"
                    } border-2 border-white shadow-md`}
                  ></div>

                  <div
                    className={`bg-white rounded-lg p-2.5 shadow-sm hover:shadow-md transition-all duration-300 border 
                         ${
                           isMorning ? "border-orange-200" : "border-blue-200"
                         }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`text-lg ${
                          isMorning ? "text-orange-600" : "text-indigo-600"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] font-bold text-gray-800">
                          {item.time}
                        </p>
                        <p className="text-xs text-gray-600">{item.activity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div className="mb-4 p-3 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl border border-green-200">
            <p className="text-[10px] font-bold text-green-800 mb-2 flex items-center gap-1">
              <GiHerbsBundle className="text-sm" />
              WHAT'S INCLUDED
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { icon: <FaUtensils />, text: "Food", color: "orange" },
                { icon: <FaMapMarkerAlt />, text: "Stay", color: "red" },
                { icon: <FaUsers />, text: "Training", color: "blue" },
                { icon: <GiHerbsBundle />, text: "Insurance", color: "green" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-full text-[11px] font-medium text-gray-700 shadow-sm hover:shadow transition-all duration-300 border border-${item.color}-200`}
                >
                  <span className={`text-${item.color}-600 text-sm`}>
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Book Button */}
          <button className="relative w-full group/btn overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 transition-all duration-500"></div>
            <div className="relative flex items-center justify-center gap-2 py-3 px-4 text-white font-bold text-sm">
              <FaLeaf className="group-hover/btn:rotate-12 transition-transform duration-300" />
              <span>Book This Experience</span>
              <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const VisionContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const totalSlides = Math.ceil(eventsData.length / 2);

  // Auto Slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <FloatingLeaf key={i} delay={i * 2000} />
      ))}
      <div className="flex justify-between items-center px-2 md:px-10">
        <div className="flex items-center justify-center gap-2">
          <Spa className="text-amber-700 animate-pulse" sx={{ fontSize: 30 }} />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700 bg-clip-text text-transparent">
            Vision
          </h1>
          <Spa className="text-amber-700 animate-pulse" sx={{ fontSize: 30 }} />
        </div>
        <div className="flex space-x-3 justify-end mt-2">
          <button
            onClick={prevSlide}
            className=" bg-white/90 hover:bg-white p-2 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-20"
          >
            <NavigateBefore sx={{ fontSize: 28 }} className="text-amber-700" />
          </button>

          <button
            onClick={nextSlide}
            className=" bg-white/90 hover:bg-white p-2 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-20"
          >
            <NavigateNext sx={{ fontSize: 28 }} className="text-amber-700" />
          </button>
        </div>
      </div>

      <div className="relative z-10 mx-auto px-4  pb-5 md:max-w-6xl">
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="md:flex transition-transform duration-[900ms] ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const start = slideIndex * 2;
              const pair = eventsData.slice(start, start + 2);
              return (
                <div
                  key={slideIndex}
                  className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-2 py-4"
                >
                  {pair.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                  ))}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 my-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-500 
                  ${
                    currentSlide === idx
                      ? "bg-green-600 scale-125"
                      : "bg-gray-300"
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionContent;
