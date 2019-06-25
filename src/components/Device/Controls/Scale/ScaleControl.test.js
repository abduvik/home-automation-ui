import React from "react";
import { shallow } from "enzyme";
import ScaleControl from './ScaleControl';

describe("<ScaleControl />", () => {
    
  it("renders without crashing", () => {
    const wrapper = shallow(<ScaleControl />);
    expect(wrapper).toBeTruthy();
  });
});
