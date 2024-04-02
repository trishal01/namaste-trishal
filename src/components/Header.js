import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';


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
                    <li><Link to='/'> Home </Link> </li>
                    <li> <Link to='/about'> About </Link></li>
                    <li> <Link to='/contact'> Contact US </Link></li>
                </ul>
                <button className='login' onClick={() => { loggedStatus === 'Login' ? setLoggedStatus('Logout') : setLoggedStatus('Login') }}>{loggedStatus}</button>
            </div>
        </div>
    );
};

export default Header;