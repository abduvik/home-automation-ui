import React from "react";
import { shallow } from "enzyme";
import ScaleControl from "./ScaleControl";

describe("<ScaleControl />", () => {
  const scaleControlDummyProps = {
    controlId: "2412412412",
    name: "Intensity",
    type: "scale",
    value: 20,
    min: 0,
    max: 100,
    step: 10
  };

  it("renders without crashing", () => {
    const wrapper = shallow(<ScaleControl />);
    expect(wrapper).toBeTruthy();
  });

  it("should display the current value", () => {
    const wrapper = shallow(<ScaleControl {...scaleControlDummyProps} />);
    expect(wrapper.find("[data-test='current-value']").text()).toBe(
      scaleControlDummyProps.value.toString()
    );
  });

  it("should call onUpdateValue when the new value is not the same as current value", () => {
    const onUpdateValue = jest.fn();
    const wrapper = shallow(
      <ScaleControl {...scaleControlDummyProps} onUpdateValue={onUpdateValue} />
    );

    wrapper
      .find("input[type='range']")
      .simulate("change", { target: { value: 30 } });

    expect(onUpdateValue).toHaveBeenCalledWith(
      scaleControlDummyProps.controlId,
      30
    );
  });
});
