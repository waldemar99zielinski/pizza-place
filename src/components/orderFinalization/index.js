import React from "react";

//componets
import PopUp from "../popUp/PopUp";
import CustomerInfoForm from "./CustomerInfoForm";
import AddressForm from "./AddressForm";
import OrderInfoForm from "./OrderInfoForm";
import Buttons from "./Buttons";
//redux
import { POPUD_ID_ORDER_FINALIZATION } from "../../redux/constants/popUpIds";

const index = () => {
  return (
    <PopUp title={"ORDER FINALIZATION"} id={POPUD_ID_ORDER_FINALIZATION}>
      <CustomerInfoForm />
      <OrderInfoForm />
      <AddressForm />
      <Buttons />
    </PopUp>
  );
};

export default index;
