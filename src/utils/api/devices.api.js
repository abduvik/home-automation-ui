import axios from "./axios";

export const getRoomDevicesApi = roomId => {
  return axios.get(`/rooms/${roomId}/devices.json`);
};

export const toggleDeviceSwitchApi = deviceId => {
  // This would be a PATCH request for an actual server
  const response = {
    data: {
      deviceId
    }
  };
  return new Promise((resolve, reject) => resolve(response));
};

export const updateDeviceControlValueApi = payload => {
  // This would be a PATCH request for an actual server
  const response = {
    data: {
      control: payload
    }
  };
  return new Promise((resolve, reject) => resolve(response));
};
