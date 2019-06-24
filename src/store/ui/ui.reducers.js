import { TOGGLE_SIDEDRAWER } from "./ui.actiontypes";

const initialState = {
  openSideDrawer: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_SIDEDRAWER:
      return {
        ...state,
        openSideDrawer: !state.openSideDrawer
      };
    default:
      return state;
  }
};
