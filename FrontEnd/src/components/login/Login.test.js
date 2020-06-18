import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login"
import {mount, shallow} from "enzyme";
import axios from 'axios'
import Form from "react-bootstrap/Form";

jest.mock('react-router', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

describe("Test login fonctionnement", function () {
    let wrapper;
    let wrapperM;

    beforeEach(() => {
        wrapper = shallow(<Login/>);
        wrapperM = mount(<Login/>);
        // axios.mockClear();
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('Le component Login est bien défini', () => {
        expect(wrapper).toBeDefined();
    });

    it("Render le composant login sans erreur", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Login/>, div);
    });
    it('contient 1 class css "container" ', () => {
        expect(wrapper.find('.container').length).toEqual(1);
    });
    it('contient 1 class css "login" ', () => {
        expect(wrapper.find('.login').length).toEqual(1);
    });
    it('contient "Se Connecter" ', () => {
        expect(wrapper.html()).toContain("Se Connecter");
    });
    it('contient 2 div', () => {
        expect(wrapper.find('div').length).toEqual(2);
    });
    it('contient  formik', () => {
        expect(wrapper.find('Formik').length).toEqual(1);
    });
    it('contient  forme', () => {
        expect(wrapperM.find('Form').length).toEqual(1);
    });

    it('contient 2 Field', () => {
        expect(wrapperM.find('Field').length).toEqual(2);
    });

    it('change email', () => {
        //const onChange= jest.fn();
        const valeur =
            {target: {name: 'email', value: 'go@gmail.com'}}
        ;
        wrapperM.find('input').at(0).simulate("change", valeur);
        expect(wrapperM.find('input').at(0).prop('value')).toEqual('go@gmail.com');
    });

    it('change password', () => {
        const onChange = jest.fn();
        const valeur =
            {target: {name: 'password', value: '123'}}
        ;
        wrapperM.find('input').at(1).simulate("change", valeur);
        expect(wrapperM.find('input').at(1).prop('value')).toEqual('123');
    });

    it('login', () => {
        wrapperM.find('input').at(0).simulate('change', {target: {name: 'email', value: 'go@gmail.com'}});
        wrapperM.find('input').at(1).simulate('change', {target: {name: 'password', value: '123'}});
        wrapperM.find('button').simulate('click');
        expect(wrapperM.state('actuelUser')).toEqual({email: "go@gmail.com", password: "123"});
    });

    it('post axios api', () => {
        let mock = new MockAdapter(axios);
        const data = {response: true};
        mock.get('http://localhost:8080/login', {"email": "John@yahoo.fr", "password": "12345678"}).reply(200, data);
        Login.then(response => {
            expect(response).toEqual(data);

        });
    });
});
