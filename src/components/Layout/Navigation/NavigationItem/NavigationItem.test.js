import React from "react";
import { shallow } from "enzyme";
import NavigationItem from './NavigationItem';

describe("<NavigationItem />", () => {

  it("renders without crashing", () => {
    const wrapper = shallow(<NavigationItem />);
    expect(wrapper).toBeTruthy();
  });

  it("renders with children inside it", () => {
    const wrapper = shallow(
      <NavigationItem>
        <div />
      </NavigationItem>
    );
    expect(wrapper.find('div')).toBeTruthy();
  });
});
