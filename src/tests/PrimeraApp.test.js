const { render } = require("@testing-library/react");
const { default: PrimeraApp } = require("../PrimeraApp");

import React from 'react';
import { shallow } from 'enzyme';
// import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp />', () => {
    // test('Debe mostrar el mensaje "Hola, Soy Goku"', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const {getByText} = render(<PrimeraApp saludo={saludo} />);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // })
    test('Debe mostrar <PrimeraApp> correctamente', () => { 
        const saludo = 'Hola, soy goku'
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        
        expect(wrapper).toMatchSnapshot();
    });

});
