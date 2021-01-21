import React from "react";
import renderer from "react-test-renderer";

import CreateItem from "./CreateItem";

jest.useFakeTimers();

describe("<CreateItem />", () => {
  it("Render this component", () => {
    const tree = renderer.create(<CreateItem />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
