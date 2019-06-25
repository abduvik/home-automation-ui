import {
  FETCH_DEVICES_START,
  FETCH_DEVICES_SUCCESS,
  FETCH_DEVICES_FAILED
} from "./devices.actiontypes";
import { getRoomDevices } from "../../utils/api/devices.api";

export const fetchRoomDevices = roomId => dispatch => {
  dispatch(fetchRoomDevicesStart());

  getRoomDevices(roomId)
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
