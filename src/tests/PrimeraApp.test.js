const { render } = require("@testing-library/react");
const { default: PrimeraApp } = require("../PrimeraApp");

import React from 'react';

describe('Pruebas en <PrimeraApp />', () => {
    test('Debe mostrar el mensaje "Hola, Soy Goku"', () => {
        const saludo = 'Hola, soy Goku';
        const {getByText} = render(<PrimeraApp saludo={saludo} />);
        
        expect(getByText(saludo)).toBeInTheDocument();
    })
})
