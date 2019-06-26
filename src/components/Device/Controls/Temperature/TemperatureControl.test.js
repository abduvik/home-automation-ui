import React from "react";
import { shallow } from "enzyme";
import TemperatureControl from "./TemperatureControl";

describe("<TemperatureControl />", () => {
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
    const wrapper = shallow(<TemperatureControl />);
    expect(wrapper).toBeTruthy();
  });

  it("should render the current value and unit correctly", () => {
    const wrapper = shallow(
      <TemperatureControl {...temperatureControlDummyProps} />
    );
    const expectedValue = "18 °C";
    expect(wrapper.find("[data-test='temperature']").text()).toContain(
      expectedValue
    );
  });

  it("should call onUpdateValue when decreased with params controlId and lower value ", () => {
    const onUpdateValue = jest.fn();
    const wrapper = shallow(
      <TemperatureControl
        {...temperatureControlDummyProps}
        onUpdateValue={onUpdateValue}
      />
    );

    wrapper.find("[data-test='decrease-temperature-btn']").simulate("click");
    expect(onUpdateValue).toHaveBeenCalledWith(
      temperatureControlDummyProps.controlId,
      temperatureControlDummyProps.value - 1
    );
  });

  it("should call onUpdateValue when increased with params controlId and higher value ", () => {
    const onUpdateValue = jest.fn();
    const wrapper = shallow(
      <TemperatureControl
        {...temperatureControlDummyProps}
        onUpdateValue={onUpdateValue}
      />
    );

    wrapper.find("[data-test='increase-temperature-btn']").simulate("click");
    expect(onUpdateValue).toHaveBeenCalledWith(
      temperatureControlDummyProps.controlId,
      temperatureControlDummyProps.value + 1
    );
  });
});
