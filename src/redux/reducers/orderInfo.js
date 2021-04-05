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
  order: { delivery: "", payment: "" },
  address: { city: "", street: "", streetNo: "", apartmentNo: "" },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        customer: { ...state.customer, name: action.payload.name },
      };
    case SET_PHONE:
      return {
        ...state,
        customer: { ...state.customer, phone: action.payload.phone },
      };
    case SET_PAYMENT:
      return {
        ...state,
        order: { ...state.order, payment: action.payload.payment },
      };
    case SET_DELIVERY:
      return {
        ...state,
        order: { ...state.order, delivery: action.payload.delivery },
      };
    case SET_ADRESS_CITY:
      return {
        ...state,
        address: { ...state.address, city: action.payload.city },
      };
    case SET_ADDRESS_STREET:
      return {
        ...state,
        address: { ...state.address, street: action.payload.street },
      };
    case SET_ADDRESS_STREET_NO:
      return {
        ...state,
        address: { ...state.address, streetNo: action.payload.number },
      };
    case SET_ADDRESS_APARTMENT_NO:
      return {
        ...state,
        address: { ...state.address, apartmentNo: action.payload.number },
      };
    default:
      return state;
  }
};

export default reducer;
