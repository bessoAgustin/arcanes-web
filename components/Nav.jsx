import logo from '../assets/logo-arcanes-web.svg';

const links = [
    {
        name: 'Sobre nosotros',
        href: '#sobre-nosotros'
    },
    {
        name: 'Servicios',
        href: '#servicios'
    },
    {
        name: 'Metodología',
        href: '#metodologia'
    },
    {
        name: 'Contacto',
        href: '#contacto'
    }
]

const Nav = () => {
    return (
        <header className="bg-bg-main border-b-2 border-border">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                <img src={logo} alt="Arcanes, entrenamiento y psicología canina" className="w-auto h-12" />
                <nav>
                    <ul className="flex gap-4">
                        {links.map((link) => (
                            <li key={link.href} className="text-text-main font-body text-md font-medium hover:text-accent-secondary hover:underline transition-colors duration-300">
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav;