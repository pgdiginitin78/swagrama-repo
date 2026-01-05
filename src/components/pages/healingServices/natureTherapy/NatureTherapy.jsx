import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Spa,
  Pool,
  Air,
  FitnessCenter,
  Grass,
  BookOnline,
  FilterList,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { GiMountains } from "react-icons/gi";
import OPDBookingModal from "../opdClinic/OPDBookingModal";

const therapiesData = [
  {
    id: 1,
    category: "MudTherapy",
    icon: "Spa",
    nameEnglish: "स्वपुंस्मृत्तिकास्नान Male MudBath",
    room: "पुंस्मृत्तिकास्नानकक्ष Male Mud BathRoom",
    description: "Therapeutic male mud bath using mineral-rich soil.",
    benefits:
      "Detoxifies body, improves circulation, nourishes skin, relieves muscle tension.",
    price: "1000/1",
    priceRange: "750/2-5",
    bulkPrice: "500/5 or More",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    category: "MudTherapy",
    icon: "Spa",
    nameEnglish: "स्वस्त्रीमृत्तिकास्नान Female Mud Bath",
    room: "स्त्रीमृत्तिकास्नानकक्ष Female Mud BathRoom",
    description: "Therapeutic female mud bath with rejuvenating soil therapy.",
    benefits:
      "Rejuvenates skin and body, relieves fatigue, detoxifies, improves vitality.",
    price: "1000/1",
    priceRange: "750/2-5",
    bulkPrice: "500/5 or More",
    image:
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    category: "WaterTherapy",
    icon: "Pool",
    nameEnglish: "स्वजलतरणचिकित्सा Swimming Therapy",
    room: "जलतरणचिकित्साकूप Swimming Therapy Well",
    description: "Guided swimming sessions in clean water.",
    benefits:
      "Enhances flexibility, strengthens muscles, improves cardiovascular health, reduces stress.",
    price: "1000/1",
    priceRange: "750/2-5",
    bulkPrice: "500/5 or More",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    category: "AirTherapy",
    icon: "Air",
    nameEnglish: "स्ववातातपिकरसायन Wind Sun Rejuvenation",
    room: "वातातपिकरसायनभूमि Wind Sun Rejuvenation Land",
    description:
      "व्यायाम, श्रम, कोष्णनिवास, उबदार पांघरून, उपवास, उष्ण सेवन, भय, क्रोध, लेपन, क्रिडा, आतप. Exposure to controlled wind and sun, combined with gentle exercise, labour, warm covering, fasting, warm intake, and physical therapy.",
    benefits:
      "Improves immunity, enhances energy, detoxifies body, strengthens metabolism.",
    price: "1000/1",
    priceRange: "750/2-5",
    bulkPrice: "500/5 or More",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    category: "PhysicalTherapy",
    icon: "FitnessCenter",
    nameEnglish: "स्वमल्लचिकित्सा Athletic Therapy",
    room: "मल्लचिकित्साभूमि Athletic Therapy Land",
    description: "Personalized athletic exercises and therapy.",
    benefits:
      "Builds strength, improves endurance, supports recovery, promotes overall fitness.",
    price: "1000/1",
    priceRange: "750/2-5",
    bulkPrice: "500/5 or More",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    category: "SoilTherapy",
    icon: "Grass",
    nameEnglish: "स्वउर्वराचिकित्सा Fertile Soil Therapy",
    room: "उर्वराचिकित्साभूमि Fertile Soil Therapy Land",
    description: "Walking or lying in fertile soil for therapeutic effects.",
    benefits:
      "Grounds body, improves circulation, detoxifies, enhances vitality and mental balance.",
    price: "1000/1",
    priceRange: "750/2-5",
    bulkPrice: "500/5 or More",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop",
  },
];

const categories = [
  { name: "All", icon: FilterList },
  { name: "MudTherapy", icon: Spa },
  { name: "WaterTherapy", icon: Pool },
  { name: "AirTherapy", icon: Air },
  { name: "PhysicalTherapy", icon: FitnessCenter },
  { name: "SoilTherapy", icon: Grass },
];

const getIcon = (iconName) => {
  const icons = {
    Spa: Spa,
    Pool: Pool,
    Air: Air,
    FitnessCenter: FitnessCenter,
    Grass: Grass,
  };
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent /> : <Spa />;
};

