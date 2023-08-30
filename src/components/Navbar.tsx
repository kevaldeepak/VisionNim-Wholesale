import { useState } from "react";
import "./Navbar.css";
// import FadeInAnim from "./FadeInAnimate";

function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const handleMobileNavToggle = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    // Links
    const WhoWeAre = "#WhoWeAre";
    const WhatWeOffer = "#WhatWeOffer";
    const Contact = "#Contact";


    return (
        <>
            <div className="nav-container">

                <nav className={`mobile-navbar ${mobileNavOpen ? "open" : ""}`} id="dropdown-menu">
                    <div className="close-button-container">
                        <a href="#mobile-navbar"><img className="mobile-menu-logo" src="src/assets/CompanyLogo.png" alt="Company Logo" /></a>
                        <button className="close-button" onClick={handleMobileNavToggle} >
                            <img src="src/assets/close.png" alt="Close" />
                        </button>
                    </div>
                    <ul>
                        <li></li>
                        <li><a href={WhoWeAre}>Who we are</a></li>
                        <li><a href={WhatWeOffer}>What we offer</a></li>
                        <li><a href={Contact}>Contact</a></li>
                    </ul>
                </nav>
                <nav id="mobile-navbar" className="navbar">
                    <div className="navbar-logo">
                        <img src="src/assets/CompanyLogo.png" alt="Company Logo" />
                    </div>
                    <div className="navbar-options">
                        <ul>
                            <li><a href={WhoWeAre}>Who we are</a></li>
                            <li><a href={WhatWeOffer}>What we offer</a></li>
                            <li><a href={Contact}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="mobile-navbar-button">
                        <button onClick={handleMobileNavToggle}>
                            <img className="menu-button" src="src/assets/menu.png"></img>
                        </button>
                    </div>
                </nav>
            </div>

        </>
    );
}

export default Navbar;
