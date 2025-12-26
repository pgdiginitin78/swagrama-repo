import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../../common/formFields/InputField";
import DropdownField from "../../../common/formFields/DropdownField";
import CheckBoxField from "../../../common/formFields/CheckBoxField";
import DatePickerField from "../../../common/formFields/DatePickerField";
import CommonButton from "../../../common/button/CommonButton";
import CancelButtonModal from "../../../common/button/CancelButtonModal";

const schema = yup.object().shape({
  searchDoctor: yup
    .object()
    .nullable()
    .shape({
      value: yup.string().required("required"),
      label: yup.string().required("required"),
    })
    .required("Required"),
  date: yup
    .date()
    .nullable()
    .required("Please select a date")
    .min(new Date(), "Date must be today or later"),
  patientName: yup.string().required("Patient name is required"),
  mobileNumber: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10 digit mobile number")
    .required("Mobile number is required"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function AppointmentBookingModal({ open, handleClose }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      searchDoctor: null,
      patientName: "",
      mobileNumber: "",
      date: null,
      isAgree: false,
    },
  });

  const onSubmitHandler = (data) => {
    console.log("Form Data =>", data);
    alert("Appointment Booked Successfully!");
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="booking-modal-title"
    >
      <Box sx={style} className="w-[60%] max-w-2xl rounded-xl relative">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-semibold text-xl text-ayuDark whitespace-nowrap">
            Book Appointment
          </h1>
          <CancelButtonModal onClick={handleClose} />
        </div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="grid md:grid-cols-2 gap-4">
            <DropdownField
              control={control}
              name="searchDoctor"
              placeholder="Select Doctor"
              label="Doctor"
              error={errors?.searchDoctor}
            />

            <DatePickerField
              control={control}
              name="date"
              label="Select Date"
              error={errors.date}
              disablePast={true}
              inputFormat={"dd-MM-yyyy"}
            />

            <InputField
              control={control}
              name="patientName"
              label="Patient Name"
              error={errors?.patientName}
            />

            <InputField
              control={control}
              name="mobileNumber"
              label="Mobile Number"
              error={errors?.mobileNumber}
            />

            <div className="col-span-2 flex items-center gap-2">
              <CheckBoxField control={control} name="isAgree" />
              <p className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-blue-500 underline">
                  terms & conditions
                </a>
              </p>
            </div>

            <div className="col-span-2 flex justify-between items-center mt-2">
              <p className="text-sm font-medium text-green-600">
                Appointment Fee: ₹750
              </p>
              <p className="text-sm font-medium text-ayuBrown">
     *All bookings are non-refundable. 
</p>
              <CommonButton
                type="submit"
                label="Book Appointment"
                className="bg-ayuDark text-white px-6"
              />
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  );
}
