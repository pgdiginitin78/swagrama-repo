import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import AgroWellness from "../../assets/landing-page/ayurvedaservices/Agro_wellness.png";
import Ayurveda from "../../assets/landing-page/ayurvedaservices/Ayurveda.png";
import NaturalFarming from "../../assets/landing-page/ayurvedaservices/Natural_farming.png";
import NaturalHabitat from "../../assets/landing-page/ayurvedaservices/Natural_habitat.png";
import Swagurukul from "../../assets/landing-page/ayurvedaservices/Swagurukul.png";
import selfWila from "../../assets/landing-page/self-wila.png";
import Connecting from "../../assets/landing-page/topStories/Connecting.svg";
import Empowering from "../../assets/landing-page/topStories/Empowering.svg";
import StoryImg from "../../assets/landing-page/topStories/Story-2.png";

import PradipTaware from "../../assets/landing-page/ourexperts/PradipTaware.jpg";
import ManishaSuryavanshi from "../../assets/landing-page/ourexperts/ManishaSuryavanshi.jpg";
import SandipMahetre from "../../assets/landing-page/ourexperts/SandipMahetre.jpg";
import SantoshSuryavanshi from "../../assets/landing-page/ourexperts/SantoshSuryawanshi.jpg";
import DhananjayAnvikar from "../../assets/landing-page/ourexperts/DhananjayAnvikar.jpg";
import AvantiNitsure from "../../assets/landing-page/ourexperts/AvantiNitsure.jpg";
import VaishaliHolmukhe from "../../assets/landing-page/ourexperts/VaishaliHolmukhe.jpg";
import SmitaMahetre from "../../assets/landing-page/ourexperts/PradipTaware.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const ourExpertData = [
    {
      img: PradipTaware,
      name: "Pradip Taware",
      deg: "MD Ayurveda CCH Diploma in Ayurvedic Dietic MUHS",
    },
    {
      img: ManishaSuryavanshi,
      name: "Manisha Suryawanshi",
      deg: "MBBS Dyed Yoga Therapist Kaivalyadham Lonawala",
    },
    { img: SandipMahetre, name: "Sandip Mehetre", deg: "BAMS" },
    { img: SantoshSuryavanshi, name: "Santosh Suryavanshi", deg: "MD" },
    { img: DhananjayAnvikar, name: "Dhananjay Anvikar", deg: "BAMS" },
    { img: AvantiNitsure, name: "Avanti Nitsure", deg: "MD" },
    { img: VaishaliHolmukhe, name: "Vaishali Holmukhe", deg: "MD" },
    { img: SmitaMahetre, name: "Smita Mehetre", deg: "MD" },
  ];

  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  // ========== Auto Slide ==========
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500); //3.5 sec

    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setIndex((prev) => {
      const newIndex = (prev + 1) % ourExpertData.length;
      scrollToCard(newIndex);
      return newIndex;
    });
  };

  const prevSlide = () => {
    setIndex((prev) => {
      const newIndex = (prev - 1 + ourExpertData.length) % ourExpertData.length;
      scrollToCard(newIndex);
      return newIndex;
    });
  };

  const scrollToCard = (i) => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0].offsetWidth + 32; // gap-8 (approx)
      trackRef.current.scrollTo({
        left: cardWidth * i,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    gsap.from(".story-card", {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: { trigger: ".story-card", start: "top 80%" },
    });

    gsap.to(".wave-underline", {
      backgroundPosition: "200% 50%",
      duration: 4,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div className=" w-full overflow-hidden overflow-y-hidden">
      <section className="h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <span className="floating-leaf absolute top-20 left-10 text-6xl opacity-20">
          🌿
        </span>
        <span className="floating-leaf absolute top-40 right-20 text-5xl opacity-20">
          🍃
        </span>
        <span className="floating-leaf absolute bottom-40 left-20 text-7xl opacity-20">
          🌺
        </span>
        <span className="floating-leaf absolute bottom-20 right-10 text-6xl opacity-20">
          🪷
        </span>

        <div className="text-center space-y-8 max-w-5xl z-10">
          <div className="inline-block px-6 py-4 bg-green-100 rounded-full text-green-700 font-medium">
            🌿 Ancient Wisdom • Modern Healing
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
            Journey to Holistic Wellness
          </h1>

          <p className="text-xl md:text-2xl text-green-800 font-light max-w-3xl mx-auto">
            Experience the transformative power of Ayurveda and natural healing
            at Swagrama Wellness Center
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button
              variant="contained"
              className="!px-8 !py-4 !rounded-full font-semibold shadow-lg hover:scale-105 transition-all bg-gradient-to-r from-green-600 to-emerald-600"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* ====================== SERVICES SECTION ====================== */}
      <section className="py-10 flex items-center justify-center bg-gradient-to-br from-lime-100 to-red-100">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800">
            Our Healing Services
          </h2>
          <p className="text-lg text-green-700">
            Traditional Ayurvedic treatments for modern wellness
          </p>

          {/* Bento Grid */}
          <div className="bento-grid grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* CARD LOOP */}
            {[
              {
                img: AgroWellness,
                title: "Agro & Wellness Tourism",
                text: "Rejuvenate in nature, embrace sustainable living.",
              },
              {
                img: Ayurveda,
                title: "Ayurveda Services",
                text: "Ancient healing therapies for vitality.",
              },
              {
                img: NaturalFarming,
                title: "Natural Farming",
                text: "Grow chemical-free sustainable crops.",
              },
              {
                img: NaturalHabitat,
                title: "Natural Habitat",
                text: "Eco-friendly lifestyle for mind & soul.",
              },
              {
                img: Swagurukul,
                title: "Swagurukul",
                text: "Learn timeless wisdom for conscious living.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="service-card bg-white rounded-2xl border hover:shadow-lg transition-all duration-300"
              >
                <div className="service-icon w-full rounded-t-2xl bg-green-100 flex justify-center shadow py-6">
                  <img src={item.img} className="h-[100px]" alt="" />
                </div>

                <div className="p-3">
                  <h3 className="text-ayuBrown font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative mx-auto px-6 lg:px-20 pt-6 pb-20 overflow-hidden mandala">
        <div class="absolute inset-0 bg-gradient-to-br from-ayuLight/60 to-transparent pointer-events-none"></div>
        {/* ================= TITLE ================= */}
        <h1 className="text-3xl font-semibold text-ayuDark mb-6 relative inline-block">
          Top Stories <span className="wave-underline"></span>
        </h1>

        {/* ================= MAIN CARDS ================= */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* ---------------- CARD 1 ---------------- */}
          <div className="story-card bg-white backdrop-blur-xl p-6 rounded-3xl shadow-xl border grid gap-6">
            <div className="overflow-hidden rounded-2xl h-[250px] bg-ayuLight">
              <img
                src={selfWila}
                className="w-full h-full object-cover scale-105 duration-500 hover:scale-110"
              />
            </div>

            <div>
              <h4 className="text-xl font-semibold text-ayuBrown mb-3">
                स्वग्राम Community Self-Dependence Village Intro
              </h4>

              <p className="text-gray-700 leading-relaxed mb-5">
                "स्वग्रामCommunity is Ayurveda, Yoga, Nature, Agro, Tourism,
                Natural Lifestyle & Biodiversity hub." Ayurveda & Yoga Natural
                agriculture...
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setModal1(true)}
                  className="bg-ayuDark text-white px-6 py-2 rounded-full hover:scale-105 transition"
                >
                  Continue Reading
                </button>
              </div>
            </div>
          </div>

          {/* ---------------- CARD 2 ---------------- */}
          <div className="story-card bg-white  backdrop-blur-xl p-6 rounded-3xl shadow-xl border grid gap-6">
            <div className="overflow-hidden rounded-2xl h-[250px]">
              <img
                src={StoryImg}
                className="w-full h-full object-cover scale-105 duration-500 hover:scale-110"
              />
            </div>

            <div>
              <h4 className="text-xl font-semibold text-ayuBrown mb-3">
                स्वग्राम Community Self-Dependence Village pillars
              </h4>

              <p className="text-gray-700 leading-relaxed mb-5">
                स्वग्रामCommunity is status of a complete science of life with
                solid philosophy & research-backed methodology...
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setModal2(true)}
                  className="bg-ayuDark text-white px-6 py-2 rounded-full hover:scale-105 transition"
                >
                  Continue Reading
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ======================== MODAL - 1 ======================== */}
        <Modal open={modal1} onClose={() => setModal1(false)}>
          <Box
            sx={style}
            className="h-[93%] w-[70%] overflow-y-auto rounded-lg"
          >
            <header className="bg-ayuDark px-6 py-4 text-white relative">
              <h2 className="text-xl md:text-2xl font-semibold">
                स्वग्राम Community
              </h2>
              <p className="text-sm text-white/80 mt-1">
                Natural Lifestyle & Self-Dependent Village
              </p>

              <button
                onClick={() => setModal1(false)}
                className="absolute right-5 top-3.5 bg-red-200 text-red-600 w-7 h-7
              flex items-center justify-center rounded-full text-xl hover:scale-110"
              >
                <CancelIcon />
              </button>
            </header>

            <div className=" p-6 space-y-5 leading-relaxed text-gray-700">
              <p className="text-base font-medium text-ayuDark">
                "स्वग्राम Community is Ayurveda, Yoga, Nature, Agro, Tourism,
                Natural Lifestyle & Biodiversity hub." Ayurveda, Yoga & Natural
                Agriculture is the first Natural Lifestyle practically applied
                knowledge in the world to live 100 years includes natural
                medical system to diseased one along with environmental balance.
                Working continuously with changes for more than 5000 years ago.
                It is a knowledge of life contains applied Science & Technology
                which is regularly used in daily work-Activity.
              </p>
              <p className="text-sm">
                Ultimately it Played in the Artistic way to Celebrate each &
                every moment of life.
              </p>

              <div className="border-l-4 border-ayuDark bg-ayuLight rounded-xl px-4 py-3 italic text-sm">
                "Ayurveda, Yoga & Natural Agriculture is an Evolution of
                ज्ञानKnowledge, शास्त्रScience, तंत्रTechnology,
                कर्मActivity-Work, क्रीडाPlay, कलाArt, उत्सवCeremony. Evolution
                of 7 Steps or ways of Life means सप्तपदी7Steps. All natives have
                such 7 steps to complete way of Life. It's a systematic working
                methodology called as सुविनिमयBarterSystem.
              </div>

              <p className="text-sm">
                This is a pure trading system stand on strong pillar of
                वर्षिष्ठकृषिसंस्कृतिUppermostAgriCulture means Natural
                Agriculture is not a business or job. It's purely inequality
                less huge diversity of living organism strongly stand on
                equality, brotherhood & independence. Barter System depends on
                12बलुतेदारDisciplinary which is nothing but a द्रव्यGoods,
                यंत्रInstruments & सेवाService Providers. All these come
                together to build complete & Self-dependent Commune called
                स्वग्रामCommunity_Self-Dependent Village. Simply It's a journey
                of life creates पर्यटनTourism of नैसर्गविधानNaturalLifestyle.
              </p>

              <p className="text-sm">
                "Our शरीरमनात्मBodyMindSoul is naturally evolved with natural
                habituate. Our Natural Lifestyle means grow & eat food in
                natural style. Stay, activity & work in natural places with
                natural style. Treat ourselves with natural ways. Always behave
                naturally."
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Certified Therapists",
                  "In-depth Consultations",
                  "24/7 Assistance",
                  "Customized Solutions",
                ].map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 border rounded-xl shadow-sm bg-white"
                  >
                    <span>⭐</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </Box>
        </Modal>

        {/* ======================== MODAL - 2 ======================== */}

        <Modal open={modal2} onClose={() => setModal2(false)}>
          <Box
            disableScrollLock
            sx={style}
            className="w-[70%] h-[95%] overflow-y-auto rounded-lg"
          >
            <header className="bg-ayuDark px-6 py-4 text-white relative">
              <h2 className="text-xl md:text-2xl font-semibold">
                स्वग्राम Community
              </h2>
              <p className="text-sm text-white/80 mt-1">
                Natural Lifestyle & Self-Dependent Pillars
              </p>

              <button
                onClick={() => setModal2(false)}
                className="absolute right-5 top-3.5 bg-red-200 text-red-600 w-7 h-7
              flex items-center justify-center rounded-full text-xl hover:scale-110"
              >
                <CancelIcon />
              </button>
            </header>

            <div className=" p-6 space-y-5 leading-relaxed text-gray-700 ">
              <section>
                <p className="font-medium text-ayuDark">
                  स्वग्राम Community is status of a complete science of life. It
                  has strong philosophical foundations, unquestionable
                  scientific veracity, everlasting practical methodology and
                  eternally vibrant innovativeness for modifications into allied
                  health care systems. All these proven track record of success
                  through the ages.
                </p>
                <p>
                  Destination of स्वग्राम Community is to prevent – to care – to
                  cure. To maintain well being of whole society includes
                  biodiversity.
                </p>
              </section>

              <section className="border-l-4 border-ayuDark bg-ayuLight p-4 font-semibold rounded-xl">
                स्वगुरुकुल Commune_InnocenceOfLife: “स्वस्थस्य स्वास्थ्य
                रक्षणम्” Protect, preserve, enhance strengthen & improve health
                of healthy one with सुसंस्कृतिजीवनविधान Well Consecrate Life
                Style
              </section>

              <section>
                <ul className="list-disc space-y-1 ml-4 text-sm">
                  <li>
                    is वर्षिष्ठकृषिसंस्कृति Uppermost AgriCulture + सुविनिमय
                    Barter System + नैसर्गविधान Natural LifeStyle.
                  </li>
                  <li>
                    <span className="font-semibold whitespace-nowrap">
                      स्वआतुरालय Hospital IPD :
                    </span>
                    Treat, Cure, Care diseases through आयुर्वेद Ayurveda + योग
                    Yoga + नैसर्ग Nature + कृषि Agro + पर्यटन Tourism +
                    जैवविविधता Biodiversity. As required, Allopathy &
                    Homoeopathy considered.
                  </li>
                </ul>
              </section>

              <section className="text-sm ">
                <ul className="grid gap-2 mt-2 list-disc ml-4 text-sm  grid-cols-2 ">
                  <li className="border p-2 bg-white shadow rounded-lg">
                    “It is our privilege and duty to safeguard, nurture and
                    propagate this unique scientific tradition and put into the
                    maximum use for the benefit of the entire world.”
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Current global resurgence of interest in traditional
                    healthcare has brought Ayurveda, Yoga, Natural Agriculture &
                    Tourism into limelight.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    To compete globally, Government of India established the
                    AYUSH Ministry and cluster-based approaches to enhance micro
                    and small enterprises.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Cluster approach enables collaboration while competing,
                    building sustainability and social capital for collective
                    initiatives.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    SwaGrama is developing protocols for such clusters,
                    industries and enterprises.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    India is labelled as “HERBAL, SPICE & LOCAL VARIETY FOOD
                    GARDEN OF THE WORLD”. It is one of the top biodiversity
                    hotspots with unique medicinal heritage.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Indian applied lifestyle philosophy is the future of world
                    health. Ayurveda, Yoga and Agriculture together offer
                    unmatched research and leadership.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Sanskrit is a scientific code language. Each sutra itself is
                    a scientific statement.
                  </li>
                </ul>
              </section>

              <section className="border-l-4 border-ayuDark rounded-xl bg-ayuLight text-white p-4 font-semibold">
                “योगेन चित्तस्य पदेन वाचां, मलं शरीरस्य च वैद्यकेन। योऽपाकरोत्
                तं प्रवरं मुनीनां, पतंजलि प्रांजलिरानतोऽस्मि।।”
                <p className="mt-1">
                  Yoga – Mind Purification · Sanskrit – Speech Purification ·
                  Ayurveda – Body Purification.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-ayuDark">
                  Objectives & Scope
                </h3>

                <ul className="grid gap-2 mt-2 list-disc ml-4 text-sm  grid-cols-2 ">
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Complete self-dependent village for prevention, care and
                    cure.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Medical, veterinary, agriculture, yoga, cultural and
                    wellness services.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Manufacture, trade and innovation in Ayurveda, food, herbal
                    and pharma sectors.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Hospitals, dispensaries, accommodation and food services.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Medicinal plant cultivation, conservation and farmer
                    livelihood generation.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Herbal, nutraceutical, pharmaceutical and therapeutic
                    product development.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Promotion of health governance through exhibitions and
                    education.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    360-degree integrative Swagrama model with entrepreneurship
                    development.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Natural cosmetics, hygiene, oils, paints, soaps and
                    essential products.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Medical, teaching, Panchkarma, yoga and therapy instruments.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Renewable energy from solar, wind, water, waste and
                    bio-resources.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Education, software, data processing and research services.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Food processing, preservation, beverages and herbal
                    nutrition.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Arts, handicrafts, natural construction and sustainable
                    transport.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Music & sound therapy.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg">
                    Zero-waste circular economy like forest ecosystem.
                  </li>
                  <li className="border p-2 bg-white shadow rounded-lg col-span-2">
                    Insurance, finance, real estate and legal services for
                    communities.
                  </li>
                </ul>
              </section>
            </div>
          </Box>
        </Modal>
      </div>
      {/*================= upcomming events =================*/}
      <div class="px-10 lg:px-20 py-10">
        <h1 class="text-ayuDark text-3xl font-semibold mb-10 relative inline-block">
          Upcoming Events
        </h1>
        <div class="grid grid-cols-3 gap-4">
          <div class="bg-white rounded-xl shadow ">
            <div class="flex justify-center py-5  ">
              <img
                src={Empowering}
                class="h-24 bg-slate-100 rounded-full w-24 p-2"
                alt=""
              />
            </div>
            <h5 class="font-semibold text-ayuBrown text-center">
              Empowering Wellness
            </h5>
            <p class="py-2 text-center text-gray-400 text-sm px-5">
              Begin your journey to holistic healing with personalized Ayurvedic
              treatments. Book your consultation and restore balance naturally.
              Your wellness starts here!
            </p>
            <div class="flex justify-center py-5">
              <button class="bg-ayuDark px-3 py-1 rounded-lg font-semibold text-white">
                Book An Appointment
              </button>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow ">
            <div class="flex justify-center py-5">
              <img
                src={Connecting}
                class="h-24 bg-slate-100 rounded-full w-24 p-2"
                alt=""
              />
            </div>
            <h5 class="font-semibold text-ayuBrown text-center">
              Connecting Experts Across The G
            </h5>
            <p class="py-2 text-center text-gray-400 text-sm px-5">
              Gain insights from top wellness and Ayurveda experts worldwide.
              Join hands with specialists and explore transformative healing
              solutions. Connect today!
            </p>
            <div class="flex justify-center py-5">
              <button class="bg-ayuDark px-3 py-1 rounded-lg font-semibold text-white">
                Sign up
              </button>
            </div>
          </div>
          <div
            class="bg-white rounded-xl shadow flex justify-center items-center animate-pulse
 font-semibold"
          >
            Upcomming Events...
          </div>
        </div>
      </div>
      {/* ================= Our Experts ================= */}

      <section
        id="ourExpertSection"
        className="relative py-10 overflow-hidden px-10 lg:px-20"
      >
        {/* wave background */}
        <div
          id="ourExpertWave"
          className="absolute bottom-0 left-0 w-[200%] animate-[waveMove_14s_linear_infinite]"
        >
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              fill="#e8f3e8"
              d="M0,60 C240,100 480,20 720,40 960,60 1200,120 1440,80 L1440,120 L0,120 Z"
            />
          </svg>
        </div>

        <h2 className="text-4xl font-semibold text-center text-ayuDark mb-16">
          Our Ayurveda Experts
        </h2>
        <div className="relative max-w-7xl mx-auto px-6 overflow-hidden">
          <div>
            <button
              onClick={prevSlide}
              className="absolute left-2 text-center flex justify-center top-1/2 -translate-y-1/2 text-ayuDark bg-white p-2 rounded-full shadow hover:bg-ayuDark hover:text-white z-10"
            >
              <ArrowBackIosIcon className="relative left-1" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-ayuDark bg-white p-2 rounded-full shadow hover:bg-ayuDark hover:text-white z-10"
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
          <div
            ref={trackRef}
            className="flex gap-8 overflow-x-hidden scroll-smooth"
          >
            {ourExpertData.map((d, i) => (
              <div
                key={i}
                className="min-w-[300px] sm:min-w-[46%] lg:min-w-[30%] mb-5
            bg-gradient-to-br from-[#e8f3e8]/80 to-[#3f8b4f]/60 backdrop-blur-xl
            rounded-3xl p-7 shadow-lg border transition-transform duration-300
            hover:scale-105 hover:shadow-2xl hover:shadow-green-200/50"
              >
                <img
                  src={d.img}
                  className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-lg object-cover"
                />
                <h3 className="mt-5 text-lg font-semibold text-center text-ayuDark">
                  {d.name}
                </h3>
                <p className="text-sm text-center text-gray-600">{d.deg}</p>

                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95h4.157c.969 0 1.371 1.24.588 1.81l-3.364 2.445 1.287 3.95c.3.921-.755 1.688-1.54 1.118L10 13.348l-3.365 2.45c-.784.57-1.838-.197-1.539-1.118l1.287-3.95-3.364-2.445c-.783-.57-.38-1.81.588-1.81h4.157z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
