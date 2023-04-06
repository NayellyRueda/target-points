import React from 'react';
import renderer from 'react-test-renderer';

import Button from "./index";

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});