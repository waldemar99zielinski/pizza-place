import { OPEN_POPUP, CLOSE_POPUP } from "../constants/actionTypes";
import { POPUD_ID_ORDER_FINALIZATION } from "../constants/popUpIds";
const initialState = { openedPopUpsIds: [POPUD_ID_ORDER_FINALIZATION] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_POPUP:
      //   console.log("Reducer: popUp: OPEN_POPUP ", action.payload.id);
      let isIdExisting = state.openedPopUpsIds.indexOf(action.payload.id) > -1;
      let openedPopUpsIds = { ...state }.openedPopUpsIds;

      if (!isIdExisting) {
        return {
          ...state,
          openedPopUpsIds: [...state.openedPopUpsIds, action.payload.id],
        };
      }

      return {
        state,
      };
    case CLOSE_POPUP:
      //   console.log("Reducer: popUp: CLOSE_POPUP ", action.payload.id);
      return {
        ...state,
        openedPopUpsIds: state.openedPopUpsIds.filter(
          (id) => id !== action.payload.id
        ),
      };
    default:
      //   console.log("Reducer: popup: default");
      return state;
  }
};

export default reducer;
