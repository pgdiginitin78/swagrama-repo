import React, { useEffect, useRef, useState } from "react";
import CommonButton from "../../../common/button/CommonButton";
import OPDBookingModal from "../opdClinic/OPDBookingModal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// ================== DATA USING ARRAY OF OBJECTS ==================
export const swaaturalayData = [
  {
    type: "paragraph",
    text: `At स्वग्राम Community, the Swaaturalay IPD Hospital (स्वातुरालय) represents our commitment to universal wellness through personalized, integrative, and nature-aligned healing. This is not a place for passive treatment, but a sanctuary where the root cause of illness is addressed, and the body, mind, and soul are restored through traditional Indian sciences.`,
  },

  {
    type: "heading",
    text: "🌿 The Essence of Swaaturalay IPD Hospital",
  },

  {
    type: "quote",
    slok: "स्वस्थस्य स्वास्थ्य रक्षणम्। आतुरस्य विकार प्रशमनम्।",
    meaning:
      "(Preserving health in the healthy. Curing disease in the ailing.)",
  },

  {
    type: "listHeading",
    text: "Integrated Healing Includes:",
  },

  {
    type: "list",
    items: [
      "Ayurveda: Pulse-based diagnosis (अष्टविधनाडीपरीक्षण), herbal & cow-origin medications, Panchakarma, and personalized detox.",
      "Yoga Therapy: For mental purification, emotional clarity, and spiritual awakening.",
      "Homoeopathy: Align inner nature with harmony — 'Your Nature, Your Future'.",
      "Nature Therapy: Soil, water, sun, wind — elemental healing practices.",
      "Balanced Nutrition: Farm-fresh, Satvik meals for internal nourishment.",
    ],
  },

  {
    type: "heading",
    text: "🌱 Why Ayurvedic Residential Treatment?",
  },

  {
    type: "paragraph",
    text: `Modern health issues come from toxins, suppressed symptoms, stress & lifestyle imbalance. At Swaaturalay, we go beyond symptomatic relief to restore total wellness through trusted Ayurvedic Vaidya-guided healing in nature.`,
  },

  {
    type: "heading",
    text: "💡 We Treat Cycles, Not Just Symptoms",
  },

  {
    type: "paragraph",
    text: `From acidity to cancer, addiction to anxiety, PCOD to infertility — the core problem lies in accumulation-suppression-recurrence cycles. We break this cycle through holistic detox & self-healing rituals.`,
  },

  {
    type: "heading",
    text: "🌿 Our Healing Philosophy",
  },

  {
    type: "list",
    items: [
      "Internal Herbal Support – Ayurvedic medicines before & after treatment",
      "Wholesome Satvik Diet – Based on Prakriti & healing requirement",
      "Environment Healing – Nature-based recovery experience",
      "Lifestyle Guidance – Work discipline + emotional calm + spiritual stability",
    ],
  },

  {
    type: "heading",
    text: "🏞️ A Healing Ecosystem",
  },

  {
    type: "list",
    items: [
      "OPD + IPD Healing Facilities",
      "365 Ayurvedic Routines & Detox Activities",
      "स्वगुरुकुल Commune – Yoga, Ayurveda, self-care learning",
      "Integrated Modern Emergency Support when required",
    ],
  },

  {
    type: "heading",
    text: "🧠 A Wake-Up Call for Wellness",
  },

  {
    type: "list",
    items: [
      "Repetitive symptoms without diagnosis",
      "Dependence on drugs without healing",
      "Fatigue, hormonal imbalance, anxiety",
      "Lifestyle disorders & digestion issues",
    ],
  },

  {
    type: "paragraphBold",
    text: "👉 If yes — It's time to experience Root-Cause Recovery at Swargram.",
  },
];

function IPDHospital() {
  const [openModal, setOpenModal] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-item", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div>
      <h1 className="text-ayuTulsi font-semibold text-xl">
        स्वातुरालय IPD Hospital
      </h1>
      <section ref={sectionRef} className="space-y-4 text-sm leading-6 mt-3 ">
        {swaaturalayData.map((block, index) => (
          <div key={index} className="fade-item">
            {block.type === "title" && (
              <h2 className="text-xl font-semibold text-ayuTulsi">
                {block.text}
              </h2>
            )}

            {block.type === "heading" && (
              <h3 className="text-lg font-semibold text-ayuTulsi">
                {block.text}
              </h3>
            )}

            {block.type === "paragraph" && <p className="">{block.text}</p>}

            {block.type === "paragraphBold" && (
              <p className="font-medium text-ayuTulsi">{block.text}</p>
            )}

            {block.type === "quote" && (
              <div className="text-center bg-red-100 py-2 rounded-xl border-l-4 border-ayuBrown">
                <p className="font-semibold italic text-base">"{block.slok}"</p>
                <span className="block text-xs">{block.meaning}</span>
              </div>
            )}

            {block.type === "listHeading" && (
              <p className="font-medium mt-2 text-ayuTulsi">{block.text}</p>
            )}

            {block.type === "list" && (
              <ul className="list-disc ml-6 space-y-1">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <div className="flex justify-end my-2">
        <CommonButton
          type="button"
          label={"Book Appointment"}
          className="px-3 py-1 rounded-lg border border-ayuDark text-ayuDark hover:bg-ayuDark hover:text-white"
          onClick={() => setOpenModal(true)}
        />
      </div>
      {openModal && (
        <OPDBookingModal
          open={openModal}
          handleClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
}

export default IPDHospital;
