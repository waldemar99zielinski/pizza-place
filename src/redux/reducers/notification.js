import {
  OPEN_NOTIFICATION,
  CLOSE_NOTIFICATION,
} from "../constants/actionTypes";

const initialState = { openedNotifications: [], notificationId: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NOTIFICATION:
      return {
        openedNotifications: [
          ...state.openedNotifications,
          { id: state.notificationId, message: action.payload.message },
        ],
        notificationId: ++state.notificationId,
      };
    case CLOSE_NOTIFICATION:
      return {
        ...state,
        openedNotifications: state.openedNotifications.filter(
          (n) => n.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
