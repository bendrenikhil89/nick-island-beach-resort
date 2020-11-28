import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [navbarBg, setNavbarBg] = useState(false);

    const hamburgerClickHandler = () => setClick(prevClick => !prevClick);
    const closeMobileMenuHandler = (e) => {
        setActiveLink(e.target.text);
        setClick(false);
    }

    const changeBackground = () => {
        if(window.scrollY > 80){
            setNavbarBg(true)
        } else {
            setNavbarBg(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={navbarBg ? 'navbar navbarBg__active' : 'navbar'}>
                <div className="navbar__container">
                    <Link to="/" className="navbar__logo">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.4 58.98" height="64">
                            <path className="navbar__cls-1" d="M70.93,19.18,60.67,27.69,50.31,19l10.18-8.65Z"/>
                            <path className="navbar__cls-1" d="M112.09,19.33l-10.25,8.51L91.47,19.11l10.18-8.66Z"/>
                            <path className="navbar__cls-1" d="M101.57,10.31,91.4,19,81.34,10.53l10.18-9Z"/>
                            <path className="navbar__cls-1" d="M81.34,10.53,71,19,60.73,10.25l9.83-8.47Z"/>
                            <path className="navbar__cls-1" d="M91.65,36.42,81.4,44.93,71,36.2l10.18-8.65Z"/>
                            <path className="navbar__cls-2" d="M60.53,10.27l-10-8.51h20Z"/>
                            <path className="navbar__cls-2" d="M101.57,10.22l-10-8.75h20.16Z"/>
                            <path className="navbar__cls-2" d="M91.67,36.39,81.34,27.63l20.49.2Z"/>
                            <path className="navbar__cls-2" d="M70.93,36.24,60.68,27.69l20.44-.1Z"/>
                            <path className="navbar__cls-3" d="M71,19.07l10.13,8.52q-9.67.12-19.43.1h-1Z"/>
                            <path className="navbar__cls-3" d="M91.58,19.07l10.25,8.76L81.28,27.6Z"/>
                            <text className="navbar__cls-4" transform="translate(0.81 58.6)">NICK ISLAND RESORT</text>
                        </svg>

                        {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.95 58.98" height="64">
                            <path className="cls-1" d="M25.55,27.44,15.29,36,4.93,27.22l10.18-8.66Z"/>
                            <path className="cls-1" d="M66.71,27.58,56.45,36.09,46.09,27.36l10.18-8.65Z"/>
                            <path className="cls-1" d="M56.19,18.56,46,27.2,36,18.78l10.18-9Z"/>
                            <path className="cls-1" d="M36,18.78,25.62,27.29,15.35,18.51,25.18,10Z"/>
                            <path className="cls-1" d="M46.27,44.67,36,53.18,25.65,44.45,35.84,35.8Z"/>
                            <path className="cls-2" d="M15.15,18.53,5.18,10h20Z"/>
                            <path className="cls-2" d="M56.19,18.47l-10-8.74H66.31Z"/>
                            <path className="cls-2" d="M46.28,44.64,36,35.88l20.5.2Z"/>
                            <path className="cls-2" d="M25.55,44.49,15.3,35.94l20.44-.09Z"/>
                            <path className="cls-3" d="M25.62,27.33l10.13,8.51q-9.67.12-19.43.1h-1Z"/>
                            <path className="cls-3" d="M46.2,27.33l10.24,8.75L35.9,35.85Z"/>
                            <text className="cls-4" transform="translate(72.81 34.97)">NICK ISLAND BEACH RESORT</text>
                        </svg> */}

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