import { ChevronDown, Leaf, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import OPDBookingModal from "../opdClinic/OPDBookingModal";

const beautyData = [
  // Beautiful Hair
  {
    category: "beautifulHair",
    serviceName: "केशत्वग्रक्षा Scalp Care",
    description: "Scalp care treatment.",
    benefits:
      "Nourishes scalp, strengthens hair, promotes shine and healthy growth. ",
    price: 2300,
  },
  {
    category: "beautifulHair",
    serviceName: "केशत्वग्भ्यङ्ग Scalp Oil Unguent",
    description: "Oil application to scalp.",
    benefits: "Reduces dryness and dandruff. ",
    price: 2300,
  },
  {
    category: "beautifulHair",
    serviceName: "केशत्वग्लेपन Scalp Mask",
    description: "Herbal/scalp mask application.",
    benefits: "Promotes hair strength, reduces hair fall, improves blood circulation. ",
    price: 2300,
  },
  {
    category: "beautifulHair",
    serviceName: "केशत्वग्संवाहक Scalp Shampooer",
    description: "Specialized shampooing.",
    benefits: "Deeply nourishes scalp, enhances hair texture.",
    price: 2300,
  },
  {
    category: "beautifulHair",
    serviceName: "केशत्वग्नुकूलक Scalp Conditioner",
    description: "Scalp conditioning.",
    benefits:
      "Deeply nourishes scalp, enhances hair texture. Softens hair, reduces tangles, adds shine.",
    price: 2300,
  },
  {
    category: "beautifulHair",
    serviceName: "केशरक्षा Hair Care",
    description: "Complete hair protection therapy.",
    benefits: "Improves hair health, prevents breakage, nourishes roots.",
    price: 1500,
  },
  {
    category: "beautifulHair",
    serviceName: "केशतैलाभ्यङ्ग Hair Oil Unguent",
    description: "Hair oil massage.",
    benefits: "Strengthens hair follicles, nourishes scalp.",
    price: 1500,
  },
  {
    category: "beautifulHair",
    serviceName: "केशलेपन Hair Mask ",
    description: "Hair mask application.",
    benefits: "Repairs damaged hair, adds moisture and shines.",
    price: 1500,
  },
  {
    category: "beautifulHair",
    serviceName: "केशसंवाहक Hair Shampooer",
    description: "Hair cleansing.",
    benefits: "Deep cleaning removes excess oil and dirt.",
    price: 1500,
  },
  {
    category: "beautifulHair",
    serviceName: "केशानुकूलक Hair Conditioner ",
    description: "Hair conditioning.",
    benefits: "Smoothens and protects hair from damage.",
    price: 1500,
  },
  {
    category: "beautifulHair",
    serviceName: "केशरङ्ग Hair Dye",
    description: "Hair coloring.",
    benefits: "Enhances hair color, hides grays.",
    price: 1000,
  },
  {
    category: "beautifulHair",
    serviceName: "रक्तगर्भमेन्धिका Red Henna",
    description: "Red henna hair dye.",
    benefits: "Natural coloring, conditions hair.",
    price: 1000,
  },
  {
    category: "beautifulHair",
    serviceName: "कृष्णमेन्धिका Black Henna ",
    description: "Black henna hair dye.",
    benefits: "Adds black shade, strengthens hair naturally",
    price: 1000,
  },
  // Graceful Women
  {
    category: "gracefulWomen",
    serviceName: "वदनधावन Face Cleansing",
    description: "Facial cleansing.",
    benefits: "Removes dirt and impurities, refreshes skin.",
    price: 2500,
  },
  {
    category: "gracefulWomen",
    serviceName: "वदनअवघर्षण Face Scrubbing",
    description: "Facial exfoliation.",
    benefits: "Deep cleans pores, removes dead skin.",
    price: 2500,
  },
  {
    category: "gracefulWomen",
    serviceName: "वदनबाष्पक Face Steaming",
    description: "Facial steaming.",
    benefits: "Opens pores, improves circulation, softens skin.",
    price: 2500,
  },
  {
    category: "gracefulWomen",
    serviceName: "वदनबन्ध Face Pack",
    description: "Facial pack application.",
    benefits: "Nourishes skin, improves tone, hydrates.",
    price: 2500,
  },
  {
    category: "gracefulWomen",
    serviceName: "वदनभ्यङ्ग Face Unguent",
    description: "Face massage with oil.",
    benefits: "Relieves tension, promotes healthy skin.",
    price: 2500,
  },
  {
    category: "gracefulWomen",
    serviceName: "वदनवर्ण्य Face Powder",
    description: "Face powder application.",
    benefits: "Enhances complexion, mattifies oily skin.",
    price: 2500,
  },

  {
    category: "gracefulWomen",
    serviceName: "Body Skin Cleansing",
    description: "Full body cleansing.",
    benefits: "Removes impurities, softens skin.",
    price: 3000,
  },
  {
    category: "gracefulWomen",
    serviceName: "Body Skin Scrubbing",
    description: "Body scrubbing.",
    benefits: "Exfoliates dead cells, improves texture.",
    price: 3000,
  },
  {
    category: "gracefulWomen",
    serviceName: "Body Skin Steaming",
    description: "Body steaming.",
    benefits: "Opens pores, detoxifies, relaxes muscles.",
    price: 3000,
  },
  {
    category: "gracefulWomen",
    serviceName: "Body Skin Pack",
    description: "Body pack application.",
    benefits: "Rejuvenates skin, hydrates and smooths.",
    price: 3000,
  },
  {
    category: "gracefulWomen",
    serviceName: "Body Skin Unguent",
    description: "Oil massage for body.",
    benefits: "Nourishes and strengthens skin and muscles.",
    price: 3000,
  },
  {
    category: "gracefulWomen",
    serviceName: "Body Skin Unguent Bath",
    description: "Oil bath therapy.",
    benefits: "Deep hydration, relaxation, full body nourishment.",
    price: 3000,
  },
  {
    category: "gracefulWomen",
    serviceName: "Body Skin Powder",
    description: "Body powder application.",
    benefits: "Absorbs excess oil, softens skin.",
    price: 3000,
  },
  // Graceful Men
  {
    category: "gracefulMen",
    serviceName: "वदनधावन Face Cleansing",
    description: "Facial cleansing.",
    benefits: "Removes dirt and impurities, refreshes skin.",
    price: 2500,
  },
  {
    category: "gracefulMen",
    serviceName: "वदनअवघर्षण Face Scrubbing",
    description: "Facial exfoliation.",
    benefits: "Deep cleans pores, removes dead skin.",
    price: 2500,
  },
  {
    category: "gracefulMen",
    serviceName: "वदनबाष्पक Face Steaming",
    description: "Facial steaming.",
    benefits: "Opens pores, improves circulation, softens skin.",
    price: 2500,
  },
  {
    category: "gracefulMen",
    serviceName: "वदनबन्ध Face Pack",
    description: "Facial pack application.",
    benefits: "Nourishes skin, improves tone, hydrates.",
    price: 2500,
  },
  {
    category: "gracefulMen",
    serviceName: "वदनभ्यङ्ग Face Unguent",
    description: "Face massage with oil.",
    benefits: "Relieves tension, promotes healthy skin.",
    price: 2500,
  },
  {
    category: "gracefulMen",
    serviceName: "वदनवर्ण्य Face Powder",
    description: "Face powder application.",
    benefits: "Enhances complexion, mattifies oily skin.",
    price: 2500,
  },

  {
    category: "gracefulMen",
    serviceName: "कायातनुत्वग्धावन Body Skin Cleansing",
    description: "Full body cleansing.",
    benefits: "Removes impurities, softens skin.",
    price: 3000,
  },
  {
    category: "gracefulMen",
    serviceName: "कायातनुत्वग्वघर्षण Body Skin Scrubbing",
    description: "Body scrubbing.",
    benefits: "Exfoliates dead cells, improves texture.",
    price: 3000,
  },
  {
    category: "gracefulMen",
    serviceName: "कायातनुत्वग्बाष्पक Body Skin Steaming",
    description: "Body steaming.",
    benefits: "Opens pores, detoxifies, relaxes muscles.",
    price: 3000,
  },
  {
    category: "gracefulMen",
    serviceName: "कायातनुत्वग्बन्ध Body Skin Pack",
    description: "Body pack application.",
    benefits: "Rejuvenates skin, hydrates and smooths.",
    price: 3000,
  },
  {
    category: "gracefulMen",
    serviceName: "कायातनुत्वग्भ्यङ्ग Body Skin Unguent",
    description: "Oil massage for body.",
    benefits: "Nourishes and strengthens skin and muscles.",
    price: 3000,
  },
  {
    category: "gracefulMen",
    serviceName: "कायातनुत्वग्भ्यङ्गस्नान Body Skin Unguent Bath",
    description: "Oil bath therapy.",
    benefits: "Deep hydration, relaxation, full body nourishment.",
    price: 3000,
  },
  {
    category: "gracefulMen",
    serviceName: "कायातनुत्वग्वर्ण्य Body Skin Powder",
    description: "Body powder application.",
    benefits: "Absorbs excess oil, softens skin.",
    price: 3000,
  },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [displayCount, setDisplayCount] = useState(8);
  const cardsRef = useRef([]);

  const categoryLabels = {
    All: "All Services",
    beautifulHair: "Beautiful Hair",
    gracefulWomen: "Graceful Women",
    gracefulMen: "Graceful Men",
  };

  useEffect(() => {
    setDisplayCount(8);
  }, [selectedCategory]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        setTimeout(() => {
          card.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 80);
      }
    });
  }, [displayCount]);

  const filteredServices = beautyData.filter((service) => {
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    return matchesCategory;
  });

  const displayedServices = filteredServices.slice(0, displayCount);
  const hasMore = displayCount < filteredServices.length;

  const loadMore = () => {
    setDisplayCount((prev) => prev + 8);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "beautifulHair":
        return "bg-gradient-to-r from-amber-100 to-lime-100 text-amber-800";
      case "gracefulWomen":
        return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800";
      case "gracefulMen":
        return "bg-gradient-to-r from-lime-100 to-green-100 text-lime-900";
      default:
        return "bg-lime-100 text-green-700";
    }
  };

  console.log("beautyData", beautyData?.length);

  return (
    <div className="min-h-screen">
      <header className="relative   text-white  px-4  overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
            <Leaf className="w-12 h-12 text-ayuMid animate-pulse " />
            <h1
              className="text-4xl font-bold tracking-wide text-center 
    bg-gradient-to-r from-green-600 via-lime-600 to-green-700 
    bg-clip-text text-transparent"
            >
              Ayurvedic Beauty Spa
            </h1>

            <Sparkles className="w-12 h-12 text-ayuMid animate-pulse" />
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="mb-4">
          <div>
            <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Select Category
            </h3>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
              {Object.entries(categoryLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm sm:text-base ${
                    selectedCategory === key
                      ? "bg-gradient-to-r from-green-600 to-lime-600 text-white shadow-lg scale-105"
                      : "bg-gradient-to-r from-lime-50 to-green-50 text-green-700 hover:bg-lime-100 border border-lime-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 text-end">
          <p className="text-green-800 font-semibold text-lg">
            Showing {displayedServices.length} of {filteredServices.length}{" "}
            services
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-lime-300 group"
            >
              <div className="bg-gradient-to-br from-green-500 via-lime-500 to-green-600 h-2"></div>
              <div className="p-3">
                <div className="flex justify-end">
                  <span
                    className={`inline-block text-end px-3 py-1 rounded-full text-xs font-semibold mb-1 ${getCategoryColor(
                      service.category
                    )}`}
                  >
                    {categoryLabels[service.category]}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <h3 className="text-base  font-bold text-green-800 leading-tight flex-1 pr-2 group-hover:text-green-600 transition-colors">
                    {service.serviceName}
                  </h3>
                </div>

                <p className="text-gray-400 mb-2 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="bg-gradient-to-r from-lime-50 to-green-50 rounded-2xl p-2 mb-3 border border-lime-200">
                  <p className="text-xs  text-green-700 leading-relaxed">
                    {service.benefits}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-700 to-lime-700 bg-clip-text text-transparent">
                    ₹{service.price}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedService(service);
                      setOpenModal(true);
                    }}
                    className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-lime-600 text-white px-3 py-2 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold text-sm whitespace-nowrap"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              className="bg-gradient-to-r from-green-600 via-lime-600 to-green-600 text-white px-5 py-2 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-bold text-sm flex items-center gap-3 mx-auto"
            >
              Load More
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        )}

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <Sparkles className="w-20 h-20 text-green-400 mx-auto mb-4 opacity-50" />
            <p className="text-3xl text-green-600 font-bold mb-2">
              No services found
            </p>
            <p className="text-gray-500 text-lg">
              Try adjusting your search or filters
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
    </div>
  );
};

export default App;
