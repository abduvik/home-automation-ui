import axios from "./axios";

export const getRoomDevicesApi = roomId => {
  return axios.get(`/rooms/${roomId}/devices.json`);
};

export const toggleDeviceSwitchApi = deviceId => {
  // This would be a PUT request for an actual server
  const response = {
    data: {
      deviceId
    }
  }
  return new Promise((resolve, reject) => resolve(response));
};
