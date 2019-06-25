import React from "react";
import { shallow } from "enzyme";
import Switch from "./Switch";
import classes from "./Switch.module.scss";

describe("<Switch />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Switch />);
    expect(wrapper).toBeTruthy();
  });


  it("should have class Open if checked", () => {
    const wrapper = shallow(<Switch checked={true}/>);
    expect(wrapper.find("label").hasClass(classes.Checked)).toBeTruthy();
  });
});
