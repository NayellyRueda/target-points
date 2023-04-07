import React from 'react';
import renderer from 'react-test-renderer';

import Container from "./index";

describe('functional container', () => {
    let component;
    beforeEach(() => {
        component = renderer.create(<Container/>).toJSON();
    });

    it('has 1 child', () => {
        expect(component.children.length).toBe(1);
    });
});