import React, { useEffect, useRef } from "react";
import {
  Instagram,
  Facebook,
  YouTube,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";
import SwagramaLogo from "../assets/landing-page/swagramaLogo.png"


const Footer = () => {
  const particlesContainerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const particlesContainer = particlesContainerRef.current;
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className =
        "absolute w-1 h-1 bg-gradient-radial from-[#c9a86a] to-transparent rounded-full opacity-40";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animation = `float ${
        4 + Math.random() * 6
      }s ease-in-out infinite`;
      particle.style.animationDelay = Math.random() * 3 + "s";
      particlesContainer.appendChild(particle);
    }

    return () => {
      if (particlesContainer) {
        particlesContainer.innerHTML = "";
      }
    };
  }, []);

  const HerbalLeaf = ({ className, fill }) => (
    <svg className={className} viewBox="0 0 100 100">
      <path
        d="M50,10 Q65,25 70,45 Q65,65 50,90 Q35,65 30,45 Q35,25 50,10 Z M50,20 Q40,35 50,80 Q60,35 50,20"
        fill={fill}
      />
    </svg>
  );

  const LotusPetal = ({ className, fill }) => (
    <svg className={className} viewBox="0 0 100 100">
      <ellipse
        cx="50"
        cy="50"
        rx="20"
        ry="40"
        fill={fill}
        transform="rotate(0 50 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="20"
        ry="40"
        fill={fill}
        transform="rotate(72 50 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="20"
        ry="40"
        fill={fill}
        transform="rotate(144 50 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="20"
        ry="40"
        fill={fill}
        transform="rotate(216 50 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="20"
        ry="40"
        fill={fill}
        transform="rotate(288 50 50)"
      />
      <circle cx="50" cy="50" r="15" fill="#8b6f47" />
    </svg>
  );

  const MandalaOrnament = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle
        cx="50"
        cy="50"
        r="35"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle
        cx="50"
        cy="50"
        r="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle
        cx="50"
        cy="50"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <path
        d="M50,5 L50,20 M50,80 L50,95 M5,50 L20,50 M80,50 L95,50"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <path
        d="M15,15 L25,25 M75,15 L85,25 M15,85 L25,75 M75,85 L85,75"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </svg>
  );

  return (
    <>
      <style>{`
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-30px, -50px);
          }
          50% {
            transform: translate(20px, -80px);
          }
          75% {
            transform: translate(-20px, -40px);
          }
        }

        @keyframes leafFloat {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20px, -40px) rotate(10deg);
          }
        }

        @keyframes lotusRotate {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.05);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes mandalaRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }

        .leaf-animate {
          animation: leafFloat 8s ease-in-out infinite;
        }

        .lotus-animate {
          animation: lotusRotate 30s linear infinite;
        }

        .mandala-animate {
          animation: mandalaRotate 40s linear infinite;
        }

        .pulse-animate {
          animation: pulse 2s ease-in-out infinite;
        }

        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #8b6f47, #c9a86a, transparent);
          border-radius: 2px;
        }

        .footer-link::before {
          content: '→';
          position: absolute;
          left: -20px;
          opacity: 0;
          color: #8b6f47;
          transition: all 0.3s ease;
        }

        .footer-link:hover::before {
          opacity: 1;
          left: 0;
        }
      `}</style>

      <footer
        ref={footerRef}
        className="relative overflow-hidden bg-ayuDark "
      >
        {/* Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8b6f47] via-[#c9a86a] to-[#8b6f47] shadow-lg" />

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Herbal Leaves */}
          <HerbalLeaf
            className="absolute top-[15%] left-[8%] w-16 h-16 md:w-20 md:h-20 opacity-12 blur-[0.5px] leaf-animate"
            fill="#c9a86a"
          />
          <HerbalLeaf
            className="absolute top-[65%] left-[85%] w-14 h-14 md:w-16 md:h-16 opacity-12 blur-[0.5px] leaf-animate"
            fill="#c9a86a"
            style={{ animationDelay: "1s" }}
          />
          <HerbalLeaf
            className="absolute top-[40%] left-[5%] w-12 h-12 md:w-14 md:h-14 opacity-12 blur-[0.5px] leaf-animate"
            fill="#c9a86a"
            style={{ animationDelay: "2s" }}
          />
          <HerbalLeaf
            className="absolute top-[75%] left-[25%] w-14 h-14 md:w-16 md:h-16 opacity-12 blur-[0.5px] leaf-animate"
            fill="#c9a86a"
            style={{ animationDelay: "3s" }}
          />

          {/* Lotus Petals */}
          <LotusPetal
            className="absolute top-[20%] right-[10%] w-16 h-16 md:w-20 md:h-20 opacity-8 lotus-animate"
            fill="#c9a86a"
          />
          <LotusPetal
            className="absolute bottom-[15%] left-[15%] w-16 h-16 md:w-20 md:h-20 opacity-8 lotus-animate"
            fill="#c9a86a"
            style={{ animationDelay: "2s" }}
          />

          {/* Mandala Ornaments */}
          <MandalaOrnament
            className="absolute bottom-[20%] right-[10%] w-24 h-24 md:w-36 md:h-36 opacity-6 text-[#8b6f47] mandala-animate"
            style={{ animationDelay: "5s" }}
          />

          {/* Particles Container */}
          <div ref={particlesContainerRef} />
        </div>

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-4 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(139, 111, 71, 0.1) 1px, transparent 1px), radial-gradient(circle at 80% 50%, rgba(139, 111, 71, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 md:pt-10 md:pb-6 text-sm">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
            {/* Logo Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-white/60 to-white/30 p-6 md:p-8 rounded-2xl backdrop-blur-md border-2 border-[#8b6f47]/20 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-400">
                <img
                  src={SwagramaLogo}
                  alt="Swagrama Logo"
                  className="h-28 md:h-36 w-auto mx-auto drop-shadow-lg"
                />
              </div>
            </div>

            {/* Explore Section */}
            <div className="sm:col-span-1">
              <h4 className="font-['Cinzel'] text-[#5a7c59] text-lg  font-bold mb-6 relative pb-3 footer-heading">
                Explore
              </h4>
              <div className="flex flex-col gap-3 text-sm">
                {[
                  "Home",
                  "About Us",
                  "Refund Policy",
                  "Privacy Policy",
                  "Terms & Conditions",
                  "गाईत्वग्राम Cow Village",
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="relative text-white hover:text-[#8b6f47] hover:pl-5 transition-all duration-300 footer-link"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="sm:col-span-1">
              <h4 className="font-['Cinzel'] text-[#5a7c59] text-lg  font-bold mb-6 relative pb-3 footer-heading">
                Contact
              </h4>
              <div className="flex flex-col gap-2 text-sm text-left">
                <div className="flex gap-3 items-start text-white hover:bg-white/40 p-2 rounded-lg hover:translate-x-1 transition-all duration-300">
                  <LocationOn className="flex-shrink-0 text-white hover:text-[#5a7c59] transition-colors" />
                  <p>
                    81/635, Nandraj Sankul, Main Road, Famous Chowk, New
                    Sanghvi, Pune, Maharashtra, India. 411027
                  </p>
                </div>
                <div className="flex gap-3 items-center text-white hover:bg-white/40 p-2 rounded-lg hover:translate-x-1 transition-all duration-300">
                  <Phone className="flex-shrink-0 text-white hover:text-[#5a7c59] transition-colors" />
                  <p>+91 9272130399</p>
                </div>
                <div className="flex gap-3 items-center text-white hover:bg-white/40 p-2 rounded-lg hover:translate-x-1 transition-all duration-300">
                  <Email className="flex-shrink-0 text-white hover:text-[#5a7c59] transition-colors" />
                  <a
                    href="mailto:swagrama.lavale@gmail.com"
                    className="hover:text-[#8b6f47]"
                  >
                    swagrama.lavale@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Connect Section */}
            <div className="sm:col-span-1">
              <h4 className="font-['Cinzel'] text-[#5a7c59] text-lg  font-bold mb-6 relative pb-3 footer-heading">
                Connect With Us
              </h4>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.instagram.com/swagrama_community/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-white/60 to-white/30 flex items-center justify-center border-2 border-[#8b6f47]/20 hover:scale-110 hover:-translate-y-2 hover:rotate-12 hover:shadow-xl transition-all duration-400 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-[#8b6f47] to-[#c9a86a] rounded-full scale-0 group-hover:scale-100 transition-transform duration-400" />
                  <Instagram className="relative z-10 text-[#8b6f47] group-hover:text-white transition-colors duration-400" />
                </a>
                <a
                  href="https://www.facebook.com/swagramacommunity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-white/60 to-white/30 flex items-center justify-center border-2 border-[#8b6f47]/20 hover:scale-110 hover:-translate-y-2 hover:rotate-12 hover:shadow-xl transition-all duration-400 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-[#8b6f47] to-[#c9a86a] rounded-full scale-0 group-hover:scale-100 transition-transform duration-400" />
                  <Facebook className="relative z-10 text-[#8b6f47] group-hover:text-white transition-colors duration-400" />
                </a>
                <a
                  href="https://www.youtube.com/@swagrama_community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-white/60 to-white/30 flex items-center justify-center border-2 border-[#8b6f47]/20 hover:scale-110 hover:-translate-y-2 hover:rotate-12 hover:shadow-xl transition-all duration-400 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-[#8b6f47] to-[#c9a86a] rounded-full scale-0 group-hover:scale-100 transition-transform duration-400" />
                  <YouTube className="relative z-10 text-[#8b6f47] group-hover:text-white transition-colors duration-400" />
                </a>
              </div>
            </div>

            {/* App Download Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-['Cinzel'] text-[#5a7c59] text-lg  font-bold mb-6 relative pb-3 footer-heading">
                Download App
              </h4>
              <a
                href="https://play.google.com/store/apps/details?id=com.innover.swagram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-br from-white/60 to-white/30 px-4 py-3 rounded-xl border-2 border-[#8b6f47]/20 text-[#5a7c59] hover:bg-gradient-to-br hover:from-[#8b6f47] hover:to-[#c9a86a] hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-400 backdrop-blur-md font-semibold text-sm md:text-base pulse-animate"
              >
                <svg
                  className="w-6 h-6 md:w-7 md:h-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                <span>Get on Play Store</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 mt-6 border-t-2 border-[#8b6f47]/15 text-[#7a7a7a] text-sm">
            <p>&copy; 2026 Swagrama Community. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
