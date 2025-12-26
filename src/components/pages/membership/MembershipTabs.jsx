import React, { useState } from "react";
import {
  People,
  Person,
  Favorite,
  MedicalServices,
  Business,
  Security,
  ManageAccounts,
  PersonAdd,
  Work,
  Public,
  HowToReg,
} from "@mui/icons-material";
import { Box, Tabs, Tab, Stack, Button, Card, Typography } from "@mui/material";
import StaffMembership from "./staffMembership/StaffMembership";

const membershipTabs = [
  {
    label: "Staff Family Membership\nस्वकुटुंबसदस्यत्व",
    icon: People,
    color: "#8b5cf6",
    component: <StaffMembership />,
  },
  {
    label: "Barter Family Membership\nस्वविनिमयसदस्यत्व",
    icon: People,
    color: "#10b981",
    children: [
      { title: "Barter Child 1", component: <div>Barter Child 1</div> },
      { title: "Barter Child 2", component: <div>Barter Child 2</div> },
    ],
  },
  {
    label: "Single Person Membership\nस्वएकसदस्यत्व",
    icon: Person,
    color: "#f43f5e",
    component: <div>Single Person Content</div>,
  },
  {
    label: "Joint Family Membership\nस्वकुटुंबिनीसदस्यत्व",
    icon: People,
    color: "#f59e0b",
    component: <div>Joint Family Content</div>,
  },
  {
    label: "Ayurveda Vaidya Family Membership\nस्ववैद्यकुटुम्बसदस्यत्व",
    icon: Favorite,
    color: "#84cc16",
    children: [
      { title: "Ayurveda Therapy 1", component: <div>Ayurveda 1</div> },
      { title: "Ayurveda Therapy 2", component: <div>Ayurveda 2</div> },
    ],
  },
  {
    label: "Physician’s Membership\nस्वभिषक्सदस्यत्व",
    icon: MedicalServices,
    color: "#06b6d4",
    component: <div>Physician Content</div>,
  },
  {
    label: "Commune Membership\nस्वगुकुलसदस्यत्व",
    icon: Business,
    color: "#d946ef",
    component: <div>Commune Section</div>,
  },
  {
    label: "Trust Worthy Membership\nस्वआपत्सदस्यत्व",
    icon: Security,
    color: "#6366f1",
    component: <div>Trustworthy</div>,
  },
  {
    label: "Director Family Membership",
    icon: ManageAccounts,
    color: "#ef4444",
    component: <div>Director Page</div>,
  },
  {
    label: "Relatives Membership",
    icon: PersonAdd,
    color: "#eab308",
    component: <div>Relatives Page</div>,
  },
  {
    label: "Friends Membership\nस्वमित्र",
    icon: Favorite,
    color: "#ec4899",
    component: <div>Friends Page</div>,
  },
  {
    label: "Institute Membership",
    icon: Business,
    color: "#14b8a6",
    component: <div>Institute Page</div>,
  },
  {
    label: "Company Membership",
    icon: Work,
    color: "#64748b",
    component: <div>Company Page</div>,
  },
  {
    label: "Open Membership",
    icon: Public,
    color: "#0ea5e9",
    component: <div>Open Membership</div>,
  },
  {
    label: "Self Membership\nस्वआत्मसदस्यत्व",
    icon: HowToReg,
    color: "#f97316",
    component: <div>Self Membership</div>,
  },
];

const MembershipTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedChild, setSelectedChild] = useState(0);

  const handleChange = (_, val) => {
    setSelectedTab(val);
    setSelectedChild(0);
  };

  const current = membershipTabs[selectedTab];
  const hasChildren = current.children?.length > 0;

  return (
    <Box sx={{ minHeight: "100vh", p: 2 }}>
      <Box sx={{ maxWidth: 1480, mx: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: "bold",
            marginBottom: 2,
          }}
        >
          Membership Plans
        </h2>

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
            TabIndicatorProps={{ sx: { height: 3, bgcolor: current.color } }}
          >
            {membershipTabs.map((tab, i) => (
              <Tab
                key={i}
                label={tab.label}
                icon={<tab.icon sx={{ fontSize: 18 }} />}
                iconPosition="start"
              />
            ))}
          </Tabs>
        </Box>

        {hasChildren && (
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1}
            justifyContent="center"
            my={2}
          >
            {current.children.map((child, i) => (
              <Button
                key={i}
                variant={selectedChild === i ? "contained" : "outlined"}
                onClick={() => setSelectedChild(i)}
                sx={{
                  textTransform: "none",
                  borderColor: current.color,
                  color: selectedChild === i ? "#fff" : current.color,
                  bgcolor: selectedChild === i ? current.color : "transparent",
                  "&:hover": {
                    bgcolor: selectedChild === i ? current.color : "#e8e8e8",
                  },
                }}
              >
                {child.title}
              </Button>
            ))}
          </Stack>
        )}

        <Card
          sx={{
            p: 3,
            mt: 2,
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            background:
              "linear-gradient(135deg, #e8f9e3 0%, #d1f4bb 45%, #f4ffe9 100%)",
            border: "1px solid #b8e892",
          }}
        >
          {hasChildren ? (
            current.children[selectedChild].component
          ) : current.component ? (
            current.component
          ) : (
            <>
              <Typography fontWeight={700} color={current.color} variant="h6">
                {current.label}
              </Typography>
              <Typography opacity={0.7}>Coming Soon...</Typography>
            </>
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default MembershipTabs;
