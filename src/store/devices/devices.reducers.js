import { FETCH_DEVICE_START, FETCH_DEVICE_SUCCESS, FETCH_DEVICE_FAILED } from "./devices.actiontypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DEVICE_START:
      return { ...state };
    case FETCH_DEVICE_SUCCESS:
      return { ...state };
    case FETCH_DEVICE_FAILED:
      return { ...state };

    default:
      return state;
  }
};
