import React from "react";
import { shallow } from "enzyme";
import ControlsSwitcher from "./ControlsSwitcher";
import {
  TEMPERATURE,
  MODE,
  SCALE
} from "./../../../utils/deviceControls.types";
import TemperatureControl from "./../Controls/Temperature/TemperatureControl";
import ModeControl from "./../Controls/Mode/ModeControl";
import ScaleControl from "../Controls/Scale/ScaleControl";

describe("<ControlsSwitcher />", () => {
  const temperatureControlDummyProps = {
    controlId: "231232121412",
    name: "Temperature",
    type: "temperature",
    unit: "c",
    value: 18,
    min: 16,
    max: 30
  };

  it("renders without crashing", () => {
    const wrapper = shallow(<ControlsSwitcher />);
    expect(wrapper).toBeTruthy();
  });

  it("should print the control title", () => {
    const wrapper = shallow(
      <ControlsSwitcher deviceData={temperatureControlDummyProps} />
    );
    expect(wrapper.find("[data-test='device-title']").text()).toContain(
      temperatureControlDummyProps.name
    );
  });

  it("renders TemperatureControl if device type is TEMPERATURE", () => {
    const wrapper = shallow(
      <ControlsSwitcher deviceData={{ type: TEMPERATURE }} />
    );
    expect(wrapper.find(TemperatureControl)).toHaveLength(1);
  });

  it("renders ModeControl if device type is MODE", () => {
    const wrapper = shallow(<ControlsSwitcher deviceData={{ type: MODE }} />);
    expect(wrapper.find(ModeControl)).toHaveLength(1);
  });

  it("renders ScaleControl if device type is SCALE", () => {
    const wrapper = shallow(<ControlsSwitcher deviceData={{ type: SCALE }} />);
    expect(wrapper.find(ScaleControl)).toHaveLength(1);
  });
});
