import { string } from "prop-types";
import { getGift } from "../../src/helpers/getGifs"


describe('Pruebas en getGift', () => { 
    test('Debe de retornar un arreglo de gifs', async() => { 
        const gifs = await getGift('Twiligh');

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any( String),
            title:expect.any( String),
            url:expect.any( String)
        });

     })


 })