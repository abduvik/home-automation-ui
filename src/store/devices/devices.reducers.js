import {
  FETCH_DEVICES_START,
  FETCH_DEVICES_SUCCESS,
  FETCH_DEVICES_FAILED,
  UPDATE_DEVICE_VALUE_START,
  UPDATE_DEVICE_VALUE_SUCCESS,
  UPDATE_DEVICE_VALUE_FAILED
} from "./devices.actiontypes";

const initialState = {
  devices: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DEVICES_START:
      return {
        ...state,
        devices: {}
      };
    case FETCH_DEVICES_SUCCESS:
      return {
        ...state,
        devices: payload.devices
      };
    case FETCH_DEVICES_FAILED:
      return { ...state };
    case UPDATE_DEVICE_VALUE_START:
      return { ...state };
    case UPDATE_DEVICE_VALUE_SUCCESS:
      return { ...state };
    case UPDATE_DEVICE_VALUE_FAILED:
      return { ...state };
    default:
      return state;
  }
};
