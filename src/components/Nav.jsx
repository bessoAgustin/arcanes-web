import logo from '../assets/logo-arcanes-web.svg';
import links from '../data/nav-links';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        if (!menuOpen) {
            setMenuOpen(true)
        } setMenuOpen(false)
    }

    return (
        <header className="bg-bg-main border-b-2 border-border">
            <div className="w-full flex justify-between items-center p-4">
                <img src={logo} alt="Arcanes, entrenamiento y psicología canina" className="w-auto h-12" />
                <button type='button' className='md:hidden text-accent-secondary' onClick={() => {handleClick}} aria-expanded={menuOpen} aria-controls='mobile-menu' aria-label='menu toggle'><Hamburger toggled={menuOpen} toggle={setMenuOpen} /></button>
                <nav className='hidden md:flex'>
                    <ul className="flex gap-4">
                        {links.map((link) => (
                            <li key={link.href} className="text-text-main font-body text-lg font-medium hover:text-accent-secondary hover:underline transition-colors duration-300">
                                <a href={link.href} onClick={() => setMenuOpen(false)}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {menuOpen &&
            <ul className="flex flex-col md:hidden">
                {links.map((link) => (
                    <li key={link.href} className="text-text-main font-body text-lg font-medium hover:text-accent-secondary hover:underline transition-colors duration-300 ">
                        <a href={link.href}>{link.name}</a>
                    </li>
                ))}
            </ul>
            }
        </header>
    )
}

export default Nav;