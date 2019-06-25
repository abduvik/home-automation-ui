import React from "react";
import { shallow } from "enzyme";
import { RoomDevices } from "./RoomDevices";

describe("<RoomDevices />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<RoomDevices />);
    expect(wrapper).toBeTruthy();
  });
});
