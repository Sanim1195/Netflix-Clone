import React, { useEffect, useState } from 'react';
import './Nav.css';
import logo from './assets/NetflixLogo.png';

function Nav() {
    // state that keeps track of whether the user has scrolled down the page or not
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        // if the user has scrolled down the page more than 100px, then show the black nav bar
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        // when the user scrolls down the page, call the transitionNavBar function
        window.addEventListener("scroll", transitionNavBar);
        // when the user scrolls down the page, remove the event listener
        return () => window.removeEventListener("scroll", transitionNavBar);

    },[]);


    return (
        <div className={`nav ${show && `nav__black`} `}>
            {/* nav container */}
            <div className='nav__contents'>
                <img className='nav__logo' src={logo} alt='Netflix Logo' />
                <img className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Netflix Avatar' />
            </div>
        </div>
    )
}


export default Nav;