import React from "react";
import { shallow } from "enzyme";
import ModeControl from './ModeControl';

describe("<ModeControl />", () => {
    
  it("renders without crashing", () => {
    const wrapper = shallow(<ModeControl />);
    expect(wrapper).toBeTruthy();
  });
});
