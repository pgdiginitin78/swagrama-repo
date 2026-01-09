import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CancelButtonModal from "../../common/button/CancelButtonModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function EventRegistrationForm({
  selectedEvents,
  open,
  handleClose,
  setSelectedEvents,
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      dateOfBirth: null,
      isAgree: false,
    },
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    numberOfAdults: 1,
    numberOfChildren: 0,
    address: "",
    specialRequirements: "",
  });

  const [submitted, setSubmitted] = useState(false);

  console.log("selectedEvents", selectedEvents);

  const calculateTotal = () => {
    const adultsTotal = formData.numberOfAdults * selectedEvents.value;
    const childrenTotal =
      formData.numberOfChildren * (selectedEvents.value * 0.5);
    return adultsTotal + childrenTotal;
  };

  const getTotalPersons = () => {
    return (
      parseInt(formData.numberOfAdults) + parseInt(formData.numberOfChildren)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const childrenTotal =
      formData.numberOfChildren * (selectedEvents.value * 0.5);
    console.log("Registration Data:", {
      ...formData,
      event: selectedEvents,
      totalPersons: getTotalPersons(),
      adultsTotal: formData.numberOfAdults * selectedEvents.value,
      childrenTotal: childrenTotal,
      totalAmount: calculateTotal(),
      registrationDate: new Date().toISOString(),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-3">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full text-center">
          <div className="mb-3">
            <svg
              className="w-12 h-12 text-green-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-1">
            नोंदणी यशस्वी!
          </h2>
          <h3 className="text-base font-semibold text-gray-700 mb-3">
            Registration Successful!
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            Thank you, {formData.fullName}!
          </p>
          <p className="text-sm text-gray-600 mb-3">
            Your registration for <strong>{selectedEvents.serviceName}</strong>{" "}
            has been confirmed.
          </p>
          <div className="bg-orange-50 rounded p-3 mb-3">
            <p className="text-xs text-gray-700 mb-1">
              <strong>Event Date:</strong> {selectedEvents.date}
            </p>
            <p className="text-xs text-gray-700 mb-1">
              <strong>Adults:</strong> {formData.numberOfAdults} × ₹
              {selectedEvents.value} = ₹
              {formData.numberOfAdults * selectedEvents.value}
            </p>
            <p className="text-xs text-gray-700 mb-1">
              <strong>Children:</strong> {formData.numberOfChildren} × ₹
              {selectedEvents.value * 0.5} = ₹
              {formData.numberOfChildren * selectedEvents.value * 0.5}
            </p>
            <p className="text-xs text-gray-700 mb-2">
              <strong>Total Persons:</strong> {getTotalPersons()}
            </p>
            <p className="text-sm font-bold text-orange-600">
              <strong>Total Amount:</strong> ₹{calculateTotal()}
            </p>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            A confirmation email has been sent to {formData.email}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-orange-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Register Another Person
          </button>
        </div>
      </div>
    );
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="booking-modal-title"
    >
      <Box
        sx={style}
        className="w-[60%] h-[90%] overflow-y-auto max-w-2xl rounded-xl relative"
      >
        <div className="flex items-center justify-between mb-3">
          <CancelButtonModal
            onClick={() => {
              handleClose();
              setSelectedEvents(null);
            }}
          />
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-red-50 py-4 px-3">
          <div className="max-w-2xl mx-auto">
            {/* Event Details Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <div className="border-l-4 border-orange-600 pl-3">
                <h1 className="text-xl font-bold text-gray-800 mb-2">
                  {selectedEvents.serviceName}
                </h1>
                <p className="text-xs text-gray-600 mb-1">
                  📅 {selectedEvents.date} • {selectedEvents.month}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  {selectedEvents.description}
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Benefits:</strong> {selectedEvents.benefits}
                </p>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-orange-600">
                    💰 Pricing:
                  </p>
                  <p className="text-xs text-gray-700">
                    👨‍👩‍👧‍👦 Adults: ₹{selectedEvents.value} per person
                  </p>
                  <p className="text-xs text-gray-700">
                    👶 Children: ₹{selectedEvents.value * 0.5} per person (50%
                    off)
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    (Children under 12 years)
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
                नोंदणी फॉर्म / Registration Form
              </h2>

              <form onSubmit={handleFormSubmit} className="space-y-3">
                {/* Grid Layout for Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-gray-700 mb-1"
                    >
                      Full Name / पूर्ण नाव *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-gray-700 mb-1"
                    >
                      Email / ईमेल *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-gray-700 mb-1"
                    >
                      Phone Number / फोन नंबर *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  {/* Number of Adults */}
                  <div>
                    <label
                      htmlFor="numberOfAdults"
                      className="block text-xs font-semibold text-gray-700 mb-1"
                    >
                      Number of Adults / प्रौढांची संख्या *
                    </label>
                    <input
                      type="number"
                      id="numberOfAdults"
                      name="numberOfAdults"
                      value={formData.numberOfAdults}
                      onChange={handleChange}
                      required
                      min="1"
                      max="20"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      ₹{selectedEvents.value} × {formData.numberOfAdults} = ₹
                      {formData.numberOfAdults * selectedEvents.value}
                    </p>
                  </div>

                  {/* Number of Children */}
                  <div>
                    <label
                      htmlFor="numberOfChildren"
                      className="block text-xs font-semibold text-gray-700 mb-1"
                    >
                      Number of Children / मुलांची संख्या
                    </label>
                    <input
                      type="number"
                      id="numberOfChildren"
                      name="numberOfChildren"
                      value={formData.numberOfChildren}
                      onChange={handleChange}
                      min="0"
                      max="20"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      ₹{selectedEvents.value * 0.5} ×{" "}
                      {formData.numberOfChildren} = ₹
                      {formData.numberOfChildren * selectedEvents.value * 0.5}
                    </p>
                  </div>
                </div>

                {/* Total Amount Display */}
                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-3 my-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">
                        Total Persons / एकूण व्यक्ती
                      </p>
                      <p className="text-lg font-bold text-gray-800">
                        {getTotalPersons()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600 mb-1">
                        Total Amount / एकूण रक्कम
                      </p>
                      <p className="text-xl font-bold text-orange-600">
                        ₹{calculateTotal()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-xs font-semibold text-gray-700 mb-1"
                  >
                    Address / पत्ता *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="2"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your complete address"
                  />
                </div>

                {/* Special Requirements */}
                <div>
                  <label
                    htmlFor="specialRequirements"
                    className="block text-xs font-semibold text-gray-700 mb-1"
                  >
                    Special Requirements / विशेष गरजा (Optional)
                  </label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Any dietary restrictions, accessibility needs, etc."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-200 shadow-lg"
                >
                  Register Now / आता नोंदणी करा
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-3">
                * Required fields / आवश्यक फील्ड
              </p>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
