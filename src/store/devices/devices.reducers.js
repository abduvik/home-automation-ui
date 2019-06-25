import {
  FETCH_DEVICES_START,
  FETCH_DEVICES_SUCCESS,
  FETCH_DEVICES_FAILED,
  UPDATE_DEVICE_VALUE_START,
  UPDATE_DEVICE_VALUE_SUCCESS,
  UPDATE_DEVICE_VALUE_FAILED,
  TOGGLE_DEVICE_SWITCH_START,
  TOGGLE_DEVICE_SWITCH_SUCCESS,
  TOGGLE_DEVICE_SWITCH_FAILED
} from "./devices.actiontypes";

const initialState = {
  devices: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Devices
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

    //Device Switch
    case TOGGLE_DEVICE_SWITCH_START:
      return { ...state };
    case TOGGLE_DEVICE_SWITCH_SUCCESS:
      const currentSwitchState = state.devices[payload.deviceId].switch;
      return {
        ...state,
        devices: {
          ...state.devices,
          [payload.deviceId]: {
            ...state.devices[payload.deviceId],
            switch: !currentSwitchState
          }
        }
      };
    case TOGGLE_DEVICE_SWITCH_FAILED:
      return { ...state };

    // Controls Values
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
