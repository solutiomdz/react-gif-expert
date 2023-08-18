import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import { GifGrid } from "../src/components/GifGrid";


describe('Pruebas en el <GifExpertApp />', () => {

    test('debe', () => {
        render( <GifExpertApp />);
        screen.debug();
    });

});