export const getPopUpState = (store) => store.popUp;

export const getOpenedPopUpsIds = (store) =>
  getPopUpState(store) ? getPopUpState(store).openedPopUpsIds : [];

export const getIsOpenedPopUpById = (store, id) =>
  getOpenedPopUpsIds(store).indexOf(id) > -1 ? true : false;
