import {
  Air,
  ArrowForward,
  AutoAwesome,
  Bathtub,
  Bloodtype,
  CheckCircle,
  Favorite,
  Female,
  FilterVintage,
  Healing,
  HealthAndSafety,
  LocalFireDepartment,
  LocalFlorist,
  LocalPharmacy,
  MedicationLiquid,
  Opacity,
  Psychology,
  Science,
  Spa,
  Star,
  WaterDrop,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Modal } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { MdEco } from "react-icons/md";
import CancelButtonModal from "../../../common/button/CancelButtonModal";
import CommonButton from "../../../common/button/CommonButton";
import OPDBookingModal from "../opdClinic/OPDBookingModal";
gsap.registerPlugin(ScrollTrigger);

const getServiceIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes("abhyang") || n.includes("massage") || n.includes("उद्वर्तन"))
    return Spa;
  if (
    n.includes("steam") ||
    n.includes("स्वेदन") ||
    n.includes("बाष्प") ||
    n.includes("vapor")
  )
    return Opacity;
  if (n.includes("pizhichil") || n.includes("सेक") || n.includes("pouring"))
    return WaterDrop;
  if (n.includes("basti") || n.includes("enema")) return MedicationLiquid;
  if (n.includes("agnikarma")) return LocalFireDepartment;
  if (n.includes("blood") || n.includes("रक्त") || n.includes("bloodletting"))
    return Bloodtype;
  if (n.includes("female") || n.includes("स्त्री")) return Female;
  if (n.includes("detox") || n.includes("कर्म")) return LocalPharmacy;
  if (n.includes("wound") || n.includes("व्रण")) return Healing;
  if (n.includes("incense") || n.includes("धूपन")) return Air;
  if (n.includes("bath") || n.includes("अवगाह")) return Bathtub;
  if (n.includes("cupping")) return Science;
  if (n.includes("leech") || n.includes("जलौका")) return Psychology;
  return HealthAndSafety;
};

const categories = [
  { name: "All Services", icon: AutoAwesome },
  {
    name: "Massage",
    icon: Spa,
    keywords: ["massage", "abhyang", "मर्दन", "उद्वर्तन"],
  },
  {
    name: "Steam Therapy",
    icon: Opacity,
    keywords: ["steam", "स्वेदन", "बाष्प", "vapor"],
  },
  {
    name: "Detox",
    icon: LocalPharmacy,
    keywords: ["detox", "कर्म", "enema", "बस्ति"],
  },
  {
    name: "Agni Karma",
    icon: LocalFireDepartment,
    keywords: ["agnikarma", "अग्निकर्म"],
  },
  {
    name: "Blood Therapy",
    icon: Bloodtype,
    keywords: ["blood", "रक्त", "leech", "cupping"],
  },
  { name: "Wound Care", icon: Healing, keywords: ["wound", "व्रण"] },
  { name: "Women's Health", icon: Female, keywords: ["female", "स्त्री"] },
];

const priceRanges = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹1000", min: 500, max: 1000 },
  { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
  { label: "Above ₹2000", min: 2000, max: Infinity },
];

