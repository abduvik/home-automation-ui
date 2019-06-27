import React from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";

import classes from "./Modal.module.scss";

describe("<Modal />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper).toBeTruthy();
  });

  it("should have Show class if it has show prop true", () => {
    const wrapper = shallow(<Modal show={true} />);
    expect(
      wrapper.find("[data-test='modal-body']").hasClass(classes.Show)
    ).toBeTruthy();
  });

  it("should not have Show class if it has show prop false", () => {
    const wrapper = shallow(<Modal show={false} />);
    expect(
      wrapper.find("[data-test='modal-body']").hasClass(classes.Show)
    ).toBeFalsy();
  });
});
