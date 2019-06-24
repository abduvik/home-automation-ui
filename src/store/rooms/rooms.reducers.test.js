import roomsReducers from "./rooms.reducers";
import { fetchRoomsSuccess } from "./rooms.actions";

describe("Rooms Reducers testing", () => {
    
  it("should add new rooms if success action is fired", () => {
    const state = { rooms: {} };
    const payload = { roomId: "room1" };
    const newState = roomsReducers(state, fetchRoomsSuccess(payload));
    expect(newState).toMatchObject({ rooms: { roomId: "room1" } });
  });
});
