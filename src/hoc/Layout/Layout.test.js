import React from "react";
import { shallow } from "enzyme";
import Layout from './Layout';

describe("<Layout />", () => {

  it("renders without crashing", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toBeTruthy();
  });
});
