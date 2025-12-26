import React, { useState } from "react";
import OPDBookingModal from "./OPDBookingModal";

function AyurvedaOPDClinic() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <h1 className="text-ayuBrown font-semibold text-xl">स्वआयुर्वेदचिचित्सालय Ayurveda OPD Clinic</h1>
      <p className="text-sm leading-6">

        Ayurveda OPD Clinic – Preventive to Curative Wellness At Swargram
        Community, the Ayurveda OPD Clinic is rooted in the principles of
        ancient wisdom, offering a unique approach to holistic healing. Guided
        by the foundational Ayurvedic philosophy—"स्वस्थस्य स्वास्थ्य रक्षणम्,
        आतुरस्य विकार प्रशमनं" (To preserve the health of the healthy and to
        cure the illness of the diseased)—our clinic blends time-tested
        practices with sustainable living. Highlights of the Clinic: 🌿
        Ashtavidha Nadi Parikshan (8-Pulse Diagnosis): An advanced diagnostic
        method offering deep insights into your past, present, and potential
        future health conditions. 🌱 Healing with Nature: Treatments include
        herbal medicines, cow-origin formulations, and traditional Panchakarma
        therapies, complemented by rejuvenating nature-stay experiences. 🩺 From
        Prevention to Cure: Our services span across the spectrum—from
        preventive healthcare to personalized curative treatments for holistic
        well-being. 🏡 Sustainable Wellness Living: Embedded in our broader
        mission of a Self-Dependent Village, the clinic promotes a lifestyle
        based on natural food, physical engagement with the land, and
        traditional self-care. 🌍 Universal Wellness Philosophy: A blend of
        Ayurveda, Yoga, Homeopathy, and Nature Therapy, designed to heal without
        toxins, chemicals, or adulteration—safeguarding both people and planet.
      </p>
      <div className="flex justify-end my-2">
        <button
          type="button"
          className="px-3 py-1 rounded-lg bg-ayuDark text-white"
          onClick={() => setOpenModal(true)}
        >
          Book Appointment
        </button>
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
