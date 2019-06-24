import React from "react";
import { shallow, mount } from "enzyme";
import Button from "./Button";

describe("<Button />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toBeTruthy();
  });

  it("appends class passed through props", () => {
    const className = "testStyleClassName";
    const wrapper = mount(<Button className={className} />);
    expect(wrapper.find("button").hasClass(className)).toBeTruthy();
  });

  it("fire onClick event passed through props", () => {
    const onClick = jest.fn();
    const wrapper = mount(<Button onClick={onClick} />);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
