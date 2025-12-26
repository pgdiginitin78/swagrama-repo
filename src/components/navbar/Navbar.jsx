import CloseIcon from "@mui/icons-material/Close";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Drawer } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SwagramaLogo from "../assets/landing-page/swagram.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Healing Services स्वउपचारसेवा", path: "/healing" },
    { name: "Membership सदस्यत्व", path: "/membership" },
    { name: "Self-Analysis स्वविश्लेषण", path: "/self-analysis" },
    { name: "Community Activities स्वकर्मण्य", path: "/community-activities" },
    { name: "Commune स्वगुरुकुल", path: "/commune" },
    { name: "Barter सुविनिमय", path: "/barter" },
    { name: "Feeds", path: "/feeds" },
    { name: "Calendar स्ववर्षपद", path: "/calendar" },
  ];

  const splitTitle = (text) => {
    const index = text.lastIndexOf(" ");
    if (index === -1) return { en: text, hi: "" };
    return { en: text.slice(0, index), hi: text.slice(index + 1) };
  };

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .nav-link {
          position: relative;
          display: inline-block;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 50%;
          background: linear-gradient(90deg, #10b981, #059669);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }

        .btn-gradient {
          background: linear-gradient(135deg, #10b981, #059669);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
          transition: all 0.3s ease;
        }

        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.4);
        }

        .btn-outline {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-outline::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .btn-outline:hover::before {
          left: 100%;
        }

        .btn-outline:hover {
          border-color: #059669;
          color: #059669;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -5px rgba(16, 185, 129, 0.3);
        }

        .logo-glow {
          filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.3));
          transition: all 0.3s ease;
        }

        .logo-glow:hover {
          filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.5));
          animation: float 2s ease-in-out infinite;
        }

        .store-btn {
          background: #882E2E;
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
          transition: all 0.3s ease;
        }

        .store-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 12px 28px -5px rgba(251, 191, 36, 0.5);
        }

        .mobile-menu-item {
          transition: all 0.2s ease;
        }

        .mobile-menu-item:hover {
          transform: translateX(8px);
        }

        .drawer-backdrop {
          backdrop-filter: blur(8px);
        }
      `}</style>

      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white/80 backdrop-blur-md shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <div className="flex-shrink-0 relative">
              <div className="flex items-center space-x-3  shine-wave">
                <div className="h-16 rounded-full flex items-center justify-center  ">
                  <img
                    src={SwagramaLogo}
                    className="h-full w-full cursor-pointer"
                    alt="Swagrama Logo"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 text-gray-700 font-medium text-[12px] text-left items-center">
            {navLinks.map((item) => {
              const { en, hi } = splitTitle(item.name);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="nav-link group transition-all leading-tight"
                >
                  <span className="block text-green-700 group-hover:text-green-600 transition-colors duration-200">
                    {en}
                  </span>
                  {hi && (
                    <span className="block text-green-700  group-hover:text-green-600  opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                      {hi}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Buttons Desktop */}
          <div className="hidden md:flex space-x-3 items-center">
            <Link
              to="/login"
              className="btn-outline flex items-center gap-2 px-2 py-1 border-2 border-green-600 text-green-600 rounded-lg font-medium"
            >
              <LoginIcon fontSize="small" />
         
            </Link>

            <Link
              to="/signup"
              className="btn-gradient flex items-center gap-2 px-2 py-1.5 text-white rounded-lg font-medium shadow-md"
            >
              <PersonAddAltIcon fontSize="small" />
              
            </Link>

            <Link
              to="/store"
              className="store-btn flex items-center gap-2 px-2 py-1.5 text-white rounded-lg font-medium shadow-md"
            >
              <LocalGroceryStoreIcon fontSize="small" />
         
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-green-600 transition-colors p-2 rounded-lg hover:bg-green-50"
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: 280 },
        }}
      >
        <div className="w-full h-full p-6 space-y-6 bg-gradient-to-br from-white to-green-50">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b-2 border-green-100">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Menu
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-green-600 transition-colors p-2 rounded-lg hover:bg-green-100"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Links */}
          <ul className="space-y-4 text-gray-700 font-medium">
            {navLinks.map((item, index) => {
              const { en, hi } = splitTitle(item.name);
              return (
                <li
                  key={item.name}
                  className="mobile-menu-item"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block p-3 rounded-lg hover:bg-green-50 transition-all"
                  >
                    <span className="block text-base font-semibold text-gray-800 hover:text-green-600 transition-colors">
                      {en}
                    </span>
                    {hi && (
                      <span className="block text-sm text-green-600 mt-1">
                        {hi}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Buttons */}
          <div className="pt-6 space-y-3 border-t-2 border-green-100">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="block text-center border-2 border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="block text-center bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Sign Up
            </Link>
            <Link
              to="/store"
              onClick={() => setOpen(false)}
              className="block text-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Store
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
