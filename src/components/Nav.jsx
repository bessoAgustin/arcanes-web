import logo from '../assets/logo-arcanes-web.svg';
import links from '../data/nav-links';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { useEffect, useRef } from 'react';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const myRef = useRef(null);

    useEffect(() =>{
        const handleOutsideClick = (e) => {
            if (myRef.current && !myRef.current.contains(e.target)) {
                setMenuOpen(false)
            }
        } 
        if (menuOpen) {
            document.addEventListener('pointerdown', handleOutsideClick)
            return () => document.removeEventListener('pointerdown', handleOutsideClick)
        }
    }, [menuOpen])

    return (
        <header className="bg-bg-main border-b-2 border-border" ref={myRef}>
            <div className="w-full flex justify-between items-center px-4 py-2 md:px-6 md:py-6 lg:px-10 lg:py-8">
                <img src={logo} alt="Arcanes, entrenamiento y psicología canina" className="w-auto h-12" />
                <div className='md:hidden text-accent-secondary' aria-label='menu toggle'><Hamburger toggled={menuOpen} toggle={setMenuOpen} aria-expanded={menuOpen} aria-controls='mobile-menu' /></div>
                <nav className='hidden md:flex'>
                    <ul className="flex gap-4">
                        {links.map((link) => (
                            <li key={link.href} className="text-text-main font-body text-lg font-medium hover:text-accent-secondary hover:underline transition-colors duration-300">
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {menuOpen &&
            <nav>
                <ul className="flex flex-col gap-2 items-end py-2 px-6 md:hidden" id='mobile-menu'>
                {links.map((link) => (
                    <li key={link.href} className="text-text-main font-body text-lg font-medium hover:text-accent-secondary hover:underline transition-colors duration-300 ">
                        <a href={link.href} onClick={() => setMenuOpen(false)} className='py-2'>{link.name}</a>
                    </li>
                ))}
            </ul>
            </nav>
            }
        </header>
    )
}

export default Nav;