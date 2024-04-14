import { render, screen, fireEvent } from "@testing-library/react"
import Header from '../Header'
import { Provider } from 'react-redux';
import { appStore } from '../../utils/appStore';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'; // TO read document, eg toBeInTheDocument() method


it('Should load header component with a login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button'); // getByRole is better way than getByText
    // const loginButton = screen.getByText('Login'); 
    // const loginButton = screen.getByRole('button', {name : 'Login'} );  // For multiple buttons

    expect(loginButton).toBeInTheDocument();
});

it('Should render Header component with 0 cart items')

const cartItems = screen.getByText('Cart - (0 items)');
// const cartItems = screen.getByText(/Cart/)  // we can pass reges as well

except(cartItems).toBeInTheDocument();

it('Should change login button to logout on click', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button', { name: 'Login' });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole('button', { name: 'Logout' });

    expect(logoutButton).toBeInTheDocument();

})