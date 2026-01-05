import {
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
import { useState } from "react";

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
  {
    season: "उन्हाळा / Summer",
    dates: "16/02/2028 – 21/06/2028",
    academy: "द्वग्रिएमणाविहार / Summer Academy",
    duration: "Summery 120+ Days",
    fee: "1,26,000",
    Icon: Sun,
    iconColor: "text-amber-600",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    gradient: "from-amber-400 via-orange-400 to-red-400",
    bgGlow: "rgba(251, 146, 60, 0.2)",
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
      gradient: "from-emerald-400 via-green-400 to-teal-400",
      accentColor: "#10b981",
      lightBg: "bg-emerald-50",
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
      gradient: "from-amber-400 via-orange-400 to-yellow-400",
      accentColor: "#f59e0b",
      lightBg: "bg-amber-50",
      onIncrement: () => setLiberatedAcademyDays((prev) => prev + 1),
      onDecrement: () =>
        setLiberatedAcademyDays((prev) => (prev > 1 ? prev - 1 : 0)),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-teal-50 relative overflow-hidden">
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

      <div className="relative z-10 min-h-[85vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl w-full">
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
          <h1 className="text-3xl  font-black text-center mb-2 animate-fade-in-up">
            <span className="text-4xl inline-block bg-gradient-to-r py-1 from-green-500 via-emerald-600 to-teal-500 bg-clip-text text-transparent animate-gradient-x">
              स्वगृहकुल
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r py-1 from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x">
              Universal Commune
            </span>
          </h1>

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
                it. That search has been completed by{" "}
                <strong className="text-green-600 font-bold">
                  स्वग्राम Community
                </strong>
                .
              </p>
              <p className="text-gray-600">
                <strong className="text-green-600 font-bold">
                  स्वग्राम Community
                </strong>{" "}
                <strong className="text-amber-600 font-bold">
                  स्वगृहकुल Commune
                </strong>{" "}
                will give everyone the strength and training to build their
                dream village or part of the village. This means that India will
                again become a complete and self-sufficient village's country.
                That is why we are coming up with{" "}
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500 to-lime-500 rounded-lg text-white font-bold text-base shadow-lg">
                  'हर ग्राम स्वग्राम'
                </span>{" "}
                campaign. To complete this campaign or reality we started
                academy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl  font-black bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent mb-3">
            Seasonal Academy Admission
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
          {academyData.map((item, i) => {
            const IconComponent = item.Icon;
            return (
              <div key={i} className="group relative h-[450px]">
                <div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"
                  style={{ background: item.bgGlow }}
                ></div>

                <div className="relative h-full  bg-white/90 rounded-2xl overflow-hidden border-2 border-white shadow-xl transform transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.season}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-50`}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                    <div className="absolute top-2 right-2">
                      <div
                        className={`px-3 py-1 bg-gradient-to-r ${item.gradient} rounded-full text-white text-xs font-bold shadow-md animate-pulse`}
                      >
                        Open
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <div className="p-2 bg-white rounded-xl shadow-lg transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                        <IconComponent
                          className={`${item.iconColor} w-6 h-6`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {item.season}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                        <Calendar className="text-green-600 w-3 h-3 mb-1" />
                        <p className="text-xs text-gray-500">Dates</p>
                        <p className="text-xs text-gray-800 font-semibold">
                          {item.dates}
                        </p>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
                        <Timer className="text-amber-600 w-3 h-3 mb-1" />
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="text-xs text-gray-800 font-semibold">
                          {item.duration}
                        </p>
                      </div>
                    </div>

                    <div className="bg-teal-50 rounded-lg p-2 border border-teal-200 mb-3">
                      <GraduationCap className="text-teal-600 w-3 h-3 mb-1" />
                      <p className="text-xs text-gray-500">Academy</p>
                      <p className="text-xs text-gray-800 font-semibold line-clamp-1">
                        {item.academy}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <IndianRupee className="text-amber-600 w-4 h-4" />
                        <span className="text-xl font-black text-gray-800">
                          {item.fee}
                        </span>
                      </div>
                      <button
                        className={`px-5 py-2 bg-gradient-to-r ${item.gradient} rounded-lg text-white text-sm font-bold shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95`}
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

      <div className="relative z-10 px-4 py-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
        <div className="group relative h-[320px]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur-md opacity-25 group-hover:opacity-50 transition-all duration-500"></div>
          <div className="relative h-full backdrop-blur-sm bg-white/90 rounded-2xl p-5 border-2 border-green-200 shadow-xl overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-md">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                मुग्धविहार Innocence Academy
              </h2>
            </div>

            <p className="text-gray-600 text-xs mb-4 leading-relaxed">
              Customized short-term stays for those who have completed 3S
              स्वऋतुविहार / Seasonal Academy and wish to extend their
              experience:
            </p>

            <div className="grid grid-cols-2 gap-2">
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

        <div className="group relative h-[320px]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-md opacity-25 group-hover:opacity-50 transition-all duration-500"></div>
          <div className="relative h-full backdrop-blur-sm bg-white/90 rounded-2xl p-5 border-2 border-amber-200 shadow-xl overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-md">
                <Flower className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
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

      <div className="relative z-10 px-4 py-8">
        <div className="text-center mb-6">
          <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-green-100 to-amber-100 rounded-full border-2 border-green-300 mb-4 shadow-md">
            <span className="text-green-700 font-bold text-xs">स्वयंविहार</span>
          </div>
          <h2 className="text-3xl  font-black bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent mb-2">
            Academy Programmes
          </h2>
          <p className="text-gray-600 text-xs">
            Focus on calm, quiet living and personal growth
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {academyProgrammes.map((programme) => (
            <div key={programme.programmeId} className="group relative">
              <div
                className="absolute -inset-0.5 rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-all duration-500"
                style={{ background: programme.accentColor }}
              ></div>

              <div
                className={`relative h-full backdrop-blur-sm bg-white/90 rounded-2xl overflow-hidden border-2 ${programme.lightBg} shadow-xl`}
              >
                <div
                  className={`relative p-3 bg-gradient-to-br ${programme.gradient}`}
                >
                  <div className="flex items-start justify-between ">
                    <div className="flex space-x-2">
                      <div className="p-2 h-10 bg-white/90 rounded-xl shadow-md">
                        <GraduationCap
                          className="w-6 h-6"
                          style={{ color: programme.accentColor }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white">
                          {programme.programmeName}
                        </h3>
                        <p className="text-base font-bold text-white/90">
                          {programme.programmeNameHindi}
                        </p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-white/90 rounded-full shadow-md">
                      <span
                        className="font-bold text-xs"
                        style={{ color: programme.accentColor }}
                      >
                        #{programme.programmeId}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="p-4 "
                  style={{ maxHeight: "calc(100% - 130px)" }}
                >
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div
                      className={`${programme.lightBg} rounded-lg p-2 border-2`}
                      style={{ borderColor: programme.accentColor + "40" }}
                    >
                      <Calendar
                        className="w-4 h-4 mb-1"
                        style={{ color: programme.accentColor }}
                      />
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-xs text-gray-800 font-bold">
                        {programme.durationRange}
                      </p>
                    </div>
                    <div
                      className={`${programme.lightBg} rounded-lg p-2 border-2`}
                      style={{ borderColor: programme.accentColor + "40" }}
                    >
                      <GraduationCap
                        className="w-4 h-4 mb-1"
                        style={{ color: programme.accentColor }}
                      />
                      <p className="text-xs text-gray-500">Eligibility</p>
                      <p className="text-xs text-gray-800 font-bold">
                        {programme.eligibilityCriteria}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${programme.lightBg} rounded-xl p-4 border-2 mb-4`}
                    style={{ borderColor: programme.accentColor + "40" }}
                  >
                    <p className="text-xs text-gray-700 font-bold mb-3">
                      Select Number of Days
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <button
                        onClick={programme.onDecrement}
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${programme.gradient} text-white font-bold shadow-md transform transition-all duration-300 hover:scale-110 active:scale-95`}
                      >
                        −
                      </button>
                      <div className="text-center">
                        <div className="text-3xl font-black text-gray-800">
                          {programme.selectedDays}
                        </div>
                        <div className="text-xs text-gray-500">
                          {programme.selectedDays === 1 ? "Day" : "Days"}
                        </div>
                      </div>
                      <button
                        onClick={programme.onIncrement}
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${programme.gradient} text-white font-bold shadow-md transform transition-all duration-300 hover:scale-110 active:scale-95`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div
                    className={`${programme.lightBg} rounded-xl p-3 border-2 mb-4`}
                    style={{ borderColor: programme.accentColor + "40" }}
                  >
                    <div
                      className="flex items-center justify-between mb-2 pb-2 border-b-2"
                      style={{ borderColor: programme.accentColor + "20" }}
                    >
                      <div className="flex items-center gap-1">
                        <IndianRupee
                          className="w-4 h-4"
                          style={{ color: programme.accentColor }}
                        />
                        <div>
                          <p className="text-xs text-gray-600">Per Day</p>
                          <p className="text-xs text-gray-400">प्रति दिन</p>
                        </div>
                      </div>
                      <p className="text-base font-bold text-gray-800">
                        ₹{programme.pricePerDay.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-gray-800">
                          Total Amount
                        </p>
                        <p className="text-xs text-gray-500">
                          कुल शुल्क • {programme.selectedDays}{" "}
                          {programme.selectedDays === 1 ? "day" : "days"}
                        </p>
                      </div>
                      <p className="text-2xl font-black text-gray-800">
                        ₹{programme.totalPrice.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                  <button
                    className={`w-full py-3 bg-gradient-to-r ${programme.gradient} rounded-lg text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95`}
                  >
                    Book Programme Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
