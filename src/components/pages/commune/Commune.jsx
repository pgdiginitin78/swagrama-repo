import { AddSharp, RemoveSharp, Star } from "@mui/icons-material";
import {
  AwardIcon,
  Calendar,
  Droplets,
  Flower,
  GraduationCap,
  IndianRupee,
  Leaf,
  Snowflake,
  Sparkles,
  Sun,
  Timer,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const academyData = [
  {
    season: "उन्हाळा / Summer",
    dates: "16/02/2026 – 21/06/2026",
    academy: "द्वग्रिएमणाविहार / Summer Academy",
    duration: "Summery 120+ Days",
    fee: "1,26,000",
    Icon: Sun,
    iconColor: "text-amber-600",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    gradient: "from-amber-400 via-orange-400 to-red-400",
    bgGlow: "rgba(251, 146, 60, 0.2)",
  },
  {
    season: "पावसाळा / Rainy",
    dates: "18/06/2026 – 23/10/2026",
    academy: "द्ववर्षाणिविहार / Rainy Academy",
    duration: "Rainy 120+ Days",
    fee: "1,26,000",
    Icon: Droplets,
    iconColor: "text-emerald-600",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    gradient: "from-green-400 via-emerald-400 to-lime-200",
    bgGlow: "rgba(16, 185, 129, 0.2)",
  },
  {
    season: "हिवाळा / Winter",
    dates: "23/10/2026 – 21/02/2027",
    academy: "द्वहेमन्तविहार / Winter Academy",
    duration: "Wintry 120+ Days",
    fee: "1,26,000",
    Icon: Snowflake,
    iconColor: "text-green-600",
    img: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c",
    gradient: "from-green-400 via-emerald-400 to-lime-200",
    bgGlow: "rgba(96, 165, 250, 0.2)",
  },
];

export default function CommuneTabs() {
  const [innocenceAcademyDays, setInnocenceAcademyDays] = useState(0);
  const [liberatedAcademyDays, setLiberatedAcademyDays] = useState(0);

  const innocenceAcademyPricePerDay = 2000;
  const liberatedAcademyPricePerDay = 2500;

  const calculateInnocenceAcademyTotal = () =>
    innocenceAcademyDays * innocenceAcademyPricePerDay;
  const calculateLiberatedAcademyTotal = () =>
    liberatedAcademyDays * liberatedAcademyPricePerDay;

  const academyProgrammes = [
    {
      programmeId: 1,
      programmeName: "Innocence Academy",
      programmeNameHindi: "स्वयंप्रतिविहार",
      durationRange: "0 to N days",
      eligibilityCriteria: "Gurukul Students",
      selectedDays: innocenceAcademyDays,
      pricePerDay: innocenceAcademyPricePerDay,
      totalPrice: calculateInnocenceAcademyTotal(),
      gradient: "from-green-600 via-lime-600 to-lime-700",
      accentColor: "#65a30d",
      lightBg: "bg-lime-100",
      onIncrement: () => setInnocenceAcademyDays((prev) => prev + 1),
      onDecrement: () =>
        setInnocenceAcademyDays((prev) => (prev > 1 ? prev - 1 : 0)),
    },
    {
      programmeId: 2,
      programmeName: "Liberated Academy",
      programmeNameHindi: "निर्मुक्तविहार",
      durationRange: "0 to N days",
      eligibilityCriteria: "Anyone",
      selectedDays: liberatedAcademyDays,
      pricePerDay: liberatedAcademyPricePerDay,
      totalPrice: calculateLiberatedAcademyTotal(),
      gradient: "from-[#882E2E] via-[#a03838] to-[#b84242]",
      accentColor: "#882E2E",
      lightBg: "bg-[#882E2E]/5",
      onIncrement: () => setLiberatedAcademyDays((prev) => prev + 1),
      onDecrement: () =>
        setLiberatedAcademyDays((prev) => (prev > 1 ? prev - 1 : 0)),
    },
  ];

  const rainContainerRef = useRef(null);

  useEffect(() => {
    if (!rainContainerRef.current) return;

    const rainContainer = rainContainerRef.current;
    const drops = rainContainer.querySelectorAll(".drop");

    const randomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);

    let isActive = true;

    const rain = (num, speed) => {
      if (!isActive) return;

      if (num > 0) {
        setTimeout(() => {
          const randomDrop = drops[randomInt(0, drops.length - 1)];

          if (randomDrop) {
            randomDrop.classList.add("animate");
            setTimeout(() => {
              randomDrop.classList.remove("animate");
            }, 2000);
          }

          rain(num - 1, speed);
        }, speed);
      } else {
        rain(150, speed);
      }
    };

    rain(150, 150);

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-teal-50 relative overflow-hidden md:px-12">
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            <Sparkles
              className="text-amber-400 opacity-30"
              size={12 + Math.random() * 16}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center px-4 py-5 ">
        <div className="w-full">
          <h1 className="text-xl md:text-3xl  font-black text-center mb-2 animate-fade-in-up">
            <span className="text-xl md:text-4xl inline-block bg-gradient-to-r py-1 from-green-500 via-emerald-600 to-teal-500 bg-clip-text text-transparent animate-gradient-x">
              स्वगृहकुल
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r py-1 from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x">
              Universal Commune
            </span>
          </h1>
          <div className="flex justify-center mb-5 animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-amber-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
              <div className="relative px-5 py-2 bg-white rounded-full border-2 border-green-400 shadow-lg">
                <span className="text-xs font-semibold bg-gradient-to-r py-1 from-green-600 to-amber-600 bg-clip-text text-transparent">
                  स्वधर्मे सुखं • प्रकृति जीवन • ग्राम संस्कृति
                </span>
              </div>
            </div>
          </div>
          <div className="relative backdrop-blur-md bg-white/80 rounded-2xl p-6 border-2 border-green-200 shadow-2xl animate-fade-in-up animation-delay-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-amber-100/50 rounded-2xl"></div>
            <div className="relative space-y-4 text-sm leading-relaxed text-gray-700">
              <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-green-600 first-letter:mr-2 first-letter:float-left">
                Today, everyone wants to be healthy for 100 years. Want to do
                natural farming. Want to practice a natural lifestyle. Needs
                toxin-adulteration free pure natural food, panchgavya, herbs and
                medicines. Want to turn cities to villages. Want to revive the
                forgotten tradition of the village. Want to go to villages & to
                do it all in our own home. Can anyone provide a perfect
                representation of the local traditions, especially the Indian
                traditions and centuries-old way of life, in the soil of the
                undivided universe as a whole? Today, everyone is looking for
                it. That search has been completed by&nbsp;
                <strong className="text-green-600 font-bold">
                  स्वग्राम Community
                </strong>
                .
              </p>
              <p className="text-gray-600">
                <strong className="text-green-600 font-bold">
                  स्वग्राम Community &nbsp;
                </strong>
                <strong className="text-amber-600 font-bold">
                  स्वगृहकुल Commune &nbsp;
                </strong>
                will give everyone the strength and training to build their
                dream village or part of the village. This means that India will
                again become a complete and self-sufficient village's country.
                That is why we are coming up with &nbsp;
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500 to-lime-500 rounded-lg text-white font-bold text-base shadow-lg">
                  'हर ग्राम स्वग्राम'
                </span>
                &nbsp; campaign. To complete this campaign or reality we started
                academy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 px-4 py-2 md:py-8">
        <div className="text-center mb-3 md:mb-6">
          <h2 className="text-xl md:text-3xl  font-black bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent mb-3">
            Seasonal Academy Admission
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className=" p-4 sm:p-6 lg:p-8 ">
          <style>{`
        body {
          --animation-speed: 24s;
        }

        /* Summer Sky Animation */
        .sky-animation {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          border-radius: 1rem 1rem 0 0;
        }

        .sky__phase {
          position: absolute;
          inset: 0;
          border-radius: 1rem 1rem 0 0;
        }

        .sky__dawn {
          background: linear-gradient(0deg,#fed766 0%,#cdeff6 100%);
          animation: dawn linear infinite var(--animation-speed);
        }

        .sky__noon {
          background: linear-gradient(0deg,#cdeff6 0%,#247ba0 100%);
          animation: noon linear infinite var(--animation-speed);
        }

        .sky__dusk {
          background: linear-gradient(0deg,#ff206e 0%,#0a005e 100%);
          animation: dusk linear infinite var(--animation-speed);
        }

        .sky__midnight {
          background: linear-gradient(0deg,#020014 0%,#0a005e 100%);
          animation: midnight linear infinite var(--animation-speed);
        }

        .orbit {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          transform: rotate(-45deg);
          animation: sunrise linear infinite var(--animation-speed);
        }

        .sun {
          position: absolute;
          top: -15px;
          left: 20px;
          width: 35px;
          height: 35px;
          background: #fed766;
          border-radius: 50%;
          box-shadow: 0 0 12px 12px rgba(254,215,102,.2);
        }

        .moon {
          position: absolute;
          bottom: -15px;
          right: 20px;
          width: 35px;
          height: 35px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 6px 6px rgba(255,255,255,.2);
        }

        @keyframes sunrise {
          from { transform: rotate(-45deg); }
          to { transform: rotate(315deg); }
        }

        @keyframes dawn {
          0% { opacity: 0 }
          10% { opacity: 1 }
          60% { opacity: 0 }
        }

        @keyframes noon {
          0% { opacity: 0 }
          50% { opacity: 1 }
          75% { opacity: 0 }
        }

        @keyframes dusk {
          0% { opacity: 0 }
          70% { opacity: 1 }
          90% { opacity: 0 }
        }

        @keyframes midnight {
          0% { opacity: 1 }
          25% { opacity: 0 }
          80% { opacity: 1 }
        }

        /* Rain Cloud Animation */
        .rain-animation {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
          border-radius: 1rem 1rem 0 0;
          overflow: visible !important;
        }

        .cloud {
          position: absolute;
          z-index: 70;
          width: 90px;
          height: 30px;
          background: #FFF;
          border-radius: 45px;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
        }

        .cloud .one,
        .cloud .two {
          position: absolute;
          background: #FFF;
          border-radius: 100%;
        }

        .cloud .one {
          top: -22px;
          left: 14px;
          width: 45px;
          height: 45px;
        }

        .cloud .two {
          top: -14px;
          left: 54px;
          width: 22px;
          height: 22px;
        }

        .face {
          position: absolute;
          z-index: 99;
          top: 28px;
          left: 50%;
          transform: translateX(-50%);
          width: 90px;
          height: 30px;
        }

        .face .eye {
          position: absolute;
          top: 8px;
          left: 28px;
          width: 4px;
          height: 4px;
          background: #666;
          border-radius: 100%;
        }

        .face .eye:before {
          position: absolute;
          content: '';
          left: 24px;
          width: 4px;
          height: 4px;
          background: #666;
          border-radius: 100%;
        }

        .face .mouth {
          position: absolute;
          top: 16px;
          left: 35px;
          width: 14px;
          height: 8px;
          border: 2.5px solid #666;
          border-color: transparent transparent #666 transparent;
          border-radius: 0 0 14px 14px;
        }

        .rain {
          width: 7px;
          height: 7px;
          background: #79C7C5;
          border-radius: 0 100% 100% 100%;
          transform: rotate(45deg);
        }

        .drop {
          position: absolute;
          z-index: 1;
          opacity: 0;
        }

        .drop.animate {
          animation: falling 2s ease-in;
        }

        @keyframes falling {
          0% {
            top: 60px;
            opacity: 1;
          }
          100% {
            top: 250px;
            opacity: 0;
          }
        }

        /* Winter Snow Animation */
        .winter-bg {
          background: linear-gradient(to bottom, #4A90E2 0%, #B8D4E8 50%, #E8F4F8 100%);
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 1rem 1rem 0 0;
        }

        .snowflakes {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
          overflow: hidden;
          border-radius: 1rem 1rem 0 0;
        }

        .snowflakes i,
        .snowflakes i:after,
        .snowflakes i:before {
          background: white;
        }

        .snowflakes i {
          display: inline-block;
          animation: snowflakes 3s linear infinite;
          position: absolute;
          top: -50px;
        }

        .snowflakes i:after,
        .snowflakes i:before {
          height: 100%;
          width: 100%;
          content: ".";
          position: absolute;
          top: 0px;
          left: 0px;
          transform: rotate(120deg);
          color: transparent;
        }

        .snowflakes i:before {
          transform: rotate(240deg);
        }

        @keyframes snowflakes {
          0% {
            transform: translate3d(0,0,0) rotate(0deg) scale(0.6);
            opacity: 1;
          }
          100% {
            transform: translate3d(15px, 350px, 0px) rotate(360deg) scale(0.6);
            opacity: 0.8;
          }
        }

        .snowflakes i:nth-child(3n) {
          width: 16px;
          height: 4px;
          animation-duration: 5s;
          animation-iteration-count: infinite;
          transform-origin: right -45px;
        }

        .snowflakes i:nth-child(3n+1) {
          width: 24px;
          height: 6px;
          animation-duration: 7s;
          animation-iteration-count: infinite;
          transform-origin: right -30px;
        }

        .snowflakes i:nth-child(3n+2) {
          width: 32px;
          height: 8px;
          animation-duration: 9s;
          animation-iteration-count: infinite;
          transform-origin: right -15px;
        }

        .snowflakes i:nth-child(7n) {
          opacity: 0.4;
          animation-delay: 0s;
          animation-timing-function: ease-in;
          left: 10%;
        }

        .snowflakes i:nth-child(7n+1) {
          opacity: 0.5;
          animation-delay: 1s;
          animation-timing-function: ease-out;
          left: 20%;
        }

        .snowflakes i:nth-child(7n+2) {
          opacity: 0.6;
          animation-delay: 1.5s;
          animation-timing-function: linear;
          left: 30%;
        }

        .snowflakes i:nth-child(7n+3) {
          opacity: 0.7;
          animation-delay: 2s;
          animation-timing-function: ease-in;
          left: 40%;
        }

        .snowflakes i:nth-child(7n+4) {
          opacity: 0.8;
          animation-delay: 2.5s;
          animation-timing-function: linear;
          left: 50%;
        }

        .snowflakes i:nth-child(7n+5) {
          opacity: 0.6;
          animation-delay: 3s;
          animation-timing-function: ease-out;
          left: 60%;
        }

        .snowflakes i:nth-child(7n+6) {
          opacity: 0.7;
          animation-delay: 3.5s;
          animation-timing-function: ease-in;
          left: 70%;
        }

        .snowflakes i:nth-child(7n+7) {
          opacity: 0.5;
          animation-delay: 4s;
          animation-timing-function: ease-out;
          left: 80%;
        }
      `}</style>

          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {academyData.map((item, i) => {
              return (
                <div key={i} className="group relative">
                  <div
                    className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"
                    style={{ background: item.bgGlow }}
                  ></div>

                  <div
                    className="relative h-full bg-white/90 rounded-2xl border-2 border-white shadow-xl transform transition-all duration-500 group-hover:scale-[1.02]"
                    style={{ overflow: "visible" }}
                  >
                    {/* Animation Header */}
                    <div
                      className="relative h-20 sm:h-28 w-full"
                      style={{ overflow: "visible" }}
                    >
                      {item.season === "उन्हाळा / Summer" && (
                        <div className="sky-animation">
                          <div className="sky__phase sky__dawn" />
                          <div className="sky__phase sky__noon" />
                          <div className="sky__phase sky__dusk" />
                          <div className="sky__phase sky__midnight" />
                          <div className="orbit">
                            <div className="sun" />
                            <div className="moon" />
                          </div>
                        </div>
                      )}

                      {item.season === "पावसाळा / Rainy" && (
                        <div ref={rainContainerRef} className="rain-animation">
                          <div className="cloud">
                            <div className="one"></div>
                            <div className="two"></div>
                          </div>
                          <div className="face">
                            <div className="eye"></div>
                            <div className="mouth"></div>
                          </div>
                          {[...Array(40)].map((_, idx) => (
                            <div
                              key={idx}
                              className="drop rain"
                              style={{ left: `${Math.random() * 80 + 10}%` }}
                            ></div>
                          ))}
                        </div>
                      )}

                      {item.season === "हिवाळा / Winter" && (
                        <>
                          <div className="winter-bg"></div>
                          <div className="snowflakes">
                            {[...Array(25)].map((_, idx) => (
                              <i key={idx}></i>
                            ))}
                          </div>
                        </>
                      )}

                      <div className="absolute bottom-2 left-0 right-0 text-center z-10">
                        <span className="text-sm sm:text-base font-bold text-gray-800 bg-white/80 px-3 py-1 rounded-full inline-block">
                          {item.season}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-3 sm:p-4">
                      <div className="grid gap-2 mb-3">
                        <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                          <p className="text-xs text-gray-500 flex space-x-2 items-center">
                            <Calendar className="text-green-600 w-3 h-3" />
                            <span>Dates</span>
                          </p>
                          <p className="text-xs text-gray-800 font-semibold">
                            {item.dates}
                          </p>
                        </div>
                        <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
                          <p className="text-xs text-gray-500 flex space-x-2 items-center">
                            <Timer className="text-amber-600 w-3 h-3" />
                            <span>Duration</span>
                          </p>
                          <p className="text-xs text-gray-800 font-semibold">
                            {item.duration}
                          </p>
                        </div>
                      </div>

                      <div className="bg-teal-50 rounded-lg p-2 border border-teal-200 mb-3">
                        <p className="text-xs text-gray-500 flex space-x-2 items-center">
                          <GraduationCap className="text-teal-600 w-3 h-3" />
                          <span>Academy</span>
                        </p>
                        <p className="text-xs text-gray-800 font-semibold">
                          {item.academy}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-1">
                          <IndianRupee className="text-amber-600 w-4 h-4" />
                          <span className="text-lg sm:text-xl font-black text-gray-800">
                            {item.fee}
                          </span>
                        </div>
                        <button
                          className={`w-full sm:w-auto px-4 sm:px-5 py-2 bg-gradient-to-r ${item.gradient} rounded-lg text-white text-sm font-bold shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95`}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative z-10  mx-auto grid md:grid-cols-2 gap-4">
        <div className="group relative  md:h-[320px]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur-md opacity-25 group-hover:opacity-50 transition-all duration-500"></div>
          <div className="relative h-full backdrop-blur-sm bg-white/90 rounded-2xl p-5 border-2 border-green-200 shadow-xl overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-md">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg md:text-xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent ">
                मुग्धविहार Innocence Academy
              </h2>
            </div>

            <p className="text-gray-600 text-xs mb-4 leading-relaxed">
              Customized short-term stays for those who have completed 3S
              स्वऋतुविहार / Seasonal Academy and wish to extend their
              experience:
            </p>

            <div className="grid md:grid-cols-2 gap-2">
              {[
                {
                  title: "शिष्य / Disciple",
                  desc: "Deepen learning and expertise.",
                },
                {
                  title: "शिक्षु / Apprentice",
                  desc: "Extra practice and skill refinement.",
                },
                {
                  title: "प्रशिक्षु / Trainee",
                  desc: "Additional training and guidance.",
                },
                {
                  title: "स्वयंसेवक / Volunteer",
                  desc: "Contribute as a volunteer while staying.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-green-50 rounded-lg p-3 border border-green-200 hover:border-green-400 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-bold text-green-700 text-xs mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="group relative md:h-[320px]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-md opacity-25 group-hover:opacity-50 transition-all duration-500"></div>
          <div className="relative h-full backdrop-blur-sm bg-white/90 rounded-2xl p-5 border-2 border-amber-200 shadow-xl overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-md">
                <Flower className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg md:text-xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                निर्मुक्त Liberated
              </h2>
            </div>

            <div className="space-y-3">
              {[
                "No projects or courses.",
                "Experience lifestyle freely, 365 days a year.",
                "Ideal for those seeking solitude, self-study, or work-from-home experience.",
                "Focus on calm, quiet living and personal growth through स्वग्राम.",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 bg-amber-50 rounded-lg p-3 border border-amber-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-xs leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative ">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-48 h-48 bg-green-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-56 h-56 bg-lime-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-52 h-52 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-green-400/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}

        <div className="relative z-10 px-3 py-6 mt-5">
          <div className="text-center mb-6">
            <div className="inline-block mb-2">
              <div className="flex items-center gap-2 px-4 py-1.5">
                <Sparkles className="w-4 h-4 text-green-600 animate-pulse" />
                <span className="text-green-700 font-bold text-xs tracking-wide">
                  EXCLUSIVE PROGRAMMES
                </span>
                <Sparkles className="w-4 h-4 text-green-600 animate-pulse" />
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-black mb-2 leading-tight">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600 bg-clip-text text-transparent">
                Academy Programmes
              </span>
            </h1>

            <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-green-100 to-lime-100 backdrop-blur-xl rounded-full border-2 border-green-300 mb-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <span className="text-green-700 font-bold text-sm tracking-wide">
                स्वयंविहार
              </span>
            </div>

            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Transform your life through calm, quiet living and personal growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {academyProgrammes.map((programme, index) => (
              <div
                key={programme.programmeId}
                className="group"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div
                  className="absolute -inset-0.5 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${programme.accentColor}60, ${programme.accentColor}30)`,
                  }}
                ></div>

                <div className="relative h-full backdrop-blur-xl bg-white/80 rounded-2xl overflow-hidden border border-green-200/50 shadow-lg transform group-hover:scale-[1.02] transition-all duration-500">
                  <div
                    className={`relative p-3 bg-gradient-to-br ${programme.gradient} overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <div className="relative flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-white/95 rounded-xl shadow-md transform group-hover:rotate-12 transition-transform duration-300">
                          <GraduationCap
                            className="w-5 h-5"
                            style={{ color: programme.accentColor }}
                          />
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-black text-white drop-shadow-md">
                            {programme.programmeName}
                          </h3>
                          <p className="text-sm font-bold text-white/90 drop-shadow">
                            {programme.programmeNameHindi}
                          </p>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-white/95 rounded-full shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <span
                          className="font-bold text-xs"
                          style={{ color: programme.accentColor }}
                        >
                          #{programme.programmeId}
                        </span>
                      </div>
                    </div>
                    <div className="relative flex gap-1.5">
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-white/20 backdrop-blur rounded-full">
                        <Star className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                        <span className="text-xs font-bold text-white">
                          Premium
                        </span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-white/20 backdrop-blur rounded-full">
                        <AwardIcon className="w-3 h-3 text-white" />
                        <span className="text-xs font-bold text-white">
                          Certified
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div
                        className={`${programme.lightBg} backdrop-blur-xl rounded-xl p-2.5 border border-green-200 transform hover:scale-105 transition-all duration-300 shadow-sm`}
                      >
                        <Calendar
                          className="w-4 h-4 mb-1"
                          style={{ color: programme.accentColor }}
                        />
                        <p className="text-xs text-gray-500 font-semibold">
                          Duration
                        </p>
                        <p className="text-xs text-gray-800 font-bold">
                          {programme.durationRange}
                        </p>
                      </div>
                      <div
                        className={`${programme.lightBg} backdrop-blur-xl rounded-xl p-2.5 border border-green-200 transform hover:scale-105 transition-all duration-300 shadow-sm`}
                      >
                        <GraduationCap
                          className="w-4 h-4 mb-1"
                          style={{ color: programme.accentColor }}
                        />
                        <p className="text-xs text-gray-500 font-semibold">
                          Eligibility
                        </p>
                        <p className="text-xs text-gray-800 font-bold">
                          {programme.eligibilityCriteria}
                        </p>
                      </div>
                    </div>
                    <div className="backdrop-blur-xl bg-green-50/50 rounded-xl p-3 border border-green-200 shadow-sm">
                      <p className="text-xs text-gray-700 font-bold mb-2 text-center">
                        Select Number of Days
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <button
                          onClick={programme.onDecrement}
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${programme.gradient} text-white font-bold text-lg shadow-md transform transition-all duration-300 hover:scale-110 active:scale-95`}
                        >
                          <RemoveSharp />
                        </button>
                        <div className="text-center min-w-[60px]">
                          <div
                            className="text-3xl font-black bg-clip-text text-transparent"
                            style={{
                              backgroundImage: `linear-gradient(to bottom right, ${programme.accentColor}, ${programme.accentColor}dd)`,
                            }}
                          >
                            {programme.selectedDays}
                          </div>
                          <div className="text-xs text-gray-500 font-semibold">
                            {programme.selectedDays === 1 ? "Day" : "Days"}
                          </div>
                        </div>
                        <button
                          onClick={programme.onIncrement}
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${programme.gradient} text-white font-bold text-lg shadow-md transform transition-all duration-300 hover:scale-110 active:scale-95`}
                        >
                          <AddSharp />
                        </button>
                      </div>
                    </div>
                    <div className="backdrop-blur-xl bg-gradient-to-br from-green-50/80 to-lime-50/80 rounded-xl p-3 border border-green-200 shadow-md">
                      <div className="flex items-center justify-between mb-2 pb-2 border-b border-green-200">
                        <div className="flex items-center gap-1.5">
                          <IndianRupee
                            className="w-4 h-4"
                            style={{ color: programme.accentColor }}
                          />
                          <div>
                            <p className="text-xs text-gray-600 font-semibold">
                              Per Day
                            </p>
                            <p className="text-xs text-gray-500">प्रति दिन</p>
                          </div>
                        </div>
                        <p
                          className="text-xl font-black bg-clip-text text-transparent"
                          style={{
                            backgroundImage: `linear-gradient(to bottom right, ${programme.accentColor}, ${programme.accentColor}dd)`,
                          }}
                        >
                          ₹{programme.pricePerDay.toLocaleString("en-IN")}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-gray-800">
                            Total Amount
                          </p>
                          <p className="text-xs text-gray-500">
                            कुल शुल्क • {programme.selectedDays}&nbsp;
                            {programme.selectedDays === 1 ? "day" : "days"}
                          </p>
                        </div>
                        <p
                          className="text-base font-black bg-clip-text text-transparent"
                          style={{
                            backgroundImage: `linear-gradient(to bottom right, ${programme.accentColor}, ${programme.accentColor}dd)`,
                          }}
                        >
                          ₹{programme.totalPrice.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                    <button
                      className={`w-full py-2.5 bg-gradient-to-r ${programme.gradient} rounded-xl text-white font-bold text-sm shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group/btn`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      <span className="relative flex items-center justify-center gap-1.5">
                        Book Programme Now
                        <Sparkles className="w-4 h-4 animate-pulse" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient-x { 
          background-size: 200% auto;
          animation: gradient-x 3s linear infinite;
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; opacity: 0; }
      `}</style>
    </div>
  );
}
