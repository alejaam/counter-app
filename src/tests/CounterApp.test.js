const { render } = require("@testing-library/react");
const { default: CounterApp } = require("../CounterApp");

import React from 'react';
import { shallow, wrapper } from 'enzyme';

describe('Pruebas en <CounterApp />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })
    test('Debe mostrar <CounterApp> correctamente', () => {
        const value = 100;
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor enviado por props', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);
        const valueComponent = wrapper.find('h2').text();
        expect(parseInt(valueComponent)).toBe(100);
    });

    test('Debe de disminuir el contador', () => {
        const btn1 = wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9')
    });

    test('Debe de aumentar el contador', () => {
        const btn1 = wrapper.find('button').at(1).simulate('click');
        const btn2 = wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11')
    });

    test('Debe de resetear el contador', () => {
        const wrapper = shallow(<CounterApp value={105} />);
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
    });

});
