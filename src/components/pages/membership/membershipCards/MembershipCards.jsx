import {
    CheckCircle,
    Groups,
    LocalHospital,
    Person,
    Psychology,
    Spa
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";
import BarterMembershipForm from "../BarterMembershipForm";

const memberships = [
  {
    categoryName: "Self : Primary Basic",
    membershipNameEn: "Self Basic Membership",
    membershipNameHi: "स्वात्मन्यूलभूतसदस्यत",
    membershipAmount: 2500,
    primaryDiscount: 2250,
    primaryDiscountAmount: -250,
    additionalDiscount: null,
    amountReducible: "Not Deductible",
    couponCode: "BSM5%",
    icon: Person,
    color: "from-lime-600 to-lime-700",
  },
  {
    categoryName: "JhanaYogAyu Staff",
    membershipNameEn: "Community Staff Membership",
    membershipNameHi: "स्तकर्मकरणासदस्यत",
    membershipAmount: 6000,
    primaryDiscount: 5000,
    primaryDiscountAmount: -1000,
    additionalDiscount: "2500 (Only family member)",
    amountReducible: "-",
    couponCode: "BCSM15%",
    icon: Groups,
    color: "from-green-600 to-green-700",
    featured: true,
  },
  {
    categoryName: "Own : Single / Personal",
    membershipNameEn: "Own Membership",
    membershipNameHi: "स्वकीयसदस्यत",
    membershipAmount: 150000,
    primaryDiscount: 125000,
    primaryDiscountAmount: -25000,
    additionalDiscount: null,
    amountReducible: "Yes",
    couponCode: "BOM20%",
    icon: Person,
    color: "from-lime-700 to-green-600",
  },
  {
    categoryName: "Joint Family",
    membershipNameEn: "Joint Family Membership",
    membershipNameHi: "स्कुटुम्बीनीसदस्यत",
    membershipAmount: 150000,
    primaryDiscount: 125000,
    primaryDiscountAmount: -25000,
    additionalDiscount: "1,00,000",
    amountReducible: "Yes",
    couponCode: "BJFM20%",
    icon: Groups,
    color: "from-green-700 to-lime-600",
  },
  {
    categoryName: "Ayurveda Vaidya",
    membershipNameEn: "Root Healer Membership",
    membershipNameHi: "स्ववैंहसदस्यत",
    membershipAmount: 350000,
    primaryDiscount: 250000,
    primaryDiscountAmount: -100000,
    additionalDiscount: "1,00,000",
    amountReducible: "Yes",
    couponCode: "BRHM25%",
    icon: Spa,
    color: "from-lime-600 to-green-700",
  },
  {
    categoryName: "Other all Doctors, Physicians",
    membershipNameEn: "Physician'sMembership",
    membershipNameHi: "स्वभिषज्जसदस्यत",
    membershipAmount: 275000,
    primaryDiscount: 200000,
    primaryDiscountAmount: -75000,
    additionalDiscount: "1,00,000",
    amountReducible: "Yes",
    couponCode: "BPM25%",
    icon: LocalHospital,
    color: "from-green-600 to-lime-600",
  },
  {
    categoryName: "Director of SwaGrama",
    membershipNameEn: "Propitious Optimistic Membership",
    membershipNameHi: "सन्तोषप्रीयसदस्यत",
    membershipAmount: 600000,
    primaryDiscount: 400000,
    primaryDiscountAmount: -200000,
    additionalDiscount: "1,00,000",
    amountReducible: "Yes",
    couponCode: "BPOM30%",
    icon: Psychology,
    color: "from-lime-700 to-green-700",
  },
];

const MembershipCard = ({ membership, index, setOpenMembershipModal }) => {
  const IconComponent = membership.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative bg-gradient-to-br ${
        membership.color
      } p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all ${
        membership.featured ? "ring-2 ring-lime-400 ring-offset-2" : ""
      }`}
    >
      {membership.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime-400 text-green-900 px-3 py-1 rounded-full text-xs font-bold">
          POPULAR
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-white font-bold text-sm mb-1">
            {membership.categoryName}
          </h3>
          <p className="text-lime-100 text-xs">{membership.membershipNameEn}</p>
          <p className="text-lime-200 text-xs mt-1">
            {membership.membershipNameHi}
          </p>
        </div>
        <IconComponent
          className="text-lime-200 ml-2 animate-pulse"
          style={{ fontSize: 28 }}
        />
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-md p-3 mb-3">
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-lime-100 text-xs">Membership</span>
          <span className="text-white font-bold text-lg">
            ₹{membership.membershipAmount.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex justify-between items-baseline mb-2">
          <span className="text-lime-100 text-xs">After Discount</span>
          <div className="text-right">
            <span className="text-lime-300 font-bold text-base">
              ₹{membership.primaryDiscount.toLocaleString("en-IN")}
            </span>
            <span className="text-lime-200 text-xs ml-1">
              ({membership.primaryDiscountAmount.toLocaleString("en-IN")})
            </span>
          </div>
        </div>

        {membership.additionalDiscount && (
          <div className="flex justify-between items-baseline">
            <span className="text-lime-100 text-xs">Additional Member</span>
            <span className="text-lime-300 font-semibold text-sm">
              {membership.additionalDiscount}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-2 mb-3">
        <div className="flex items-center gap-2">
          <CheckCircle className="text-lime-300" style={{ fontSize: 16 }} />
          <span className="text-white text-xs">
            Code : <span className="font-bold">{membership.couponCode}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="text-lime-300" style={{ fontSize: 16 }} />
          <span className="text-white text-xs">
            Reducible : {membership.amountReducible}
          </span>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpenMembershipModal(true)}
        className="w-full bg-white text-green-800 font-bold py-2 px-4 rounded-md text-sm hover:bg-lime-100 transition-colors"
      >
        Choose Plan
      </motion.button>
    </motion.div>
  );
};

export default function MembershipCards() {
  const [openMembershipModal, setOpenMembershipModal] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-green-100 py-6 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-6"
      >
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-700 to-lime-700 bg-clip-text text-transparent text-center mb-2">
          Choose Your Family Membership
        </h1>
        <p className="text-green-700 text-center text-sm">
          Extend Your Joint Family: Self / Mother / Father / Wife / Husband /
          Son / Daughter
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {memberships.map((membership, index) => (
          <MembershipCard
            key={index}
            membership={membership}
            index={index}
            setOpenMembershipModal={setOpenMembershipModal}
          />
        ))}
      </div>
      {openMembershipModal && (
        <BarterMembershipForm
          open={openMembershipModal}
          handleClose={() => setOpenMembershipModal(false)}
          text={
            <>
              * Upgrade your membership for extra discounts.
            </>
          }
        />
      )}
    </div>
  );
}
