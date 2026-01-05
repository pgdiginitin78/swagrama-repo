import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/pages/homePage/HomePage";
import Footer from "./components/footer/Footer";
import ServicesTabs from "./components/pages/healingServices/ServicesTabs";
import MembershipTabs from "./components/pages/membership/MembershipTabs";
import CommunityActivitiesTabs from "./components/pages/communityActivities/CommunityActivitiesTabs";
import CommuneTabs from "./components/pages/commune/Commune";
import ScrollToTopButton from "./ScrollToTopButton";
import EShop from "./components/pages/eShop/EShop";
import ShopCart from "./components/pages/eShop/ShopCart";
import EventCalander from "./components/pages/eventsCalander/EventCalander";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="pt-16 bg-gradient-to-br from-[#FFF8D6]/60 via-[#F1FFF5]/70 to-[#D8EEFF]/60 outline-none ">
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/healing" element={<ServicesTabs />} />
            <Route path="/membership" element={<MembershipTabs />} />
            {/* <Route path="/self-analysis" element={<h1>Self-Analysis</h1>} /> */}
            <Route
              path="/community-activities"
              element={<CommunityActivitiesTabs />}
            />
            <Route path="/commune" element={<CommuneTabs />} />
            <Route path="/eShop" element={<EShop />} />
            <Route path="/calendar" element={<EventCalander />} />
            <Route path="/store" element={<h1>Store Page</h1>} />
            <Route path="/login" element={<h1>Login Page</h1>} />
            <Route path="/signup" element={<h1>Signup Page</h1>} />
          </Routes>
          <ScrollToTopButton />
        </div>
      </div>
      <Footer />
    </>
  );
}
