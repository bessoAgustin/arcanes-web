import logo from '../assets/logo-arcanes-web-blanco.png';
import location from '../assets/boxicons_location.svg';
import phone from '../assets/boxicons_phone.svg';
import clock from '../assets/boxicons_clock.svg';
import youtube from '../assets/thesvg-color_youtube.svg'
import instagram from '../assets/thesvg-color_instagram.svg'
import facebook from '../assets/thesvg-color_facebook.svg'

const Footer = () => {
    return (
        <footer className="bg-text-main text-white p-6">
            <div className="flex flex-col w-full items-center gap-y-8 py-4 text-center">
                <div className="flex flex-col items-center gap-6 lg:flex-row w-full justify-around">
                    <img src={logo} alt="Logo Arcanes" className="w-fit h-10 md:h-11 lg:h-12 my-auto" />
                    <div className="flex flex-col gap-y-6 items-start justify-start">
                        <div className="contact">
                            <img src={location} alt=''/>
                            <a href="https://maps.app.goo.gl/Np3TXD76vE79sNgU8" target="_blank" rel="noopener noreferrer" className="underline">Av. de la Plata, 111 - València (46006)</a>
                        </div>
                        <div className="contact">
                            <img src={phone} alt=''/>
                            <a href="tel:+34695724495" className="underline">(+34) 695 724 495</a>
                        </div>
                        <div className="contact">
                            <img src={clock} alt=''/>
                            <span className="">Lun-Mié: 5:00 PM - 9:00 PM</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4 items-center justify-start text-center'>
                        <p className='font-bold'>Explorar</p>
                        <a href="#about-us">Sobre Nosotros</a>
                        <a href="#services">Servicios</a>
                        <a href="#methodology">Metodología</a>
                        <a href="#contact">Contacto</a>
                    </div>
                    <div className='flex flex-col justify-start items-center gap-y-8'>
                        <span className='font-bold'>Síguenos en nuestras redes:</span>
                        <div className='flex gap-6 items-center'>
                            <a href="https://youtube.com/@arcanesentrenamientocanino2456" aria-label='YouTube' target='_blank' rel='noopener noreferrer'><img src={youtube} alt='YouTube logo' className='h-10 md:h-11 lg:h-12 w-auto' /></a>
                            <a href="https://www.instagram.com/arcanes__virbea/" aria-label='Instagram' target='_blank' rel='noopener noreferrer'><img src={instagram} alt='Instagram logo' className='h-10 md:h-11 lg:h-12 w-auto' /></a>
                            <a href="https://www.facebook.com/arcanesadiestramientocanino/" aria-label='Facebook' target='_blank' rel='noopener noreferrer'><img src={facebook} alt='Facebook logo' className='h-10 md:h-11 lg:h-12 w-auto' /></a>
                        </div>
                    </div>
                </div>
                <span>&copy; Copyright 2012 - 2026 | Arcanes <a href="https://arcanes.com.es/%E2%80%9C" className="underline">Aviso Legal</a> | Todos los derechos reservados | Fotografía: Luz Mariano <a href="tel:+34628199308" className="underline">(+34)628199308</a></span>
            </div>
        </footer>
    )
}

export default Footer;