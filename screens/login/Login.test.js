import React from "react";
import renderer from "react-test-renderer";

import Login from "./Login";

jest.useFakeTimers();
describe("<Login />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
