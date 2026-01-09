import { Modal, Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import InputField from "../common/formFields/InputField";
import CommonButton from "../common/button/CommonButton";
import CancelButtonModal from "../common/button/CancelButtonModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
};

export default function LoginModal({ open, handleClose }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} className="w-[90%] sm:w-[420px] rounded-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="p-6"
        >
          <h2 className="text-xl font-semibold text-center text-green-900 mb-5">
            Login
          </h2>
          <CancelButtonModal onClick={handleClose} />

          <form onSubmit={handleSubmit(handleLogin)} className="grid gap-4">
            <InputField
              control={control}
              name="userName"
              label="User Name"
              error={errors.userName}
            />

            <InputField
              control={control}
              name="password"
              label="Password"
              type="password"
              error={errors.password}
            />
            <div className="flex justify-end">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // onClick={onForgotPassword}
                className="text-sm font-medium text-red-700 hover:underline"
              >
                Forgot password?
              </motion.button>
            </div>

            <div className="flex justify-end">
              <CommonButton
                type="submit"
                label="Login"
                className="bg-gradient-to-r from-lime-600 to-green-700 text-white rounded-lg"
              />
            </div>
          </form>
        </motion.div>
      </Box>
    </Modal>
  );
}
