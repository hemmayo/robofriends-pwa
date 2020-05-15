import React from "react";
import SearchBox from "./SearchBox";
import { shallow } from "enzyme";

it("should render SearchBox component", () => {
  const mockSearchChange = jest.fn();
  expect(
    shallow(<SearchBox searchChange={mockSearchChange} />)
  ).toMatchSnapshot();
});
