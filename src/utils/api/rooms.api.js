import axios from "./axios";

export const getRooms = () => {
  return axios.get("/rooms.json");
};
