import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login"
import {mount, shallow} from "enzyme";
import * as axios from 'axios'
import Form from "react-bootstrap/Form";


jest.mock('axios');
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
        //axios.mockClear();
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
        const valeur =
            {target: {name: 'email', value: 'go@gmail.com'}}
        ;
        wrapperM.find('input').at(0).simulate("change", valeur);
        expect(wrapperM.find('input').at(0).prop('value')).toEqual('go@gmail.com');
    });

    it('change password', () => {
        const valeur =
            {target: {name: 'password', value: '123'}}
        ;
        wrapperM.find('input').at(1).simulate("change", valeur);
        expect(wrapperM.find('input').at(1).prop('value')).toEqual('123');
    });


    it('axios methode post login', async () => {

        const postSpy = jest.spyOn(axios, 'post',"");
        await axios.post('/login',{"email": "John@yahoo.fr", "password": "12345678"});
        expect(postSpy).toBeCalled();
        expect(postSpy).toHaveBeenCalledWith('/login',{"email": "John@yahoo.fr", "password": "12345678"});

    });
    it('xios methode post login2', () => {
        const user = [{"email": "John@yahoo.fr", "password": "12345678"}];
        const resp = {data: true};
        axios.post.mockResolvedValue(resp);
        return wrapperM.instance().onSubmit(data => expect(data).toEqual(true));
    });

    it('login', () => {
        wrapperM.find('input').at(0).simulate('change', {target: {name: 'email', value: 'go@gmail.com'}});
        wrapperM.find('input').at(1).simulate('change', {target: {name: 'password', value: '123'}});
        wrapperM.find('button').simulate('click');
        expect(wrapperM.useState('actualUser')).toEqual({email: "go@gmail.com", password: "123"});
    });

    it('post axios api', async (thisArg, ...argArray) => {
        const simulEmail= wrapperM.find('input').at(0).simulate('change', {target: {name: 'email', value: 'go@gmail.com'}});
        const simulPSW = wrapperM.find('input').at(1).simulate('change', {target: {name: 'password', value: '123'}});
        wrapperM.find('button').simulate('click');
        const postSpy = jest.spyOn(axios, 'post' ,"");
        const data = {response: true};
       // await axios.post('/login',{"email": "John@yahoo.fr", "password": "12345678"});
       // expect(postSpy).toBeCalled();
        return axios.post('/login',{"email": "John@yahoo.fr", "password": "12345678"}).then(data => expect(data).toEqual(true));
    });
    it('axios api', async () => {
        //const data = {response: true};
        const postSpy = jest.spyOn(axios, 'post');
        Login.onSubmit({"email": "John@yahoo.fr", "password": "12345678"}).then(response => {
            expect(response).toEqual({
                data: {},
            });
        });
        //await axios.post('/login', {"email": "John@yahoo.fr", "password": "12345678"}))
        expect(axios.request).toHaveBeenCalledWith({
            method: 'post',
            url: '/login'
        });
    });

    it('Test retour Axios', () => {
        wrapperM.find('button').simulate('click');
        axios.post.mockResolvedValue({ data: 200 });
        expect(wrapperM.find('userLoginOK').toBe(true))
//        expect(axios.request).toHaveBeenCalled();

    });
});
