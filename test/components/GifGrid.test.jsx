import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { GifItem } from "../../src/components/GifItem";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch';

    test('debe mostrar el loading inicialmente', () => {
        
        // llamo al mock con los valores inciales del componente
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        // // preparo mi sujeto de pruebas    
        render( <GifGrid category={ category } />);
        // screen.debug();
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));

    });

    test('debe mostrar items cuando se cargan las imaganes useFetchGifs', () => {

        const  gifs =[
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'http://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'http://localhost/goku.jpg'
            }            
        ]
        // llamo al mock pero con los valores que tiene despues de cargar el componente
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render( <GifGrid category={ category } />);
        expect( screen.getAllByRole('img').length).toBe(2);
        // screen.debug();
    });

})