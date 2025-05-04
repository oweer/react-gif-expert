import { getHeroeById,getHeroesByOwner  } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por ID', () =>{
        const id=1;
        const hero = getHeroeById( id );
        expect (hero).toEqual({id:1,name:'Batman',owner:'DC'})
    });

    test('getHeroeById debe retornar UNDEFINE si no existe', () =>{
        const id=100;
        const hero = getHeroeById( id );

        console.log(hero)
        expect(hero).toBeFalsy();

        //expect (hero).toEqual({id:1,name:'Batman',owner:'DC'})
    });

    test('getHeroesByOwner debe retornar los heroes de DC', () =>{
        const idOwner = 'DC';
        const hero = getHeroesByOwner( idOwner );

        expect(hero.length).toBe(3)

    });

    test('getHeroesByOwner debe retornar los heroes de Marvel', () =>{
        const idOwner = 'Marvel';
        const hero = getHeroesByOwner( idOwner );

        expect(hero.length).toBe(2)

    });
});