function ServiceModal({ open, onClose, item }) {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const hasSubServices = item?.subServices && item.subServices.length > 0;
  const benefitText = item?.benefits || item?.benefit || item?.benift || "";
  const descriptionText = Array.isArray(item?.description)
    ? item.description[0]
    : item?.description;
  const Icon = item?.icon || getServiceIcon(item?.serviceName || "");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      if (backdropRef.current && modalRef.current) {
        gsap.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        );
        gsap.fromTo(
          modalRef.current,
          { scale: 0.9, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.3)" }
        );
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
          ref={backdropRef}
          className="w-[70%] max-h-[90%] overflow-y-auto rounded-xl"
        >
          <div>
            <CancelButtonModal onClick={onClose} />

            <div className="flex space-x-2 items-center bg-lime-200/70 rounded-xl px-3 py-2 mb-2 shadow-inner">
              <div className=" ">
                <h2 className="text-xl font-semibold text-green-900 leading-tight">
                  Service Name :
                </h2>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-green-900 leading-tight">
                  {item?.serviceName}
                </h2>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 mb-2 border border-green-200/70 shadow-inner">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center">
                  <MdEco className="text-white" style={{ fontSize: 18 }} />
                </div>
                <h3 className="text-lg font-bold text-green-900">
                  Description
                </h3>
              </div>
              <p className="text-gray-800 leading-relaxed">{descriptionText}</p>
            </div>

            {hasSubServices && (
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center">
                    <FilterVintage
                      className="text-white"
                      style={{ fontSize: 18 }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-green-900">
                    Specialized Treatments
                  </h3>
                </div>
                <div className="grid gap-4">
                  {item.subServices.map((subService, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-lime-50 via-white to-green-50 rounded-2xl p-5 border-l-4 border-lime-500 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                        <LocalFlorist
                          className="text-lime-600"
                          style={{ fontSize: 20 }}
                        />
                        {subService}
                      </h4>
                      {Array.isArray(item.description) &&
                        item.description[idx] && (
                          <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                            {item.description[idx]}
                          </p>
                        )}
                      {Array.isArray(item.benefits) && item.benefits[idx] && (
                        <div className="bg-green-100/70 rounded-xl p-3">
                          <p className="text-green-900 text-sm font-medium flex items-start gap-2">
                            <CheckCircle
                              className="text-green-600 flex-shrink-0 mt-0.5"
                              style={{ fontSize: 18 }}
                            />
                            <span>{item.benefits[idx]}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {benefitText && !hasSubServices && (
              <div className="bg-gradient-to-br from-lime-100/80 via-white to-green-100/80 rounded-2xl p-3 mb-2 border-l-4 border-green-600 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center">
                    <Favorite className="text-white" style={{ fontSize: 18 }} />
                  </div>
                  <h3 className="text-lg font-bold text-green-900">Benefits</h3>
                </div>
                <p className="text-green-900 leading-relaxed">{benefitText}</p>
              </div>
            )}

            <div className="flex justify-end mt-6">
              <CommonButton
                type="button"
                label="Book Appointment"
                className=" font-bold rounded-xl text-white bg-gradient-to-r from-green-600 via-lime-600 to-green-700 hover:from-green-700 hover:via-lime-700 hover:to-green-800 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                onClick={() => {
                  setOpenModal(true);
                  setSelectedService(item);
                }}
              />
            </div>
          </div>
        </Box>
      </Modal>

      {openModal && (
        <OPDBookingModal
          open={openModal}
          handleClose={() => setOpenModal(false)}
          selectedService={selectedService}
        />
      )}
    </>
  );
}

function ServiceCard({ item, index }) {
  const [modalOpen, setModalOpen] = useState(false);
  const cardRef = useRef(null);
  const Icon = item.icon || getServiceIcon(item.serviceName);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { opacity: 0, y: 50, rotateX: -10 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.7,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=80",
          toggleActions: "play none none reverse",
        },
      }
    );

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;

      gsap.to(card, {
        rotateX: -rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [index]);

  return (
    <>
      <div ref={cardRef} style={{ perspective: "1000px" }} className="h-full">
        <div className="relative bg-gradient-to-br from-amber-50/90 via-white to-lime-50/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-300/40 hover:border-lime-400/60 h-full flex flex-col group overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-lime-400/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-400/30 rounded-full blur-3xl"></div>
          </div>

          {/* <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br from-lime-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Star className="text-white" style={{ fontSize: 16 }} />
          </div> */}

          <div className="relative flex items-start gap-3 mb-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-lime-400 via-green-500 to-green-600 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
              <div className="absolute inset-0 rounded-xl bg-white/30 group-hover:animate-pulse"></div>
              {Icon && (
                <Icon
                  className="relative text-white drop-shadow-lg"
                  style={{ fontSize: 26 }}
                />
              )}
            </div>
          </div>

          <h3 className="text-base font-bold py-1 text-green-900  group-hover:text-lime-700 transition-colors">
            {item.serviceName}
          </h3>

          <p className="relative text-gray-700 text-sm line-clamp-3 my-2 flex-grow leading-relaxed">
            {Array.isArray(item.description)
              ? item.description[0]
              : item.description}
          </p>

          <div className="relative flex items-center justify-end gap-3 mt-auto pt-3 border-t border-green-200/50 whitespace-nowrap">
            {/* <div className="flex items-center gap-2 bg-gradient-to-r from-lime-500 to-green-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg group-hover:scale-105 transition-transform">
              <Star style={{ fontSize: 16 }} />
              <span>₹ {item.price}</span>
            </div> */}
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 text-green-800 bg-white border-2 border-green-500 rounded-xl font-bold hover:bg-gradient-to-r hover:from-lime-50 hover:to-green-50 shadow-lg transition-all transform hover:scale-105 text-sm"
            >
              View
              <ArrowForward style={{ fontSize: 16 }} />
            </button>
          </div>
        </div>
      </div>
      <ServiceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        item={item}
      />
    </>
  );
}

export default function DetoxHouse() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const headerRef = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" }
      );
    }
    if (filterRef.current) {
      gsap.fromTo(
        filterRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "back.out(1.2)",
        }
      );
    }
  }, []);

  const services = [
    {
      serviceName: "सर्वांग अभ्यङ्ग Body Unguent",
      description:
        "Gentle, rhythmic oil massage over the whole body; head and face are treated separately.",
      benefits:
        "Improves circulation, nourishes skin, relaxes muscles, balances Doshas, and enhances overall body vitality.",
      price: 1500,
      icon: getServiceIcon("abhyang"),
    },
    {
      serviceName: "नित्याभ्यङ्ग Daily Unguent",
      description: "Daily oil application for regular nourishment.",
      benefits:
        "Maintains skin suppleness, prevents dryness, and supports joint and muscular health.",
      price: 1200,
      icon: getServiceIcon("abhyang"),
    },
    {
      serviceName: "कांस्यथालिपादाभ्यङ्ग Bronze Plate Foot Massage",
      description: "Foot massage using bronze plate technique.",
      benefits:
        "Improves foot circulation, relieves fatigue, strengthens lower limbs, and stimulates reflex points.",
      price: 200,
      icon: getServiceIcon("abhyang"),
    },
    {
      serviceName: "सर्वांगमर्दन Body Massage",
      description: "Deep tissue full-body massage.",
      benefits:
        "Reduces muscular tension, improves circulation, detoxifies tissues, and enhances flexibility.",
      price: 1500,
      icon: getServiceIcon("massage"),
    },
    {
      serviceName: "सर्वांग उद्वर्तन Body Powder Massage",
      description: "Massage using therapeutic powders.",
      benefits:
        "Exfoliates skin, improves blood circulation, detoxifies, and revitalizes the body.",
      price: 1500,
      icon: getServiceIcon("उद्वर्तन"),
    },
    {
      serviceName: "सर्वाांगउत्सादन Body Oil Powder Massage",
      description: "Combination of oil and powder massage.",
      benefits:
        "Deeply nourishes skin, relaxes muscles, detoxifies, and restores vitality.",
      price: 1500,
      icon: getServiceIcon("massage"),
    },
    {
      serviceName: "सर्वाांगलेपन Body Anointing g (चूर्ण / अन्न / औषध)",
      description:
        "Application of powders, food-based pastes, or medicinal pastes on body.",
      benefits:
        "Nourishes skin, detoxifies, enhances healing, and improves skin texture.",
      price: 1500,
      icon: getServiceIcon("lepan"),
    },
    {
      serviceName:
        "सर्वांगसंकरपिंडस्वेद Mixed Fomentation - स्निग्ध - रुक्षपिंडस्वेद",
      description:
        "Combination of oil (Snigdha) and dry (Ruksha) bolus fomentation.",
      benefits:
        "Reduces muscle stiffness, relieves joint pain, and detoxifies tissues.",
      price: 1500,
      icon: getServiceIcon("स्वेदन"),
    },
    {
      serviceName: "सर्वांगसेकः पिझिच्चिल - कायसेक - मुक्किप्पिषिच्चिल",
      description: "Localized fluid and paste fomentation.",
      benift:
        "Relieves inflammation, enhances healing, and stimulates circulation.",
      price: 1500,
      icon: getServiceIcon("pizhichil"),
    },
    {
      serviceName: "सर्वांगपरिषेकस्वेदन",
      description: "Continuous pouring of warm herbal decoction over the body.",
      benefit:
        "Deep relaxation, pain relief, detoxification, and skin nourishment.",
      price: 1500,
      icon: getServiceIcon("स्वेदन"),
    },
    {
      serviceName: "सर्वांग अवगाहस्वेदक / Bathing Sweater Therapy",
      description: "Immersion or herbal bath therapy.",
      benefit:
        "Detoxifies, relieves fatigue, hydrates skin, and relaxes muscles.",
      price: 1500,
      icon: getServiceIcon("bath"),
    },
    {
      serviceName: "सर्वांगबाष्पस्वेदन / Body Steam Perspiration",
      description: "Full-body steam therapy using herbal decoctions.",
      benefit:
        "Opens pores, detoxifies, relaxes muscles, improves circulation, and eliminates impurities.",
      price: 1000,
      icon: getServiceIcon("steam"),
    },
    {
      serviceName: "एकांगनाडीबाष्पस्वेदन",
      description: "Steam therapy targeting body channels (Nadis)",
      benefits:
        "Enhances energy flow, detoxifies, soothes nerve pathways, and improves circulation.",
      price: 1000,
      icon: getServiceIcon("steam"),
    },
    {
      serviceName: "जेन्ताककुटिस्वेद",
      description: "Specific herbal steam therapy using traditional methods.",
      benefits:
        "Detoxifies, relieves joint and muscle stiffness, rejuvenates tissues.",
      price: 1500,
      icon: getServiceIcon("steam"),
    },
    {
      serviceName: "वनोषधिबाष्पपानपोट्टली / HerbalVaporinhalation",
      description: "Herbal vapor inhalation using poultices.",
      benefit:
        "Clears sinuses, supports respiratory health, and reduces congestion.",
      price: 200,
      icon: getServiceIcon("steam"),
    },
    {
      serviceName: "अमृतबाष्पपान / NectorVaporinhalation",
      description: "Light herbal steam inhalation.",
      benefit:
        "Refreshes mind, relieves respiratory issues, and energizes body.",
      price: 150,
      icon: getServiceIcon("steam"),
    },
    {
      serviceName: "धूपन / Incensing",
      description: "Incense therapy using medicinal herbs.",
      benefit:
        "Purifies air, relaxes mind, balances Doshas, and elevates mood.",
      price: 250,
      icon: getServiceIcon("incense"),
    },
    {
      serviceName: "सद्यअनुलोमन / InstantPurging",
      description:
        "Single-day mild purgation using small doses of medicine to relieve constipation or minor bowel obstruction.",
      benefit:
        "Quick relief from constipation, clears bowel obstruction, balances Pitta and Vata, improves elimination, and restores digestive harmony.",
      price: 1000,
      icon: getServiceIcon("detox"),
    },
    {
      serviceName: "सद्यमात्राबस्ति / Instant Wealth Enema",
      description:
        "Single-day mild enema for constipation relief and light detox.",
      benefit: "Gives instant bowel clearance and comfort.",
      price: 1500,
      icon: getServiceIcon("basti"),
    },
    {
      serviceName: "सद्यमाधुतैलीकबस्ति / Instant Honey Oil Enema",
      description: "One-day honey-oil enema for mild detox and nourishment.",
      benefit: "Quick cleansing and lubrication of colon.",
      price: 1700,
      icon: getServiceIcon("basti"),
    },
    {
      serviceName: "मात्राबस्ति / Wealth Enema",
      description:
        "A mild daily enema with medicated oil or ghee for nourishment and Vata balance.",
      benefit:
        "Improves digestion, relieves constipation, and lubricates joints.",
      price: 1300,
      icon: getServiceIcon("basti"),
    },
    {
      serviceName: "माधुतैलीकबस्ति / Honey Oil Enema",
      description: "Enema prepared with honey, salt, and medicated oil.",
      benefit:
        "Balances Vata-Pitta, removes dryness, and provides strength to the colon.",
      price: 1500,
      icon: getServiceIcon("basti"),
    },
    {
      serviceName: "वमनकर्म EmeticDetox",
      description:
        "Therapeutic vomiting under physician supervision using ghee and medicine. (10-day program includes preparatory therapies: digestive medicines, internal oleation, 3 sessions of external oleation, steam fomentation; main therapy; post-therapy & extra hospital stay/meal charges)",
      benefit:
        "Eliminates excess Kapha, cleanses stomach, enhances digestion, strengthens metabolism, and prepares body for detoxification.",
      price: 13000,
      icon: getServiceIcon("detox"),
    },
    {
      serviceName: "विरेचनकर्म LaxativeDetox",
      description:
        "Therapeutic purgation under physician supervision using ghee and medicine. (10-day program includes preparatory therapies: digestive medicines, internal oleation, 3 sessions of external oleation, steam fomentation; main therapy; post-therapy & extra hospital stay/meal charges)",
      benefit:
        "Cleanses intestines, removes Pitta-related toxins, improves bowel function, balances digestive fire, and detoxifies the body.",
      price: 13000,
      icon: getServiceIcon("detox"),
    },
    {
      serviceName: "बस्तिकर्म Enema Detox",
      description:
        "Under physician supervision, a sequence of medicated enemas is administered for several days as part of a 7-day detox program. Includes Deepan-Pachan (digestive preparation), Snehana (oleation), Swedana (steam therapy), followed by main Basti course and post-care phase. (Additional inpatients stay and food charges apply.)",
      benefit:
        "Deeply cleanses the colon, pacifies Vata Dosha, improves digestion, strengthens the lower back, and nourishes the body tissues.",
      price: 14000,
      icon: getServiceIcon("basti"),
    },
    {
      serviceName: "स्त्रीउत्तरबस्ति Female Genital Enema Detox",
      description:
        "Specialized Ayurvedic detox procedure for female reproductive system. Includes internal oleation, external oil massage, medicated enema, and localized therapies as per physician's guidance. (Package with full procedure and follow-up; additional stay and food charges apply)",
      benefit:
        "Enhances reproductive health, improves fertility, balances hormones, supports uterine health, and detoxifies the genito-urinary system.",
      price: 14000,
      icon: getServiceIcon("female"),
    },
    {
      serviceName: "सिरावेध Systemic Bloodletting",
      description:
        "Whole-body bloodletting therapy under physician supervision to remove impure blood and balance Doshas. (Package includes preparatory therapies, main procedure, and post-care; additional stay and food charges apply)",
      benefit:
        "Detoxifies blood, improves circulation, balances Doshas, reduces inflammation, and promotes overall vitality.",
      price: 12000,
      icon: getServiceIcon("blood"),
    },
    {
      serviceName: "स्त्रीइन्द्रियरक्षा Female Genital Care",
      subServices: [
        "Female Genital Cleansing",
        "Female Genital Fumigation",
        "Female Genital Oil Application",
        "Female Genital Filling Therapy",
      ],
      description: [
        "External cleansing of female genital area using herbal decoctions and medicated oils.",
        "Fumigation therapy with herbal vapors and medicated ghee for female genital area.",
        "Application of warm medicated oil-soaked cotton swab over the genital region.",
        "Gentle instillation of herbal oils or medicated ghee under supervision.",
      ],
      benefits: [
        "Maintains hygiene, prevents infections, promotes local circulation, and supports overall reproductive wellness.",
        "Reduces infection risk, enhances healing, balances Doshas, and promotes rejuvenation.",
        "Nourishes tissues, strengthens local organs, and supports fertility.",
        "Lubricates channels, strengthens reproductive tissues, and balances local energy.",
      ],
      price: 1900,
    },
    {
      serviceName: "सुवर्णाग्निकर्म Suvarna Agni Karma",
      description: "Thermal therapy using gold for localized application.",
      benefits:
        "Promotes tissue healing, relieves chronic pain, enhances energy flow, and reduces inflammation.",
      price: "250/Per",
      icon: getServiceIcon("agnikarma"),
    },
    {
      serviceName: "रौप्याग्निकर्म RaupyaAgniKarma",
      description: "Thermal therapy using silver.",
      benefits:
        "Anti-inflammatory, improves circulation, detoxifies locally, and supports wound healing.",
      price: "200/Per",
      icon: getServiceIcon("agnikarma"),
    },
    {
      serviceName: "ताम्राग्निकर्म TamraAgniKarma",
      description: "Thermal therapy using copper.",
      benefits:
        "Relieves joint pain, improves circulation, and detoxifies locally.",
      price: "200/Per",
      icon: getServiceIcon("agnikarma"),
    },
    {
      serviceName: "लोहाग्निकर्म LohaAgniKarma",
      description: "Thermal therapy using iron.",
      benefits:
        "Supports bone and muscle strength, relieves pain, and improves tissue metabolism.",
      price: "200/Per",
      icon: getServiceIcon("agnikarma"),
    },
    {
      serviceName: "मृत्तिकाग्निकर्म Mrittika Agni Karma",
      description: "Thermal therapy using clay.",
      benefits:
        "Relieves local inflammation, reduces stiffness, and detoxifies tissues.",
      price: "200/Per",
      icon: getServiceIcon("agnikarma"),
    },

    {
      serviceName: "सिरावेध स्थानिकरक्तमोक्षण Local Bloodletting",
      description:
        "Targeted bloodletting on specific body areas using traditional methods.",
      benefits:
        "Reduces local inflammation, relieves pain, improves circulation, and detoxifies specific regions.",
      price: "1000",
      icon: getServiceIcon("bloodlet"),
    },
    {
      serviceName: "प्रच्छान Pracchan (Scarification)",
      description: "Minor skin pricking to release stagnant blood and toxins.",
      benefits:
        "Relieves localized congestion, improves blood flow, and promotes healing.",
      price: "1000",
      icon: getServiceIcon("bloodlet"),
    },
    {
      serviceName: "शृंगावचारण Shringavacharan (Horn Therapy)",
      description:
        "Application of specialized horn instrument for controlled bloodletting.",
      benefits:
        "Enhances local detox, reduces inflammation, and stimulates tissue healing.",
      price: "1000",
      icon: getServiceIcon("bloodlet"),
    },
    {
      serviceName: "अलाबूविधी Alabu Vidhi (Cupping with Flask)",
      description:
        "Traditional flask therapy for bloodletting using vacuum suction.",
      benefits:
        "Stimulates circulation, reduces stagnation, and helps in musculoskeletal and skin issues.",
      price: "1000",
      icon: getServiceIcon("cupping"),
    },
    {
      serviceName: "जलौका Jalauka (Leech Therapy)",
      description: "Application of medicinal leeches to affected areas.",
      benefits:
        "Removes impure blood, reduces swelling, alleviates pain, and improves circulation.",
      price: "250/Per",
      icon: getServiceIcon("blood"),
    },
    {
      serviceName: "Cupping Therapy",
      description:
        "Application of glass or bamboo cups with suction on affected areas.",
      benefits:
        "Relieves muscle tension, improves blood flow, detoxifies, and promotes relaxation.",
      price: "250/Per",
      icon: getServiceIcon("cupping"),
    },
    {
      serviceName: "विद्ध / वेधन कर्म Piercing Therapy",
      description: "Tiny puncture to remove impure blood.",
      benefits: "Pain relief & healing improvement.",
      price: "250/Per",
      icon: getServiceIcon("blood"),
    },

    {
      serviceName: "विद्धाग्निकर्म Viddha Agni Karma",
      description: "Puncture-based thermal therapy.",
      benefits:
        "Effective for abscesses, localized swelling, and chronic pain.",
      price: "200/Per",
      icon: getServiceIcon("agnikarma"),
    },
    {
      serviceName: "पाष्णिग्निकर्म Parshni Agni Karma (Heel)",
      description: "Heel-focused thermal therapy.",
      benefits: "Relieves heel pain, plantar fasciitis, and local stiffness.",
      price: "200/Per",
      icon: getServiceIcon("agnikarma"),
    },
    {
      serviceName: "कदराग्निकर्म Kadara Agni Karma (Corn)",
      description: "Thermal therapy for corns.",
      benefits:
        "Softens and removes corns, relieves pain, and prevents recurrence.",
      price: "200/Per",
      icon: getServiceIcon("agnikarma"),
    },
    {
      serviceName: "एकांगव्रणकर्म Single Wound Treatment",
      description: "Localized wound care for a single wound.",
      benefits: "Promotes healing, prevents infection, aids tissue repair.",
      price: "250/Per",
      icon: getServiceIcon("wound"),
    },
    {
      serviceName: "सद्योव्रणकर्म Immediate Wound Treatment",
      description: "Immediate care for fresh wounds.",
      benefits: "Stops bleeding, prevents infection, supports fast healing.",
      price: "250/Per",
      icon: getServiceIcon("wound"),
    },
    {
      serviceName: "दुष्टव्रणकर्म Chronic Wound Treatment",
      description: "Care for chronic, non-healing wounds.",
      benefits: "Helps debridement, promotes healing of difficult wounds.",
      price: "1500/Per",
      icon: getServiceIcon("wound"),
    },
  ];

  const filteredServices = services.filter((service) => {
    if (selectedCategory !== "All Services") {
      const category = categories.find((cat) => cat.name === selectedCategory);
      if (category && category.keywords) {
        const matchesCategory = category.keywords.some((keyword) =>
          service.serviceName.toLowerCase().includes(keyword)
        );
        if (!matchesCategory) return false;
      }
    }

    return true;
  });

  const visibleServices = filteredServices.slice(0, visibleCount);
  const hasMore = visibleCount < filteredServices.length;

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 8, filteredServices.length));
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen px-6 py-5 relative">
      <div
        ref={headerRef}
        className="relative z-10 max-w-7xl mx-auto mb-5 text-center"
      >
        <h1 className="text-3xl  font-black mb-4 bg-gradient-to-r from-green-900 via-lime-700 to-green-800 bg-clip-text text-transparent leading-tight">
          Panchakarma & Detox Services
        </h1>

        <p className="text-base text-gray-800 max-w-3xl mx-auto leading-relaxed">
          Experience authentic Ayurvedic therapies for complete detoxification
          and holistic wellness. Each treatment is carefully designed to restore
          balance.
        </p>
      </div>

      <div ref={filterRef} className="relative z-10  mx-auto mb-6">
        <div className="">
          <div className="mb-5">
            <h3 className="text-base font-bold text-green-900 mb-3 flex items-center gap-2">
              <FilterVintage
                className="text-lime-600"
                style={{ fontSize: 20 }}
              />
              Filter by Category
            </h3>
            <div
              className="flex flex-wrap xl:flex-nowrap whitespace-nowrap gap-3 justify-center
            "
            >
              {categories.map((cat) => {
                const CatIcon = cat.icon;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl font-bold text-xs transition-all transform hover:scale-105 ${
                      selectedCategory === cat.name
                        ? "bg-gradient-to-r from-lime-600 via-green-600 to-lime-700 text-white shadow-lg scale-105"
                        : "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-lime-100 hover:to-green-100 shadow-md"
                    }`}
                  >
                    <CatIcon style={{ fontSize: 18 }} />
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
          {/* <div className="mt-4 text-center">
            <span className="inline-block bg-gradient-to-r from-lime-100 to-green-100 px-5 py-2 rounded-full text-green-800 font-bold shadow-md">
              {filteredServices.length} Services Available
            </span>
          </div> */}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {visibleServices.map((item, i) => (
            <ServiceCard key={i} item={item} index={i} />
          ))}
        </div>

        {hasMore && (
          <div className="text-center">
            <button
              onClick={loadMore}
              disabled={isLoading}
              className="px-8 py-4 bg-gradient-to-r from-lime-600 via-green-600 to-lime-700 text-white font-black text-base rounded-2xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all disabled:opacity-50 flex items-center gap-3 mx-auto relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              {isLoading ? (
                <>
                  <div className="relative w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="relative">Loading...</span>
                </>
              ) : (
                <>
                  <span className="relative">Load More.</span>
                  <ExpandMoreIcon
                    className="relative"
                    style={{ fontSize: 24 }}
                  />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-12 pt-6 border-t-2 border-green-200/50 text-center">
        <p className="text-gray-800 font-bold flex items-center justify-center gap-2">
          <MdEco className="text-green-700" style={{ fontSize: 20 }} />
          Authentic Ayurvedic treatments by experienced practitioners
        </p>
      </div>
    </div>
  );
}
