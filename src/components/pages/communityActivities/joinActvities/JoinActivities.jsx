import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Spa,
  Favorite,
  LocationOn,
  Phone,
  Email,
  EmojiNature,
  LocalFlorist,
  Restaurant,
  Hotel,
  EventAvailable,
  CheckCircle,
  Star,
  Menu,
  Close,
  ArrowForward,
  Eco,
  Groups,
  LocalHospital,
  SelfImprovement,
  FamilyRestroom,
  Celebration,
  CalendarMonth,
  AttachMoney,
  HomeWork,
  RoomService,
  PhotoCamera,
  MusicNote,
  AccessTime,
  Block,
  CheckBox,
  ExpandMore,
  ExpandLess,
  AutoAwesome,
  Verified,
  CardGiftcard,
  FitnessCenter,
  LocalDining,
} from "@mui/icons-material";

// Import data (simulated - in real app: import { swagramWeddingData } from './data')

const SwagramComplete = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const Section = ({ children, className = "" }) => (
    <section className={`py-5 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-lime-100">
      <div className="px-12">
        <Section className="pt-10 pb-12 ">
          <motion.div {...fadeIn} className="text-center">
            <LocalFlorist className="text-green-600 text-5xl mx-auto mb-3" />
            <h1 className="text-2xl md:text-4xl font-bold text-green-900 mb-2">
              {swagramWeddingData.basicInfo.title_marathi}
            </h1>
            <p className="text-base text-green-700 mb-2">
              {swagramWeddingData.basicInfo.title_english}
            </p>
            <p className="text-lg text-amber-700 font-semibold mb-4">
              {swagramWeddingData.philosophy.tagline}
            </p>
            <p className="text-sm text-green-800 max-w-4xl mx-auto">
              {swagramWeddingData.basicInfo.description}
            </p>

            {/* <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a
                href="#contact"
                className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 text-sm flex items-center gap-2"
              >
                Book Now <ArrowForward fontSize="small" />
              </a>
              <a
                href="#services"
                className="bg-white text-green-600 px-5 py-2 rounded-full border-2 border-green-600 hover:bg-green-50 text-sm"
              >
                Explore
              </a>
            </div> */}
          </motion.div>

          <motion.div
            {...fadeIn}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10"
          >
            {[
              { icon: <EmojiNature />, label: "Eco-Friendly", value: "100%" },
              { icon: <Spa />, label: "Ayurvedic", value: "Pure" },
              { icon: <Restaurant />, label: "Vegetarian", value: "Only" },
              { icon: <Favorite />, label: "Carbon +ve", value: "Climate" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white p-3 rounded-lg shadow text-center"
              >
                <div className="text-green-600 text-2xl mb-1">{stat.icon}</div>
                <div className="text-base font-bold text-green-900">
                  {stat.value}
                </div>
                <div className="text-xs text-green-700">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </Section>

        {/* Philosophy */}
        <Section className="">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4 text-center">
              {swagramWeddingData.philosophy.question}
            </h2>
            <div className="bg-lime-50 border shadow p-6 rounded-lg mb-4">
              <p className="text-sm text-green-800 mb-3">
                {swagramWeddingData.philosophy.introduction}
              </p>
              <div className="bg-amber-50 p-4 border shadow rounded-lg mb-3">
                <h3 className="text-base font-bold text-amber-900 mb-2">
                  समस्या (Problem)
                </h3>
                <p className="text-sm text-amber-800">
                  {swagramWeddingData.philosophy.problem}
                </p>
              </div>
              <div className="bg-green-50 border shadow p-4 rounded-lg">
                <h3 className="text-base font-bold text-green-900 mb-2">
                  उपाय (Solution)
                </h3>
                <p className="text-sm text-green-800">
                  {swagramWeddingData.philosophy.solution}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-lime-50 p-5 border shadow rounded-lg">
                <h3 className="text-base font-bold text-green-900 mb-2 flex items-center gap-2">
                  <AutoAwesome className="text-green-600" />
                  {swagramWeddingData.philosophy.nature_wedding_concept.title}
                </h3>
                <p className="text-sm text-green-800">
                  {
                    swagramWeddingData.philosophy.nature_wedding_concept
                      .description
                  }
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 border shadow to-orange-50 p-5 rounded-lg">
                <h3 className="text-base font-bold text-amber-900 mb-2 flex items-center gap-2">
                  <Verified className="text-amber-600" />
                  {swagramWeddingData.philosophy.modern_reality.title}
                </h3>
                <p className="text-sm text-amber-800">
                  {swagramWeddingData.philosophy.modern_reality.description}
                </p>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Swagram Concept & Features */}
        <Section>
          <motion.div {...fadeIn}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-2">
                {swagramWeddingData.swagramConcept.title}
              </h2>
              <p className="text-base text-amber-700 font-semibold">
                {swagramWeddingData.swagramConcept.subtitle}
              </p>
              <p className="text-sm text-green-700 mt-2">
                {swagramWeddingData.swagramConcept.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {swagramWeddingData.swagramConcept.specialFeatures.features.map(
                (feature, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-5 rounded-lg border shadow-lg border-l-4 border-green-600"
                  >
                    <h3 className="text-base font-bold text-green-900 mb-2">
                      <CheckCircle className="text-green-600 " />{" "}
                      {feature.title}
                    </h3>
                    <p className="text-sm text-green-800">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              )}
            </div>

            <div className="mt-8 bg-gradient-to-r from-lime-100 via-green-100 to-amber-50 border p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                <CalendarMonth className="text-green-600" />
                {swagramWeddingData.swagramConcept.fiveDayWedding.title}
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {swagramWeddingData.swagramConcept.fiveDayWedding.services.map(
                  (service, i) => (
                    <div
                      key={i}
                      className="bg-white p-3 rounded-lg border flex items-center gap-2"
                    >
                      <CheckCircle className="text-green-600 text-sm" />
                      <span className="text-sm text-green-800">{service}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Pricing Packages */}
        <Section className="" id="pricing">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6 text-center">
              {swagramWeddingData.pricing.venueCharges.title}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {swagramWeddingData.pricing.venueCharges.packages.map(
                (pkg, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white p-5 rounded-lg border shadow-lg text-center"
                  >
                    <AttachMoney className="text-green-600 text-3xl mx-auto mb-2" />
                    <h3 className="text-base font-bold text-green-900 mb-1">
                      {pkg.duration}
                    </h3>
                    <p className="text-xs text-green-700 mb-3">{pkg.timing}</p>
                    <div className="text-xl font-bold text-amber-700 mb-3">
                      {pkg.cost}
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 text-sm">
                      Select
                    </button>
                  </motion.div>
                )
              )}
            </div>

            <div className=" p-6 border rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                <Hotel className="text-green-600" />
                {swagramWeddingData.pricing.accommodation.title}
              </h3>
              <p className="text-sm text-green-800 mb-3">
                {swagramWeddingData.pricing.accommodation.capacity}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {swagramWeddingData.pricing.accommodation.rates.map(
                  (rate, i) => (
                    <div key={i} className="bg-green-50 p-3 border rounded-lg">
                      <span className="font-bold text-green-900">
                        {rate.duration}:
                      </span>
                      <span className="text-amber-700 ml-2">{rate.cost}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Food Menu */}
        <Section className="">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6 text-center flex items-center justify-center gap-2">
              <LocalDining className="text-green-600" />
              {swagramWeddingData.foodMenu.title}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {swagramWeddingData.foodMenu.menuItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-lime-50 to-green-50 p-5 border rounded-lg shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base font-bold text-green-900">
                      {item.category}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.costPerPerson === "Free"
                          ? "bg-green-600 text-white"
                          : "bg-amber-600 text-white"
                      }`}
                    >
                      ₹{item.costPerPerson}
                    </span>
                  </div>
                  <p className="text-sm text-green-800">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Value Added Services */}
        <Section>
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6 text-center">
              Value Added Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {swagramWeddingData.valueAddedServices.services.map(
                (service, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-lg border shadow-lg flex items-start gap-3"
                  >
                    <RoomService className="text-green-600 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-green-900 mb-1">
                        {service.service}
                      </h3>
                      <p className="text-sm text-amber-700">{service.cost}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </Section>

        {/* Available Locations */}
        <Section className="">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6 text-center">
              Available Locations for Functions
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {swagramWeddingData.availableLocations.locations.map(
                (location, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-lg border shadow text-center"
                  >
                    <LocationOn className="text-green-600 text-3xl mx-auto mb-2" />
                    <h3 className="text-base font-bold text-green-900 mb-1">
                      {location.name}
                    </h3>
                    <p className="text-sm text-green-700">
                      Capacity: {location.capacity}
                    </p>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </Section>

        {/* Why Choose Swagram */}
        <Section className="">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6 text-center">
              Why Choose Swagram?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {swagramWeddingData.whyChooseSwagram.reasons.map((reason, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-lime-50 to-green-50 border p-5 rounded-lg shadow flex gap-3"
                >
                  <Star className="text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-green-900 mb-1">
                      {reason.point}
                    </h3>
                    <p className="text-sm text-green-800">{reason.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Core Values */}
        <Section className="">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6 text-center">
              Our Values
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-green-100 border shadow p-5 rounded-lg mb-4">
                  <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                    <CheckBox className="text-green-600" /> Say YES to
                  </h3>
                  {swagramWeddingData.coreValues.sayYesTo.values.map((v, i) => (
                    <div
                      key={i}
                      className="bg-white p-2 rounded mb-2 flex justify-between text-sm"
                    >
                      <span className="text-green-900">{v.marathi}</span>
                      <span className="text-green-700">{v.english}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-200 border shadow p-5 rounded-lg mb-4">
                  <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="text-green-700" /> Strongly YES to
                  </h3>
                  {swagramWeddingData.coreValues.stronglyYesTo.values.map(
                    (v, i) => (
                      <div
                        key={i}
                        className="bg-white p-2 rounded mb-2 flex justify-between text-sm"
                      >
                        <span className="text-green-900 font-bold">
                          {v.marathi}
                        </span>
                        <span className="text-green-700 font-bold">
                          {v.english}
                        </span>
                      </div>
                    )
                  )}
                </div>
                <div className="bg-red-100 p-5 border shadow rounded-lg">
                  <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
                    <Block className="text-red-600" /> Strongly NO to
                  </h3>
                  {swagramWeddingData.coreValues.stronglyNoTo.values.map(
                    (v, i) => (
                      <div
                        key={i}
                        className="bg-white p-2 rounded mb-2 flex justify-between text-sm"
                      >
                        <span className="text-red-900 font-bold">
                          {v.marathi}
                        </span>
                        <span className="text-red-700 font-bold">
                          {v.english}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <div className="bg-amber-100 p-5 border shadow rounded-lg">
                  <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <Block className="text-amber-600" /> Say NO to
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {swagramWeddingData.coreValues.sayNoTo.values.map(
                      (v, i) => (
                        <div
                          key={i}
                          className="bg-white p-2 rounded text-center text-xs"
                        >
                          <div className="text-amber-900">{v.marathi}</div>
                          <div className="text-amber-700">{v.english}</div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Community Programs - Note: Full data available in source */}
        <Section>
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6 text-center flex items-center justify-center gap-2">
              <Groups className="text-green-600" />
              Community & Cultural Programs
            </h2>
            <div className="border p-6 rounded-lg shadow-lg">
              <p className="text-sm text-green-800 mb-4 text-center">
                स्वग्रामात आयुर्वेदिक पद्धतीने साजरे करता येणारे विविध कार्यक्रम
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    icon: <Celebration />,
                    title: "Pre-Wedding Events",
                    desc: "संगीत, मेहंदी, हल्दी - आयुर्वेदिक पद्धतीने",
                  },
                  {
                    icon: <FamilyRestroom />,
                    title: "Naming Ceremony",
                    desc: "नामकरण समारंभ - पारंपरिक पोषणासह",
                  },
                  {
                    icon: <CalendarMonth />,
                    title: "Festivals",
                    desc: "दिवाळी, होळी, गणेशोत्सव - इको-फ्रेंडली",
                  },
                  {
                    icon: <Groups />,
                    title: "Family Gatherings",
                    desc: "पारिवारिक मेळावे - जैविक भोजनासह",
                  },
                  {
                    icon: <SelfImprovement />,
                    title: "Yoga & Wellness",
                    desc: "योग ध्यान शिबिरे - पंचकर्म अनुभव",
                  },
                  {
                    icon: <MusicNote />,
                    title: "Cultural Programs",
                    desc: "संगीत, नृत्य, कला कार्यशाळा",
                  },
                ].map((program, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br border shadow from-lime-50 to-green-50 p-4 rounded-lg text-center"
                  >
                    <div className="text-green-600 text-3xl mb-2">
                      {program.icon}
                    </div>
                    <h3 className="text-base font-bold text-green-900 mb-1">
                      {program.title}
                    </h3>
                    <p className="text-sm text-green-700">{program.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-green-700 italic">
                  Full festival calendar, 22 Samskaras, and detailed program
                  information available in complete brochure
                </p>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Rules & Guidelines Preview */}
        <Section className="">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6 text-center">
              Guidelines & Policies
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow">
                <h3 className="text-base font-bold text-green-900 mb-3 flex items-center gap-2">
                  Inclusions
                </h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-start gap-2">
                    250-300 खुर्च्यांची व्यवस्था
                  </li>
                  <li className="flex items-start gap-2">
                    पंगत व्यवस्था (पारंपरिक जेवण)
                  </li>
                  <li className="flex items-start gap-2">
                    पाट-चौरंग (विवाह विधींसाठी)
                  </li>
                  <li className="flex items-start gap-2">
                    होमकुंड (अग्निकुंड)
                  </li>
                  <li className="flex items-start gap-2">
                    माइक आणि साऊंड सिस्टीम
                  </li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg shadow">
                <h3 className="text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
                  Key Policies
                </h3>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li className="flex items-start gap-2">
                    नैसर्गिक सजावट only (No plastic/thermocol)
                  </li>
                  <li className="flex items-start gap-2">
                    शुद्ध शाकाहारी भोजन only
                  </li>
                  <li className="flex items-start gap-2">
                    No alcohol/smoking/tobacco
                  </li>
                  <li className="flex items-start gap-2">Zero waste policy</li>
                  <li className="flex items-start gap-2">
                    Booking : 50% advance required
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Testimonials */}
        <Section className="">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6 text-center">
              Happy Couples
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  name: "राज & प्रिया पाटील",
                  text: "स्वग्राममध्ये आमचे लग्न खूपच सुंदर पार पडले. आयुर्वेदिक पद्धती आणि नैसर्गिक वातावरणाने आमचा सोहळा अविस्मरणीय झाला!",
                  img: "https://img.freepik.com/free-photo/indian-groom-wedding-leg-ceremony-with-spices_8353-9773.jpg?t=st=1767613695~exp=1767617295~hmac=5adc060f0a5c56be3f09996cec39ce78e1477cb28ba02470006570e13d1f2407&w=1480",
                },
                {
                  name: "Amit & Sneha",
                  text: "Perfect blend of tradition and nature. The Ayurvedic treatments made our wedding truly special!",
                  img: "https://img.freepik.com/free-photo/ritual-with-coconut-leaves-traditional-hindu-wedding-ceremony_8353-8909.jpg?t=st=1767613755~exp=1767617355~hmac=15aca29cfb1b8f75d1cfd0fe0325274dc4d089e022c08de8dba33d843e94521b&w=1480",
                },
                {
                  name: "संजय & मीना",
                  text: "एकाच ठिकाणी सर्व सुविधा मिळाल्या. पंचकर्म आणि आयुर्वेदिक उपचारांमुळे आम्हाला खूप फायदा झाला. धन्यवाद!",
                  img: "https://img.freepik.com/free-photo/indian-bride-s-parents-hold-bowl-with-coconut-her-hands_8353-740.jpg?t=st=1767613870~exp=1767617470~hmac=2de369da0eaf9dc963da15298b27ebef7ddc56764496a1efebc990725bac27bf&w=1480",
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-lime-50 to-green-50 border rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Freepik Image via URL */}
                  <div className="relative h-40 w-full bg-lime-50">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/25 to-transparent" />
                  </div>

                  <div className="p-5">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="text-amber-500 text-sm" />
                      ))}
                    </div>

                    <p className="text-sm text-green-800 mb-3 italic">
                      "{t.text}"
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-lime-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {t.name.charAt(0)}
                      </div>
                      <p className="text-sm font-bold text-green-900">
                        {t.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>
      </div>
    </div>
  );
};

export default SwagramComplete;

const swagramWeddingData = {
  basicInfo: {
    title_marathi: "स्वग्राम सांस्कृतिक संस्कार उत्सव समारम्भ",
    title_english: "Community Cultural Values Ceremony Celebration",
    subtitle_marathi: "आयुर्वेद नैसर्ग अग्रस्थान उत्सव",
    subtitle_english: "Ayurveda Natural Destination Ceremony",
    theme_marathi: "वायुमण्डल उद्भूत उत्सव",
    theme_english: "Climate Positive Ceremony",
    type: "स्वविवाह Community Wedding",
    description:
      "शुद्ध पारंपारिक, भारतीय, कृषि, स्वास्थ्य, ग्रामीण संस्कृतीसोबतच कार्बन फुटप्रिंट ऐवजी कार्बन क्रेडिट करून निसर्गसंवर्धनास चालना देणारे एकमेव आयुर्वेदिक, शाकाहारी विवाहस्थळ!",
  },

  // Philosophy Section
  philosophy: {
    question: "लग्न म्हणजे तरी काय रे भाऊ?",
    tagline:
      "आरोग्यपूर्ण, निसर्गस्नेही आणि मनाला भिडणारा---स्वग्राम लग्नसंस्कार ✨",
    introduction:
      "लग्न... हा शब्द उच्चारला तरी घरात आनंदाच्या लहरी उमटतात. लग्न म्हणजे दोन जिवांचे मिलन, दोन कुटुंबांची सांगड आणि आयुष्यभरासाठी घडवलेली सुंदर आठवण. नावनोंदणीपासून सुरु झालेला हा प्रवास कार्यालय, खरेदी, मानपान आणि हनिमूनपर्यंत येऊन थांबतो. आजकाल स्वभाव जुळवणे, कुंडली पाहणे यासोबतच 'इव्हेंट' कसा मोठा होईल, याकडेच जास्त कल असतो. पण, या सर्व धावपळीत आणि दिखाव्यात ज्या दोन जीवांचे मीलन होणार असते, त्यांच्या 'आरोग्याकडे' मात्र सोयीस्कर दुर्लक्ष होते.",

    problem:
      "लग्नाच्या ताणतणावातून भविष्यात शारीरिक समस्या, मानसिक थकवा आणि अक्षरशः 'इनफर्टिलिटी' (वंध्यत्व) सारख्या गंभीर प्रश्नांना सामोरे जावे लागते. लग्न होणे जसे अवघड झाले आहे, त्यापेक्षा लग्नानंतर निरोगी संतती होणे आज अधिक कठीण झाले आहे. यावर उपाय काय?",

    solution:
      "यावर एकमेव शाश्वत उपाय म्हणजे आपल्या संस्कृतीने दिलेले \"पाच दिवसांचे लग्न!\" आणि हीच मूळ संकल्पना घेऊन येत आहे 'स्वग्राम'. हे पाच दिवसांचे लग्न आपण आपल्या सोईप्रमाणे कोणताही संस्कार न सोडता कमी दिवसांत टप्प्याटप्प्याने करू शकतो. जिथे खुद्द धन्वंतरि वैद्य आपल्या लग्नकार्यात सहभागी होऊन तुम्हाला आरोग्यपूर्ण वैवाहिक जीवनाची अनमोल भेट देणार आहेत.",

    nature_wedding_concept: {
      title: "निसर्गाचा लग्नसोहळा: एक आदर्श लग्नसंकल्पनेबद्दल जाणून घेऊ...",
      description:
        "आपण ज्या निसर्गाचा भाग आहोत, तो निसर्ग किती सुंदर रीतीने आपला वंशवेल वाढवतो, हे पाहण्यासारखे आहे. संपूर्ण जीवसृष्टीची निर्मिती आणि पोषण करण्यासाठी स्वतः वनस्पति फुलांनी बहरतात. शृंगार करुन मोहोरलेल्या फुलांमध्ये एका स्त्रीकेशराभोवती असंख्य पुरुषकेशरांची निर्मिती होऊन परागीकरण म्हणजे स्त्री-पुंकेशरांचे लग्न लावून मधुचंद्र साजरा होतो. वृक्षवेली जेव्हा फुलांनी बहरतात, तेव्हा स्त्रीकेशर आणि पुंकेशरांचा अतिशय देखणा मिलाप घडतो---परागीकरण होते. फुलपाखरे, मधमाश्या, भ्रमर या सगळ्यांची लग्नघरातील वऱ्हाड्यासारखी वर्दळ; आकाशातील शब्द, वाऱ्याचा स्पर्श, तेजाचे रूप, जलाचा रस आणि पृथ्वीचा गंध---पंचतत्त्वांनी सजलेला मधुचंद्र निर्माण होतो.",
      conclusion:
        "निसर्गातली ही समरसता, ही पवित्रता आणि ही आरोग्याची शाश्वत शपथच स्वग्राम आपल्या लग्नात उतरवते. या नैसर्गिक लग्नकार्यासाठी असंख्य पाहुणे म्हणजे अगणित सूक्ष्म कीटक, मधमाश्या, फुलपाखरे, भ्रमर असे वऱ्हाडी दुरवरून हजेरी लावतात त्यावेळी पाहुण्यांना मधाची मेजवानी दिली जाते. पुंकेशर म्हणजे पुरुषबीज म्हणजेच नवरदेव-प्रियकराला स्त्रीकेशर म्हणजे नवरी-प्रियसिकडे घेऊन जाण्यासाठी आलेल्या पाहुण्यांच्या भोजनाची तजवीज म्हणजेच मध. निसर्गाच्या ब्युटीपार्लरमध्ये तयार होऊन, फुलांची वस्त्रे लेवून वृक्षवेली सज्ज होतात. निरभ्र आकाशाखाली, हवेच्या मंद झुळुकीसोबत आणि पक्ष्यांच्या किलबिलाटात हा गंधर्वनगरीतल्या सारखा सोहळा पार पडतो. येथे ना कोणाचा मानपान दुखावला जातो, ना पैशाचा अपव्यय होतो, आणि ना प्रदूषणाचा लवलेश असतो. फक्त आणि फक्त 'जीवसंवर्धन'! अब्जावधी वर्षांपासून हे पवित्र कार्य निसर्ग अविरत करत आला आहे.",
    },

    modern_reality: {
      title: "आजची वास्तविकता: आनंदाचा उत्सव की तणावाचे ओझे?",
      description:
        "माणसाने निसर्गाकडून 'लग्न' ही संकल्पना घेतली खरी, पण आज आपण त्याचे काय केले आहे? आज लग्नसोहळा म्हणजे प्रदूषणाचा आणि तणावाचा अड्डा बनला आहे. मध्यवयापर्यंत करिअरसाठी केलेली कसरत आणि त्यात लग्न ठरवताना होणारी दमछाक जीवघेणी ठरते. साखरपुडा एका ठिकाणी, हळद दुसरीकडे, संगीत तिसरीकडे, विधि चौथीकडे आणि रिसेप्शन भलतीकडेच! प्रत्येक वेळी वेगळी थीम, वेगळा पेहराव आणि मेकअप. या धावपळीत नवरा-नवरी अक्षरशः कोमेजून जातात. ज्या वेळी शरीर आणि मनाला विश्रांतीची गरज असते, त्याच वेळी हे जोडपे थकलेले असताना दूरवर कुठेतरी अनोळखी ठिकाणी 'हनिमून'साठी जाते. अनेकदा तिथून परतताना गोड आठवणींऐवजी आजारपण सोबत येते. खरेतर लग्नाची आणि मधुचंद्राची आठवण आयुष्यभर जिवंत राहण्यासाठी ते राहत्या घरी करावे असे शास्त्र सांगते. लग्न म्हणजे नुसते तांदूळ टाकणे नव्हे. त्यामुळे लग्न ठरविण्यापासून ते हनिमूनपर्यंत आणि तेथून अपत्यप्राप्तीपर्यंतचा एकूण सर्वच प्रवास म्हणजेच लग्नसंस्कार होय. या सर्व समस्यांवर मात करण्यासाठी आणि आपल्या भावी पिढीला निरोगी आयुष्य देण्यासाठी 'स्वग्राम' घेऊन आले आहे नैसर्गिक आणि आरोग्यपूर्ण विवाह संकल्पना.",
    },
  },

  // Swagram Concept
  swagramConcept: {
    title: "स्वग्राम: आरोग्य, परंपरा आणि निसर्गाचा साज",
    subtitle: "जिथे लग्न एक 'सोपस्कार' नाही, तर 'संस्कार' आहे!",
    description:
      "स्वग्राम हे फक्त वेडिंग वेन्यू नाही; हा संपूर्ण लग्नसंस्कार आहे---निसर्गाच्या कुशीत, वैदिक विधींनी आणि आयुर्वेदीय आधाराने घडणारा, एकाच मंगल ठिकाणी पूर्ण होणारा. लग्नाचा अर्थ केवळ तांदूळ (अक्षदा) टाकणे नव्हे. जन्मापासून लग्नापर्यंतचे १४ संस्कार आणि तिथून पुढे अपत्यप्राप्तीपर्यंतचा प्रवास म्हणजे खरा विवाह संस्कार!",

    specialFeatures: {
      title:
        "स्वग्राममधील लग्नाची वैशिष्ट्ये म्हणजे शुद्ध वैदिक आयुर्वेदिक, पारंपरिक महाराष्ट्रीय, भारतीय नैसर्गिक जीवनशैली पूरक विवाहसोहळा:",
      features: [
        {
          title: "वन-स्टॉप सोल्यूशन",
          description:
            "विवाहपूर्व संस्कार (Pre-wedding), पाहणे, पसंत करणे, साखरपुडा, हळद, मुख्य लग्नसोहळा आणि मधुचंद्र... सर्व काही एकाच मंगल आणि निसर्गरम्य ठिकाणी!",
        },
        {
          title: "आरोग्याची हमी",
          description:
            "आयुर्वेद सल्ला, नाडी परीक्षण, उपचार, पंचकर्म इत्यादि सोईंनी युक्त अशा नैसर्गिक वातावरणामध्ये पशू-पक्षी, फुलपाखरे आणि वनस्पतींच्या सान्निध्यात विवाह झाल्याने शारीरिक व मानसिक आरोग्य सुधारते.",
        },
        {
          title: "तणावमुक्त वातावरण",
          description:
            "इथे धावपळ नाही, तर शांतता आहे. इथे वैद्यकीय मार्गदर्शनाखाली (Vedic & Ayurvedic lifestyle) जोडप्याची शारीरिक आणि मानसिक तयारी करून घेतली जाते.",
        },
        {
          title: "पंचमहाभूतांची साक्ष",
          description:
            "अवकाशाचा शब्द, वायूचा स्पर्श, तेजाचे रूप, जलाचा रस आणि पृथ्वीचा गंध... या पाच तत्त्वांच्या साक्षीने आणि आमच्या हजारो वर्षांच्या शेकडो पिढ्यांच्या जाणत्या बुजुर्गांनी तयार केलेल्या संस्कारांनी हा सोहळा पार पडतो.",
        },
        {
          title: "आयुर्वेदिक उपचार",
          description:
            "आयुर्वेदिक सिद्ध तेल -- तुपाने सर्वांग अभ्यंग, शिरोधारा, पादाभ्यंग आणि विष-भेसळमुक्त उद्वर्तन हळदी लेपानंतर केलेला स्नान-संस्कार शरीराला डिटॉक्स करून स्किनचा पीएच बॅलन्स करवून स्ट्रेस-हार्मोन लेव्हल डाऊन करतो.",
        },
        {
          title: "जोडीने योगाभ्यास",
          description:
            "जोडीने अग्निहोत्र, वैदिक हवन, सूर्यनमस्कार, कपल योग यामुळे व्हिटॅमिन D, स्पर्म-ओव्हा क्वालिटी, लंग-कॅपॅसिटी वाढून वैयक्तिक आयुष्यात आनंद भरला जातो. बेडरूम स्टॅमिना ↑",
        },
        {
          title: "मधुचंद्र आहार",
          description:
            "चांदण्या रात्रीत विशेष 'मधुचंद्र आहार' दिला गेल्याने ऑक्सिटोसिन, बाँडिंग हार्मोन वाढल्याने उभयतामधील नाजुक बंध आयुष्यभरचे टिकाऊ मजबूत बनतात.",
        },
      ],
      conclusion:
        "आयुष्य म्हणजे सुंदर आठवणींचे भांडार आहे. लग्नाच्या आणि मधुचंद्राच्या आठवणी आयुष्यभर ताज्या राहाव्यात, यासाठी त्या हक्काच्या आणि नैसर्गिक ठिकाणीच निर्माण व्हायला हव्यात. ज्या ठिकाणी आपण दरवर्षी प्रत्येक लग्न वाढदिवसाला जाऊन द्विगुणित करून आपली क्षमता वाढवू शकतो.",
    },

    fiveDayWedding: {
      title: "पाच दिवस---पाच तत्त्व---पाच संस्कार",
      description:
        "धन्वंतरी वैद्यांच्या सांगण्यावरून 'स्वग्राम'ने तयार केला 'पाच दिवसांचा लग्न-संस्कार'. कोणत्याही 'रनिंग अराउंड'ची गरज नाही. सर्व विधी एकाच हिरवळीत, एकाच वेळी, एकाच वैद्याच्या देखरेखीखाली की जिथे आमचे वैद्य लग्नाच्या प्रत्येक टप्प्यावर आरोग्याचे मार्गदर्शन करतात:",
      services: [
        "लग्नपूर्व आरोग्य तपासणी",
        "फर्टिलिटी काउन्सलिंग",
        "स्ट्रेस मॅनेजमेंट",
        "नैसर्गिक जीवनशैलीचे मार्गदर्शन",
        "अपत्यप्राप्तीसाठी आयुर्वेदिक सल्ला",
      ],
    },
  },

  // Why Choose Swagram
  whyChooseSwagram: {
    title: "स्वग्राम का निवडावे?",
    reasons: [
      {
        point: "नैसर्गिक, हृदयस्पर्शी आणि व्यावसायिक",
        detail: "नियोजन, समन्वय, अंमलबजावणी---सगळं सुसूत्रपणे.",
      },
      {
        point: "आरोग्य हा प्रथम दृष्टीकोन",
        detail: "लग्न हा संस्कार---नुसताच सोहळा नाही.",
      },
      {
        point: "खर्चावर नियंत्रण",
        detail: "एकाच स्थळी सर्व कार्यक्रम---वेळ, उर्जा आणि पैशांची बचत.",
      },
      {
        point: "पर्यावरणपूरक",
        detail: "निसर्गाला न दुखावता निसर्गाचा साज.",
      },
      {
        point: "पुढच्या पिढ्यांचा विचार",
        detail: "शारीरिक, मानसिक आणि सामाजिक समतोलाची बीजं आजच पेरूया.",
      },
    ],
    callToAction:
      "आरोग्यपूर्ण, आनंददायी आणि सात्विक विवाह सोहळ्यासाठी आजच 'स्वग्राम' परिवारात सहभागी व्हा!",
    promise:
      'स्वग्राममध्ये तुमचा प्रत्येक क्षण "अर्थपूर्ण" बनवणे हीच आमची जबाबदारी. लग्न ठरल्यापासून मधुचंद्रापर्यंत---आणि त्या पुढील आनंदी सहजीवनापर्यंत---आरोग्य, समरसता आणि प्रेम यांची शपथ आम्ही तुमच्या हातात ठेवतो. लग्न म्हणजे नुसते तांदूळ टाकणे नव्हे; ते दोन जीवांचे, दोन कुटुंबांचे आणि दोन संस्कारांचे सुंदर एकत्रीकरण आहे.',
  },

  // Core Values
  coreValues: {
    sayYesTo: {
      title: "Say yes to",
      values: [
        { marathi: "नैसर्गविधान", english: "Natural Lifestyle" },
        { marathi: "शाकहारयः", english: "Vegetarians" },
      ],
    },
    sayNoTo: {
      title: "Say no to",
      values: [
        { marathi: "मांसाहारयः", english: "Non Vegetarians" },
        { marathi: "मद्य", english: "Alcohol" },
        { marathi: "मादकद्रव्य", english: "Narcotic Drugs" },
        { marathi: "व्यसन", english: "Addiction" },
        { marathi: "धूम्रपान", english: "Smoking" },
        { marathi: "निष्ठीवन", english: "Spitting" },
        { marathi: "कृतक", english: "Plastic" },
        { marathi: "रासायनिक", english: "Chemical" },
        { marathi: "रसायने", english: "Chemical Fertilizer" },
        { marathi: "कीटनाशक", english: "Pesticide" },
        { marathi: "तृणनाशक", english: "Herbi Weedicide" },
      ],
    },
    stronglyNoTo: {
      title: "Say strongly no to",
      values: [{ marathi: "वर-वधूदक्षिणा", english: "Dowry" }],
    },
    stronglyYesTo: {
      title: "Say strongly yes to",
      values: [{ marathi: "स्त्रीसमानता", english: "Women Equality" }],
    },
    message:
      "व्यर्थ समय, श्रम & धन असणाऱ्या भयंकर लग्नपद्धतीला फाटा देऊन विशाल विचारांनी प्रेरीत झालेल्या सर्व आदरणीय मंडळींना असा लग्न सोहळा करण्यासाठीचे आग्रहाचे निमंत्रण!",
  },

  // Pricing Structure
  pricing: {
    venueCharges: {
      title: "स्वग्राम सेवा शुल्क",
      packages: [
        {
          duration: "32 hours",
          timing: "7 am to 3 pm (next day)",
          cost: "Rs 3,50,000 /-",
        },
        {
          duration: "21 hours",
          timing: "6 pm to 3 pm (next day)",
          cost: "Rs 2,50,000 /-",
        },
        {
          duration: "10 hours",
          timing: "7 am to 4 pm (or) 10 am to 8 pm (same day)",
          cost: "Rs 1,50,000 /-",
        },
        {
          duration: "5 hours",
          timing: "9 am to 2 pm (or) 3 pm to 8 pm",
          cost: "Rs 90,000 /-",
        },
        {
          duration: "Extra hour",
          timing: "Per hour",
          cost: "Rs 15,000 /-",
        },
        {
          duration: "Deposit",
          timing: "Refundable",
          cost: "Rs 25,000 /-",
        },
      ],
    },

    accommodation: {
      title: "उपलब्ध निवास",
      capacity:
        "18 Indoor room Living + 20 Outdoor Living लोकांची निवास व्यवस्था उपलब्ध आहे",
      rates: [
        {
          duration: "32 hours",
          cost: "Rs 2000 /- per person",
        },
        {
          duration: "21 hours",
          cost: "Rs 1500 /- per person",
        },
        {
          duration: "10 hrs",
          cost: "Rs 3000/- per room",
        },
        {
          duration: "5 hrs",
          cost: "Rs 2000 /- Per room",
        },
      ],
    },
  },

  // Food Menu
  foodMenu: {
    title: "जेवण: प्रीतिभोजनम्: Food Celebration",
    venue: "भोजनालय Dining Hall",
    specialFeatures: [
      "विहीरीचे पाणी कांस्य किंवा स्टील ग्लास",
      "चुलीवर स्वयंपाक",
      "केळी पान / पत्रावळ / सुपारी थाली / कांस्य थाली (मर्यादित)",
    ],

    menuItems: [
      {
        category: "स्वागतपान / पेय",
        description:
          "स्वग्राम विशेष गुड हरिचाया Jaggery Green Tea / गुडजल / कोकम सरबत / लिंबू सरबत / ताक (साधं / जिरा) / पन्हं (ऋतुनुसार)",
        costPerPerson: "Free",
      },
      {
        category: "न्याहारी / अल्पोपाहार / सात्म्याहार",
        description:
          "स्वग्राम विशेष खपली गहू लापशी / उपमा / मसाले भात / मेतकूट भात / पेज / खिचडी / भाताची खीर / शेवया खीर / शेवया उपमा",
        costPerPerson: "200",
      },
      {
        category: "स्वग्राम पूर्णाहार",
        description:
          "वरण भात तूप / मुगाची खिचडी तूप, एक भाजी, आरोग्यपूर्ण गोड पदार्थ, गव्हाची पोळी / भाकरी, भाजलेला पापड, कोशिंबीर / सॅलड, सैंधव मीठ + लिंबू + चटणी + लोणचे",
        costPerPerson: "700",
      },
      {
        category: "सुग्रास प्रीतिभोजनम्",
        description:
          "वरण भात तूप / मुगाची खिचडी तूप, एक पातळ भाजी, एक सुकी भाजी, एक गोड पदार्थ, मसाले भात, गव्हाची पोळी, तळण, पापड, कोशिंबीर / सॅलड, सैंधव मीठ + लिंबू + चटणी + लोणचे",
        costPerPerson: "900",
      },
      {
        category: "पुरणपोळी",
        description:
          "पुरण पोळी, कटाची आमटी, एक सुकी भाजी, गुळवणी, इंद्रायणी भात, कुरडई, भजी, कोशिंबीर, तूप",
        costPerPerson: "1000",
      },
    ],

    importantNotes: [
      "गोडाचे दोन पदार्थ ठेवल्यास प्रति ₹100/- अतिरिक्त आकारले जातील.",
      "तळणाचे सुद्धा अतिरिक्त पदार्थ वाढल्यास जसे की पुरी (चपाती -- पोळी असताना सुद्धा) प्रति ₹100/- अतिरिक्त आकारले जातील.",
      "वरील ठरलेल्या स्वागतपान -- पेय / न्याहारी -- अल्पोपाहार -- सात्म्याहार / स्वग्राम पूर्णाहार / सुग्रास प्रीतिभोजनम् / पुरणपोळी यामध्ये बदल करता येणार नाहीत. यामध्ये काही कमी केल्यास सेवाशुल्क कमी होणार नाही परंतु वाढविल्यास मात्र सेवा शुल्कही वाढेल.",
      "स्वग्राममध्ये आरोग्यपूर्ण पंगतीने सामूहिक उत्सव साजरे होण्यासाठी लोक येत असतात त्यामुळे याव्यतिरिक्त चायनीज, इटालियन, पंजाबी, गुजराती, राजस्थानी, कॉन्टिनेन्टल इत्यादि मेनू आणि इतर फास्टफूडची मागणी करूच नये. बुफेची मागणी करू नये. जमीनीवर बसून पाटावर ताट ठेऊन जेवण करण्याने आरोग्यप्राप्ती सोबतच सौख्य वाढणार आहे. ज्यांना बसता येत नाही त्यांचेसाठी विशेष सोय केली जाईल.",
    ],

    smallEventPackages: {
      title: "इतर लहान समारंभांसाठी दर (कमाल ७५ व्यक्तींपर्यंत)",
      subtitle: "प्रति व्यक्तीसाठी:",
      halfDay: {
        title:
          "अर्धा दिवस: फक्त सकाळी (06.45 Am to 01.45 Pm) किंवा सायंकाळी (02.15 Pm to 07.15 Pm)",
        packages: [
          {
            description: "स्वग्राम पूर्णाहार + स्वागतपान",
            cost: "1400/-",
          },
          {
            description: "सुग्रास प्रीतिभोजनम् + स्वागतपान",
            cost: "1500/-",
          },
          {
            description: "पुरणपोळी भोजन + स्वागतपान",
            cost: "1600/-",
          },
        ],
      },
      fullDay: {
        title: "पूर्ण दिवस: (06.45 Am to 07.15 Pm)",
        packages: [
          {
            description: "स्वग्राम पूर्णाहार + स्वग्राम पूर्णाहार + स्वागतपान",
            cost: "2800/-",
          },
          {
            description:
              "सुग्रास प्रीतिभोजनम् + स्वग्राम पूर्णाहार + स्वागतपान",
            cost: "3000/-",
          },
          {
            description: "पुरणपोळी भोजन + स्वग्राम पूर्णाहार + स्वागतपान",
            cost: "3200/-",
          },
        ],
      },
    },
  },

  // Value Added Services
  valueAddedServices: {
    title: "Value added Services",
    services: [
      {
        service: "Ayurvedic therapy (pre and post wedding)",
        cost: "Based on consultation with experts",
      },
      {
        service: "Pre-wedding Shoot",
        cost: "Hourly basis: Customized",
      },
      {
        service: "Bailgada Varat + Vajantri (from Main gate to Swagram)",
        cost: "20,000/- (45 minutes)",
      },
      {
        service: "Decoration (Only natural Flowers / plants / Leaf)",
        cost: "Based on Quotation (Decorators available)",
      },
      {
        service: "Photography + Videography",
        cost: "Based on Quotation (Photographers available)",
      },
    ],
  },

  // Available Locations
  availableLocations: {
    title: "Available Locations for Functions",
    locations: [
      {
        name: "Swagram Vedika",
        capacity: "100-150",
      },
      {
        name: "Swagram community Sabhagruh",
        capacity: "250-300",
      },
      {
        name: "Swagram Amarai",
        capacity: "200-250",
      },
      {
        name: "Swagram Mukhya Chouk",
        capacity: "150-200",
      },
      {
        name: "Swagrama Vihir parisar",
        capacity: "50-100",
      },
      {
        name: "Swagram wellness center area",
        capacity: "100-150",
      },
      {
        name: "Swagram Mukhya Ghar",
        capacity: "25-75",
      },
    ],
  },

  // Rules and Regulations
  rulesAndRegulations: {
    title: "स्वग्रामCommunity - विवाह सोहळ्यासाठी नियमावली",
    subtitle:
      "स्वग्रामCommunity जैवविविधता आणि नैसर्गिक जीवनशैली पूरक आयुर्वेद योग निसर्ग कृषि ग्रामीण स्वास्थ्य पर्यटन ग्राम.",
    introduction:
      "स्वग्रामCommunity हे हॉटेल किंवा रिसॉर्ट नाही तर स्वास्थ्यवर्धक ग्राम आहे. आम्ही विवाहपूर्व आणि विवाहोत्तर वर-वधूसाठी आयुर्वेद थेरपी घेण्याचा आग्रह करतो. ज्यामुळे नवविवाहित दाम्पत्याला एक आरोग्यदायी आणि सकारात्मक ऊर्जा मिळण्याचा अनुभव घेता येईल आणि त्यांचे वैवाहिक जीवन आनंददायी सुरुवात होईल. आपल्या लग्नसंस्कारामध्ये याचा अंतर्भाव करण्याची आम्ही विनंती करतो. आपणांस विशेष सवलतीच्या दरात ही सुविधा पुरविली जाईल.✨",

    inclusions: {
      title: "समाविष्ट सेवा (Inclusions)",
      items: [
        "250-300 खुर्च्यांची व्यवस्था",
        "पंगत व्यवस्था (पारंपरिक जेवण मांडणी पद्धत)",
        "पाट-चौरंग (विवाह विधींसाठी पारंपरिक आसन व्यवस्था)",
        "होमकुंड (विवाह हवन व धार्मिक विधींसाठी अग्निकुंड)",
        "माइक आणि साऊंड सिस्टीम",
      ],
    },

    exclusions: {
      title: "पाहुण्यांनी स्वतः करण्याच्या गोष्टी (Exclusions)",
      items: [
        "पूजा साहित्य व विधींसाठी लागणाऱ्या वस्तू",
        "गुरुजी (पुजारी) व धार्मिक विधींसाठी व्यक्तींची व्यवस्था",
        "वरमाला/हार व फुलांची व्यवस्था",
        "साखरपुड्याचे पदार्थ",
        "संपूर्ण डेकोरेशनसाठी विशेष सामग्री आणि पूर्णतः नियोजन. आमच्यासोबत चर्चा करून तसे डेकोरेशन करावे.",
      ],
      note: "(वरील सर्व गोष्टींची व्यवस्था स्वग्रामतर्फे करायची असल्यास, त्यासाठी वेगळा आकार लागू होईल.)",
    },

    sections: [
      {
        number: 1,
        title: "बुकिंग व पेमेंट (देयक प्रक्रिया)",
        rules: [
          "विवाह सोहळ्यासाठी आगाऊ बुकिंग करणे आवश्यक आहे.",
          "बुकिंगच्या वेळी 50% अमाउंट (नॉन-रिफंडेबल ठेव) भरावी लागेल.",
          "संपूर्ण भाडे रक्कम आणि Deposit 15 दिवस आधी भरावी लागेल.",
          "अतिरिक्त खर्च (वेळ वाढवणे, नुकसान भरपाई, इतर सेवा) डिपॉझिट मधून कापले जाईल",
          "कार्यक्रमानंतर 48 तासांत डिपॉझिट परत मिळेल",
        ],
      },
      {
        number: 2,
        title: "स्थळाचा वापर व वेळेचे नियम",
        rules: [
          "वेळेत वाढ झाल्यास अतिरिक्त प्रति तास शुल्क लागू होईल.",
          "मोठ्या आवाजातील DJ, संगीत किंवा ध्वनी याठिकाणी चालणार नाहीत.",
          "गरजेनुसार संगीत आणि ध्वनिप्रक्षेपकांची सोय इथे केली जाते. स्थानिक नियमांनुसार याची मुभा देण्यात येते.",
        ],
      },
      {
        number: 3,
        title: "पारंपरिक मराठमोळ्या निसर्गप्रेमी सजावटीचे नियम",
        rules: [
          "फक्त नैसर्गिक आणि पर्यावरणपूरक सजावट करण्यास परवानगी आहे (फुलांचे तोरण, रांगोळी, दिवे).",
          "थर्माकोल, प्लास्टिक, कृत्रिम फुले, आणि इतर निसर्गबाह्य साहित्य वापरण्यास सक्त मनाई आहे.",
          "कोणत्याही प्रकारच्या फटाक्यांच्या वापरास परवानगी नाही.",
          "सजावट वेळेत पूर्ण करावी लागेल आणि लग्नसोहळा संपल्यानंतर ते वेळेत काढून घेऊन जावे लागेल.",
        ],
      },
      {
        number: 4,
        title: "भोजन व केटरिंग नियम",
        rules: [
          "फक्त पारंपरिक शुद्ध शाकाहारी, सेंद्रिय मराठी भोजन दिले जाईल.",
          "बाहेरील केटरिंग सेवा, स्टॉल किंवा खानपान सेवा करता येणार नाही.",
          "अन्नाची नासाडी टाळावी व स्वच्छतेचे नियम पाळावेत.",
        ],
      },
      {
        number: 5,
        title: "पाहुण्यांची संख्या व निवास व्यवस्था",
        rules: [
          "लोकांची निवास व्यवस्था उपलब्ध आहे.",
          "खोल्या आणि बाह्य निवास फक्त आगाऊ बुकिंगनुसार दिले जातील. अचानक व्यवस्था होणार नाही.",
          "अगदीच करावी लागल्यास अतिरिक्त पाहुण्यांसाठी वेगळे शुल्क लागू होईल.",
        ],
      },
      {
        number: 6,
        title: "मद्यपान, धूम्रपान आणि तंबाखू उत्पादने (संपूर्णतः बंदी)",
        rules: [
          "स्वग्रामCommunity मध्ये मद्यपान, धूम्रपान, तंबाखू, गुटखा, पानमसाला, अमली पदार्थ यांचे सेवन पूर्णतः प्रतिबंधित आहे.",
          "नियम मोडल्यास दंड लागू होईल व बुकिंग रद्द केली जाईल.",
        ],
      },
      {
        number: 7,
        title: "पार्किंग व वाहतूक व्यवस्था",
        rules: [
          "५०-60 चारचाकी वाहनांसाठी पार्किंगची सोय उपलब्ध आहे.",
          "जेसीबी / क्रेनला परवानगी नाही.",
          "सामान उतरवल्यानंतर सर्व वाहने बाहेरच पार्क करावी लागतील.",
          "आम्ही पर्यावरणपूरक वाहतूक पर्यायांना अधिक प्रोत्साहन देतो. वाहने कमीत कमी आणवित.",
          "आपल्या जबाबदारीवर पार्क करावीत.",
        ],
      },
      {
        number: 8,
        title: "पारंपरिक मराठी संस्कृती व पेहराव",
        rules: [
          "आपल्या लग्नाच्या थीममध्ये पाहुण्यांनी पारंपरिक मराठी पोशाख परिधान करावा असे अपेक्षित आहे.",
          "मराठी संगीत, सनई, शास्त्रीय संगीत, यांना अधिक प्रोत्साहन दिले जावे.",
        ],
      },
      {
        number: 9,
        title: "स्वच्छता व कचरा व्यवस्थापन",
        rules: [
          "शून्य कचरा धोरण (Zero Waste Policy) अवलंबले जाईल.",
          "प्लास्टिक वस्तू, डिस्पोजेबल प्लेट्स/कप यांना परवानगी नाही.",
          "Swagram staff not responsible for post-handover cleaning/clearance.",
          "Guest/vendors responsible for complete site clearance (Within 12 hours)",
          "Venue to be returned in original condition",
        ],
      },
      {
        number: 10,
        title: "वीजपुरवठा (Power Supply)",
        rules: [
          "फक्त कायमस्वरूपी लाईट्ससाठी जनरेटर बॅकअप उपलब्ध आहे.",
          "कार्यक्रमासाठी आवश्यक असलेल्या विशेष लाईटिंगसाठी जनरेटरची व्यवस्था पाहुणे / डेकोरेटर यांनी स्वतः करावी.",
          "नियमित सॉकेट्सवर जास्त वीजभाराची (हाय-लोड) उपकरणे वापरण्यास मनाई आहे.",
        ],
      },
      {
        number: 11,
        title: "पाहुणे व विक्रेते (Guest & Vendor) भेटी -- नियम",
        rules: [
          "बुकिंगनंतर पाहुणे किंवा विक्रेत्यांनी साइटला भेट देण्यापूर्वी Swagrama टीमला पूर्वसूचना देणे आवश्यक आहे.",
          "यामध्ये नियोजन बैठक, मोजमाप (measurement) किंवा तयारीसाठीच्या भेटींचा समावेश आहे.",
          "पूर्वसूचना न दिलेल्या भेटींना परवानगी दिली जाणार नाही, कारण सुरक्षितता व दैनंदिन व्यवस्थापन अबाधित ठेवणे आवश्यक आहे.",
        ],
      },
      {
        number: 12,
        title: "रद्द करण्याचे धोरण (Cancellation Policy)",
        rules: [
          "बुकिंगनंतर १ महिन्याच्या आत किंवा कार्यक्रमाच्या ३ महिने आधी रद्द केल्यास २५% रक्कम रद्द शुल्क म्हणून आकारली जाईल.",
          "वरील कालावधीनंतर रद्द केल्यास एकूण भाड्याच्या ५०% रक्कम Swagrama कडे राखून ठेवली जाईल.",
          "कार्यक्रमाच्या ३० दिवसांच्या आत रद्द केल्यास पूर्ण रक्कम Swagrama कडे राखून ठेवली जाईल.",
        ],
        note: "नैसर्गिक आपत्तीमुळे कार्यक्रम रद्द झाल्यास त्याची जबाबदारी Swagrama स्वीकारणार नाही. अशा परिस्थितीतही वरील रद्द करण्याचे धोरण लागू राहील.",
      },
    ],
    conclusion:
      "ही नियमावली स्वग्रामCommunity मध्ये शुद्ध, संस्कारशील आणि पर्यावरणपूरक आयुर्वेदिक पारंपरिक मराठमोळ्या विवाह संस्कृतीचे संरक्षण करेल.",
    finalNote:
      "आम्ही विवाह अत्यंत सहृदयतेने निश्चित यशस्वी करू याची आम्ही ग्वाही देत आहोत. त्याबद्दल आम्ही निश्चिंत राहावे. आपला व्यवहार मात्र वेळेत पूर्ण करावा ही कळकळीची विनंती.",
  },

  // Community Ceremony Planning
  communityCeremonyPlanning: {
    title:
      "स्वग्राम सांस्कृतिक संस्कार उत्सव समारम्भ - Community Cultural Values Ceremony Celebration",
    subtitle:
      "आयुर्वेद नैसर्गिक अग्रस्थान उत्सव - Ayurveda Natural Destination Ceremony",
    theme: "वायुमंडल उद्भूत उत्सव - Climate Positive Ceremony",
    type: "स्वउत्सव Community Ceremony",

    features: {
      title: "स्वग्राम - आमचे वैशिष्ट्य",
      description:
        "स्वग्राम हे शुद्ध पारंपारिक, भारतीय, कृषि, स्वास्थ्य आणि ग्रामीण संस्कृतीसोबतच कार्बन फुटप्रिंट ऐवजी कार्बन क्रेडिट करून निसर्गसंवर्धनास चालना देणारे एकमेव आयुर्वेदिक, शाकाहारी उत्सवस्थळ आहे!",
      vision:
        "हे नाव गावाकडील प्रसन्न आणि आपलेपणाच्या वातावरणाची जाणीव करून देते. विविध सांस्कृतिक कार्यक्रम आयोजित करून भारतीयत्व सिद्ध करत वसुधैव कुटुंबकम् कडे वाटचाल करणे आमचे उद्दिष्ट आहे.",
    },

    ayurvedicPrograms: {
      title:
        "स्वग्रामात साजरे करता येणारे आयुर्वेदिक व निसर्गसंवर्धक कार्यक्रम",
      note: "लग्न -- विवाह हा 16 ते 22 संस्कारांमध्ये सर्वात महत्वाचा संस्कार की जो सर्व जाती-धर्म-संप्रदाय म्हणजेच अखंड विश्वात केलाच जातो. याबद्दल आपण वरती संपूर्ण माहितीपत्रक असणारे कोटेशन तयार केलेले आहे. या व्यतिरिक्त स्वग्रामात साजरे करता येणारे शुद्ध शाकाहारी कार्यक्रम पुढील प्रमाणे:",
      programs: [
        {
          name: "लग्नसोहळ्यापूर्वीचे कार्यक्रम",
          description:
            "संगीत, मेहंदी, हल्दी - सर्व आयुर्वेदिक नैसर्गिक पद्धतीने",
        },
        {
          name: "नामकरण समारंभ",
          description: "पारंपारिक आयुर्वेदिक पोषणासह",
        },
        {
          name: "मुंज (उपनयन संस्कार)",
          description: "वैदिक परंपरेतील शुद्ध शाकाहारी आहार",
        },
        {
          name: "अभिष्टचिंतन सोहळा",
          description: "निसर्गसंवर्धन थीमसह",
        },
        {
          name: "पारिवारिक जमावेळ / नातेवाईकांचे भेटसमारंभ",
          description: "कृषि अनुभव समावेशासह",
        },
        {
          name: "निवृत्ती उत्सव / वाढदिवस समारंभ",
          description: "आयुष्यभर स्वस्थ राहण्याच्या सूत्रांसह",
        },
        {
          name: "मंगळगौरी उत्सव - हल्दी कुंकू",
          description: "नैसर्गिक हर्बल रंगांसह",
        },
        {
          name: "संगीत संध्या",
          description: "वायुमंडल शुद्धीकरणासाठी वैदिक संगीत",
        },
        {
          name: "कला, हस्तकला किंवा सांस्कृतिक कार्यशाळा",
          description: "नैसर्गिक रंग आणि माध्यमांचा वापर",
        },
        {
          name: "कॉर्पोरेट रिट्रीट / टीम बिल्डिंग",
          description: "कार्बन न्यूट्रल कार्यक्रम",
        },
        {
          name: "योग ध्यान आणि आजारानुसार रुग्ण शिबिरे",
          description:
            "आयुर्वेदिक जीवनशैलीसह निसर्ग ग्रामीण कृषि स्वास्थ्य पर्यटन संबंधित कार्यक्रम, वनस्पति दर्शन, औषधिकरण, ग्रंथवाचन अभ्यासवर्ग, शिबिरे, कॉन्फ्रेंस इत्यादि",
        },
      ],
    },

    festivals: {
      title: "भारतीय व महाराष्ट्रीय सण-उत्सव - आयुर्वेदिक पद्धतीने",
      description:
        "हे कार्यक्रम स्वग्रामच्या शुद्ध शाकाहारी आणि निसर्गसंवर्धक वातावरणात अधिक आपलेपणाने साजरे होतील.",

      maharashtrianFestivals: {
        title: "महाराष्ट्रातील प्रमुख सण (कार्बन क्रेडिट जनरेटिंग)",
        festivals: [
          {
            name: "दिवाळी",
            activities:
              "अभ्यंगस्नान (आयुर्वेदिक तेल), लक्ष्मीपूजन, नैसर्गिक फराळ कार्यशाळा, मातीचे दिवे निर्मिती",
          },
          {
            name: "होळी / शिमगा",
            activities:
              "नैसर्गिक रंग निर्मिती, होलिका दहन (फक्त नैसर्गिक सामग्री), पारंपरिक खेळ",
          },
          {
            name: "गुढीपाडवा",
            activities:
              "बांबू गुढी (स्थानिक उत्पादन), नैसर्गिक नववर्ष स्वागत, आयुर्वेदिक नीमपाकळी प्रसाद",
          },
          {
            name: "गणेशोत्सव",
            activities:
              "इको-फ्रेंडली गणेश मूर्ती बनवणे (शुद्ध मातीची), जैविक प्रसाद तयारी, कृत्रिम तलावात विसर्जन",
          },
          {
            name: "दसरा / विजयादशमी",
            activities:
              "शमी पूजन (वृक्षारोपणासह), आयुर्वेदिक औषधी वनस्पतींचे रोपण",
          },
          {
            name: "मकरसंक्रांत",
            activities:
              "जैविक तीळ-गूळ वाटप, सौर ऊर्जेचा वापर, पारंपरिक पतंग (नैसर्गिक कागदाची)",
          },
        ],
      },

      otherFestivals: {
        title: "इतर महत्त्वाचे सण (वायुमंडल उद्भूत पद्धतीने)",
        festivals: [
          {
            name: "नागपंचमी",
            activities:
              "नागाची पूजा (निसर्ग संवर्धनाच्या संदेशासह), आयुर्वेदिक दूध प्रसाद",
          },
          {
            name: "कृष्ण जन्माष्टमी",
            activities: "इको-फ्रेंडली दहीहंडी, जैविक दूध उत्पादनांचा प्रसाद",
          },
          {
            name: "हनुमान जयंती",
            activities: "हनुमान चालीसा पठण, औषधी वनस्पती पूजन",
          },
          {
            name: "आषाढी/कार्तिकी एकादशी",
            activities: "विठ्ठल पूजा, वारकरी अनुभव (शाकाहारी भोजन परंपरा)",
          },
          {
            name: "जिवती / हलषष्ठी",
            activities:
              "स्त्रियांचा पारंपरिक सण (आयुर्वेदिक स्वास्थ्य चर्चासह)",
          },
          {
            name: "नारळी पौर्णिमा / रक्षाबंधन",
            activities: "नैसर्गिक नारळ अर्पण, हस्तनिर्मित राखी",
          },
        ],
      },

      traditionalSamskaras: {
        title: "पारंपरिक संस्कार विधी - आयुर्वेदिक पद्धतीने",
        description:
          "हे कार्यक्रम स्वग्रामच्या शांत आणि पवित्र वातावरणात आयुर्वेदिक जीवनशैलीसह पार पडू शकतील.",
        ceremonies: [
          {
            name: "अन्नप्राशन",
            description:
              "बाळाला प्रथम जैविक अन्न भरवणे (आयुर्वेदिक पोषण मार्गदर्शनासह)",
          },
          {
            name: "गृहप्रवेश",
            description: "नवीन घरात प्रवेश (वास्तुशास्त्र आणि आयुर्वेदानुसार)",
          },
          {
            name: "वास्तुशांत",
            description:
              "घराच्या बांधकामातील वास्तुशांती विधी (पंचमहाभूत संतुलनासह)",
          },
        ],
      },
    },

    familyAndSocialGatherings: {
      title: "कौटुंबिक आणि सामाजिक मेळावे - निसर्गसंवर्धक पद्धतीने",
      description:
        "स्वग्राम लोकांना एकत्र येण्यासाठी एक स्वच्छ, हरित जागा ठरू शकते.",

      familyGatherings: {
        title: "कुटुंब एकत्र येणे (कार्बन न्यूट्रल)",
        events: [
          {
            name: "पारिवारिक स्नेह संमेलन",
            description:
              "अनेक वर्षांनी एकत्र येणारे कुटुंब (जैविक स्थानिक भोजनासह)",
          },
          {
            name: "वंश परिचय मेळावा",
            description:
              "एकाच वंशातील सर्व सदस्यांचा मेळावा (वंशवेलीच्या आयुर्वेदिक इतिहासासह)",
          },
        ],
      },

      socialCeremonies: {
        title: "सामाजिक समारंभ (Climate Positive)",
        events: [
          {
            name: "सत्कार समारंभ",
            description:
              "विशेष कार्य करणाऱ्या व्यक्तींचा सन्मान (नैसर्गिक भेटवस्तूंसह)",
          },
          {
            name: "महिला मंडळ / बचत गट मेळावे",
            description:
              "जिथे महिला एकत्र येऊन आयुर्वेदिक कार्यक्रमांचे आयोजन करू शकतील",
          },
        ],
      },
    },

    artCultureEducation: {
      title: "कला, संस्कृती आणि शिक्षण - आयुर्वेद आधारित",
      description:
        "स्वग्राम एक शिकण्याचे आणि कला सादर करण्याचे आयुर्वेदिक व्यासपीठ बनू शकते.",

      artAndCraft: {
        title: "कला आणि हस्तकला (नैसर्गिक माध्यमांसह)",
        activities: [
          {
            name: "भजन संध्या",
            description: "आध्यात्मिक संगीत सादरीकरण (चक्र संतुलनाच्या रागांसह)",
          },
          {
            name: "कला प्रदर्शन / गॅलरी",
            description:
              "स्थानिक कलाकारांना प्रोत्साहन (नैसर्गिक रंगांच्या कलाकृतीसाठी)",
          },
          {
            name: "वारली चित्रकला कार्यशाळा",
            description: "महाराष्ट्राची पारंपरिक कला (नैसर्गिक रंगांसह)",
          },
          {
            name: "मातीची भांडी बनवणे",
            description: "हस्तकला प्रशिक्षण (स्थानिक मातीचा वापर)",
          },
          {
            name: "लाकडी कोरीव काम",
            description: "पारंपरिक शिल्पकला (टिकाऊ लाकूड वापर)",
          },
          {
            name: "सांस्कृतिक नृत्य / नाट्य कार्यशाळा",
            description: "पारंपरिक नृत्य प्रकार (योगाधारित हालचाली)",
          },
        ],
      },

      educationalPrograms: {
        title: "शैक्षणिक आणि कौशल्य विकास (आयुर्वेदिक ज्ञान)",
        programs: [
          {
            name: "लेखन कार्यशाळा",
            description: "कविता, कथा लेखन (निसर्ग आणि आयुर्वेद विषयांवर)",
          },
          {
            name: "कौशल्य विकास शिबिरे",
            description: "आयुर्वेदिक कृषी, नैसर्गिक उत्पादन तंत्रे",
          },
          {
            name: "इतिहास/परंपरा चर्चा सत्र",
            description: "महाराष्ट्राच्या आयुर्वेदिक वारशाबद्दल चर्चा",
          },
        ],
      },
    },

    healthAndRetirement: {
      title: "आरोग्य आणि निवृत्ती - आयुर्वेद नैसर्गिक अग्रस्थान",
      programs: [
        {
          name: "नैसर्गिक उपचार कार्यशाळा",
          description: "शुद्ध आयुर्वेदिक औषधांची ओळख आणि तयारी",
        },
        {
          name: "पंचकर्म अनुभव",
          description: "आयुर्वेदिक शुद्धीकरण प्रक्रिया",
        },
        {
          name: "ध्यान साधनेचे वर्ग",
          description: "तणावमुक्तीसाठी (प्राणायामासह)",
        },
        {
          name: "सुवर्ण महोत्सव / अमृत महोत्सव",
          description: "दीर्घायुष्याची आयुर्वेदिक गुरुकिल्ली",
        },
      ],
    },

    corporatePrograms: {
      title: "कॉर्पोरेट आणि व्यावसायिक कार्यक्रम - कार्बन क्रेडिट जनरेटिंग",
      description:
        "स्वग्राम शहरी धकाधकीतून दूर, निसर्गरम्य आणि कार्बन न्यूट्रल वातावरणात कार्यक्रम आयोजित करण्याची संधी देते.",
      programs: [
        {
          name: "कार्यशाळा / प्रशिक्षण सत्र",
          description: "शुद्ध हवेत अधिक लक्ष केंद्रित करता येईल",
        },
        {
          name: "उत्पादन लाँच / सादरीकरण",
          description: "इको-फ्रेंडली आणि आकर्षक वातावरणात",
        },
        {
          name: "वरिष्ठ व्यवस्थापन बैठका",
          description: "धोरणात्मक चर्चेसाठी उपयुक्त (निसर्गाच्या शांततेत)",
        },
      ],
    },

    specialPrograms: {
      title: "विशेष आणि सानुकूलित कार्यक्रम - स्वउत्सव Community Ceremony",
      programs: [
        {
          name: "गावाकडची अनुभव शिबिरे",
          description:
            "मुलांना खऱ्या आयुर्वेदिक गावकडील जीवनशैलीचा अनुभव (जैविक शेती, गोधन, पारंपरिक खेळ)",
        },
        {
          name: "खाद्यसंस्कृती महोत्सव",
          description:
            "महाराष्ट्रीय पारंपारिक शुद्ध शाकाहारी खाद्यपदार्थांची ओळख",
        },
        {
          name: "कवी संमेलन / साहित्य सोहळा",
          description: "निसर्ग आणि आयुर्वेद विषयक साहित्यिकांना एकत्र आणणे",
        },
        {
          name: "चित्रपट महोत्सव / पुस्तक प्रकाशन",
          description: "आयुर्वेदिक जीवनशैली आणि निसर्गसंवर्धन विषयक",
        },
      ],
    },

    guidelinPrinciples: {
      title: "स्वग्राम साठी विशेष मार्गदर्शक तत्त्वे",
      principles: [
        {
          title: "आयुर्वेदिक संस्कृतीचा अनुभव",
          description:
            "सर्व कार्यक्रमांमध्ये आयुर्वेदिक जीवनशैली, शुद्ध शाकाहारी भोजन आणि नैसर्गिक उत्पादनांचा समावेश.",
        },
        {
          title: "निसर्गसंवर्धक सजावट",
          description:
            "कार्यक्रमाच्या ठिकाणी फक्त नैसर्गिक, बायोडिग्रेडेबल सामग्रीची सजावट.",
        },
        {
          title: "इको-फ्रेंडली पॅकेज डील्स",
          description:
            "सर्व कार्यक्रमांसाठी कार्बन न्यूट्रल पॅकेज (जैविक निवास, शुद्ध शाकाहारी भोजन, आयुर्वेदिक सेवा).",
        },
        {
          title: "डिजिटल प्रसार - कागदमुक्त",
          description:
            "सर्व माहिती डिजिटल माध्यमांतून प्रसारित करून कागदाचा वापर टाळणे.",
        },
        {
          title: "स्थानिक आयुर्वेदिक तज्ञांशी संपर्क",
          description:
            "कार्यक्रमांसाठी स्थानिक वैद्य, कृषी तज्ञ आणि निसर्गप्रेमींची मदत घेणे.",
        },
        {
          title: "कार्बन क्रेडिट जनरेशन",
          description:
            "प्रत्येक कार्यक्रमातून वृक्षारोपण, जैविक कचरा व्यवस्थापन आणि नवीकरणीय ऊर्जेचा वापर करून कार्बन क्रेडिट निर्माण करणे.",
        },
      ],
    },

    vision: {
      title: "स्वग्राम - आमचे वचन",
      description:
        '"स्वग्राम" - जिथे शुद्ध भारतीय परंपरा, आयुर्वेदिक जीवनशैली आणि आधुनिक पर्यावरणीय चेतना एकत्र येतात. प्रत्येक कार्यक्रम एक अविस्मरणीय, आरोग्यदायक आणि निसर्गसंवर्धक अनुभव बनतो!',
      mission:
        '"कार्बन फुटप्रिंट ऐवजी कार्बन क्रेडिट" - हे आमचे ध्येय आहे. आम्ही प्रत्येक कार्यक्रमाद्वारे निसर्गाला काहीतरी परत देण्याचा प्रयत्न करतो.',
      tagline:
        "स्वग्राम - एकमेव आयुर्वेदिक, शाकाहारी उत्सवस्थळ जे तुमच्या आत्म्याला, शरीराला आणि निसर्गाला एकसाथ पोषण देते!",
      conclusion:
        "आयुर्वेद नैसर्गिक अग्रस्थान उत्सव आणि वायुमंडल उद्भूत उत्सव या संकल्पनांसह, स्वग्राम भारतातील पहिले Climate Positive सांस्कृतिक केंद्र बनण्याचा मार्ग दाखवत आहे!",
    },
  },

  // 22 Samskaras (Complete Detailed Section)
  twentyTwoSamskaras: {
    title:
      "आपण विसरून गेलेल्या षोडस संस्कार आणि इतर संस्कारांची आठवण ठेऊन ते पुनर्जीवित करण्यासाठी स्वग्रामसोबत उभे राहावे..",
    introduction: "२२ संस्कारांचे सविस्तर वर्णन (परंपरागत + स्थानिक/पर्यायी)",
    note: 'पारंपरिक "षोडश संस्कार" (१६) सर्वाधिक मान्य आहेत. खालील यादीत त्यातील बहुतेक आणि काही स्थानिक/पर्यायी संस्कार (जसे गृहप्रवेश, श्राद्ध, संन्यास, उपवास-व्रत) समाविष्ट आहेत. स्थान, परंपरा, गुरु/पंडितांची शाळा, आणि कुटुंबीय प्रथा यानुसार विधी/वेळ बदलू शकतो.',

    samskaras: [
      {
        number: 1,
        marathi: "गर्भाधान",
        sanskrit: "गर्भाधान (Garbhādhāna)",
        hindi: "गर्भाधान (संतान प्राप्ति की शुरुआत)",
        english: "Garbhadhana (Rite of Conception)",
        purpose:
          "विवाहानंतर संतानोत्पत्तीपूर्वी शुद्ध संकल्प करून, धर्मानुसार संतती प्राप्तीची प्रार्थना करणे.",
        when: "विवाहोत्तर योग्य मुहूर्तास, ऋतुकालात.",
        rituals:
          "संकल्प, देवपूजन, गृहदेवतेचे स्मरण, मंत्रोच्चार (प्रजोत्पत्ती, कल्याणासाठी), आशीर्वाद.",
        modernContext:
          "आजच्या संदर्भात: आरोग्य-जागरूकता, कुटुंब नियोजन, वैद्यकीय सल्ल्यांसह हा संस्कार साध्या स्वरूपात केला जातो.",
      },
      {
        number: 2,
        marathi: "पुंसवन (गर्भ-आरोग्य)",
        sanskrit: "पुंसवन् (Puṃsavana)",
        hindi: "पुंसवन (गर्भ-स्वास्थ्य हेतु)",
        english: "Pumsavana (Foetal Rite)",
        purpose: "गर्भावस्थेतील बालकाच्या आरोग्य आणि कल्याणासाठी प्रार्थना.",
        when: "सामान्यतः गर्भावस्थेच्या 2-3ऱ्या महिन्यात.",
        rituals:
          "गर्भरक्षण मंत्र, मातृदेवता/आरोग्य-देवतेची पूजा; काही परंपरांत औषधी-घृताचा सुगंध/आचमन.",
        note: "आधुनिक काळात लिंग-निवडीशी कोणताही संबंध नाही; हे केवळ आरोग्य-कल्याणासाठीचा संस्कार आहे.",
      },
      {
        number: 3,
        marathi: "सीमन्तोन्नयन/सीमन्त (गर्भवती स्त्रीचा सन्मान)",
        sanskrit: "सीमन्तोन्नयन (Sīmanto-nnayana)",
        hindi: "सीमन्तोन्नयन/सीमन्त (गर्भवती का सम्मान)",
        english: "Simantonnayana/Seemantha (Parting of Hair)",
        purpose:
          "गरोदर मातेला मानसिक आधार, आरोग्यरक्षण, गर्भाच्या कल्याणासाठी मंगलविधी.",
        when: "4था, 6वा किंवा 8वा महिना (परंपरेनुसार).",
        rituals:
          "केश-पारणी (मागील भागापर्यंत कुंकवाने वाटी काढणे), मंगळगाणे, देवी-पूजन, नवमातृका पूजा, आशीर्वाद, फल-भोजन.",
        modernContext:
          "आजच्या संदर्भात: बेबी-शॉवरसारख्या उत्सवांबरोबर पारंपरिक मंत्र-पूजा.",
      },
      {
        number: 4,
        marathi: "गर्भसंरक्षण/प्राणायाम (पर्यायी/स्थानिक - गर्भ-सुरक्षा)",
        sanskrit: "प्राणायाम (Prāṇāyāma)",
        hindi: "गर्भसंरक्षण (गर्भ की सुरक्षा)",
        english: "Foetal Protection/Pranayama (Optional/Local)",
        nature:
          'शास्त्रीय "षोडश संस्कारां"मध्ये मानक नसले तरी काही कुटुंबांमध्ये गर्भरक्षण स्तोत्र, संकल्प, प्राणायाम/जप इ. केले जातात.',
        purpose: "आई-बाळाच्या आरोग्यासाठी प्रार्थना, मन:शांती.",
        rituals:
          "गर्भरक्षा स्तोत्र, आरोग्य-देवतेची पूजा, साधे श्वसन-ध्यान, परिवाराचे आशीर्वाद.",
      },
      {
        number: 5,
        marathi: "जातकर्म (नवजात शिशु स्वागत)",
        sanskrit: "जातकर्म (Jātakarma)",
        hindi: "जातकर्म (नवजात शिशु का स्वागत)",
        english: "Jatakarma (Newborn Rite)",
        purpose: "बाळाच्या जन्माचे स्वागत, आयुरारोग्याची प्रार्थना.",
        when: "जन्मानंतर लवकर (परिस्थितीनुसार पुढे ढकलतात).",
        rituals:
          "देवपूजन, बालकाच्या उजव्या कानाशी मंगल मंत्र, कुटुंब-देवतेचे स्मरण; परंपरेत मध-घृताचे स्पर्श/आचमन उल्लेखिले असले तरी आज वैद्यकीय दृष्ट्या हे प्रतीकात्मक केले जाते.",
        modernPractice: "स्वच्छता/सुरक्षा प्राधान्याने, प्रतीकात्मक मंत्र जप.",
      },
      {
        number: 6,
        marathi: "नामकरण (बालकाला नाव देणे)",
        sanskrit: "नामकरण (Nāmakaraṇa)",
        hindi: "नामकरण (बालक का नामकरण)",
        english: "Namakarana (Naming Ceremony)",
        purpose: "बालकाला नाव देणे (नक्षत्र/गोत्र/कुलाचारानुसार).",
        when: "11वा/12वा दिवस, किंवा निश्चित मुहूर्त.",
        rituals:
          "देवपूजन, कुलदेवता-पूजन, बालकाच्या कानाशी नाव उच्चारण, पत्रिकेनुसार नावाचे अक्षर निवडणे, आशीर्वाद.",
      },
      {
        number: 7,
        marathi: "निष्क्रमण (प्रथम घराबाहेर)",
        sanskrit: "निष्क्रमण (Niṣkramana)",
        hindi: "निष्क्रमण (प्रथम बार घर से बाहर)",
        english: "Nishkramana (First Outing)",
        purpose:
          "बाळाला प्रथमच घराबाहेर नेऊन देवदर्शन/सूर्यदर्शनाने जगाशी ओळख.",
        when: "सामान्यतः 4था महिना (परंपरेनुसार बदलू शकते).",
        rituals: "देवदर्शन, सूर्यनमस्कार/सूर्योपासना, आशीर्वाद, छोटेखानी पूजन.",
      },
      {
        number: 8,
        marathi: "अन्नप्राशन (प्रथम घन अन्न)",
        sanskrit: "अन्नप्राशन (Annaprāśana)",
        hindi: "अन्नप्राशन (प्रथम ठोस आहार)",
        english: "Annaprashana (First Solid Food)",
        purpose:
          "पहिल्यांदाच घन अन्न (धान्य) देणे; आरोग्य, आयुष्य, बुद्धीसाठी प्रार्थना.",
        when: "6वा महिना (काही ठिकाणी मुलगा 6वा, मुलगी 5वा).",
        rituals:
          'देवपूजन, बालकाला पायस/खीर/भाताचा पहिला घास, कुटुंबाचा आशीर्वाद; काही ठिकाणी "वस्तू-निवड" खेळ (भविष्यातील आवडीचे प्रतीक).',
      },
      {
        number: 9,
        marathi: "चूडाकरण/मुंडन (प्रथम केस कापणे)",
        sanskrit: "चूडाकरण / मुंडन (Cūḍākaraṇa / Muṇḍana)",
        hindi: "चूड़ाकरण/मुंडन (प्रथम बार बाल कतरना)",
        english: "Chudakarana/Mundan (Tonsure)",
        purpose: "अपवित्रता/जन्मकेश त्यागून शुद्धता, आरोग्य, दीर्घायुष्य.",
        when: "सामान्यतः 1ले/3रे/5वे वर्ष (परंपरेनुसार).",
        rituals: "देवपूजन, तीर्थ/मंदिरात किंवा घरी मुंडन, दान, आशीर्वाद.",
      },
      {
        number: 10,
        marathi: "कर्णवेध (कान टोचणे)",
        sanskrit: "कर्णवेध (Karṇavedha)",
        hindi: "कर्णवेध (कान छेदना)",
        english: "Karnavedha (Ear Piercing)",
        purpose: "कर्णभेदन करून आरोग्य/श्रवण कल्याण, अलंकरण.",
        when: "बाल्यावस्थेत शुभमुहूर्ताने.",
        rituals: "पूजा, निर्जंतुकीकरण करून कान छिद्र, औषधी लेप, आशीर्वाद.",
        note: "आज आरोग्यदृष्ट्या डॉक्टर/प्रोफेशनलकडून, स्वच्छतेची पूर्ण खबरदारी.",
      },
      {
        number: 11,
        marathi: "विद्यारंभ/वेदारंभ (शिक्षणाची सुरुवात)",
        sanskrit: "विद्यारम्भ / वेदारम्भ (Vidyārambha / Vedārambha)",
        hindi: "विद्यारम्भ/वेदारम्भ (शिक्षा की शुरुआत)",
        english: "Vidyarambha/Vedarambha (Education Initiation)",
        purpose:
          "शिक्षणाची औपचारिक सुरुवात (अक्षरारंभ), कधी कधी वेदाध्ययन प्रारंभ.",
        when: "विजयादशमी/आक्षय तृतिया/शुभ दिवस.",
        rituals:
          "सरस्वतीपूजन, गुरु-पूजन, मुलाच्या बोटाला अक्षर लिहिणे (तांदुळाच्या पाटीवर/फळ्यावर), आशीर्वाद.",
      },
      {
        number: 12,
        marathi: "उपनयन/यज्ञोपवीत (ब्रह्मचर्याश्रम प्रवेश)",
        sanskrit: "उपनयन (Upanayana)",
        hindi: "उपनयन/यज्ञोपवीत (ब्रह्मचर्य आश्रम प्रवेश)",
        english: "Upanayana/Yajñopavita (Sacred Thread Ceremony)",
        purpose:
          "ब्रह्मचर्याश्रम प्रवेश; अध्ययनाची दीक्षा; गायत्री-मंत्रोपदेश.",
        when: "पारंपरिक वयोगट---ब्राह्मण 8, क्षत्रिय 11, वैश्य 12 (आजकाल लवचिक).",
        rituals:
          "यज्ञोपवीत धारण, आचार्यसमोर दीक्षा, गायत्री-मंत्र, संध्यावंदनाचा आरंभ, भिक्षावृत्ती प्रतीकात्मक.",
        modernContext:
          "वैयक्तिक/कुलाचारानुसार; मुलींसाठी विद्यारंभ/दीक्षा समारंभ काही ठिकाणी स्वतंत्ररीत्या होतो.",
      },
      {
        number: 13,
        marathi: "गृहप्रवेश (नवीन घरात प्रवेश)",
        sanskrit: "गृहप्रवेश (Gṛhapraveśa)",
        hindi: "गृह प्रवेश (नए घर में प्रवेश)",
        english: "Griha Pravesha (Housewarming)",
        purpose: "नवीन घरात प्रवेशापूर्वी गृहशांती, समृद्धी, वैभवाची कामना.",
        when: "घर पूर्ण झाल्यावर/खरेदी नंतर शुभ मुहूर्त.",
        rituals:
          "वास्तु-पूजन, गणपती-हवन/होमर, कलश-स्थापना, दूध उकळणे, द्वार-लाक्षण, गो-पूजन (काही ठिकाणी), दान.",
        note: '"षोडश संस्कार" यादीत मानक नसले तरी स्थानिक परंपरेत महत्त्वपूर्ण गृहसंस्कार.',
      },
      {
        number: 14,
        marathi: "समवर्तन/स्नान (शिक्षण-समाप्ती)",
        sanskrit: "समवर्तन (Samāvartana)",
        hindi: "समवर्तन/स्नान (शिक्षा समाप्ति)",
        english: "Samavartana (Completion of Studies)",
        purpose:
          "गुरुकुल/शिक्षण-अवस्थेचा समारोप; गृहस्थाश्रमात प्रवेशाची तयारी.",
        when: "अध्ययन पूर्ण झाल्यावर.",
        rituals:
          "समावर्तन-स्नान, आचार्य/गुरूंची परिक्रमा, गुरुदक्षिणा, आशीर्वाद; नूतन जीवन-आचारांचे संकल्प.",
      },
      {
        number: 15,
        marathi: "विवाह (गृहस्थाश्रम आरंभ)",
        sanskrit: "विवाह (Vivāha)",
        hindi: "विवाह (गृहस्थ आश्रम का आरंभ)",
        english: "Vivaha (Marriage)",
        purpose:
          "गृहस्थाश्रम प्रारंभ; धर्म, अर्थ, काम यांच्या संतुलित पूर्ततेचा संकल्प.",
        when: "जुळणी, मुहूर्तशुद्धी नंतर.",
        rituals:
          "गणेशपूजन, कौलं/वरात, काशीयात्रा (काही ठिकाणी), कन्यादान, मंगळाष्टक/मंत्र, सaptapadi/फेरे, लग्नसूत्र/कुंकवाची ओटी, आशीर्वाद.",
        variations:
          "प्रादेशिक पद्धतीनुसार बदल (महाराष्ट्रीय, दक्षिण भारतीय, उत्तर भारतीय इ.).",
      },
      {
        number: 16,
        marathi: "गृहप्रवेश (दुबार उल्लेख - गृहशांती)",
        sanskrit: "गृहप्रवेश (Gṛhapraveśa)",
        hindi: "गृह प्रवेश (गृह शांति)",
        english: "Griha Pravesha (Housewarming)",
        note: "हा 13 क्रमांकाचा संस्कारच; तक्त्यात दुबार आला होता.",
        additionalDetails:
          "गृहशांती-हवन, नवग्रह-पूजा, मुख्य द्वाराला तोरण/नीम-मोऱ्या, अन्नदान/सत्कार; वास्तुदोष शमनासाठी विशेष शांती-कर्म.",
      },
      {
        number: 17,
        marathi: "गृहस्थाश्रम संस्कार (दैनंदिन/नित्यकर्म)",
        sanskrit: "गृहस्थाश्रम संस्कार (Gṛhastha-saṃskāra)",
        hindi: "गृहस्थ संस्कार (दैनिक कर्म)",
        english: "Grihastha Rites (Daily Duties)",
        nature: 'हा स्वतंत्र "षोडश संस्कार" नसून गृहस्थाश्रमींचे नित्य-कर्म.',
        components:
          "पंच-महायज्ञ (देव, ऋषि, पितृ, भूत, मानव यज्ञ), अग्निहोत्र (असेल तर), व्रत-उपवास, दानधर्म, अतिथी-सत्कार.",
        purpose: "कुटुंब, समाज, निसर्ग यांच्याशी ऋणानुबंध जपत संतुलित जीवन.",
      },
      {
        number: 18,
        marathi: "उपवास/व्रत (धार्मिक नियम पालन)",
        sanskrit: "उपवास / व्रत (Upavāsa / Vrata)",
        hindi: "व्रत/उपवास (धार्मिक नियमों का पालन)",
        english: "Vrata/Upavasa (Religious Vow/Fast)",
        nature: "परंपरागत शिस्तीचे पालन; नित्य/नैमित्तिक व्रत.",
        examples:
          "एकादशी, प्रदोष, संकष्टि, नवरात्री उपवास, सोमवार-शुक्रवार व्रत इ.",
        purpose: "इंद्रियनिग्रह, शारीर-मानसिक शुद्धी, ईश्वराभक्ति.",
        note: 'शास्त्रीय "संस्कार" यादीत मानक नसले तरी बहुतांश घरी महत्त्वाची परंपरा.',
      },
      {
        number: 19,
        marathi: "अंत्येष्टि (अंत्यसंस्कार)",
        sanskrit: "अन्त्येष्टि (Antyeṣṭi)",
        hindi: "अन्त्येष्टि (अंतिम संस्कार)",
        english: "Antyeshti (Funeral Rites)",
        purpose:
          "देहत्यागानंतर शास्त्रोक्त रीतीने अंतिम संस्कार; आत्माच्या शांतीसाठी प्रार्थना.",
        when: "मृत्यूनंतर तत्काळ/योग्य वेळी.",
        rituals:
          "शुद्धि-प्रक्रिया, मुखाग्नि/दाहसंस्कार, अस्थि-संग्रह व विसर्जन, त्र्यॊदशी/एकोणीसावी इ. कर्म.",
        note: "पर्यावरण/कायदे पाहून दाह/विद्युत-चिता/दफन इ. पद्धती; कुटुंब, संप्रदायानुसार फरक.",
      },
      {
        number: 20,
        marathi: "श्राद्ध/पितृकर्म (पितृ-तर्पण)",
        sanskrit: "श्राद्ध (Śrāddha)",
        hindi: "श्राद्ध/पितृकार्य (पितरों का तर्पण)",
        english: "Shraddha (Rites for Ancestors)",
        purpose: "पितृऋण पूर्तता, पितृदेवतेस तृप्ती; वार्षिक/नियतकालीन कर्म.",
        when: "मृत्यु-तिथी, पितृपक्ष, अमावस्या इ.",
        rituals: "तर्पण, पिण्डदान, ब्राह्मण-भोजन/दान, देव-ऋषि- पितृ स्मरण.",
        note: "अंत्येष्टीनंतरच्या क्रियांचा हा विस्तार; काही परंपरांत विशेष गृहशांतीसह.",
      },
      {
        number: 21,
        marathi: "संन्यास-प्रवेश (त्याग/मोक्ष मार्ग)",
        sanskrit: "संन्यास (Saṃnyāsa)",
        hindi: "संन्यास प्रवेश (त्याग का मार्ग)",
        english: "Sannyasa Initiation (Renunciation)",
        nature: "गृहस्थाश्रमानंतर वानप्रस्थ/संन्यास---त्यागमय जीवनाचा आरंभ.",
        purpose: "मोक्षोपासना, वैराग्य, अखंड साधना.",
        rituals:
          "विरजा-होम, दण्ड-स्वीकार, काषाय-वस्त्र, गुरुदीक्षा; संप्रदायानुसार विशिष्ट विधी.",
        note: "सामान्य गृहस्थांसाठी बंधनकारक नसून निवडक मार्ग.",
      },
      {
        number: 22,
        marathi: "इतर स्थानिक/क्षेत्रीय संस्कार (विशिष्ट परंपरा)",
        sanskrit: "विविध संस्कार (Vividha Saṃskāra)",
        hindi: "स्थानीय संस्कार (विशेष परंपराएं)",
        english: "Other Regional/Local Samskaras (Specific traditions)",
        examples: [
          {
            name: "ऋतूशुद्धि/रजस्वला-समारंभ",
            description:
              "मुलीच्या तारुण्यप्राप्तीचा संस्कार, देवी-पूजन, आशीर्वाद.",
          },
          {
            name: "केशांत/गोदाना",
            description:
              'तारुण्यप्राप्तीनंतर पहिल्यांदा मिशी/केस कापणे (काही शाळांमध्ये हा "षोडश"मध्ये असतो).',
          },
          {
            name: "गृहशांती, नूतन-वाहन/व्यवसाय-प्रवेश, क्षेत्र-प्रवेश, नूलुक्केट्टू (केरळ) इ.",
            description:
              "कुटुंब-परंपरा, प्रदेश, संप्रदाय, गुरुमत यानुसार भिन्न; उद्देश---नव्या टप्प्याचा मंगल आरंभ.",
          },
        ],
      },
    ],
  },

  // Contact Information
  contactInfo: {
    phone: "8888839950",
    email: "Swagrama.lavale@gmail.com",
    website: "www.swagramacommunity.com",
    thankYouNote: "धन्यवाद!",
  },
};
