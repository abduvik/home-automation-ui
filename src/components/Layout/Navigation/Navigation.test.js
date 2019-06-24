import React from "react";
import { shallow } from "enzyme";
import Navigation from "./Navigation";

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper).toBeTruthy();
  });

  it("renders with children inside it", () => {
    const wrapper = shallow(
      <Navigation>
        <div />
      </Navigation>
    );
    expect(wrapper.find('div')).toBeTruthy();
  });
});
