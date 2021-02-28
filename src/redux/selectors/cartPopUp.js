export const getCartPopUpState = (store) => store.cartPopUp;

export const getIsCartPopUpOpen = (store) =>
  getCartPopUpState(store) ? getCartPopUpState(store).isCartOpened : false;
