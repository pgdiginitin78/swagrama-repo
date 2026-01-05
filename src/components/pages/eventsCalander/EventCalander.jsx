import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const eventsData2026 = [
  {
    month: "January",
    date: "01/01/2026",
    serviceName: "New Year",
    description: "New Year celebrations",
    benefits: "Joy, wellness, community bonding",
    value: 2000,
  },
  {
    month: "January",
    date: "02/01/2026",
    serviceName: "स्वआदिवैद्यगुरुकुल RootHealerCommune",
    description: "Traditional healer commune",
    benefits: "Healing knowledge, wellness practices",
    value: 2000,
  },
  {
    month: "January",
    date: "03/01/2026",
    serviceName: "योगगुरुकुल YogaUniversalHealerCommune",
    description: "Yoga and wellness commune",
    benefits: "Physical, mental, spiritual wellness",
    value: 2000,
  },
  {
    month: "January",
    date: "04/01/2026",
    serviceName: "स्वश्रेष्ठवैद्यगुरुकुल SuperiorHealerCommune",
    description: "Advanced healer commune",
    benefits: "Deep Ayurveda & holistic learning",
    value: 2000,
  },
  {
    month: "January",
    date: "09/01/2026 & 12/01/2026",
    serviceName: "स्वामी विवेकानंद जयंती & राष्ट्रीय युवा दिन",
    description:
      "Celebrations of Swami Vivekananda Jayanti & National Youth Day",
    benefits: "Youth empowerment, cultural learning",
    value: 2000,
  },
  {
    month: "January",
    date: "11/01/2026",
    serviceName:
      "चिकित्सभिषकगुरुकुल PhysicianHealerCommune / NaturalCentenarianLifestyleRituals / आयुर्वेद LifeKnowledge",
    description: "Commune on physician healing & longevity practices",
    benefits: "Knowledge of natural lifespan, Ayurveda lifestyle",
    value: 2000,
  },
  {
    month: "January",
    date: "12/01/2026",
    serviceName: "सेवाशुश्रूषकगुरुकुल ServiceCommune",
    description: "Commune for volunteer and service activities",
    benefits: "Social service, team collaboration, learning",
    value: 2000,
  },
  {
    month: "January",
    date: "13/01/2026",
    serviceName: "लोहडी Lohri",
    description: "Lohri festival celebration",
    benefits: "Cultural awareness, community bonding",
    value: 2000,
  },
  {
    month: "January",
    date: "14/01/2026",
    serviceName: "Makara Sankranti / Pongal / Bhogi",
    description: "Harvest festival celebrations",
    benefits: "Cultural learning, seasonal wellness",
    value: 2000,
  },
  {
    month: "January",
    date: "18/01/2026",
    serviceName: "स्थापत्यवेदगुरुकुल ArchitectCommune",
    description: "Commune on architecture and design",
    benefits: "Skill learning, creativity",
    value: 2000,
  },
  {
    month: "January",
    date: "19/01/2026",
    serviceName: "युग्मसङ्गम CoupleUnion",
    description: "Couple union ceremonies",
    benefits: "Strengthens marital bonds",
    value: 2000,
  },
  {
    month: "January",
    date: "20/01/2026",
    serviceName: "गर्भसंस्क्रिया UnionConsecration",
    description: "Family consecration ceremony",
    benefits: "Blessings, family harmony",
    value: 2000,
  },
  {
    month: "January",
    date: "23/01/2026",
    serviceName: "वसन्त पञ्चमी / स्वविद्यारम्भ उत्सव Festival: सरस्वती पूजन",
    description: "Vasant Panchami & study festival with Saraswati Puja",
    benefits: "Education, cultural learning",
    value: 2000,
  },
  {
    month: "January",
    date: "25/01/2026",
    serviceName:
      "बालकपालकसहकुटुम्बसङ्कुल YouthGuardianJtFamilyCamp / स्वसूर्यस्नान उत्सव Festival",
    description: "Family camp + Sun Bath festival + multiple observances",
    benefits: "Wellness, cultural awareness, community health",
    value: 2000,
  },
  {
    month: "January",
    date: "26/01/2026",
    serviceName: "गणतंत्र दिन Republic Day",
    description: "National Republic Day celebrations",
    benefits: "Civic awareness, cultural pride",
    value: 2000,
  },
  {
    month: "January",
    date: "30/01/2026",
    serviceName: "गांधी पुण्यतिथि",
    description: "Mahatma Gandhi remembrance",
    benefits: "Cultural learning, reflection",
    value: 2000,
  },

  {
    month: "February",
    date: "01/02/2026",
    serviceName: "गुरु रविदास जयंती",
    description: "Celebration of Guru Ravidas Jayanti",
    benefits: "Cultural, Spiritual",
    value: null,
  },
  {
    month: "February",
    date: "01/02/2026",
    serviceName: "स्वसुवैद्यगुरुकुल WellHealerCommune",
    description: "Commune session for holistic wellness",
    benefits: "Wellness, Educational",
    value: 2000,
  },
  {
    month: "February",
    date: "04/02/2026",
    serviceName: "Cancer Day",
    description: "Awareness and health-focused activities",
    benefits: "Educational, Wellness",
    value: 2000,
  },
  {
    month: "February",
    date: "06/02/2026",
    serviceName: "स्वआदिवैद्यगुरुकुल RootHealerCommune",
    description: "Healing with traditional root-based methods",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "February",
    date: "07/02/2026",
    serviceName:
      "सात्म्याहारगुरुकुल WholesomeDietCommune / संस्कारपाकशालागुरुकुल",
    description: "Learning wholesome diet and cooking skills",
    benefits: "Educational, Wellness",
    value: 2000,
  },
  {
    month: "February",
    date: "08/02/2026",
    serviceName:
      "कृषकभिषजगुरुकुल Farm Healer Commune / Community Farming / CowHealer Commune",
    description: "Farm, cow care, and forest wellness practices",
    benefits: "Educational, Cultural, Wellness",
    value: 2000,
  },
  {
    month: "February",
    date: "11/02/2026",
    serviceName: "सुकृत्गुरुकुल Skilful Worker Commune",
    description: "Skill development and community craft production",
    benefits: "Educational, Cultural",
    value: 2000,
  },
  {
    month: "February",
    date: "12/02/2026",
    serviceName: "महर्षि दयानंद सरस्वती जयंती",
    description: "Commemoration of Maharshi Dayanand Saraswati",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "February",
    date: "14/02/2026",
    serviceName: "युग्मसङ्गम CoupleUnion / Valentine’s Day",
    description: "Couples’ wellness and relationship celebration",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "February",
    date: "15/02/2026",
    serviceName: "Mahashivaratri / स्वशिवशक्ति उत्सव",
    description: "Spiritual celebration of Lord Shiva",
    benefits: "Spiritual",
    value: 2000,
  },
  {
    month: "February",
    date: "20–22/02/2026",
    serviceName:
      "स्वग्रीष्मजाप्रकल्प Summer Project / Summer Cosmos Ceremony / Summer Barter / Summer Exhibition",
    description: "Seasonal summer project with exhibitions and bartering",
    benefits: "Cultural, Educational, Wellness",
    value: 9000,
  },
  {
    month: "March",
    date: "03/03/2026",
    serviceName:
      "होलिका दहन / स्वहोलिका Holi उत्सव Festival: होलिका - होळी दहन",
    description: "Celebration of Holika Dahan",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "March",
    date: "04/03/2026",
    serviceName:
      "स्वधूलिवन्दन AshWorship उत्सव Festival: धूलिवंदन – धूल उधलन / Holi",
    description: "Ash worship and Holi rituals",
    benefits: "Cultural, Spiritual",
    value: 2000,
  },
  {
    month: "March",
    date: "06/03/2026",
    serviceName:
      "स्वआदिवैद्यगुरुकुल RootHealerCommune / छत्रपती शिवाजी महाराज जयंती",
    description: "Traditional healing commune & Shivaji Jayanti",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "March",
    date: "07/03/2026",
    serviceName: "योगगुरुकुल YogaUniversalHealerCommune",
    description: "Yoga and therapeutic practices",
    benefits: "Wellness",
    value: 2000,
  },
  {
    month: "March",
    date: "08/03/2026",
    serviceName:
      "स्वश्रेष्ठवैद्यगुरुकुल SuperiorHealerCommune / स्वरङ्गपञ्चमी ColourFestival / International Women’s Day",
    description: "Healing commune with festivals and awareness",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "March",
    date: "15/03/2026",
    serviceName:
      "चिकित्सभिषकगुरुकुल PhysicianHealerCommune / नैसर्गशतायुस्जीवनविधानकल्प NaturalCentenarianLifestyleRituals / आयुर्वेद LifeKnowledge",
    description: "Holistic physician wellness activities",
    benefits: "Wellness, Educational",
    value: 2000,
  },
  {
    month: "March",
    date: "16/03/2026",
    serviceName: "सेवाशुश्रूषकगुरुकुल ServiceCommune",
    description: "Community service-focused wellness activities",
    benefits: "Wellness, Educational",
    value: 2000,
  },
  {
    month: "March",
    date: "19/03/2026",
    serviceName:
      "स्वनववर्ष NewYear उत्सव Festival: युगादी / गुढी पाडवा / चैत्र नवरात्रि",
    description: "New Year celebrations with traditional rituals",
    benefits: "Cultural, Wellness",
    value: 2000,
  },
  {
    month: "March",
    date: "21/03/2026",
    serviceName: "गण गौर Chaitra Gauri Gangauri",
    description: "Traditional festival celebration",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "March",
    date: "22/03/2026",
    serviceName: "सुगतिगुरुकुल WellnessTourCommune",
    description: "Wellness and guided tour activities",
    benefits: "Wellness, Educational",
    value: 2000,
  },
  {
    month: "March",
    date: "23/03/2026",
    serviceName: "युग्मसङ्गम CoupleUnion / शहीद दिन",
    description: "Couples wellness and remembrance of martyrs",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "March",
    date: "24/03/2026",
    serviceName: "गर्भसंस्क्रिया UnionConsecration",
    description: "Rituals and consecration ceremonies",
    benefits: "Cultural, Spiritual",
    value: 2000,
  },
  {
    month: "March",
    date: "26/03/2026",
    serviceName: "स्वएकवचन OnePromise उत्सव Festival: राम नवमी",
    description: "Celebration of Ram Navami",
    benefits: "Cultural, Spiritual",
    value: 2000,
  },
  {
    month: "March",
    date: "29/03/2026",
    serviceName: "बालकपालकसहकुटुम्बसङ्कुल YouthGuardianJtFamilyCamp",
    description: "Youth and family wellness camp",
    benefits: "Wellness, Cultural",
    value: 2000,
  },

  {
    month: "April",
    date: "01/04/2026",
    serviceName: "Banking Detox / आर्थिक वर्ष सुरुवात",
    description: "Financial year start with wellness program",
    benefits: "Wellness, Educational",
    value: 2000,
  },
  {
    month: "April",
    date: "02/04/2026",
    serviceName: "सामर्थ्यदिन / Hanuman Jayanti / चैत्र पोर्णिमा",
    description: "Hanuman Jayanti celebrations",
    benefits: "Cultural, Spiritual",
    value: 2000,
  },
  {
    month: "April",
    date: "03/04/2026",
    serviceName: "स्वआदिवैद्यगुरुकुल RootHealerCommune",
    description: "Traditional healing commune",
    benefits: "Wellness",
    value: 2000,
  },
  {
    month: "April",
    date: "04/04/2026",
    serviceName:
      "सात्म्याहारगुरुकुल WholesomeDietCommune / संस्कारपाकशालागुरुकुल SubsistenceCultureKitchenCommune",
    description: "Diet, cooking, and wellness practices",
    benefits: "Wellness, Educational",
    value: 2000,
  },
  {
    month: "April",
    date: "05/04/2026",
    serviceName:
      "कृषकभिषजगुरुकुल FarmHealerCommune / सहभावकृषि CommunityFarming / गौभिषजगुरुकुल CowHealerCommune / गौवनौषधिस्वास्थ्यसंस्कृति CowHerbsForestWellnessCulture",
    description: "Farming, cow care & forest wellness",
    benefits: "Educational, Cultural, Wellness",
    value: 2000,
  },
  {
    month: "April",
    date: "14/04/2026",
    serviceName: "Solar New Year / आंबेडकर जयंती / बैसाखी",
    description: "Celebration of Solar New Year and Ambedkar Jayanti",
    benefits: "Cultural, Educational",
    value: null,
  },
  {
    month: "April",
    date: "16–19/04/2026",
    serviceName:
      "लक्ष्यसम्भाव्यसम्मेलन MissionPossibleConference / स्वशाश्वतदिन EternalDay: अक्षयतृतीया",
    description: "Multi-day conference with wellness and eternal day rituals",
    benefits: "Educational, Cultural, Wellness",
    value: 9000,
  },
  {
    month: "April",
    date: "21/04/2026",
    serviceName: "शंकराचार्य जयंती / सूरदास जयंती",
    description: "Commemoration of Shankaracharya and Surdas Jayanti",
    benefits: "Cultural, Spiritual",
    value: null,
  },
  {
    month: "April",
    date: "22/04/2026",
    serviceName: "Earth Day",
    description: "Celebration and awareness of Earth Day",
    benefits: "Educational, Wellness",
    value: 2000,
  },
  {
    month: "April",
    date: "25/04/2026",
    serviceName: "Sita Navami / सीता नवमी",
    description: "Celebration of Sita Navami",
    benefits: "Cultural, Spiritual",
    value: 2000,
  },
  {
    month: "May",
    date: "01/05/2026",
    serviceName: "वैशाख बुद्ध पोर्णिमा / आंतरराष्ट्रीय श्रमिक दिवस",
    description: "Observance of Buddha Poornima and International Workers’ Day",
    benefits: "Cultural, Educational",
    value: 2000,
  },
  {
    month: "May",
    date: "01/05/2026",
    serviceName: "स्वआदिवैद्यगुरुकुल RootHealerCommune",
    description: "Traditional healing commune session",
    benefits: "Wellness",
    value: 2000,
  },
  {
    month: "May",
    date: "02/05/2026",
    serviceName: "योगगुरुकुल YogaUniversalHealerCommune",
    description: "Yoga and therapeutic practices",
    benefits: "Wellness",
    value: 2000,
  },
  {
    month: "May",
    date: "03/05/2026",
    serviceName:
      "स्वश्रेष्ठवैद्यगुरुकुल SuperiorHealerCommune / विश्व हास्य दिवस",
    description: "Healing commune combined with International Humor Day",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "May",
    date: "10/05/2026",
    serviceName:
      "चिकित्सभिषकगुरुकुल PhysicianHealerCommune / नैसर्गशतायुस्जीवनविधानकल्प / आयुर्वेद LifeKnowledge / मातृ दिन",
    description:
      "Physician wellness program and life knowledge sessions with Mother’s Day celebration",
    benefits: "Wellness, Educational, Cultural",
    value: 2000,
  },
  {
    month: "May",
    date: "11/05/2026",
    serviceName: "सेवाशुश्रूषकगुरुकुल ServiceCommune",
    description: "Community service and wellness activities",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "May",
    date: "14–17/05/2026",
    serviceName: "सहकुटुम्बकिशोरसम्मेलन JointFamilyYouthConference",
    description: "Multi-day youth and family engagement conference",
    benefits: "Educational, Cultural",
    value: 9000,
  },
  {
    month: "May",
    date: "24/05/2026",
    serviceName: "स्थापत्यवेदगुरुकुल ArchitectCommune",
    description: "Architectural learning and wellness activities",
    benefits: "Educational, Cultural",
    value: 2000,
  },
  {
    month: "May",
    date: "25/05/2026",
    serviceName: "युग्मसङ्गम CoupleUnion",
    description: "Couple wellness and union rituals",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "May",
    date: "26/05/2026",
    serviceName: "गर्भसंस्क्रिया UnionConsecration",
    description: "Spiritual and traditional consecration",
    benefits: "Spiritual, Cultural",
    value: 2000,
  },
  {
    month: "May",
    date: "27/05/2026",
    serviceName: "बकरी ईद",
    description: "Celebration of Bakri Eid",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "May",
    date: "31/05/2026",
    serviceName:
      "बालकपालकसहकुटुम्बसङ्कुल YouthGuardianJtFamilyCamp / विश्व तंबाखू निषेध दिन",
    description: "Family youth camp and World No Tobacco Day observance",
    benefits: "Wellness, Cultural",
    value: 2000,
  },

  /* ======================= JUNE 2026 ======================= */

  {
    month: "June",
    date: "05/06/2026",
    serviceName: "स्वआदिवैद्यगुरुकुल RootHealerCommune / विश्व पर्यावरण दिन",
    description: "Healing commune and World Environment Day",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "June",
    date: "06/06/2026",
    serviceName:
      "सात्म्याहारगुरुकुल WholesomeDietCommune / संस्कारपाकशालागुरुकुल SubsistenceCultureKitchenCommune",
    description: "Nutrition and subsistence kitchen training",
    benefits: "Wellness, Educational",
    value: 2000,
  },
  {
    month: "June",
    date: "07/06/2026",
    serviceName:
      "कृषकभिषजगुरुकुल FarmHealerCommune / सहभावकृषि / गौभिषजगुरुकुल / गौवनौषधिस्वास्थ्यसंस्कृति",
    description: "Agricultural, animal, and forest wellness integration",
    benefits: "Wellness, Educational, Cultural",
    value: 2000,
  },
  {
    month: "June",
    date: "08/06/2026",
    serviceName: "सुकृत्गुरुकुल SkilfulWorkerCommune / सहभावद्रव्ययंत्रनिर्माण",
    description: "Skills and community production activities",
    benefits: "Educational, Cultural",
    value: 2000,
  },
  {
    month: "June",
    date: "09/06/2026",
    serviceName: "स्वमैत्रवैद्यगुरुकुल BenevolentHealerCommune",
    description: "Wellness and community healing",
    benefits: "Wellness, Spiritual",
    value: 2000,
  },
  {
    month: "June",
    date: "14/06/2026",
    serviceName: "स्वसुवैद्यगुरुकुल WellHealerCommune",
    description: "Health and wellbeing initiatives",
    benefits: "Wellness",
    value: 2000,
  },
  {
    month: "June",
    date: "15/06/2026",
    serviceName: "युग्मसङ्गम CoupleUnion",
    description: "Couple wellness and bonding",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "June",
    date: "16/06/2026",
    serviceName: "गर्भसंस्क्रिया UnionConsecration",
    description: "Spiritual consecration and union rituals",
    benefits: "Spiritual, Cultural",
    value: 2000,
  },
  {
    month: "June",
    date: "17/06/2026",
    serviceName: "महाराणा प्रताप जयंती / इस्लामी नव वर्ष अल हिज्रा",
    description: "Commemorative celebrations",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "June",
    date: "19–20/06/2026",
    serviceName:
      "स्ववर्ष्यजाप्रकल्प RainyProject / RainyCosmosCeremony / RainyBarter / RainyExhibition",
    description: "Seasonal rainy wellness, exhibition, and barter activities",
    benefits: "Cultural, Wellness, Educational",
    value: 9000,
  },
  {
    month: "June",
    date: "21/06/2026",
    serviceName: "पितृ दिन / आंतरराष्ट्रीय योग दिन / मोठा दिवस",
    description: "Observance of ancestors and International Yoga Day",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "June",
    date: "26/06/2026",
    serviceName: "मुहर्रम",
    description: "Religious observance",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "June",
    date: "28/06/2026",
    serviceName: "बालकपालकसहकुटुम्बसङ्कुल YouthGuardianJtFamilyCamp",
    description: "Family and youth camp activities",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "June",
    date: "29/06/2026",
    serviceName: "वट पोर्णिमा / कबीरदास जयंती",
    description: "Religious and cultural celebration",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "July",
    date: "16/07/2026",
    serviceName: "जगन्नाथ रथयात्रा",
    description: "Rath Yatra festival",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "July",
    date: "29/07/2026",
    serviceName: "गुरु पोर्णिमा",
    description: "Guru Purnima observance",
    benefits: "Cultural, Spiritual",
    value: null,
  },

  /* ======================= AUGUST 2026 ======================= */

  {
    month: "August",
    date: "02/08/2026",
    serviceName: "मैत्रेय दिन",
    description: "Friendship and compassion observance",
    benefits: "Cultural, Wellness",
    value: null,
  },
  {
    month: "August",
    date: "15/08/2026",
    serviceName: "स्वतंत्रता दिवस / Independence Day",
    description: "National celebration",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "August",
    date: "17/08/2026",
    serviceName: "नागपंचमी",
    description: "Religious festival",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "August",
    date: "19/08/2026",
    serviceName: "तुलसीदास जयंती",
    description: "Birth anniversary celebration",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "August",
    date: "26/08/2026",
    serviceName: "ओणम / ईद ए मिलाद",
    description: "Religious and cultural celebration",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "August",
    date: "28/08/2026",
    serviceName: "रक्षाबंधन",
    description: "Sibling bonding festival",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "September",
    date: "04/09/2026",
    serviceName: "कृष्ण जन्माष्टमी / अगस्त्य अर्ध्य",
    description: "Birth of Lord Krishna celebration",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "September",
    date: "05/09/2026",
    serviceName: "गोपाल काला / दही हंडी / शिक्षक दिन",
    description: "Dahi Handi and Teacher’s Day",
    benefits: "Cultural, Educational",
    value: 2000,
  },
  {
    month: "September",
    date: "11/09/2026",
    serviceName: "बेंदूर - बैल पोळा - स्ववृषभोत्सव / BullFestival",
    description: "Traditional bull festival",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "September",
    date: "14/09/2026",
    serviceName: "हरतालिका गौरी / मंगळा गौर / गणेश स्थापना / हिन्दी दिवस",
    description: "Religious and national celebrations",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "September",
    date: "15/09/2026",
    serviceName: "ऋषि पंचमी / अभियंता दिन / विश्वेश्वरैया जयंती",
    description: "Observances of Rishi Panchami and Engineers’ Day",
    benefits: "Cultural, Educational",
    value: 2000,
  },
  {
    month: "September",
    date: "17/09/2026",
    serviceName: "गौरी आवाहन / राधाष्टमी",
    description: "Religious festival",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "September",
    date: "18/09/2026",
    serviceName: "जेष्ठ गौरी पूजा",
    description: "Religious festival",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "September",
    date: "19/09/2026",
    serviceName: "जेष्ठ गौरी विसर्जन",
    description: "Festival conclusion",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "September",
    date: "20/09/2026",
    serviceName: "स्वग्राम गणेश विसर्जन",
    description: "Ganesh Visarjan",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "September",
    date: "25/09/2026",
    serviceName: "अनंत चतुर्थी / गणेश विसर्जन",
    description: "Ganesh festival",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "September",
    date: "27/09/2026",
    serviceName: "पितृ पक्ष प्रारंभ",
    description: "Ancestor observance",
    benefits: "Cultural",
    value: null,
  },

  /* ======================= OCTOBER 2026 ======================= */

  {
    month: "October",
    date: "02/10/2026",
    serviceName: "गांधी जयंती / Gandhi Jayanti",
    description: "National celebration",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "October",
    date: "10/10/2026",
    serviceName: "सर्वपितृ अमावस्या",
    description: "Ancestor observance",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "October",
    date: "11/10/2026",
    serviceName: "नवरात्री प्रारंभ / भोंडला / घटस्थापना / मृत्तिका पूजन",
    description: "Navratri festival start",
    benefits: "Cultural, Spiritual",
    value: 2000,
  },
  {
    month: "October",
    date: "16–17/10/2026",
    serviceName: "सरस्वती आवाहन & पूजा",
    description: "Worship of Goddess Saraswati",
    benefits: "Cultural, Educational",
    value: null,
  },
  {
    month: "October",
    date: "19/10/2026",
    serviceName: "दुर्गाष्टमी / महानवमी",
    description: "Navratri festival celebration",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "October",
    date: "20/10/2026",
    serviceName: "विजयादशमी / दसरा / मध्वाचार्य जयंती",
    description: "Festival and scholar observance",
    benefits: "Cultural, Educational",
    value: 2000,
  },
  {
    month: "October",
    date: "21/10/2026",
    serviceName: "मध्वाचार्य जयंती",
    description: "Scholar observance",
    benefits: "Educational",
    value: 2000,
  },
  {
    month: "October",
    date: "25/10/2026",
    serviceName: "कोजागिरी पोर्णिमा / शरद पोर्णिमा",
    description: "Full moon observance",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "October",
    date: "26/10/2026",
    serviceName: "वाल्मीकी जयंती / मीराबाई जयंती",
    description: "Saints’ birth anniversaries",
    benefits: "Cultural, Spiritual",
    value: null,
  },
  {
    month: "October",
    date: "29/10/2026",
    serviceName: "करवा चौथ",
    description: "Couple fasting and rituals",
    benefits: "Cultural, Wellness",
    value: null,
  },
  {
    month: "November",
    date: "04/11/2026",
    serviceName: "दुर्ग बांधणी FortConstruction",
    description: "Traditional fort construction activity at Swagrama",
    benefits: "Cultural engagement, teamwork, historical learning",
    value: 2000,
  },
  {
    month: "November",
    date: "05/11/2026",
    serviceName: "गौवत्सद्वादशी CowCalfCeremony / वसू बारस VasuBaras",
    description: "Ritual celebrating cow and calf; auspicious ceremonies",
    benefits: "Strengthens connection with cows, cultural learning",
    value: 2000,
  },
  {
    month: "November",
    date: "06/11/2026",
    serviceName: "धनोत्रयोदशी Dhanotrayodashi",
    description: "Observance of Dhanteras and festival rituals",
    benefits: "Spiritual benefits, prosperity rituals",
    value: 2000,
  },
  {
    month: "November",
    date: "08/11/2026",
    serviceName: "बालकपालकसहकुटुम्बसङ्कुल YouthGuardianJtFamilyCamp",
    description: "Joint family camp with youth and guardians",
    benefits: "Family bonding, wellness activities, educational",
    value: 2000,
  },
  {
    month: "November",
    date: "08/11/2026",
    serviceName: "दीपावली – लक्ष्मी पूजन / नरक चतुर्दशी",
    description: "Diwali – Lakshmi Puja and rituals",
    benefits: "Spiritual cleansing, prosperity, wellness",
    value: 2000,
  },
  {
    month: "November",
    date: "09/11/2026",
    serviceName: "गर्भसंस्क्रिया UnionConsecration",
    description: "Ceremony for family and couple consecration",
    benefits: "Blessings, cultural tradition, harmony",
    value: 2000,
  },
  {
    month: "November",
    date: "10/11/2026",
    serviceName: "दीपावली पाडवा / बळीप्रतिपदा / गोवर्धन पूजा",
    description: "Diwali festival rituals and Govardhan celebration",
    benefits: "Spiritual benefits, prosperity",
    value: 2000,
  },
  {
    month: "November",
    date: "11/11/2026",
    serviceName: "भाऊबीज BhauBij",
    description: "Festival of brothers and sisters",
    benefits: "Family bonding, cultural tradition",
    value: 2000,
  },
  {
    month: "November",
    date: "12–14/11/2026",
    serviceName:
      "स्वहैमन्तजाप्रकल्प WinterProject / WinterCosmosCeremony / WinterExhibition / WinterBarter",
    description:
      "Seasonal winter project with exhibitions and community barter",
    benefits: "Creativity, collaboration, seasonal wellness",
    value: 9000,
  },
  {
    month: "November",
    date: "21/11/2026",
    serviceName: "Tulasi Vivah",
    description: "Holy ceremonial marriage of Tulasi plant",
    benefits: "Spiritual merit, cultural immersion",
    value: 2000,
  },
  {
    month: "November",
    date: "22/11/2026",
    serviceName: "सुगतिगुरुकुल WellnessTourCommune",
    description: "Guided wellness tour of Swagrama commune",
    benefits: "Wellness learning, exploration, mindfulness",
    value: 2000,
  },
  {
    month: "November",
    date: "24/11/2026",
    serviceName: "गुरुनानक जयंती GuruNanak Jayanti",
    description: "Celebration of Guru Nanak’s birth anniversary",
    benefits: "Spiritual inspiration, cultural enrichment",
    value: 2000,
  },
  {
    month: "November",
    date: "27/11/2026",
    serviceName: "स्वआदिवैद्यगुरुकुल RootHealerCommune",
    description: "Commune focused on traditional healer practices",
    benefits: "Healing knowledge, wellness learning",
    value: 2000,
  },
  {
    month: "November",
    date: "28/11/2026",
    serviceName: "योगगुरुकुल YogaUniversalHealerCommune / नादयोग SonantYoga",
    description: "Yoga and sound therapy sessions",
    benefits: "Physical wellness, mental clarity, spiritual growth",
    value: 2000,
  },

  /* ======================= DECEMBER 2026 ======================= */

  {
    month: "December",
    date: "01/12/2026",
    serviceName: "विश्व एड्स दिन World AIDS Day",
    description: "Health and spiritual observances",
    benefits: "Awareness, wellness, spiritual merit",
    value: 2000,
  },
  {
    month: "December",
    date: "06/12/2026",
    serviceName: "स्वश्रेष्ठवैद्यगुरुकुल SuperiorHealerCommune",
    description: "Advanced healer commune",
    benefits: "Deep Ayurveda and holistic learning",
    value: 2000,
  },
  {
    month: "December",
    date: "13/12/2026",
    serviceName:
      "चिकित्सभिषकगुरुकुल PhysicianHealerCommune / NaturalCentenarianLifestyleRituals / आयुर्वेद LifeKnowledge",
    description: "Commune on physician healing and longevity practices",
    benefits: "Knowledge of natural lifespan, Ayurveda lifestyle",
    value: 2000,
  },
  {
    month: "December",
    date: "14/12/2026",
    serviceName: "सेवाशुश्रूषकगुरुकुल ServiceCommune",
    description: "Commune for volunteer and service activities",
    benefits: "Social service, team collaboration, learning",
    value: 2000,
  },
  {
    month: "December",
    date: "14/12/2026",
    serviceName: "विवाह पंचमी",
    description: "Wedding-related ceremony",
    benefits: "Spiritual and cultural benefit",
    value: 2000,
  },
  {
    month: "December",
    date: "20/12/2026",
    serviceName: "गर्भसंस्क्रिया UnionConsecration",
    description: "Family and couple consecration ceremony",
    benefits: "Blessings, family harmony",
    value: 2000,
  },
  {
    month: "December",
    date: "20/12/2026",
    serviceName: "गीता जयंती / मोक्षदा एकादशी",
    description: "Health and spiritual observances",
    benefits: "Awareness, wellness, spiritual merit",
    value: 2000,
  },
  {
    month: "December",
    date: "21/12/2026",
    serviceName: "युग्मसङ्गम CoupleUnion",
    description: "Couple union ceremonies",
    benefits: "Strengthens marital bonds, spiritual benefit",
    value: 2000,
  },
  {
    month: "December",
    date: "23/12/2026",
    serviceName: "दत्तात्रय जयंती",
    description: "Celebration of Dattatreya Jayanti",
    benefits: "Spiritual growth, cultural learning",
    value: 2000,
  },
  {
    month: "December",
    date: "27/12/2026",
    serviceName: "बालकपालकसहकुटुम्बसङ्कुल YouthGuardianJtFamilyCamp",
    description: "Joint family camp with youth and guardians",
    benefits: "Family bonding, educational activities",
    value: 2000,
  },
];

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (month) => {
    return new Date(2026, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month) => {
    return new Date(2026, month, 1).getDay();
  };

  const eventsByDate = useMemo(() => {
    const map = {};
    eventsData2026.forEach((event) => {
      const [day, month] = event.date.split("/");
      const key = `${parseInt(month)}-${parseInt(day)}`;
      if (!map[key]) map[key] = [];
      map[key].push(event);
    });
    return map;
  }, []);

  const getEventsForDate = (day) => {
    const key = `${currentMonth + 1}-${day}`;
    return eventsByDate[key] || [];
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
    const events = getEventsForDate(day);
    setSelectedEvents(events);
    setActiveEventIndex(0);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square p-1"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const events = getEventsForDate(day);
      const hasEvents = events.length > 0;
      const isSelected = selectedDate === day;

      days.push(
        <motion.div
          key={day}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleDateClick(day)}
          className={`aspect-square p-1 rounded-lg cursor-pointer transition-all relative
            ${
              isSelected
                ? "bg-gradient-to-br from-lime-600 to-green-700 text-white shadow-md shadow-lime-500/30"
                : hasEvents
                ? "bg-gradient-to-br from-lime-50 to-green-50 hover:from-lime-100 hover:to-green-100 border border-lime-200"
                : "hover:bg-amber-50/50 border "
            }`}
        >
          <div className="flex flex-col h-full items-center justify-center">
            <span
              className={`text-xs md:text-sm font-semibold ${
                isSelected ? "text-white" : "text-stone-700"
              }`}
            >
              {day}
            </span>
            {hasEvents && (
              <div className="flex gap-0.5 mt-0.5">
                {events.slice(0, 3).map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 animate-bounce rounded-full ${
                      isSelected
                        ? "bg-white"
                        : "bg-gradient-to-r from-lime-600 to-green-600"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      );
    }
    return days;
  };

  const currentEvent = selectedEvents[activeEventIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-lime-50 to-green-50 p-2 md:px-12 py-6 ">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-lime-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg
              className="w-6 h-6 text-lime-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-lime-700 via-green-700 to-lime-800 bg-clip-text text-transparent">
              Swagrama Events 2026
            </h1>
            <svg
              className="w-6 h-6 text-lime-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
          </div>
          <p className="text-stone-600 text-xs md:text-sm font-medium">
            Discover wellness and cultural events
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-lime-500/10 p-3 md:p-4 border border-lime-100">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-lime-200">
                <button
                  onClick={() => setCurrentMonth(Math.max(0, currentMonth - 1))}
                  disabled={currentMonth === 0}
                  className="p-1.5 rounded-lg hover:bg-lime-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-stone-700"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-lime-700 to-green-700 bg-clip-text text-transparent">
                    {months[currentMonth]}
                  </h2>
                  <span className="text-sm text-stone-500 font-medium">
                    2026
                  </span>
                </div>

                <button
                  onClick={() =>
                    setCurrentMonth(Math.min(11, currentMonth + 1))
                  }
                  disabled={currentMonth === 11}
                  className="p-1.5 rounded-lg hover:bg-lime-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-stone-700"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-1">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                  <div
                    key={idx}
                    className="text-center text-[14px]  font-bold text-stone-600 p-1"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>

              <div className="mt-3 pt-2 border-t border-lime-200 flex flex-wrap gap-3 justify-center text-[10px] md:text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-lime-600 to-green-600"></div>
                  <span className="text-stone-600 font-medium">Has Events</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-lime-600 to-green-700"></div>
                  <span className="text-stone-600 font-medium">Selected</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-green-500/10 p-3 md:p-4 sticky top-4 border border-green-100 max-h-[calc(100vh-2rem)] overflow-y-auto">
              <AnimatePresence mode="wait">
                {selectedEvents.length > 0 ? (
                  <motion.div
                    key={selectedDate}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-2"
                  >
                    {" "}
                    <div className="relative w-full h-28 md:h-32 bg-gradient-to-br from-lime-100 via-green-100 to-lime-50 rounded-xl overflow-hidden border border-lime-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-14 h-14 text-lime-600/30"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                        </svg>
                      </div>
                      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        <span className="text-[12px] font-bold text-lime-700">
                          {selectedEvents[0].date}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-lime-600 to-green-700 px-2 py-0.5 rounded-full">
                        <span className="text-[10px] font-bold text-white">
                          {selectedEvents.length}{" "}
                          {selectedEvents.length === 1 ? "Event" : "Events"}
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-lime-50/50 to-green-50/50 rounded-xl p-2 border border-lime-200">
                      <div className="space-y-2">
                        {selectedEvents.map((event, idx) => (
                          <div
                            key={idx}
                            className="bg-white rounded-lg p-2 border border-lime-200"
                          >
                            <div className="flex items-start gap-1.5 mb-1.5">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-lime-600 to-green-700 flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-[10px] font-bold">
                                  {idx + 1}
                                </span>
                              </div>
                              <h3 className="text-[12px] md:text-xs font-bold text-stone-800 leading-tight flex-1">
                                {event.serviceName}
                              </h3>
                            </div>

                            <div className="flex items-center gap-1 mb-1.5 pl-6">
                              <svg
                                className="w-5 h-5 text-green-600  flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <p className="text-stone-600 text-[12px] leading-snug">
                                {event.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 mb-1.5 pl-6">
                              <svg
                                className="w-5 h-5 text-green-700  flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <p className="text-[12px] text-stone-600 leading-snug">
                                <span className="font-bold">Benefits : </span>{" "}
                                {event.benefits}
                              </p>
                            </div>

                            <div className="flex items-center gap-1.5 pl-6">
                              {event.value && (
                                <div className="flex items-center gap-1 px-1.5 py-0.5 bg-gradient-to-r from-amber-50 to-lime-50 rounded border border-lime-200">
                                  <span className="text-[14px] font-bold text-stone-700">
                                    ₹{event.value}
                                  </span>
                                </div>
                              )}
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-auto px-3 py-1 bg-gradient-to-r from-lime-600 to-green-700 text-white font-bold rounded text-[12px] shadow-sm hover:shadow-md transition-all"
                              >
                                Register
                              </motion.button>
                            </div>

                            {idx < selectedEvents.length - 1 && (
                              <div className="mt-2 pt-2 border-t border-lime-200"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* CTA Buttons */}
                    <div className="space-y-1.5 pt-1">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-lime-600 to-green-700 text-white font-bold py-2 px-3 rounded-lg shadow-md shadow-lime-500/30 hover:shadow-lg hover:shadow-lime-500/40 transition-all text-[11px]"
                      >
                        🌿 Register for All Events
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-lime-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-lime-200">
                      <svg
                        className="w-8 h-8 text-lime-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-stone-700 mb-1">
                      Select a Date
                    </h3>
                    <p className="text-xs text-stone-500">
                      Click on a date to view event details
                    </p>
                    <div className="mt-3 inline-block px-3 py-1.5 bg-lime-50 rounded-lg border border-lime-200">
                      <span className="text-[10px] text-lime-800 font-medium">
                        🍃 Discover Wellness Events
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
