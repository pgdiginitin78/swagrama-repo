import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/pages/homePage/HomePage"
import Footer from "./components/footer/Footer";
import ServicesTabs from "./components/pages/healingServices/ServicesTabs"
import MembershipTabs from "./components/pages/membership/MembershipTabs";


export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16 bg-gradient-to-br from-[#FFF8D6]/60 via-[#F1FFF5]/70 to-[#D8EEFF]/60  ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/healing" element={<ServicesTabs />} />
          <Route path="/membership" element={<MembershipTabs/>} />
          <Route path="/self-analysis" element={<h1>Self-Analysis</h1>} />
          <Route path="/community-activities" element={<h1>Community Activities</h1>} />
          <Route path="/commune" element={<h1>Commune</h1>} />
          <Route path="/barter" element={<h1>Barter</h1>} />
          <Route path="/feeds" element={<h1>Feeds</h1>} />
          <Route path="/calendar" element={<h1>Calendar</h1>} />
          <Route path="/store" element={<h1>Store Page</h1>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/signup" element={<h1>Signup Page</h1>} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}
