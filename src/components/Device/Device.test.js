import React from "react";
import { shallow } from "enzyme";
import Device from "./Device";
import ControlsSwitcher from "./ControlsSwitcher/ControlsSwitcher";
import Switch from './../UI/Switch/Switch';

describe("<Device />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Device />);
    expect(wrapper).toBeTruthy();
  });

  it("should render device name when it is passed", () => {
    const device = { name: "Device Name" };
    const wrapper = shallow(<Device device={device} />);
    expect(wrapper.text()).toContain("Device Name");
  });

  it("should render a ControlSwitcher when have control prop is passed", () => {
    const device = {
      name: "Air Conditioner",
      switch: true,
      icon: "",
      controls: {
        "4276924312": {
          name: "Mode"
        }
      }
    };

    const wrapper = shallow(<Device device={device} />);
    expect(wrapper.find(ControlsSwitcher)).toHaveLength(1);
  });

  it("should call onToggleDeviceSwitch when onChange is fired", () => {
    const device = {
      name: "Air Conditioner",
      switch: true,
      icon: "",
      controls: {
        "4276924312": {
          name: "Mode"
        }
      }
    };

    const onChange = jest.fn();
    const wrapper = shallow(<Device device={device} onToggleDeviceSwitch={onChange} />);
    wrapper.find(Switch).simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
});
