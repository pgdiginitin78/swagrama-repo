import React, { useEffect, useRef, useState } from "react";
import CommonButton from "../../../common/button/CommonButton";
import OPDBookingModal from "../opdClinic/OPDBookingModal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BeautyTherapy() {
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
        स्वसौन्दर्यचिकित्सा Beauty Therapy
      </h1>
      <section ref={sectionRef} className="space-y-4 text-sm leading-6 mt-3 ">
        <p className="fade-item">
          <strong>स्वसौन्दर्यचिकित्सा (Ayurvedic Beauty Therapy)</strong> at
          Swargram goes beyond surface-level treatments to offer holistic skin,
          hair, and inner wellness care based on your unique prakriti
          (constitution). This therapy integrates time-tested Ayurvedic herbs,
          lifestyle practices, and internal purification for long-lasting beauty
          that reflects balance from within.
        </p>

        <p className="fade-item">
          This is not a spa indulgence—it’s purposeful rejuvenation guided by
          expert Ayurveda Vaidyas, customized to your health condition and body
          type.
        </p>

        <h3 className="text-lg font-semibold fade-item text-ayuTulsi">
          🌿 What Makes Ayurvedic Beauty Therapy Different?
        </h3>

        <p className="fade-item">
          Ayurvedic beauty therapy focuses on natural purification and
          nourishment. Your therapy includes herbal treatments, internal
          Ayurvedic medicines, and a sattvic diet to ensure the body is
          cleansed, nourished, and energized—creating beauty from within.
        </p>

        <h4 className="text-base font-semibold mt-3 fade-item text-ayuTulsi">
          🌱 Key Benefits of Ayurvedic Beauty Therapy:
        </h4>

        <div className="space-y-2 mt-2">
          {[
            [
              "💆‍♀️ Skin Rejuvenation",
              "Herbs like Turmeric, Neem, and Aloe Vera cleanse and brighten the skin, improving texture and tone.",
            ],
            [
              "🕰️ Anti-Aging Support",
              "Herbs such as Ashwagandha and Brahmi promote collagen production and reduce fine lines.",
            ],
            [
              "💧 Detoxification & Glow",
              "Internal detox and skin therapy eliminate toxins, leaving skin naturally radiant.",
            ],
            [
              "🌸 Acne & Skin Condition Relief",
              "Remedies like Manjistha and Triphala reduce pigmentation, acne, and inflammation.",
            ],
            [
              "🧘‍♀️ Stress Relief & Inner Calm",
              "Beauty begins within—our therapy includes meditation and herbal oil massages to restore mental balance and enhance overall glow.",
            ],
          ].map(([title, desc], i) => (
            <div key={i} className="fade-item flex gap-2">
              <span className="font-semibold min-w-[250px]">{title} :</span>
              <span>{desc}</span>
            </div>
          ))}
        </div>
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

export default BeautyTherapy;