export default function NatureTherapy() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTherapies, setFilteredTherapies] = useState(therapiesData);
  const [openBookingModal, setOpenBookingModal] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredTherapies(therapiesData);
    } else {
      setFilteredTherapies(
        therapiesData.filter((therapy) => therapy.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.async = true;
    script.onload = () => {
      if (window.gsap && headerRef.current) {
        window.gsap.from(headerRef.current, {
          duration: 1.2,
          y: -50,
          opacity: 0,
          ease: "power3.out",
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);


  return (
    <div className="min-h-screen overflow-hidden">
      <div ref={headerRef} className="text-center mb-5">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl flex space-x-3 justify-center items-center font-bold tracking-wide text-center 
          bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-700
          bg-clip-text text-transparent py-2 mb-2"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-amber-700"
          >
            <GiMountains />
          </motion.span>
          &nbsp; नैसर्गचिकित्सा Nature Therapy
          <motion.span
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-amber-700"
          >
            <GiMountains />
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm text-amber-700 font-medium max-w-4xl mx-auto"
        >
          Therapies for Visitors, OPD & IPD: 8 hrs | Two shifts: 06:00 AM to
          02:00 PM and 02:00 PM to 10:00 PM
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm text-amber-700 mt-2 font-medium"
        >
          मृत्तिकास्नान MudBath | मृदचिकित्सा SoilTherapy | स्त्रीमृदचिकित्सा
          FemalesoilTherapy / पुरुषचिकित्सा MaleSoilTherapy: 1 hrs
        </motion.p>
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4 mb-5"
      >
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <motion.button
              key={category.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full font-bold transition-all duration-300 shadow-lg ${
                selectedCategory === category.name
                  ? "bg-gradient-to-r from-amber-700 to-yellow-700 text-white shadow-xl"
                  : "bg-white text-amber-800 border-2 border-amber-400 hover:bg-amber-50 hover:border-amber-600"
              }`}
            >
              <IconComponent className="text-xl" />
              {category.name}
            </motion.button>
          );
        })}
      </motion.div>

      {filteredTherapies.length > 0 ? (
        <div className="relative max-w-7xl mx-auto grid gap-4 px-5">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {filteredTherapies.map((therapy, index) => (
                <motion.div
                  key={therapy.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-3xl shadow-2xl mt-3 overflow-hidden border border-amber-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 relative overflow-hidden">
                      <img
                        src={therapy.image}
                        alt={therapy.nameEnglish}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <span className="text-sm absolute bottom-2 right-2 font-bold bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-600 bg-opacity-25 backdrop-blur-sm px-4 py-2 mb-2  rounded-full shadow">
                        {therapy.category}
                      </span>
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-700 p-5 text-white">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white bg-opacity-30 backdrop-blur-sm p-3 rounded-2xl shadow-lg"
                          >
                            {getIcon(therapy.icon)}
                          </motion.div>
                          <h2 className="text-lg font-bold drop-shadow-lg mt-1">
                            {therapy.nameEnglish}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-3/5 p-5">
                      <div className="mb-3 bg-amber-50 rounded-xl p-3">
                        <h3 className="text-sm font-bold text-amber-900 mb-1">
                          <span>Room :</span>
                          <span className="text-amber-800 font-medium text-xs">
                            &nbsp;{therapy.room}
                          </span>
                        </h3>
                      </div>

                      <div className="mb-3 bg-yellow-50 rounded-xl p-3">
                        <h3 className="text-sm font-bold text-amber-900 mb-1">
                          <span>Description :</span>
                          <span className="text-amber-800 font-medium text-xs leading-relaxed">
                            &nbsp;{therapy.description}
                          </span>
                        </h3>
                      </div>

                      <div className="mb-4 bg-orange-50 rounded-xl p-3">
                        <h3 className="text-sm font-bold text-amber-900 mb-1">
                          <span>Benefits :</span>
                          <span className="text-amber-800 text-xs font-medium leading-relaxed">
                            &nbsp;{therapy.benefits}
                          </span>
                        </h3>
                      </div>

                      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-2 mb-2 shadow-inner">
                        <div className="flex justify-between items-center text-sm mb-2 pb-2 border-b border-amber-300">
                          <span className="text-amber-900 font-bold flex space-x-[47px]">
                            <span>Single</span> <span>:</span>
                          </span>
                          <span className="text-amber-900 font-bold">
                            ₹{therapy.price}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mb-2 pb-2 border-b border-amber-300">
                          <span className="text-amber-900 font-bold flex space-x-2">
                            <span>2-5 People</span> <span>:</span>
                          </span>
                          <span className="text-amber-900 font-bold">
                            ₹{therapy.priceRange}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-amber-900 font-bold flex space-x-3">
                            <span>5+ People</span> <span>:</span>
                          </span>
                          <span className="text-amber-900 font-bold">
                            ₹{therapy.bulkPrice}
                          </span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setOpenBookingModal(true)}
                        className="w-full bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-700 text-white font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300"
                      >
                        <BookOnline />
                        Book Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20"
        >
          <p className="text-3xl text-amber-800 font-bold">
            No therapies found in this category
          </p>
        </motion.div>
      )}
      {openBookingModal && (
        <OPDBookingModal
          open={openBookingModal}
          handleClose={() => setOpenBookingModal(false)}
        />
      )}
    </div>
  );
}
