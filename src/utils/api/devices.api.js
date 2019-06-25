import axios from "./axios";

export const getRoomDevices = roomId => {
  return axios.get(`/rooms/${roomId}/devices.json`);
};
