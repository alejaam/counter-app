import "@testing-library/jest-dom";
import { getImage } from "../../base/async_await";

describe("Pruebas en el archivo demo.test.js", () => {
    test("Deben retornar el url de la imagen", async () => { 
        const url = await getImage();
        console.log(url);
        expect(url.includes('https://')).toBe(true);
    });
});
