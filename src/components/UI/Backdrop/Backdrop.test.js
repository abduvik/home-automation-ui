import React from "react";
import { shallow } from "enzyme";
import Backdrop from "./Backdrop";

import classes from "./Backdrop.module.scss";

describe("<Backdrop />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Backdrop />);
    expect(wrapper).toBeTruthy();
  });

  it("should have Show class if it has show prop true", () => {
    const wrapper = shallow(<Backdrop show={true} />);
    expect(wrapper.hasClass(classes.Show)).toBeTruthy();
  });

  it("should not have Show class if it has show prop false", () => {
    const wrapper = shallow(<Backdrop show={false} />);
    expect(wrapper.hasClass(classes.Show)).toBeFalsy();
  });

  it("should call onClick if it was clicked", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Backdrop onClick={onClick} />);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
