import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CancelButtonModal from "../../common/button/CancelButtonModal";
import CommonButton from "../../common/button/CommonButton";
import DatePickerField from "../../common/formFields/DatePickerField";
import InputField from "../../common/formFields/InputField";

const schema = yup.object().shape({
  dateOfBirth: yup
    .date()
    .nullable()
    .required("Please select a date")
    .min(new Date(), "Date must be today or later"),
  fullName: yup.string().required("Patient name is required"),
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

export default function MembershipFormModal({ open, handleClose }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      dateOfBirth: null,
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
            Book Membership
          </h1>
          <CancelButtonModal onClick={handleClose} />
        </div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="grid md:grid-cols-2 gap-4">
            <InputField
              control={control}
              name="fullName"
              label="Full Name"
              error={errors?.fullName}
            />
            <InputField
              control={control}
              name="mobileNumber"
              label="Mobile Number"
              error={errors?.mobileNumber}
            />
            <DatePickerField
              control={control}
              name="dateOfBirth"
              label="Select Date"
              error={errors.dateOfBirth}
              disablePast={true}
              inputFormat={"dd-MM-yyyy"}
            />

            <div className="flex items-center gap-2">
              <InputField
              type="file"
                control={control}
                name="uploadDocuments"
                label="Upload Documents"
                error={errors?.uploadDocuments}
              />
            </div>

            <div className="col-span-2 flex justify-between items-center mt-2">
              <p className="text-sm font-medium text-green-600">
                You will get 15% off on all bookings.
              </p>

              <CommonButton
                type="submit"
                label="Add Member"
                className="bg-ayuDark text-white px-6"
              />
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  );
}
