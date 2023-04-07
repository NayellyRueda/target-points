import React from 'react';
import renderer from 'react-test-renderer';

import CardPoints from "./index";

describe('functional card points', () => {
    let component;
    beforeEach(() => {
        component = renderer.create(<CardPoints/>).toJSON();
    });
    it('has 2 child', () => {
        expect(component.children.length).toBe(2);
    });
});