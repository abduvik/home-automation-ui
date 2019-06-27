import React from "react";
import { shallow } from "enzyme";
import { SideDrawer } from "./SideDrawer";

import classes from "./SideDrawer.module.scss";

describe("<SideDrawer />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<SideDrawer />);
    expect(wrapper).toBeTruthy();
  });

  it("should have 'Open' className if 'isOpen' props is true", () => {
    const wrapper = shallow(<SideDrawer isOpen={true} />);
    expect(
      wrapper
        .find("div")
        .first()
        .hasClass(classes.Open)
    ).toBe(true);
  });
});
