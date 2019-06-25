import {
  FETCH_DEVICES_START,
  FETCH_DEVICES_SUCCESS,
  FETCH_DEVICES_FAILED,
  TOGGLE_DEVICE_SWITCH_START,
  TOGGLE_DEVICE_SWITCH_SUCCESS,
  TOGGLE_DEVICE_SWITCH_FAILED
} from "./devices.actiontypes";
import { getRoomDevicesApi, toggleDeviceSwitchApi } from "../../utils/api/devices.api";

export const fetchRoomDevices = roomId => dispatch => {
  dispatch(fetchRoomDevicesStart());

  getRoomDevicesApi(roomId)
    .then(data => dispatch(fetchRoomDevicesSuccess(data.data.devices)))
    .catch(data => dispatch(fetchRoomDevicesFailed(data.error)));
};

export const fetchRoomDevicesStart = () => ({
  type: FETCH_DEVICES_START
});

export const fetchRoomDevicesSuccess = devices => ({
  type: FETCH_DEVICES_SUCCESS,
  payload: {
    devices: devices
  }
});

export const fetchRoomDevicesFailed = error => ({
  type: FETCH_DEVICES_FAILED,
  payload: {
    error
  }
});

export const toggleDeviceSwitch = deviceId => dispatch => {
  dispatch(toggleDeviceSwitchStart());

  toggleDeviceSwitchApi(deviceId)
    .then(data => dispatch(toggleDeviceSwitchSuccess(data.data.deviceId)))
    .catch(data => dispatch(toggleDeviceSwitchFailed(data.error)));
};

export const toggleDeviceSwitchStart = () => ({
  type: TOGGLE_DEVICE_SWITCH_START
});

export const toggleDeviceSwitchSuccess = deviceId => ({
  type: TOGGLE_DEVICE_SWITCH_SUCCESS,
  payload: {
    deviceId
  }
});

export const toggleDeviceSwitchFailed = error => ({
  type: TOGGLE_DEVICE_SWITCH_FAILED,
  payload: {
    error
  }
});
