import React from 'react';
import renderer from 'react-test-renderer';

import InfoCard from "./index";

describe('functional info card ', () => {
    let component;
    let componentWithoutProp;
    const mockProduct = {
        product: "Product Name"
    }
    beforeEach(() => {
        componentWithoutProp = renderer.create(<InfoCard />).toJSON();
        component = renderer.create(<InfoCard product={mockProduct}/>).toJSON();
    });

    it('has 3 child without product', () => { 
        expect(componentWithoutProp.children.length).toBe(3);
    });

    it('has 3 child whith incomplete product props', () => {
        expect(component.children.length).toBe(3);
    });
});