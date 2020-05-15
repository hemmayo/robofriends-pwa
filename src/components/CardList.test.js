import React from "react";
import CardList from "./CardList";
import { shallow } from "enzyme";

it("should render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Ire",
      username: "ireaderinokun",
      email: "ire@frontstack.io",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
