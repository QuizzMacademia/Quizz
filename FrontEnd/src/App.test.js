import React from 'react';
import App from './App';
import {shallow, mount} from "enzyme";
import Login from "./components/login/Login";
import Accueil from "./components/accueil/Accueil";
import {MemoryRouter} from "react-router";



describe("Test App fonctionnement", function () {
    let component;

    beforeEach(() => {
        component = mount( <MemoryRouter>
            <App/>
        </MemoryRouter>);

    });

    it('Le component App est bien défini', () => {
        expect(component).toBeDefined();
    });

    it('should show Login component for / App (using memory router)', () => {
        expect(component.find(Login)).toHaveLength(1);
    });
    it('should show Login component for App ', () => {
        console.log(component.find('Route').length);
        expect(component.find('Route').at(0).prop('component')).toBe(Login);
    });
    it('should show Accueil component for / App (using memory router)', () => {
        console.log(component.find('Route').length); //1
        console.log(component.find("Switch")); //1
        const sw = mount(component.find("Switch"));
        expect(sw.find('Route').at(1).prop('component')).toBe(Accueil);
        expect(components)
    });

});
