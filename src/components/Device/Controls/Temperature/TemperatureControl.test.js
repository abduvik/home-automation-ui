import React from "react";
import { shallow } from "enzyme";
import TemperatureControl from './TemperatureControl';

describe("<TemperatureControl />", () => {
    
  it("renders without crashing", () => {
    const wrapper = shallow(<TemperatureControl />);
    expect(wrapper).toBeTruthy();
  });
});
