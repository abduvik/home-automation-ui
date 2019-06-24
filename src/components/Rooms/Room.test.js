import React from "react";
import { shallow } from "enzyme";
import Room from "./Room";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

describe("<Room />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Room />);
    expect(wrapper).toBeTruthy();
  });

  it("renders passed name and icon props correctly", () => {
    const name = "Living Room";
    const devicesCount = 5;
    const wrapper = shallow(<Room name={name} devicesCount={devicesCount} />);
    expect(wrapper.text()).toContain(name);
    expect(wrapper.text()).toContain(`${devicesCount} Devices`);
  });

  it("should render single device if devicesCount is 1", () => {
    const devicesCount = 1;
    const wrapper = shallow(<Room devicesCount={devicesCount} />);
    expect(wrapper.text()).toContain(`${devicesCount} Device`);
    expect(wrapper.text()).not.toContain(`${devicesCount} Devices`);
  });

  it("Shouldn't render a fontawesome icon if not passed", () => {
    const wrapper = shallow(<Room />);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(0);
  });
});
