import { LOGO_URL } from '../utils/constant';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';


export const Header = () => {

    const [loggedStatus, setLoggedStatus] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="flex justify-between bg-pink-400 shadow-lg sm:bg-purple-2008">
            <div className="logo-container">
                <img
                    className="w-16"
                    src={LOGO_URL}
                />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className='px-2'> Status : {onlineStatus ? '🟢' : '🔴'} </li>
                    <li className='px-2'><Link to='/'> Home </Link> </li>
                    <li className='px-2'> <Link to='/about'> About </Link></li>
                    <li className='px-2'> <Link to='/contact'> Contact US </Link></li>
                    <li className='px-2'><Link to='/grocery'>Grocery</Link></li>
                    <button className='login' onClick={() => { loggedStatus === 'Login' ? setLoggedStatus('Logout') : setLoggedStatus('Login') }}>{loggedStatus}</button>
                    <li className='px-2 font-medium'>{loggedInUser}</li>


                </ul>
            </div>
        </div>
    );
};

export default Header;