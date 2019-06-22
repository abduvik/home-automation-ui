import React from "react";
import { configure, shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new EnzymeAdapter() });

describe("<App />", () => {
    
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });
});
