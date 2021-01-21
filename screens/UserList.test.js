import React from "react";
import renderer from "react-test-renderer";

import UserList from "./UserList";

describe("<UserList />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<UserList />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
