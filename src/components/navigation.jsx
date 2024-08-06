import React, { useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className='navigation'>
            <div className='container'>
                <div className='navigation__wrapper'>
                    {/* <a href="/" className='nav-logo-wrapper'>
                        <img className='nav-logo' src="/assets/popvia-logo.png" alt="PopVia logo" />
                    </a> */}

                    <div className='hamburger' onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <a className='nav-link' href="/about">About Us</a>
                        <a className='nav-link' href="/contact">Chrome Store</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navigation;
