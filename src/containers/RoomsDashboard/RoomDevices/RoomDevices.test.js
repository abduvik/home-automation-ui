import React from "react";
import { shallow } from "enzyme";
import { RoomDevices } from "./RoomDevices";
import Device from "../../../components/Device/Device";

describe("<RoomDevices />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<RoomDevices />);
    expect(wrapper).toBeTruthy();
  });

  it("calls fetch devices api on mount", () => {
    jest.spyOn(RoomDevices.prototype, "componentDidMount");
    const fetchDevices = jest.fn();
    const routeParams = { params: { id: "roomId" } };

    shallow(
      <RoomDevices fetchRoomDevices={fetchDevices} match={routeParams} />
    );

    const ComponentDidMountLifeCycleCount =
      RoomDevices.prototype.componentDidMount.mock.calls.length;

    expect(ComponentDidMountLifeCycleCount).toBe(1);
    expect(fetchDevices).toBeCalled();
  });

  it("renders a <Device /> component when a device prop is passed", () => {
    const devices = {deviceId: { name: "Lights", has_switch: true, icon: "", controls: {} }};
    const wrapper = shallow(<RoomDevices devices={devices} />);
    expect(wrapper.find(Device)).toHaveLength(1);
  });
});
