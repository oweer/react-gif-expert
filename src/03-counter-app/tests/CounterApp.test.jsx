/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas de <ConterApp/>", ()=>{

    const value = 10;

    test('Debe hacer match con el snapchot', ()=>{
        const {container} = render (<CounterApp value={value} />);
        expect( container).toMatchSnapshot();
    
      })

      test('Debe iniciar el 100', ()=>{
        const {container} = render (<CounterApp value={100} />);
        expect( screen.getByText(100)).toBeTruthy();

        // expect( screen.getByRole('heading',{level:2}).innerHTML).toContain('100')
    
      })

      test('Debe de incrementar con el boton +1', ()=>{

        render(<CounterApp value={value} />);
        fireEvent.click( screen.getByText('+1') )
        expect(screen.getByText('11')).toBeTruthy();

      })

      test('Debe de descrementar con el boton -1', ()=>{

        render(<CounterApp value={value} />);
        fireEvent.click( screen.getByText('-1') )
        expect(screen.getByText('9')).toBeTruthy();

      })

      test('Debe de resetar con el boton reset', ()=>{

        render(<CounterApp value={365} />);
        fireEvent.click( screen.getByText('-1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('-1') )
        // fireEvent.click( screen.getByText('reset') )

        fireEvent.click(screen.getByRole('button', {name:'btn-reset'}))
        
        expect(screen.getByText(365)).toBeTruthy();

      })

});