/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas de </FirstApp>', ()=>{

    const title = 'Hola, soy Goku';
    const subTitle = 'Hola, soy un subtitle';

  test('Debe hacer match con el snapchot', ()=>{
    const {container} = render (<FirstApp title={title} />);
    expect( container).toMatchSnapshot();

  })

  test('Debe de mostrar el mensaje "Hola soy goku"', ()=>{
    
    
    render (<FirstApp title={title} />)
    // screen.debug();
    expect( screen.getByText(title)).toBeTruthy();

  })

  test('Debe mostrar el titulo en un h1', ()=>{
    render (<FirstApp title={title} />);
    expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title)
    
  })

  test('Debe mostrar el subtitulo enviado por props', ()=>{
    render( 
      <FirstApp title={title} subTitle={subTitle} 
      /> );
      expect(screen.getAllByText(subTitle).length).toBe(1);

  })
    
});