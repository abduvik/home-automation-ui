import React from "react";
import { shallow } from "enzyme";
import { RoomsDashboard } from "./RoomsDashboard";
import Room from "../../components/Rooms/Room";

describe("<RoomsDashboard />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<RoomsDashboard />);
    expect(wrapper).toBeTruthy();
  });

  it("calls fetch rooms api on mount", () => {
    jest.spyOn(RoomsDashboard.prototype, "componentDidMount");
    const fetchRooms = jest.fn();

    shallow(<RoomsDashboard fetchRooms={fetchRooms} />);

    const ComponentDidMountLifeCycleCount =
      RoomsDashboard.prototype.componentDidMount.mock.calls.length;

    expect(ComponentDidMountLifeCycleCount).toBe(1);
    expect(fetchRooms).toBeCalled();
  });

  it("renders a <Room /> component when a rooms prop is passed", () => {
    const rooms = { roomId: { name: "Room Name", icon: "", deviceCount: 1 } };
    const wrapper = shallow(<RoomsDashboard rooms={rooms} />);
    expect(wrapper.find(Room)).toHaveLength(1);
  });
});
