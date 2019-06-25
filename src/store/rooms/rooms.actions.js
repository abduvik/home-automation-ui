import { FETCH_ROOMS_START, FETCH_ROOMS_SUCCESS, FETCH_ROOMS_FAILED } from "./../../store/rooms/rooms.actiontypes";
import { getRoomsApi } from "../../utils/api/rooms.api";

export const fetchRooms = () => dispatch => {
  dispatch(fetchRoomsStart());

  getRoomsApi()
    .then(data => dispatch(fetchRoomsSuccess(data.data.rooms)))
    .catch(data => dispatch(fetchRoomsFailed(data.error)));
};

export const fetchRoomsStart = payload => ({
  type: FETCH_ROOMS_START
});

export const fetchRoomsSuccess = rooms => ({
  type: FETCH_ROOMS_SUCCESS,
  payload: {
    rooms
  }
});

export const fetchRoomsFailed = error => ({
  type: FETCH_ROOMS_FAILED,
  payload: {
    error
  }
});
