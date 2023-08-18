import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas sobre GifItem.jsx', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    
    test('Debe hacer match contra el SnapShot', () => {

        const {container} = render( <GifItem title={ title } url={ url } />)
        expect (container).toMatchSnapshot();
    });


    test('Debe mostrar la iagen con el URL y el ALT indicado', () => { 
        render (<GifItem title={ title } url={ url}/>);
        // screen.debug();

        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').alt).toBe( title );
        // Esto mismo se puede hacer desestructurando screen.getAllByRole
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );

    });

    test('Debe mostrar el tirulo en el componente', () => { 
        render( <GifItem  title={ title } url={ url }/>);
        expect( screen.getByText( title ) ).toBeTruthy();

    });
});