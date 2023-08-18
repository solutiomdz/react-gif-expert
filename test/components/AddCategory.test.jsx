import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en < AddCategory/>', () => { 

    test('Debe cambiar el valor de la caja de texto', () => { 

        render( < AddCategory onNewCategory={ ()=>{} }/>);
        const input = screen.getByRole('textbox');

        fireEvent.input( input , { target: { value:'Saitama'}});
        expect(input.value).toBe('Saitama');
        // screen.debug();
     });

     test('Debe llamar onNewCategory si el input tiene un valor', () => {

        // Valor que voy a evaluar
        const inputValue = 'Saitama';
        // Hago una simulacion de la llamada a la funcion onNewCategory
        const onNewCategory = jest.fn();
        
        // Levanto mi sujeto de pruebas
        render( < AddCategory onNewCategory={ onNewCategory }/>);

        // Agarro las referncias al input y al form
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Disparo los eventos del formulario 
        fireEvent.input( input , { target: { value: inputValue}});
        fireEvent.submit(form );

        // screen.debug();
        // evalua si el input.value viene vacio 
        expect( input.value ).toBe('');
        // evalua si la funcion onNewCategory fue llamada
        expect ( onNewCategory ).toHaveBeenCalled();
        // evalua si la funcion onNewCategory fue llamada solo 1 vez
        expect ( onNewCategory ).toHaveBeenCalledTimes(1);
        // evalua si la funcion onNewCategory fuea llamada con el valor de inputValue
        expect ( onNewCategory ).toHaveBeenCalledWith(inputValue);


     });

     test('No debe llamar el onNewCategory si el input esta vacio', () => {
        // Hago una simulacion de la llamada a la funcion onNewCategory
        const onNewCategory = jest.fn();

        // Levanto mi sujeto de pruebas
        render( < AddCategory onNewCategory={ onNewCategory }/>);
        // Agarro la referencias al form
        const form = screen.getByRole('form');

        // Disparo los eventos del formulario 
        fireEvent.submit(form );

        // dos maneras de hacer el expect para chuquear que la funcion no ha sido llamada
        expect ( onNewCategory ).toHaveBeenCalledTimes(0);
        expect ( onNewCategory ).not.toHaveBeenCalled();

     });
 });