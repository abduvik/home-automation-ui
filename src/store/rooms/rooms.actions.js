import {
  FETCH_ROOMS_START,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILED
} from "./../../store/rooms/rooms.actiontypes";
import { getRoomsApi } from "../../utils/api/rooms.api";
import { showErrorModal } from "../ui/ui.actions";

export const fetchRooms = () => dispatch => {
  dispatch(fetchRoomsStart());

  getRoomsApi()
    .then(response => dispatch(fetchRoomsSuccess(response.data.rooms)))
    .catch(error => {

      // This to mock an error response
      const errorResponse = {
        message: "Error while getting the rooms data"
      };
      
      dispatch(fetchRoomsFailed(errorResponse));
      dispatch(showErrorModal(errorResponse));
    });
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
