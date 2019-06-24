
import { TOGGLE_SIDEDRAWER } from './ui.actiontypes';
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_SIDEDRAWER:
      return { ...state };
    default:
      return state;
  }
};
