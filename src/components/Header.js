import { LOGO_URL } from '../utils/constant';

export const Header = () => {
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
            </div>
        </div>
    );
};

export default Header;