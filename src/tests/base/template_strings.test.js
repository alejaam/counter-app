import '@testing-library/jest-dom';

const { getSaludo } = require("../../base/template_strings");

describe('Pruebas en el archivo tamplate_string.js', () => {

    test('getSaludo debe retornar Hola Alejandro', () => {
        // 1.- Inicialización
        const nombre = "Alejandro";
    
        // 2.- Estimulo
        const saludo = getSaludo(nombre);

        // 3.- Observar el comportamiento
        expect(saludo).toBe('Hola ' + nombre);
    })

    //  getSaludo debe retornar Hola Alejandro si no hay argumento nombre
    test('getSaludo debe retornar Hola  si no hay argumento', () => {
        // const nombre = "Alejandro";
    
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Alejandro');
    })
});
