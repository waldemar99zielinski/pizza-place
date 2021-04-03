export const getName = (store) => {
  return store.order.orderInfo.customer.name;
};

export const getPhone = (store) => {
  return store.order.orderInfo.customer.phone;
};

export const getDelivery = (store) => {
  return store.order.orderInfo.order.delivery;
};

export const getPayment = (store) => {
  return store.order.orderInfo.order.payment;
};

export const getAddressCity = (store) => {
  return store.order.orderInfo.address.city;
};
export const getAddressStreet = (store) => {
  return store.order.orderInfo.address.street;
};
export const getAddressStreetNo = (store) => {
  return store.order.orderInfo.address.streetNo;
};
export const getAddressApartmentNo = (store) => {
  return store.order.orderInfo.address.apartmentNo;
};
