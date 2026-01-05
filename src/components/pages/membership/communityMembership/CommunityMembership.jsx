import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import DiamondIcon from "@mui/icons-material/Diamond";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import LightModeIcon from "@mui/icons-material/LightMode";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import NatureIcon from "@mui/icons-material/Nature";
import SecurityIcon from "@mui/icons-material/Security";
import SpaIcon from "@mui/icons-material/Spa";
import StarsIcon from "@mui/icons-material/Stars";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CommunityMembership() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      scale: 0.8,
      opacity: 1,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
    });

    gsap.to(".floating-element", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.3,
    });
  }, []);

  const benefits = [
    {
      icon: <AutoAwesomeIcon />,
      text: "Entry to the world of wisdom. Eligible to do everything related to community.",
    },
    {
      icon: <DiamondIcon />,
      text: "Able to use web applications, Mobile App & use all modules of community.",
    },
    {
      icon: <StarsIcon />,
      text: "Allow to read - listen – join स्वग्रामCommunity health tips, blogs, appointments, presentations, lectures, animations, videos, trainings, Interaction, Chat, information, programs & regular current affairs.",
    },
    {
      icon: <WorkspacePremiumIcon />,
      text: "Allow to use all community tools & events: Self-Analysis, Healing Services, Do & Don'ts, 365 Community Activities, Community Ceremony, Joint Activities, Habitation In-out Living, Seasonal Tour, Commune, Barter, Feeds & Calendar.",
    },
    {
      icon: <CardMembershipIcon />,
      text: "Each & every person are Eligible for स्वग्रामग्रCommunityCard physical card.",
    },
    {
      icon: <VerifiedIcon />,
      text: "Premium membership & Privilege Services.",
    },
    { icon: <LocalHospitalIcon />, text: "Able to admit his own patient." },
    {
      icon: <SecurityIcon />,
      text: "Total medicine & medical support backup.",
    },
    {
      icon: <LightModeIcon />,
      text: "Software, Clinic, farm, village, hospital & everything setup support.",
    },
    {
      icon: <FavoriteIcon />,
      text: "Permissible to use all coupons & get discounts.",
    },
    { icon: <NatureIcon />, text: "Upgradation of membership is possible." },
    { icon: <SpaIcon />, text: "This is non-refundable or transferable." },
  ];

  const questions = [
    {
      title: "स्वात्मन्सदस्यत्व Self Membership",
      description: "Primary Basic 5% Discount Membership. Open for all.",
      discount:
        "Self-Primary / Basic : स्वात्मन्सदस्यत्व Self Membership ; 5% Discount Membership",
      benifits: ["Individual Only"],
    },

    {
      title: "स्वकर्मकरगणसदस्यत्व Community Staff Membership",
      description:
        "स्वकर्मकरगणसदस्यत्व Community Staff Membership : 20% Discount Membership Unlock a world of meaningful benefits tailored exclusively for the dedicated staff of Swagrama Community and our valued partners. This Premium Staff Membership is your gateway to a sustainable lifestyle, community-driven privileges, and holistic well-being.",
      discount:
        "Staff Family Membership – स्वकर्मकरगणसदस्यत्व Community Staff Membership : 20% Discount Membership",
      benifits: [
        "Mother",
        "Father",
        "Wife",
        "Husband",
        "Son",
        "Daughter",
        "Brother",
        "Sister",
      ],
    },

    {
      title: "स्वकीयसदस्यत्व Own Membership",
      description:
        "Single Person Membership : एकटे राहणारे, कुटुंबापासून खुप दूर असणारे, ज्यांना स्वतःच्या कुटुंबीयांची बिलकुल साथ नाही किंवा कुटुंबीयांना एकत्रित कुटुंब पद्धती मान्य नाही अशावेळी ज्यांना एकत्रित कुटुंब पद्धतीचा आनंद घ्यावयाचा आहे त्यांच्यासाठी ही सुविधा उपलब्ध आहे. Designed for Independent Living Souls. Feel Alone in the City? Longing for a Community That Feels Like Family? Swagrama Community introduces the स्वकीयसदस्यत्व, specially crafted for those who live alone due to career, life circumstances or personal choice — yet deeply desire the connection, warmth, and support of a true community.",
      discount:
        "Single Person Membership – स्वकीयसदस्यत्वOwnMembership: 20% Discount Membership",
      benifits: ["Individual Only"],
    },

    {
      title: "स्वकुटुम्बिनीसदस्यत्व Joint Family Membership",
      description:
        "Pure Joint Family Membership : Rekindling the Spirit of Living Together. 🏡 Bring Back the Power of Togetherness. In today’s fast-paced, fragmented world, the greatest casualty has been the traditional joint family system. Disconnected lives, isolated elders, overstressed nuclear homes, and soulless routines have made us forget the joy of living together. JnanaYogAyu rises as the answer — a village-inspired, health-conscious, family-first community that welcomes joint families seeking reconnection, health, and harmony. 🌱 Experience Real Family Living. From meals made together to healing through Ayurveda, yoga, and community farming, Swagrama offers the ecosystem to live not just as a family but as a way of life. Make your “Joint Family of Nature Lovers” through this membership. A barter-based community सध्याच्या काळात सर्वात जास्त नुकसान कोणाचे झाले तर कुटुंब व्यवस्थेचे. अत्यंत असंतुलित आणि आरोग्य ढासळलेल्या न्यूक्लियर कुटुंब पद्धतीमुळे हे सदस्यत्व काळाची गरज बनणार आहे. जसे वृद्धासाठी वृद्धाश्रम, गाईसाठी गोशाला, अनाथासाठी अनाथश्रम तसे विभक्त कुटुंबासाठी एकत्रित कुटुंब पद्धतीचा स्वीकार करणारे स्वग्राम ही काळाची गरज असणार आहे. कुटुंबात एकत्र राहून नेमके काय करायचे हेच मुळी विसरल्याने घरे अक्षरशः दुभंगली आहेत. प्रत्येकाची मूड सांभाळणारी आणि भयंकर खर्च करणारी हॉटेल झाली आहेत. एकदा का घरात आजार घुसला की मात्र कोणीही नसते मदतीला. याठिकाणी आपले हरविलेले गाव, एकत्रित कुटुंब पद्धतीचे घर, माहेर, सासर ज्यांना हवे आहे. ज्यांना एकत्रित कुटुंब पद्धतीसोबत आरोग्य हवे आहे त्यांच्यासाठी ही सोय उपलब्ध आहे.",
      discount:
        "Joint Family Membership – स्वकुटुम्बिनीसदस्यत्व Joint Family Membership : 20% Discount Membership",
      benifits: [
        "Self (Group Leader)",
        "Mother",
        "Father",
        "Wife",
        "Husband",
        "Son (Up to 2)",
        "Daughter (Up to 2)",
      ],
    },

    {
      title: "स्वआदिवैद्यसदस्यत्व Root Healer (Vaidya) Membership",
      description:
        "Ayurveda Vaidya Family Membership – Pure Ayurveda Vaidya Family Membership. Add more than 2 family members compulsory. Get 25% Discount on all goods, products, Instruments & Services. For Ayurvedic practitioners, this membership is more than a privilege—it’s a gateway to living the Ayurvedic life you truly believe in. Practicing Ayurveda successfully in your clinic doesn’t always mean living the Ayurvedic lifestyle. In fact, growing professional commitments often push practitioners further away from the natural way of living. The Root Healer Membership is your path back to nature.This exclusive plan is designed to help Ayurvedic doctors and their families rediscover the holistic life they envision—a village rooted in Ayurveda, a natural home, a community clinic, herbal forests, cowsheds, medicine preparation centers, and a vibrant ecosystem where the essence of Ayurveda thrives. स्वआदिवैद्यकुटुम्बिनीसदस्यत्व Root Healer’s Family Membership: स्वआदिवैद्यसदस्यत्व Root Healer Membership : 25% आयुर्वेदीय वैद्यासाठी हे सदस्यत्व म्हणजे आयुष्यातील चिंताच संपली. फक्त आयुर्वेदिक प्रॅक्टिसमध्ये यशस्वी होणे म्हणजे आयुर्वेदीय जीवनशैली जगणे नव्हे. किंबहूना वाढत चाललेल्या प्रॅक्टिसमुळे वैद्य आयुर्वेदिक जीवनशैलीमुळे दूर जात आहेत त्यामुळे त्यांच्यासाठी ही मेंबरशिप म्हणजे एक पर्वणी आहे. त्याच्या स्वप्नातील आयुर्वेदिक गाव, घर, चिकित्सालय, आतुरालय, वनोषधि जंगल, गोशाला, औषधिकरण इत्यादि सर्वकाही इथे उपलब्ध आहे. वैद्याला जगण्यासाठी हवी असणारी नैसर्गिक आयुर्वेदीय जीवनशैली जगायला मिळणार. तो आदर्श त्याच्या कुटुंबीयांना आणि रुग्णांना सुद्धा अनुभवायला मिळणार जेणेकरून वैद्यप्रति दृढ विश्वास निर्माण होईल. वैद्य स्वतःला हवी असणारी सर्वप्रकारची वर्षभरची शुद्ध, विष-भेसळमुक्त वनोषधी, पंचगव्य इथून स्वतः सहभागी होऊन बनवून घेणार. वैद्य स्वतःचे रुग्ण स्वतःच्या पद्धतीने अॅडमिट करु शकणार. खासकरून वैद्य स्वतःच्या मुलांना पुढील पिढ्यांसाठी आदर्श वैद्य बनवू शकणार. मुलांसाठीचे गुरुकुल आयुर्वेद पदवी मिळण्यापूर्वीच आयुर्वेद पारंगत बनविणार.. \nTotal medicine & medical support backup.",
      discount:
        "Software, Clinic, farm, village, hospital & everything setup support. Self Ayurveda Vaidya Family Membership – स्वआदिवैद्यसदस्यत्व Root Healer Membership : 25% Discount Membership",
      benifits: [
        "Self (Group Leader)",
        "Mother",
        "Father",
        "Wife",
        "Husband",
        "Son (Up to 2)",
        "Daughter (Up to 2)",
      ],
    },

    {
      title:
        "स्वभिषज्सदस्यत्व / स्वभिषज्कुटुम्बिनीसदस्यत्व Physician’s Membership",
      description:
        "Physician Family Membership -& स्वभिषज्कुम्बिनीसदस्यत्व Physician’s Family Membership : स्वभिषज्सदस्यत्व Physician’s Membership : Physician or All other pathy Doctor Family Membership. Facility. Embrace a Holistic Lifestyle with the Physician’s Membership In today's fast-paced medical environment, physicians often find themselves distanced from the very essence of health and wellness they advocate. The Physician’s Membership offers a sanctuary return to nature, community, and the foundational principles of holistic living. Membership Highlights: Inclusive for All Medical Practitioners: Whether you're trained in Ayurveda, Allopathy, Homeopathy, or any other medical system, this membership welcomes you and your family to a community dedicated to natural living. Revitalize Your Practice and Lifestyle: The Physician’s Membership is more than a professional affiliation; it's a commitment to a lifestyle that harmonizes your medical practice with the rhythms of nature and community. Rediscover the joy of healing in an environment that supports both personal well-being and professional growth. Take the first step towards a more balanced and fulfilling life. Embrace the Physician’s Membership and become part of a community dedicated to holistic health and sustainable living. \n डॉक्टर म्हंटल की आजार आणि औषध मग तो कोणत्याही पॅथीचा का असेना. सर्वच डॉक्टरांची सगळ्यात मोठी खंत म्हणजे तो जे ग्रंथात वाचतो, डिग्री घेताना शिकतो, रुग्णांना सांगतो आणि लेक्चरमध्ये सांगतो त्या प्रकारची आरोगयपूर्ण जीवनशैली जगण्यासाठी सध्या कुठेच जागा उपलब्ध आहे ना तशा प्रकारचा आहार उपलब्ध आहे. तो बोलतो एक आणि त्याला करावे लागते वेगळे. तो स्वतःसाठी आणि स्वतःच्या कुटुंबासाठी आरोगयपूर्ण जीवनशैली देण्याच्या प्रयत्नात असतो मुळी परंतु ते शक्य नसल्याने दुखी असतो. अशा सर्वच पॅथीच्या डॉक्टर मंडळीसाठी आणि त्यांच्या कुटुंबियांसाठी ही सेवा उपलब्ध आहे. त्याच्या स्वप्नातील आयुर्वेदिक गाव, घर, चिकित्सालय, आतुरालय, वनोषधि जंगल, गोशाला, औषधिकरण इत्यादि सर्वकाही इथे उपलब्ध आहे.. चोवीस तास तो पेशंटसोबत असतो. त्याचा संपर्क सातत्याने औषधाशी असतो. त्यामुळे सध्या सर्वच डॉक्टर आरोग्य, स्वास्थ्य, वेलनेस यापासून कोसो दूर आहेत. डॉक्टरसुद्धा एक माणुस आहे. त्यालाही वाटते निसर्गाच्या सान्निध्यात जावे. एकत्रित कुटुंबात राहावे. आजकाल प्रत्येक डॉक्टरला वाटते की आपल्या कुटुंबीयांनी - रुग्णांनी सुद्धा निसर्ग, एकत्रित कुटुंब पद्धती आणि आयुर्वेदीय नैसर्गिक जीवनशैलीचा अनुभव घ्यावा. डॉक्टरांच्या स्वप्नातील आयुर्वेदिक गाव, घर, चिकित्सालय, आतुरालय, वनोषधि जंगल, गोशाला, औषधिकरण इत्यादि सर्वकाही इथे उपलब्ध आहे. डॉक्टरांना जगण्यासाठी हवी असणारी नैसर्गिक आयुर्वेदीय जीवनशैली जगायला मिळणार. तो आदर्श त्याच्या कुटुंबीयांना आणि रुग्णांना सुद्धा अनुभवायला मिळणार जेणेकरून डॉक्टरप्रति दृढ विश्वास निर्माण होईल. डॉक्टर स्वतःला हवी असणारी सर्वप्रकारची वर्षभरची शुद्ध, विष-भेसळमुक्त अन्नधान्य, घाण्याचे तेल, देशी गुळ, तुप, वनोषधी, पंचगव्य इथून स्वतः सहभागी होऊन बनवून घेणार. डॉक्टर स्वतःचे रुग्ण स्वतःच्या पद्धतीने अॅडमिट करु शकणार. खासकरून डॉक्टर स्वतःच्या ज्ञानामध्ये येथील गुरुकुलामध्ये सातत्याने सहभागी होऊन भर टाकणार. इथे विश्वातून तज्ञ गुरु येणार असल्याने तोही एकदिवस गुरु बनण्याच्या पात्रतेचा बनणार. स्वतःच्या मुलांना पुढील पिढ्यांसाठी आदर्श वैद्य बनवू शकणार. मुलांसाठीचे गुरुकुल आयुर्वेद पदवी मिळण्यापूर्वीच आयुर्वेद पारंगत बनविणार. \nPure Physician or All other pathy Doctor & Doctor's Family Membership.\nAdd more than 2 family members compulsory.\nGet 25% Discount on all goods, products, Instruments & Services. \nAble to admit own patient. \nTotal medicine & medical support backup. \nSoftware, Clinic, farm, village, hospital & everything setup support.",
      discount:
        "Facility Available: Self Physician Family Membership - स्वभिषज्सदस्यत्व Physician’s Membership : 25% Discount Membership",
      benifits: [
        "Self (Group Leader)",
        "Mother",
        "Father",
        "Wife",
        "Husband",
        "Son (Up to 2)",
        "Daughter (Up to 2)",
      ],
    },

    {
      title:
        "स्वसन्तोषणीयसदस्यत्व Propitious Optimistic Membership (Director / Partner)",
      description:
        "Directors / Partners of Swagrama Community & their immediate family members:  30% Discount MembershipA prestigious and privileged membership designed exclusively for the Directors, Partners, and their families of the Swagram Community Organization. This membership is reserved for: Swagram Directors Organizational Partners. Immediate Family Members of Directors & Partners This 5-year membership recognizes the leadership and foundational role of Directors and Partners in building and nurturing Swagram. It ensures their families continue to benefit from the values and vision they helped shape.",
      discount:
        "Director Family Membership - स्वसन्तोषणीयसदस्यत्व Propitious Optimistic Membership 30% Discount Membership",
      benifits: [
        "Self (Group Leader)",
        "Mother",
        "Father",
        "Wife",
        "Husband",
        "Son (Up to 2)",
        "Daughter (Up to 2)",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen   overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse floating-element" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse floating-element" />
        <div className="absolute -bottom-32 left-40 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse floating-element" />
      </div>

      <div className="relative z-10  mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4"
        >
          <div className="relative bg-gradient-to-br from-white/80 to-lime-50/80 backdrop-blur-xl rounded-2xl p-8 border border-lime-200 shadow-xl">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-lime-500 via-green-500 to-lime-500 rounded-full p-4 shadow-lg">
                <EmojiNatureIcon className="text-3xl text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-green-700 to-lime-700 bg-clip-text text-transparent pt-4">
              स्वग्रामसदस्यत्व Community Membership
            </h2>
            <p className="text-green-900 text-base leading-relaxed text-center">
              A step towards wellness and organizational upliftment. समाजातून
              आरोग्यापूर्ण सेवेत आणार विश्वसनीय एक स्वयंपूर्ण गांव. A
              self-dependent village in the world leading from disease to
              health. सोपी आणि व्यवहारिक वैद्यकीय सेवा आणि सराव करण्यासाठी
              उपयोगी!
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <div className="relative bg-gradient-to-br from-lime-100/80 to-green-100/80 backdrop-blur-xl rounded-3xl p-10 border border-lime-300 shadow-2xl">
            <div className="absolute -top-5 -right-5 w-40 h-40 bg-gradient-to-br from-lime-300 via-green-300 to-lime-300 rounded-full blur-3xl opacity-50" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <NatureIcon className="text-4xl text-green-600" />
                <h3 className="text-2xl font-bold text-green-800">
                  जनता: प्रत्येकजण निसर्गाशी
                </h3>
              </div>
              <div className="prose prose-lg text-sm max-w-none text-green-900 leading-relaxed space-y-4">
                <p>
                  जनता: प्रत्येकजण निसर्गाशी जवळीक साधारा निसर्गमैत्री आहे.
                  रहाणपण शुद्ध निसर्म, अन्नपाणी आणि दिन-ऋतुयेत त्याने
                  घालविल्याने त्यालाही निसर्गाच्या साहित्यात जावें, एकनित्र
                  कुटुंबात राहावे, विहीरीतील पाणी प्यावे, सनमेवा खावा असे वाटते.
                  आपल्या कुटुंबधानी सुद्धा निसर्म, एकनित्र कुटुंब पद्धती आणि
                  आयुर्वेदीय नैसर्गिक जीवनशैलीचा अनुभव घ्यावा असे त्याला वाटत
                  असते. त्याच्या स्वभातील आयुर्वेदिक गांव, घर, चिकित्सालय,
                  आतुरालय, वनौषधि जंगल, गोशाला, औषधिकरण इत्यादि सर्वेकाही त्याला
                  अनुभवायचे असते. हजारो वर्षे रोकड़ा पिढ्यांनी 100 वर्षे
                  जगण्यासाठी हवी असणारी नैसर्गिक आयुर्वेदीय जीवनशैली जगायची
                  असते.
                </p>
                <p>
                  जणकरस्त आपल्यापाती सर्वाचा छद विश्वास निर्माण होईल. आजकाल
                  मोठाली बोती पुन्हा वरील बायका चालवा पाहण्यात येते ती ही
                  स्वग्राम चालवा पाहत आहेत त्या स्वग्राम बरोबर ३६५ दिवस १०० वेळ
                  जरुर स्वग्राम चालवा पाहत आहेत. रवाव्हे पन्नाशी अशाही
                  देतात्यांकड़े उपलब्ध नाही उपलब्ध होणार? कोणाचे मॉडेल तर कोणाचे
                  मार्गदर्शन गाइड तर साहाय्य जणा, स्वतःचे गांव तर बहुताशी खेड़ता
                  राहणारीचे सुद्धा गांव हरवितेच आहे. वरल हे सगळेच जसेच्या तसे
                  तुम्हाला स्वग्राममधे मिळेल. सहभागी व्हा दैवाणेवाण करण्यासाठी.
                </p>
                <p>
                  अट्विशेष नाडी परीक्षा आणि वैद साल्याने स्वतःचे कुटुंब नक्की
                  आरोग्यपूर्ण ठेवण्याची संधी. तुमच्या आत्तामधे रुपाले.ल्या कळा
                  आणि ज्ञानाला जागृत करणार स्वप्नरुकूल इथे उपलब्ध आहे. की
                  ज्यामधे 100 वर्षे जगण्यासाठी पूर्क असा जीवनशैलीला पूर्ण करणार
                  10 क्षेत्रातील 20 कोर्स आहेत. ते चार महीने देवग्राममधे चालतात.
                  सातत्याने सहभागी होऊन विश्वातील तब्बे गुरुच्या साधियात राहून
                  स्वतःचे एकदिवस गुरु बनण्याच्या पातळीला बनणार असाल तर देवग्राम
                  पूरेसे आहे.
                </p>
                <p>
                  स्वतःच्या मुलंना पुढील पिक्षासाठी तुमच्यातील आदर्श
                  दाखवायेप्रमाणे नाही सोधी. सर्व प्रपंचाचा अनुभव थोडाक्यात घेणार
                  आहे असाल तर स्वग्रामुट्ट्या येथे व्यावसायिकी देखील संगाणित्र
                  होता आहे. हे, मुकुच्या मिळकतीचा रीतसरी, येथा, गोपाळक, बरळेदार
                  आणि निसर्गप्रेमी कर्माचे नक्कीचे वाटणारा हे सदस्यराष्ट्र एकदे
                  म्या किंवा कुटुंबासोबत म्या.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <div className="relative bg-gradient-to-br from-yellow-100/80 to-amber-100/80 backdrop-blur-xl rounded-3xl p-10 border border-yellow-300 shadow-2xl">
            <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-gradient-to-br from-yellow-300 to-amber-300 rounded-full blur-3xl opacity-50" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <HomeIcon className="text-4xl text-amber-700" />
                <h3 className="text-2xl font-bold text-amber-800">
                  एक व्यक्तीला एक कुटुंब
                </h3>
              </div>
              <div className="prose prose-lg text-sm max-w-none text-amber-900 leading-relaxed space-y-4">
                <p>
                  एक व्यक्तीला एक कुटुंब लागते. एका कुटुंबाला एकनित्र कुटुंब
                  पद्धती गरजेची आहे. अशी अनेक एकनित्र कुटुंबे आपल्या गरजा
                  भागविण्यासाठी एकत्र येतात तावेळी एक समाज बनतो. असा समाजाचा
                  समुदाय एका उद्देशाने एकत्र आल्यावर एक ग्राम स्वग्राम बनते.
                  प्रत्येकाला एवढे हवाकाचा जागा मिळेत. माहेर मिळेत. सुट्टाला
                  मागाचे घर त्या गावात असते. म्हातारपण सुट्ट तरुणारास्स्स
                  जगातेण्याचा तावंद त्या गावात असते.
                </p>
                <p>
                  कामाने धकलेल्याला हे गाव विश्रांती देते. उन्हे-वारा-पावसात
                  दाहूनेसुद्धा आरोग्यप्राप्ती या गावात होते. विहिरीत पाहणे,
                  झोडावर चढणे, शेतात काम करणे. बीज साबवने अशी अनेक कार्ये या
                  गावात होतात. असा अनेक कुटुंबांना एकनित्र करणारे असे गाव म्हणजे
                  स्वग्राम!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-10">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <WorkspacePremiumIcon className="text-7xl text-lime-600" />
            </motion.div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-lime-700 via-green-700 to-lime-700 bg-clip-text text-transparent mb-4">
              स्वसदस्यत्व Membership
            </h2>
            <p className="text-green-800 text-sm max-w-3xl mx-auto">
              स्वग्राम Community is a self-dependent village. It's a practical
              experience of need base life. So, you must register first for
              online journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="feature-card relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lime-300/40 to-green-300/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div
                  className={`relative bg-gradient-to-br from-white/80 to-lime-50/80 backdrop-blur-xl rounded-2xl p-4 border border-lime-200 shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 bg-gradient-to-br from-lime-500 to-green-500 rounded-xl p-2 shadow-lg"
                    >
                      {React.cloneElement(benefit.icon, {
                        className: "text-3xl text-white",
                      })}
                    </motion.div>
                    <p className="text-green-900 text-sm leading-relaxed flex-1">
                      {benefit.text}
                    </p>
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lime-200/0 via-green-200/20 to-lime-200/0"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <div className="relative ">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-lime-300 to-green-300 rounded-full blur-3xl opacity-30" />
            <div className="relative">
              <div className="text-center mb-4">
                <h3 className="text-3xl font-bold text-green-800 mb-2">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block"
                  >
                    <FavoriteIcon
                      fontSize=""
                      className="text-4xl text-green-600"
                    />
                  </motion.div>
                  स्वात्मन्सदस्यत्व Self Membership
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block"
                  >
                    <FavoriteIcon
                      fontSize=""
                      className="text-4xl text-green-600"
                    />
                  </motion.div>
                </h3>
              </div>
              <div className="grid gap-5">
                {questions.map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    {/* Glow background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-300/40 via-green-300/40 to-emerald-300/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-white/90 to-lime-50/90 backdrop-blur-xl rounded-2xl p-5 border-l-4 border-lime-600 shadow-xl">
                      {/* Header */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-gradient-to-br from-lime-500 to-green-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">
                            {index + 1}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-green-900 font-bold text-base leading-snug">
                            {question.title}
                          </h3>
                          <p className="mt-1 text-xs text-green-700 font-medium">
                            {question.discount}
                          </p>
                        </div>
                      </div>
                      <p className="mt-2 ml-16 text-sm text-gray-700 leading-relaxed">
                        {question.description}
                      </p>
                      {question.benifits?.length > 0 && (
                        <div className="mt-2 ml-16 flex flex-wrap gap-2">
                          {question.benifits.map((benefit, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium text-green-900 bg-gradient-to-r from-lime-200 to-green-200 rounded-full shadow-sm"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-green-400 to-lime-400 rounded-full blur-2xl opacity-40" />
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative bg-gradient-to-r from-lime-500 to-green-500 rounded-full px-6 py-2 shadow-2xl"
            >
              <p className="text-white text-2xl font-bold flex items-center gap-3">
                <SpaIcon className="text-xl" />
                Join स्वग्राम Community for a healthier tomorrow
                <SpaIcon className="text-3xl" />
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
