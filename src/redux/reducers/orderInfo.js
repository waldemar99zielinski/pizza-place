import {
  SET_NAME,
  SET_PHONE,
  SET_PAYMENT,
  SET_DELIVERY,
  SET_ADDRESS_STREET,
  SET_ADDRESS_STREET_NO,
  SET_ADRESS_CITY,
  SET_ADDRESS_APARTMENT_NO,
} from "../constants/actionTypes";

const initialState = {
  customer: { name: "", phone: "" },
  order: { delivery: null, payment: null },
  address: { city: "", street: "", streetNo: null, apartmentNo: null },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        customer: { ...customer, name: action.payload.name },
      };
    case SET_PHONE:
      return {
        ...state,
        customer: { ...customer, phone: action.payload.phone },
      };
    case SET_PAYMENT:
      return {
        ...state,
        order: { ...order, delivery: action.payload.delivery },
      };
    case SET_DELIVERY:
      return {
        ...state,
        order: { ...order, payment: action.payload.payment },
      };
    case SET_ADRESS_CITY:
      return {
        ...state,
        address: { ...address, city: action.payload.city },
      };
    case SET_ADDRESS_STREET:
      return {
        ...state,
        address: { ...address, street: action.payload.street },
      };
    case SET_ADDRESS_STREET_NO:
      return {
        ...state,
        address: { ...address, streetNo: action.payload.number },
      };
    case SET_ADDRESS_APARTMENT_NO:
      return {
        ...state,
        address: { ...address, apartmentNo: action.payload.number },
      };
    default:
      return state;
  }
};
