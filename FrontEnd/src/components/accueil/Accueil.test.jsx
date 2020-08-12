import React from "react";
import ReactDOM from "react-dom";
import {mount, shallow} from "enzyme";
import * as axios from 'axios'
import Accueil from "./Accueil";
import renderer from 'react-test-renderer';
import {Link} from "react-router-dom";
import {Route} from "react-router";

jest.mock('react-router', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

describe("Test login fonctionnement", function () {
    const component = renderer.create(<Accueil/>);
    let tree = component.toJSON();

    it("Render le composant login sans erreur", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Accueil/>, div);
    });
    it('renders intitial heading as home', () => {
        //expect(wrapper.toContain('Menu'));
        //expect((wrapper.find(Link).props().to).toBe('/mission'))

        expect(tree).toMatchSnapshot();
    });

    it('should render three <Route /> components', () => {
        const wrapper = shallow(<Accueil />);
        expect(wrapper.find(Route).length).toEqual(3);
    });


});
