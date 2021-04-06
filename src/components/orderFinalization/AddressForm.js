import React from "react";
import "./OrderFinalization.css";

//redux
import { connect } from "react-redux";
import {
  setAddressCity,
  setAddressStreet,
  setAddressStreetNo,
  setAddressApartmentNo,
} from "../../redux/actions/orderInfo";
import {
  getAddressCity,
  getAddressStreet,
  getAddressStreetNo,
  getAddressApartmentNo,
  getDelivery,
  getIsValidating,
} from "../../redux/selectors/orderInfo";
const AddressForm = (props) => {
  const DELIVERY_YES = "Y";
  console.log("DELIVERY: ", props.delivery);

  return (
    <div
      className={
        props.delivery == DELIVERY_YES
          ? "order-finalization-address-info-container"
          : "order-finalization-address-info-container-hidden"
      }
    >
      <div
        className={
          props.isValidating && props.city.length <= 0
            ? "order-finalization-form-container shake-animation"
            : "order-finalization-form-container"
        }
      >
        <input
          className="order-finalization-input"
          placeholder=" "
          value={props.city}
          onChange={(e) => props.setAddressCity(e.target.value)}
        />
        <label className="order-finalization-label">City</label>
      </div>
      <div
        className={
          props.isValidating && props.street.length <= 0
            ? "order-finalization-form-container shake-animation"
            : "order-finalization-form-container"
        }
      >
        <input
          className="order-finalization-input"
          placeholder=" "
          value={props.street}
          onChange={(e) => props.setAddressStreet(e.target.value)}
        />
        <label className="order-finalization-label">Street</label>
      </div>
      <div
        className={
          props.isValidating && props.streetNo.length <= 0
            ? "order-finalization-form-container shake-animation"
            : "order-finalization-form-container"
        }
      >
        <input
          className="order-finalization-input"
          placeholder=" "
          value={props.streetNo}
          onChange={(e) =>
            props.setAddressStreetNo(formatForNumbersOnly(e.target.value))
          }
        />
        <label className="order-finalization-label">Street No</label>
      </div>
      <div className="order-finalization-form-container">
        <input
          className="order-finalization-input"
          type="text"
          value={props.appartmentNo}
          placeholder=" "
          onChange={(e) =>
            props.setAddressApartmentNo(formatForNumbersOnly(e.target.value))
          }
        />
        <label className="order-finalization-label">
          Apartment No (optional)
        </label>
      </div>
    </div>
  );
};

const formatForNumbersOnly = (input) => {
  return input.replace(/[^\d]/g, "");
};

const mapStateToProps = (state) => {
  const city = getAddressCity(state);
  const street = getAddressStreet(state);
  const streetNo = getAddressStreetNo(state);
  const appartmentNo = getAddressApartmentNo(state);
  const delivery = getDelivery(state);
  const isValidating = getIsValidating(state);
  return { city, street, streetNo, appartmentNo, delivery, isValidating };
};

export default connect(mapStateToProps, {
  setAddressCity,
  setAddressStreet,
  setAddressStreetNo,
  setAddressApartmentNo,
})(AddressForm);
