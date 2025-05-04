/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas de </FirstApp>', ()=>{

    // test('Debe de hacer match con el snapshot', ()=>{

    //     const title = 'Hola test';
    //     const {container} = render( <FirstApp title={title} /> );
        
    //     expect ( container ).toMatchSnapshot();

    // });

    test('Debe mostrar el titulo en un h1', ()=>{

        const title = 'Hola, soy Goku';
        const {container, getByText, getByTestId} = render( <FirstApp title={title} /> );
    
        expect ( getByText(title)).toBeTruthy( );

        // const h1 = container.querySelector('h2');
        // expect(h1.innerHTML).toContain( title)

        expect(getByTestId('test-title').innerHTML).toContain(title)
    });

    test('debe mnostrar el subtitulo enviuado por props', ()=>{

        const title = 'Hola, soy Goku';
        const subTitle = 'soy un subtitulo';
        const { getAllByText } = render( 
        <FirstApp title={title} subTitle={subTitle} 
        /> );
        
        expect ( getAllByText(subTitle).length).toBe(1);
    })
});