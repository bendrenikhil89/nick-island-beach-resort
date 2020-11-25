import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const hamburgerClickHandler = () => setClick(prevClick => !prevClick);
    const closeMobileMenuHandler = (e) => {
        setActiveLink(e.target.text);
        setClick(false);
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to="/" className="navbar__logo">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.87 60.87" height="64" width="64">
                            <path className="navbar__cls-1" d="M53.7,30.56a8.13,8.13,0,0,0,5.06-7.87,9,9,0,0,0-3.31-7.5,10.21,10.21,0,0,0-3.88-1.86,25.54,25.54,0,0,0-5.85-.54H32.35v6.15h12.3c2.17,0,3.71.33,4.63,1a3.86,3.86,0,0,1,1.36,3.35,4,4,0,0,1-1.45,3.39c-.85.64-2.37,1-4.54,1H32.35v6.15H44.19q3.89,0,5.55,1.06a4.45,4.45,0,0,1,1.94,4,4.4,4.4,0,0,1-1.94,4Q48,44,44.19,44H32.35v6.15H46A24.16,24.16,0,0,0,52,49.47a11.94,11.94,0,0,0,4.31-2.09,9.66,9.66,0,0,0,3.66-8Q60,32.94,53.7,30.56Z"/>
                            <polyline className="navbar__cls-2" points="21.47 13.02 27.44 13.02 27.44 50.04 13.04 35.64 13.04 23.78 21.25 32"/>
                            <path className="navbar__cls-3" d="M1,13l6.47,6.47V50.55H1S.82,13,1,13Z"/>
                        </svg>
                    </Link>
                    <div className="navbar__menuicon" onClick={hamburgerClickHandler}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'navbar__navmenu navbar__active' : 'navbar__navmenu'}>
                        <li className="navbar__navitem">
                            <Link to="/" className={activeLink === "Home" ? "navbar__navlinks navbar__active" : "navbar__navlinks"} onClick={closeMobileMenuHandler}>
                                Home
                            </Link>
                        </li>
                        <li className="navbar__navitem">
                            <Link to="/rooms" className={activeLink === "Rooms" ? "navbar__navlinks navbar__active" : "navbar__navlinks"} onClick={closeMobileMenuHandler}>
                                Rooms
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;