import "@testing-library/jest-dom";
import { getHeroesByIdAsync } from "../../base/promesas";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Héroes", () => {
    test("Debe retornar un héroe async", (done) => {
        const id = 1;
        getHeroesByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes[0]); 
            done();
        });
    });
    test("Debe retornar un error si héroe no existe", (done) => {
        const id = 10;
        getHeroesByIdAsync(id).catch(error => {
            expect(error).toBe("No se pudo enontrar el heroe"); 
            done();
        });
    });
});
