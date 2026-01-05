import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SwagramaLogo from "../assets/landing-page/swagram.png";
import ShopCart from "../pages/eShop/ShopCart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openStore, setOpenStore] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cart = useSelector((s) => s.cart.items);
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home आरम्भ", path: "/" },
    { name: "Healing Services स्वउपचारसेवा", path: "/healing" },
    { name: "Membership सदस्यत्व", path: "/membership" },
    { name: "Community Activities स्वकर्मण्य", path: "/community-activities" },
    { name: "Commune स्वगुरुकुल", path: "/commune" },
    { name: "E Shop विपणि", path: "/eShop" },
    { name: "Feeds प्राप्त", path: "/feeds" },
    { name: "Calendar स्ववर्षपद", path: "/calendar" },
  ];

  const splitTitle = (text) => {
    const index = text.lastIndexOf(" ");
    if (index === -1) return { en: text, hi: "" };
    return { en: text.slice(0, index), hi: text.slice(index + 1) };
  };

  console.log("cartCount", cartCount);

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

        /* Responsive styles */
        @media (max-width: 1024px) {
          .nav-link {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 768px) {
          .mobile-action-btns {
            gap: 0.5rem;
          }
        }
      `}</style>

      <nav
        className={`w-full fixed flex top-0 left-0 z-50 transition-all duration-300 outline-none ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white/80 backdrop-blur-md shadow-md"
        }`}
      >
        <div className="w-full bg-white max-w-[1920px] mx-auto px-3 sm:px-4 md:px-5 lg:px-10 h-16 sm:h-18 md:h-20 lg:h-16 flex lg:justify-between items-center">
          {/* Logo Section */}
          <Link
            to="/"
            className="w-auto flex-shrink-0 min-w-[120px] sm:min-w-[150px] md:w-[200px]"
          >
            <div className="h-12 sm:h-14 md:h-16 md:rounded-full flex items-center justify-center shine-wave w-full">
              <img
                src={SwagramaLogo}
                className="h-full w-full object-contain cursor-pointer"
                alt="Swagrama Logo"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden w-full justify-center lg:flex xl:space-x-6 2xl:space-x-8 space-x-4 text-gray-700 font-medium text-[11px] xl:text-[12px] text-left items-center">
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
                    <span className="block text-green-700 group-hover:text-green-600 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                      {hi}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden w-full lg:w-auto justify-end md:flex space-x-2 lg:space-x-3 items-center lg:flex-shrink-0">
            <Link
              to="/login"
              className="btn-outline flex items-center gap-1 lg:gap-2 px-2 py-1 border-2 border-green-600 text-green-600 rounded-lg font-medium"
            >
              <LoginIcon fontSize="small" />
            </Link>

            <Link
              to="/signup"
              className="btn-gradient flex items-center gap-1 lg:gap-2 px-2 py-1.5 text-white rounded-lg font-medium shadow-md"
            >
              <PersonAddAltIcon fontSize="small" />
            </Link>

            <Link
              onClick={() => {
                setOpenStore(true);
                setOpen(false);
              }}
              className="store-btn relative flex items-center justify-center gap-1 lg:gap-2 text-center px-2 py-1.5 text-white rounded-lg font-medium shadow-md"
            >
              <Badge
                badgeContent={cartCount}
                color="success"
                overlap="circular"
                invisible={cartCount === 0}
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: "0.65rem",
                    minWidth: "18px",
                    height: "18px",
                  },
                }}
              >
                <ShoppingCartIcon fontSize="small" className="text-center" />
              </Badge>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex justify-end w-auto ml-auto lg:hidden">
            <button
              className="text-gray-700 hover:text-green-600 transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-green-50"
              onClick={() => setOpen(true)}
            >
              <MenuIcon fontSize="large" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "85%", sm: 320, md: 280 },
            maxWidth: "100vw",
          },
        }}
      >
        <div className="w-full h-full px-3 sm:px-4 py-3 sm:py-4 space-y-4 sm:space-y-6 bg-gradient-to-br from-white to-green-50">
          <div className="flex justify-between items-center pb-3 sm:pb-4 border-b-2 border-green-100">
            <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Menu
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="text-red-600 transition-colors h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-red-100 flex items-center justify-center"
            >
              <CloseIcon fontSize="small" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-1 sm:space-y-2 text-gray-700 font-medium list-none overflow-y-auto max-h-[calc(100vh-200px)]">
            {navLinks.map((item, index) => {
              const { en, hi } = splitTitle(item.name);
              return (
                <div
                  key={item.name}
                  className="mobile-menu-item list-none"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block p-2 sm:p-2.5 rounded-lg hover:bg-green-50 transition-all"
                  >
                    <span className="flex space-x-2 text-xs sm:text-sm font-semibold text-gray-800 hover:text-green-600 transition-colors">
                      <span>{en}</span>
                      <span className="text-ayuMid">({hi})</span>
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile Action Buttons */}
          <div className="pt-4 sm:pt-6 flex space-x-2 sm:space-x-3 justify-between border-t-2 border-green-100 mobile-action-btns">
            <Link
              to="/login"
              className="btn-outline flex items-center justify-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 border-2 border-green-600 text-green-600 rounded-lg font-medium flex-1"
            >
              <LoginIcon fontSize="small" />
            </Link>

            <Link
              to="/signup"
              className="btn-gradient flex items-center justify-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 text-white rounded-lg font-medium shadow-md flex-1"
            >
              <PersonAddAltIcon fontSize="small" />
            </Link>

            <Link
              onClick={() => {
                setOpenStore(true);
                setOpen(false);
              }}
              className="store-btn relative flex items-center justify-center gap-1 sm:gap-2 text-center px-2 py-1.5 sm:px-3 sm:py-2 text-white rounded-lg font-medium shadow-md flex-1"
            >
              <Badge
                badgeContent={cartCount}
                color="success"
                overlap="circular"
                invisible={cartCount === 0}
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: "0.6rem",
                    minWidth: "16px",
                    height: "16px",
                  },
                }}
              >
                <ShoppingCartIcon fontSize="small" className="text-center" />
              </Badge>
            </Link>
          </div>
        </div>
      </Drawer>
      {openStore && <ShopCart isOpen={openStore} setIsOpen={setOpenStore} />}
    </>
  );
};

export default Navbar;
