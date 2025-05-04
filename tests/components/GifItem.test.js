import { render,screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('first', () => { 

    const title = 'Test'
    const url = 'https://google.com/imag.png'

    test('Debe hacer match con el snapchopt', ()=>{
        const {container} = render(<GifItem title={title} url = {url}/>);
        expect( container ).toMatchSnapshot();
        
    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado ', ()=>{
        render(<GifItem title={title} url = {url}/>);
        // screen.debug();
        // expect( screen.getByRole('img').src).toBe(url);
        // expect( screen.getByRole('img').alt).toBe(title);
        
        const { src, alt} = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt).toBe(title);
        //console.log(screen.getByRole('img').src);

        
    })

    test('Debe mostrar el titulo del elemento', () => { 
        render(<GifItem title={title} url = {url}/>);
        expect( screen.getByText( title)).toBeTruthy();
     })


 })