import '@testing-library/jest-dom'
const { getUser, getUsuarioActivo } = require("../../base/funciones");

describe('Pruebas en funciones.js', () => {
    test('Debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'ale_jaam'
        };

        const user = getUser();

        console.log(user);

        expect(user).toEqual(userTest);
    });
    
    test('getUsuarioActivo debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC986',
            username: 'ale_jaam'
        };

        const user = getUsuarioActivo('ale_jaam');

        console.log(user);

        expect(user).toEqual(userTest);
    });
});