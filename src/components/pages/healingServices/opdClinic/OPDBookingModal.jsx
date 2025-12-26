import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputField from "../../../common/formFields/InputField";
import { useForm } from "react-hook-form";
import DropdownField from "../../../common/formFields/DropdownField";
import CheckBoxField from "../../../common/formFields/CheckBoxField";
import DatePickerField from "../../../common/formFields/DatePickerField";
import CommonButton from "../../../common/button/CommonButton";
import CancelButtonModal from "../../../common/button/CancelButtonModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function OPDBookingModal({ open, handleClose }) {
  const defaultValues = {
    searchDoctor: null,
    patientName: "",
    mobileNumber: "",
  };
  const { control } = useForm({
    mode: "onChange",
    defaultValues,
  });
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="h-[45%] w-[60%] rounded-lg ">
          <h1 className="font-semibold text-ayuDark text-xl my-2">
            Booking Modal
          </h1>
          <CancelButtonModal onClick={handleClose} />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <DropdownField
                control={control}
                name="searchDoctor"
                placeholder="Search Doctor"
              />
            </div>
            <div>
              {/* date here */}

              <DatePickerField control={control} name="date" label={"Date"} />
            </div>
            <div>
              <InputField
                control={control}
                name="patientName"
                label="Patient Name"
              />
            </div>
            <div>
              <InputField
                control={control}
                name="mobileNumber"
                label="Mobile Number"
              />
            </div>
            <div>
              <CheckBoxField
                control={control}
                name="iAgree"
                label={"* i agree to the "}
              />
              &nbsp;{" "}
              <span>
                <a href="" className="text-sm text-blue-500">
                  terms and condition
                </a>
              </span>
            </div>
            <div className="text-sm text-green-400">Appointment Fees ₹750</div>
            <div className="col-span-2 flex justify-end">
              <CommonButton
                type="submit"
                label={"Book Appointment"}
                className={"bg-ayuDark text-white"}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
