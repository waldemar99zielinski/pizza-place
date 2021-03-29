import React from "react";

//componets
import PopUp from "../popUp/PopUp";
import CustomerInfoForm from "./CustomerInfoForm";
//redux
import { POPUD_ID_ORDER_FINALIZATION } from "../../redux/constants/popUpIds";

const index = () => {
  return (
    <PopUp title={"ORDER FINALIZATION"} id={POPUD_ID_ORDER_FINALIZATION}>
      <CustomerInfoForm />
    </PopUp>
  );
};

export default index;
