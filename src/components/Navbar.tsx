import { useState } from "react";
import "./Navbar.css";

import Animate from "./Animate";

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
                        <a href="#mobile-navbar"><img className="mobile-menu-logo" src="./assets/CompanyLogo.png" alt="Company Logo" /></a>
                        <button className="close-button" onClick={handleMobileNavToggle} >
                            <img src="./assets/close.png" alt="Close" />
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
                        <img src="./assets/CompanyLogo.png" alt="Company Logo" />
                    </div>
                    <div className="navbar-options">
                        <ul>
                            <Animate
                                y={50}
                                delay={0.1}
                            >
                                <li><a href={WhoWeAre}>Who we are</a></li>
                            </Animate>
                            <Animate
                                y={50}
                                delay={0.2}
                            >
                                <li><a href={WhatWeOffer}>What we offer</a></li>
                            </Animate>
                            <Animate
                                y={50}
                                delay={0.3}
                            >
                                <li><a href={Contact}>Contact</a></li>
                            </Animate>
                        </ul>
                    </div>
                    <div className="mobile-navbar-button">
                        <button onClick={handleMobileNavToggle}>
                            <img className="menu-button" src="./assets/menu.png" alt="menu button"></img>
                        </button>
                    </div>
                </nav>
            </div>

        </>
    );
}

export default Navbar;
