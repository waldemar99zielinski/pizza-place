export const getOrderInfo = (store) => {
  return store.orderInfo;
};

export const getName = (store) => {
  return store.orderInfo.customer.name;
};

export const getPhone = (store) => {
  return store.orderInfo.customer.phone;
};

export const getDelivery = (store) => {
  return store.orderInfo.order.delivery;
};

export const getPayment = (store) => {
  return store.orderInfo.order.payment;
};

export const getAddressCity = (store) => {
  return store.orderInfo.address.city;
};
export const getAddressStreet = (store) => {
  return store.orderInfo.address.street;
};
export const getAddressStreetNo = (store) => {
  return store.orderInfo.address.streetNo;
};
export const getAddressApartmentNo = (store) => {
  return store.orderInfo.address.apartmentNo;
};
export const getIsValidating = (store) => {
  return store.orderInfo.validate;
};
