import {
  TOGGLE_SIDEDRAWER,
  CLOSE_ERROR_MODAL,
  SHOW_ERROR_MODAL
} from "./ui.actiontypes";

export const toggleSideDrawer = () => {
  return {
    type: TOGGLE_SIDEDRAWER
  };
};

export const showErrorModal = error => {
  return {
    type: SHOW_ERROR_MODAL,
    payload: {
      error
    }
  };
};

export const closeErrorModal = () => {
  return {
    type: CLOSE_ERROR_MODAL
  };
};
