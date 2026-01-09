import { Calendar, ChevronRight, Clock, Leaf, Pill } from "lucide-react";
import { useEffect, useState } from "react";
import OPDBookingModal from "./OPDBookingModal";

const OPDClinic = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openAppointmentBookModal, setOpenAppointmentBookModal] =
    useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clinics = [
    {
      id: 1,
      name: "स्वआयुर्वेदचिकित्सालय",
      englishName: "Ayurveda OPD Clinic",
      doctors: [
        { name: "Vd. Santosh Suryawanshi", day: "Sunday Monday" },
        { name: "Vd. Avanti Nitsure", day: "Wednesday" },
        { name: "Vd. Pradip Taware", day: "Thursday" },
        { name: "Vd. Sandip Mehetre", day: "Friday" },
        { name: "Vd. Smita Mehetre", day: "Saturday" },
      ],
      slotDuration: "20 Min",
      appointmentFee: "₹750",
      followUp3Months: "₹300",
      followUp6Months: "₹500",
      dispensingMedicine: "5000 to 7000",
    },
    {
      id: 2,
      name: "स्वयोगचिकित्सालय",
      englishName: "Yoga OPD Clinic",
      doctors: [{ name: "Dr. Manisha Suryawanshi", day: "" }],
      slotDuration: "20 Min",
      appointmentFee: "₹750",
      followUp3Months: "₹300",
      followUp6Months: "₹500",
      dispensingMedicine: "500 to 1500",
    },
    {
      id: 3,
      name: "स्वसमग्रचिकित्सालय",
      englishName: "Homoeopathy OPD Clinic",
      doctors: [{ name: "Dr. Vaishali Holmukhe", day: "" }],
      slotDuration: "20 Min",
      appointmentFee: "₹750",
      followUp3Months: "₹300",
      followUp6Months: "₹500",
      dispensingMedicine: "1500 to 5000",
    },
  ];

  return (
    <div className="min-h-screen  py-4 md:px-4">
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        } md:max-w-7xl mx-auto mb-8`}
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Leaf className="w-8 h-8  text-green-700 animate-bounce" />
            <h1 className="text-2xl sm:text-3xl  font-bold text-green-800">
              स्वचिकित्सालय OPD Clinic
            </h1>
            <Leaf className="w-8 h-8  text-green-700 animate-bounce" />
          </div>
          <p className="text-sm  text-green-700 font-medium">
            Traditional Wellness & Holistic Healthcare
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {clinics.map((clinic, index) => (
          <div
            key={clinic.id}
            className={`transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] overflow-hidden">
              <div className="relative bg-gradient-to-br from-green-400 to-lime-500 py-3 px-5">
                <div className="absolute top-3 right-3 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-green-900 font-bold text-lg">
                  {clinic.id}
                </div>
                <h2 className="text-xl  font-bold text-green-900  pr-12">
                  {clinic.name}
                </h2>
                <p className="text-sm  font-semibold text-green-800">
                  {clinic.englishName}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
                <div className="lg:col-span-1 bg-gradient-to-b from-amber-50 to-white p-4 rounded-xl">
                  <h3 className="text-base font-bold text-green-800 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
                    Healthcare Practitioners
                  </h3>
                  <div
                    className={`gap-2 ${
                      clinic.doctors.length > 1
                        ? "grid grid-cols-1"
                        : "flex flex-col"
                    }`}
                  >
                    {clinic.doctors.map((doctor, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 rounded-xl border-l-4 border border-green-500 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1"
                      >
                        <p className="font-semibold text-green-900 text-sm">
                          {doctor.name}
                        </p>
                        {doctor.day && (
                          <p className="text-xs text-green-700 mt-1">
                            {doctor.day}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-1 space-y-3">
                  <div className="px-4 py-3 bg-lime-100 border-2 border-green-300 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-green-600 font-semibold">
                          Slot Duration
                        </p>
                        <p className="text-lg font-bold text-green-900">
                          {clinic.slotDuration}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-100 to-lime-100 p-3 rounded-xl border-2 border-green-300 hover:border-green-500 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-green-800">
                        Appointment Fee
                      </span>
                      <span className="text-xl font-bold text-green-900">
                        {clinic.appointmentFee}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-3 rounded-xl border-2 border-amber-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-amber-700" />
                      <span className="text-sm font-semibold text-amber-800">
                        Follow-Up Fees
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-white p-2 rounded-lg hover:shadow-md transition-all duration-300">
                        <span className="text-xs font-medium text-green-700">
                          3 Months Gap
                        </span>
                        <span className="font-bold text-green-900 bg-yellow-200 px-2 py-1 rounded-full text-sm">
                          {clinic.followUp3Months}
                        </span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-2 rounded-lg hover:shadow-md transition-all duration-300">
                        <span className="text-xs font-medium text-green-700">
                          6 Months Gap
                        </span>
                        <span className="font-bold text-green-900 bg-yellow-200 px-2 py-1 rounded-full text-sm">
                          {clinic.followUp6Months}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1 space-y-3 flex flex-col">
                  <div className="bg-gradient-to-r from-lime-100 to-green-100 p-3 rounded-xl border-2 border-lime-300 flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <Pill className="w-4 h-4 text-green-700" />
                      <span className="text-sm font-semibold text-green-800">
                        Dispensing Medicine & Service
                      </span>
                    </div>
                    <p className="text-xs text-green-600 mb-1">
                      Value Per Month
                    </p>
                    <p className="text-lg font-bold text-green-900">
                      ₹{clinic.dispensingMedicine}
                    </p>
                  </div>
                  <button
                    onClick={() => setOpenAppointmentBookModal(true)}
                    className="w-full bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white font-bold py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
                  >
                    Book Appointment
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openAppointmentBookModal && (
        <OPDBookingModal
          open={openAppointmentBookModal}
          handleClose={() => setOpenAppointmentBookModal(false)}
        />
      )}
    </div>
  );
};

export default OPDClinic;
