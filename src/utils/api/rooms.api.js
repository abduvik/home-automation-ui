import axios from "./axios";

export const getRoomsApi = () => {
  return axios.get("/rooms.json");
};
