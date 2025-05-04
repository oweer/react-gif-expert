import { render,screen,fireEvent } from "@testing-library/react"
import { GiftExpertApp } from "../src/GiftExpertApp"

describe('Pruebas del componente GifExpertApp', () => { 
    
    test('should first', () => { 

        render(<GiftExpertApp />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Naruto' } });

        const form = screen.getByRole('form'); // Asegúrate de que tu AddCategory tenga role="form"
        fireEvent.submit(form);

        expect(screen.getByText('Naruto')).toBeTruthy();
     });

     test('No debe agregar una categoría duplicada', () => {
        render(<GiftExpertApp />);
        
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Twilight' } });
    
        const form = screen.getByRole('form');
        fireEvent.submit(form);
    
        // Twilight no debe aparecer más de una vez
        const twilightElements = screen.getAllByText('Twilight');
        expect(twilightElements.length).toBe(1);
      });
 })