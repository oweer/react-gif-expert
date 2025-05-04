import { fireEvent, render,screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas de componente AddCategory', () => { 

    test('Debe de cambiar el valor de la caja de textoß', () => { 
        render(<AddCategory onNewCategory = { () => {} } />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value:'JIRA'}});
        expect(input.value).toBe('JIRA');
       // screen.debug();

     });

     test('Debe llamar OnNewCategory si el input tiene valor', () => { 
        const inputValue = 'JIRA';
        const onNewCategory = jest.fn();
        // TODO:??

        render(<AddCategory onNewCategory = { onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value:inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        //screen.debug();

        expect( onNewCategory).toHaveBeenCalled();
        expect( onNewCategory).toHaveBeenCalledTimes(1);
        expect( onNewCategory).toHaveBeenCalledWith(inputValue);

      });

      test('No Debe llamar OnNewCategory si el input esta vacio ', () => { 
        const inputValue = '';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory = { onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value:inputValue}});
        fireEvent.submit(form);

        expect( onNewCategory).not.toHaveBeenCalled();

      });

 })