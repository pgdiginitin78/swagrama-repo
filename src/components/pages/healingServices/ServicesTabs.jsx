import {
  EmojiNature,
  LocalFlorist,
  SelfImprovement,
  Spa,
} from "@mui/icons-material";
import { Box, Button, Card, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import AyurvedaOPDClinic from "./opdClinic/AyurvedaOPDClinic";
import YogaOPDClinic from "./opdClinic/YogaOPDClinic";
import HomoeopathyOPDClinic from "./opdClinic/HomoeopathyOPDClinic";
import MaleDetox from "./detoxHouse/MaleDetox";
import FemaleDetox from "./detoxHouse/FemaleDetox";
import LocalDetox from "./detoxHouse/LocalDetox";
import BathingSweater from "./detoxHouse/BathingSweater";
import MaleMudBath from "./natureTherapy/MaleMudBath";
import FemaleMudBath from "./natureTherapy/FemaleMudBath";
import SwimmingTherapy from "./natureTherapy/SwimmingTherapy";
import WindSunRejuvenation from "./natureTherapy/WindSunRejuvenation";
import AthleticTherapy from "./natureTherapy/AthleticTherapy";
import FertilesoilTherapy from "./natureTherapy/FertilesoilTherapy";
import BeautyTherapy from "./beautyTherapy/BeautyTherapy";
import IPDHospital from "./ipdHospital/IPDHospital";

const tabsData = [
  {
    label: "OPD Clinic स्वचिचित्सालय",
    children: [
      {
        title: "Ayurveda OPD  स्वआयुर्वेदचिचित्सालय",
        component: <AyurvedaOPDClinic />,
      },
      {
        title: "Yoga OPD स्वयोगचिकित्सा",
        component: <YogaOPDClinic />,
      },
      {
        title: "Homoeopathy OPD स्वसमचिकित्सा",
        component: <HomoeopathyOPDClinic />,
      },
    ],
    icon: <EmojiNature sx={{ fontSize: 18 }} />,
    color: "#4a90a4",
  },
  {
    label: "Detox House स्वशोधनालय",
    children: [
      { title: "Male Detox स्वपुंस्शोधनचिकित्सा", component: <MaleDetox /> },
      {
        title: "Female Detox स्वस्त्रीशोधनचिकित्सा",
        component: <FemaleDetox />,
      },
      {
        title: "Local Detox स्वस्थानिकशोधनचिकित्सा",
        component: <LocalDetox />,
      },
      {
        title: "Bathing Sweater स्वअवगाहस्वेदक",
        component: <BathingSweater />,
      },
    ],
    icon: <Spa sx={{ fontSize: 18 }} />,
    color: "#d4731c",
  },
  {
    label: "Nature Therapy स्वनैसर्गचिकित्सा",
    children: [
      {
        title: "Male Mud Bath स्वपुस्मृत्तिकास्नान",
        component: <MaleMudBath />,
      },
      {
        title: "Female Mud Bath स्वस्त्रीमृत्तिकास्नान",
        component: <FemaleMudBath />,
      },
      {
        title: "Swimming Therapy स्वजलतरणचिकित्सा",
        component: <SwimmingTherapy />,
      },
      {
        title: "Wind Sun Rejuvenation स्वातातपिकरसायन",
        component: <WindSunRejuvenation />,
      },
      {
        title: "Athletic Therapy स्वमल्लचिकित्सा",
        component: <AthleticTherapy />,
      },
      {
        title: "Fertilesoil स्वउर्वराचिकित्सा",
        component: <FertilesoilTherapy />,
      },
    ],
    icon: <LocalFlorist sx={{ fontSize: 18 }} />,
    color: "#4a7c59",
  },
  {
    label: "Beauty Therapy स्वसौन्दर्यचिकित्सा",
    component: <BeautyTherapy />,
    icon: <SelfImprovement sx={{ fontSize: 18 }} />,
    color: "#7b4397",
  },
  {
    label: "IPD Hospital स्वातुरालय",
    icon: <Spa sx={{ fontSize: 18 }} />,
    component: <IPDHospital />,
    color: "#5a437a",
  },
];

const ServicesTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedChild, setSelectedChild] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    setSelectedChild(0);
  };

  const current = tabsData[selectedTab];
  const hasChildren = current.children && current.children.length > 0;

  return (
    <Box sx={{ minHeight: "100vh", p: 2 }}>
      <Box sx={{ maxWidth: 1480, mx: "auto" }}>
        <h1 className="text-ayuBrown font-semibold text-center text-2xl">
          Healing Services
        </h1>
        {/* Tabs Header - Reduced Size */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            sx={{
              "& .MuiTab-root": {
                fontWeight: 600,
                textTransform: "none",
                minHeight: 48,
                fontSize: "0.875rem",
                px: 1.5,
                py: 1,
              },
              "& .Mui-selected": { color: current.color },
            }}
            TabIndicatorProps={{
              sx: { height: 3, bgcolor: current.color },
            }}
          >
            {tabsData.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                icon={tab.icon}
                iconPosition="start"
              />
            ))}
          </Tabs>
        </Box>

        {/* Child Buttons - Reduced Size */}
        {hasChildren && (
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1}
            mb={2}
            justifyContent="center"
          >
            {current.children.map((child, i) => (
              <Button
                key={i}
                variant={selectedChild === i ? "contained" : "outlined"}
                size="small"
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  borderColor: current.color,
                  color: selectedChild === i ? "#fff" : current.color,
                  bgcolor: selectedChild === i ? current.color : "transparent",
                  fontSize: "0.8rem",
                  px: 1.5,
                  py: 0.5,
                  "&:hover": {
                    bgcolor: selectedChild === i ? current.color : "#f0ead1",
                  },
                }}
                onClick={() => setSelectedChild(i)}
              >
                {child.title}
              </Button>
            ))}
          </Stack>
        )}

        <Card
          elevation={0}
          sx={{ p: 2, borderRadius: 2, boxShadow: 2, bgcolor: "#F1FFF5" }}
        >
          {hasChildren ? (
            current.children[selectedChild].component
          ) : current.component ? (
            current.component
          ) : (
            <>
              <Typography
                variant="h5"
                sx={{ color: current.color, fontWeight: 700, mb: 1 }}
              >
                {current.label}
              </Typography>
              <Typography sx={{ fontSize: "1rem", opacity: 0.7 }}>
                Coming Soon...
              </Typography>
            </>
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default ServicesTabs;
