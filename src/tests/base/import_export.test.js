import '@testing-library/jest-dom';
import { getHeroById, getHeroesByOwner } from '../../base/import_export';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {

    test('Debe retornar un héroe por ID', () => {
        const id = 1;
        const heroe = getHeroById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe retornar undefined si héroe no existe', () => {
        const id = 10;
        const heroe = getHeroById(id);

        expect(heroe).toBe(undefined);
    });

    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const dcHeroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner)

        expect(dcHeroes).toEqual(heroesData);
    });

    test('Debe retornar 2 que es el numero de heroes de Marvel', () => {
        const owner = 'Marvel';
        const dcHeroes = getHeroesByOwner(owner);

        expect(dcHeroes.length).toBe(2);
    });

    
});
