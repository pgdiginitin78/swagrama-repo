import React, { useState } from "react";
import OPDBookingModal from "./OPDBookingModal";
import CommonButton from "../../../common/button/CommonButton";

function AyurvedaOPDClinic() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <h1 className="text-ayuLightBlue font-semibold text-xl">
        स्वआयुर्वेदचिचित्सालय Ayurveda OPD Clinic
      </h1>
      <div className="mt-3 text-gray-700 leading-6">
        <p>
          <span className="font-semibold text-ayuDark">
            Ayurveda OPD Clinic – Preventive to Curative Wellness
          </span>
          <br />
          At Swargram Community, the Ayurveda OPD Clinic is rooted in ancient
          wisdom, offering a holistic path toward complete wellness. Guided by
          the principle –
          <span className="font-medium italic">
            "स्वस्थस्य स्वास्थ्य रक्षणम्, आतुरस्य विकार प्रशमनं"
          </span>
          —our aim is to preserve the health of the healthy and heal through
          natural, sustainable, time-tested practices.
        </p>

        <p className="mt-2">
          The clinic integrates traditional Ayurveda with nature-based living,
          emphasizing sustainable self-care rituals and mindful well-being.
        </p>

        <div className="mt-3 space-y-3">
          <h3 className="font-semibold text-ayuTulsi text-lg">
            🌿 Our Clinic :
          </h3>

          <ul className="space-y-2 text-sm">
            {[
              [
                "Ashtavidha Nadi Parikshan (8-Pulse Diagnosis)",
                "Advanced diagnosis providing deep insight into past, present & future health conditions.",
              ],
              [
                "Healing with Nature",
                "Herbal medicines, cow-based formulations, Panchakarma & rejuvenating nature-stay therapies.",
              ],
              [
                "Preventive to Curative Approach",
                "Focus on prevention, long-term wellness & personalized treatment protocols.",
              ],
              [
                "Sustainable Wellness Lifestyle",
                "Natural diet, land engagement & traditional living for long-term balance.",
              ],
              [
                "Universal Healing Philosophy",
                "Ayurveda + Yoga + Homeopathy + Nature Therapy without chemicals or toxins.",
              ],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-2">
                <span className="font-semibold min-w-[320px]">{title} </span>
                <span><strong>:</strong> &nbsp;{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

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

export default AyurvedaOPDClinic;
