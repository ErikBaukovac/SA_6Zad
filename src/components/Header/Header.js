import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Header.css';

const links = {
    speakers: 'Speakers',
    events: 'Events',
}

const Header = () => {
    return (

        <header className="Header">
            <div className="Header-Inner">
                <Link to="/" className="LogoContainer">
                    <img className="LogoContainer-Image" src={Logo} alt="Logo" />
                </Link>
                <nav className="Header-Nav">
                    <ul className="Header-NavList">

                        <li className="Header-NavListItem">
                            <Link className="Header-NavLink" to="/events">{links.events}</Link>
                        </li>

                        <li className="Header-NavListItem"><Link to="/speakers">
                            {links.speakers}</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;