import { render,screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/GiftGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas del componente GifGrid', () => { 

    const category = 'GoKu';
    test('Debe de mostrar el loading inicial', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GiftGrid category={category}/>);
        
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText( category));
     })

     test('Debe de mostrar items cuando se cargan las imagenes', () => { 
        
        const gifs = [
            {
                id:'ABC',
                title:'Twiligh',
                url:'https://localhost/temp.jpg'
            },
            {
                id:'123',
                title:'trello',
                url:'https://localhost/temp.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GiftGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);

      })

 })