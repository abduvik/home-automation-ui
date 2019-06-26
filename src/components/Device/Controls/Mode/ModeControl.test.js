import React from "react";
import { shallow } from "enzyme";
import ModeControl from "./ModeControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

describe("<ModeControl />", () => {
  const modeControlDummyProps = {
    controlId: "3368059519",
    name: "Intensity",
    type: "mode",
    value: "medium"
  };

  const textOnlyOptions = {
    low: {
      name: "Low",
      icon: ""
    },
    medium: {
      name: "Medium",
      icon: ""
    },
    high: {
      name: "High",
      icon: ""
    }
  };

  const iconOptions = {
    low: {
      name: "Low",
      icon: "couch"
    },
    medium: {
      name: "Medium",
      icon: "couch"
    },
    high: {
      name: "High",
      icon: "couch"
    }
  };

  it("renders without crashing", () => {
    const wrapper = shallow(<ModeControl />);
    expect(wrapper).toBeTruthy();
  });

  it("should render text-only option if it has no image", () => {
    modeControlDummyProps.options = textOnlyOptions;
    const wrapper = shallow(<ModeControl {...modeControlDummyProps} />);
    expect(wrapper.find("label span")).toHaveLength(3);
  });

  it("should render a <FontAwesomeIcon /> if the option have an icon for it", () => {
    modeControlDummyProps.options = iconOptions;
    const wrapper = shallow(<ModeControl {...modeControlDummyProps} />);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(3);
  });

  it("should call onUpdateValue when the clicked option is not the same as current value", () => {
    const onUpdateValue = jest.fn();
    modeControlDummyProps.options = iconOptions;
    const wrapper = shallow(
      <ModeControl {...modeControlDummyProps} onUpdateValue={onUpdateValue} />
    );

    // Clicked the first option
    wrapper
      .find("input[type='radio']")
      .first()
      .simulate("change", {target:{value: 'low'}});

    expect(onUpdateValue).toHaveBeenCalledWith(
      modeControlDummyProps.controlId,
      "low"
    );
  });
});
