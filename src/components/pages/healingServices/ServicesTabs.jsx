import { EmojiNature, LocalFlorist, SelfImprovement, Spa } from "@mui/icons-material";
import { Box, Button, Card, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import AyurvedaOPDClinic from "./opdClinic/AyurvedaOPDClinic";


const YogaOPDComponent = () => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Yoga OPD Clinic स्वयोगचिकित्सा</Typography>
    <Typography>Therapeutic yoga sessions for physical and mental wellness.</Typography>
  </Box>
);

const HomoeopathyOPDComponent = () => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Homoeopathy OPD Clinic स्वसमचिकित्सा</Typography>
    <Typography>Homeopathic treatments following natural healing principles.</Typography>
  </Box>
);

const MaleDetoxComponent = () => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Male Detox Therapy स्वपुंस्शोधनचिकित्सा</Typography>
    <Typography>Specialized detoxification therapy designed for male patients.</Typography>
  </Box>
);

const FemaleDetoxComponent = () => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Female Detox Therapy स्वस्त्रीशोधनचिकित्सा</Typography>
    <Typography>Specialized detoxification therapy designed for female patients.</Typography>
  </Box>
);

const LocalDetoxComponent = () => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Local Detox Therapy स्वस्थानिकशोधनचिकित्सा</Typography>
    <Typography>Targeted local detoxification treatments for specific body areas.</Typography>
  </Box>
);

const BathingSweaterComponent = () => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Bathing Sweater Therapy स्वअवगाहस्वेदक</Typography>
    <Typography>Therapeutic bathing and sweating treatments for toxin elimination.</Typography>
  </Box>
);

const MaleMudBathComponent = () => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Male Mud Bath स्वपुस्मृत्तिकास्नान</Typography>
    <Typography>Natural mud therapy sessions for male patients.</Typography>
  </Box>
);

const FemaleMudBathComponent = () => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Female Mud Bath स्वस्त्रीमृत्तिकास्नान</Typography>
    <Typography>Natural mud therapy sessions for female patients.</Typography>
  </Box>
);

const SwimmingTherapyComponent = () => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Swimming Therapy स्वजलतरणचिकित्सा</Typography>
    <Typography>Aquatic therapy for rehabilitation and fitness.</Typography>
  </Box>
);

const WindSunComponent = () => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Wind Sun Rejuvenation स्वातातपिकरसायन</Typography>
    <Typography>Natural rejuvenation using wind and sun therapy.</Typography>
  </Box>
);

const AthleticComponent = () => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Athletic Therapy स्वमल्लचिकित्सा</Typography>
    <Typography>Sports therapy and athletic performance enhancement.</Typography>
  </Box>
);

const FertilesoilComponent = () => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Fertilesoil Therapy स्वउर्वराचिकित्सा</Typography>
    <Typography>Earth-based natural therapy for grounding and healing.</Typography>
  </Box>
);

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
        component: <YogaOPDComponent />,
      },
      {
        title: "Homoeopathy OPD स्वसमचिकित्सा",
        component: <HomoeopathyOPDComponent />,
      },
    ],
    icon: <EmojiNature sx={{ fontSize: 18 }} />,
    color: "#4a90a4",
  },
  {
    label: "Detox House स्वशोधनालय",
    children: [
      { title: "Male Detox स्वपुंस्शोधनचिकित्सा", component: <MaleDetoxComponent /> },
      { title: "Female Detox स्वस्त्रीशोधनचिकित्सा", component: <FemaleDetoxComponent /> },
      { title: "Local Detox स्वस्थानिकशोधनचिकित्सा", component: <LocalDetoxComponent /> },
      { title: "Bathing Sweater स्वअवगाहस्वेदक", component: <BathingSweaterComponent /> },
    ],
    icon: <Spa sx={{ fontSize: 18 }} />,
    color: "#d4731c",
  },
  {
    label: "Nature Therapy स्वनैसर्गचिकित्सा",
    children: [
      { title: "Male Mud Bath स्वपुस्मृत्तिकास्नान", component: <MaleMudBathComponent /> },
      { title: "Female Mud Bath स्वस्त्रीमृत्तिकास्नान", component: <FemaleMudBathComponent /> },
      { title: "Swimming Therapy स्वजलतरणचिकित्सा", component: <SwimmingTherapyComponent /> },
      { title: "Wind Sun Rejuvenation स्वातातपिकरसायन", component: <WindSunComponent /> },
      { title: "Athletic Therapy स्वमल्लचिकित्सा", component: <AthleticComponent /> },
      { title: "Fertilesoil स्वउर्वराचिकित्सा", component: <FertilesoilComponent /> },
    ],
    icon: <LocalFlorist sx={{ fontSize: 18 }} />,
    color: "#4a7c59",
  },
  {
    label: "Beauty Therapy स्वसौन्दर्यचिकित्सा",
    icon: <SelfImprovement sx={{ fontSize: 18 }} />,
    color: "#7b4397",
  },
  {
    label: "IPD Hospital स्वातुरालय",
    icon: <Spa sx={{ fontSize: 18 }} />,
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
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", p: 2 }}>
      <Box sx={{ maxWidth: 1000, mx: "auto" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 1, color: "primary.main", fontWeight: 700 }}
        >
          Healing Services
        </Typography>

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

        {/* Content Card - Reduced Padding */}
        <Card
          elevation={0}
          sx={{ p: 2, borderRadius: 2, bgcolor: "#fff7e6" }}
        >
          {hasChildren ? (
            current.children[selectedChild].component
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