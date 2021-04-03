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

export const setName = (name) => ({
  type: SET_NAME,
  payload: {
    name,
  },
});

export const setPhone = (phone) => ({
  type: SET_PHONE,
  payload: {
    phone,
  },
});

export const setDelivery = (delivery) => ({
  type: SET_DELIVERY,
  payload: {
    delivery,
  },
});

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: {
    payment,
  },
});

export const setAddressCity = (city) => ({
  type: SET_ADRESS_CITY,
  payload: {
    city,
  },
});
export const setAddressStreet = (street) => ({
  type: SET_ADDRESS_STREET,
  payload: {
    street,
  },
});
export const setAddressStreetNo = (number) => ({
  type: SET_ADDRESS_STREET_NO,
  payload: {
    number,
  },
});
export const setAddressApartmentNo = (number) => ({
  type: SET_ADDRESS_APARTMENT_NO,
  payload: {
    number,
  },
});
