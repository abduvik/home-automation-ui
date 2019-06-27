import {
  TOGGLE_SIDEDRAWER,
  SHOW_ERROR_MODAL,
  CLOSE_ERROR_MODAL
} from "./ui.actiontypes";

const initialState = {
  error: null,
  openSideDrawer: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_SIDEDRAWER:
      return {
        ...state,
        openSideDrawer: !state.openSideDrawer
      };

    case SHOW_ERROR_MODAL:
      return {
        ...state,
        error: payload.error
      };

    case CLOSE_ERROR_MODAL:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
