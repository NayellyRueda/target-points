import React from 'react';
import renderer from 'react-test-renderer';

import Button from "./index";

describe('functional button', () => {
    let component;
    beforeEach(() => {
        component = renderer.create(<Button/>).toJSON();
    });

    it('has 1 child', () => {
        expect(component.children.length).toBe(1);
    });
});