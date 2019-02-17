import React from "react";
import App from "./App";
import { shallow } from "enzyme";

import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

describe("<=== AppComponent", () => {

  it("<== render the links", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find("h3").text()).toBe("Welcome to Shopping Cart Application");
  });

});
