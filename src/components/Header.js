import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';


export const Header = () => {

    const [loggedStatus, setLoggedStatus] = useState('Login')

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-icon">
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Cart</li>
                </ul>
                <button className='login' onClick={() => { loggedStatus === 'Login' ? setLoggedStatus('Logout') : setLoggedStatus('Login') }}>{loggedStatus}</button>
            </div>
        </div>
    );
};

export default Header;