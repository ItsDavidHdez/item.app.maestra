import React from "react";
import renderer from "react-test-renderer";

import ItemDetails from "./ItemDetails";

jest.useFakeTimers();

describe("<ItemDetails />", () => {
  it("Render this component", () => {
    const tree = renderer.create(<ItemDetails />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
