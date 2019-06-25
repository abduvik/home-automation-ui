import devicesReducers from "./devices.reducers";
import { fetchRoomDevicesSuccess } from "./devices.actions";

describe("Devices Reducers testing", () => {
    
  it("should add new devices if success action is fired", () => {
    const state = { devices: {} };
    const payload = { deviceId: { name: "Device Name" } };
    const newState = devicesReducers(state, fetchRoomDevicesSuccess(payload));
    expect(newState).toMatchObject({
      devices: {
        deviceId: { name: "Device Name" }
      }
    });
  });
});
