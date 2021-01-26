import React from "react";
import renderer from "react-test-renderer";

import ItemList from "./ItemList";

jest.useFakeTimers();

describe("<UserList />", () => {
  it("Render this component", () => {
    const tree = renderer.create(<ItemList />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
