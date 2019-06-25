import React from "react";
import { shallow } from "enzyme";
import Switch from "./Switch";

describe("<Switch />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Switch />);
    expect(wrapper).toBeTruthy();
  });
});
