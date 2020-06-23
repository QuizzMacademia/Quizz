import React from 'react';
import App from './App';
import {shallow} from "enzyme";

describe("Test App fonctionnement", function () {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('Le component App est bien défini', () => {
        expect(wrapper).toBeDefined();
    });
});
