import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';


// describe is used to group multiple text in one
describe('contact us page text cases', () => {

    // it and test both can be used , it is alais of test
    it('should load Contact Us text inside component', () => {
        // component we need to test, need to be render first
        render(<Contact />);
        // whatever rendered in JsDOM can be seen using screen
        
        // Querying
        const header = screen.getByText("Contact Us");
    
        //assertion
        expect(header).toBeInTheDocument();
    });
    
    test('should load button inside component', () => {
        // component we need to test, need to be render first
        render(<Contact />);
        // whatever rendered in JsDOM can be seen using screen
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test('should load Input name inside component', () => {
        // component we need to test, need to be render first
        render(<Contact />);
        // whatever rendered in JsDOM can be seen using screen
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    });
});




test('should load 2 Input boxes inside component', () => {
    // component we need to test, need to be render first
    render(<Contact />);
    // whatever rendered in JsDOM can be seen using screen
    const inputBoxes = screen.getAllByRole("textbox");

    // on console we will get JSX element
    // console.log('inputBoxes : ', inputBoxes);

    expect(inputBoxes.length).toBe(2);
});