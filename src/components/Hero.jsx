import heroOriginal from '../assets/hero.webp';
import hero1000 from '../assets/hero_1000.webp';
import hero640 from '../assets/hero_640.webp';
import { phone } from '../data/contact';

const Hero = () => {
    return (
        <section className="bg-bg-main" id='hero'>
            <div className="section-container py-12 md:py-16 lg:py-24">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mx-auto">
                    Proporcionar <span className="text-h1-emphasis">comprensión</span>, <span className="text-h1-emphasis">educación</span> y una buena <span className="text-h1-emphasis">comunicación</span> a tu perro es tan importante y necesario como <span className="text-h1-emphasis">darle amor</span>.
                </h1>
                <p className="text-text-main text-center text-xl md:text-2xl lg:text-3xl mx-auto max-w-3xl">
                    En Arcanes educamos, entrenamos y rehabilitamos el comportamiento para mejorar la relación entre perros y personas con pasión, respeto y mucho cariño.
                </p>
                <div className="grid grid-flow-col auto-cols-fr w-fit mx-auto gap-3 items-center justify-center">
                    <a href={`https://wa.me/${phone}?text=${encodeURIComponent('Hola, me gustaría agendar una cita.')}`} target="_blank" rel="noopener noreferrer" className='btn btn-primary w-full'>
                        Pide cita
                    </a>
                    <a href="#services" className='btn btn-secondary' >
                            Ver servicios
                    </a>
                </div>
                <figure>
                    <img
                        className='rounded-3xl shadow-md'
                        src={heroOriginal}
                        srcSet={`${hero640} 640w, ${hero1000} 1000w, ${heroOriginal} 1200w`}
                        sizes='(min-width:1024px) 1024px, 100vw'
                        width='1200' height='801'
                        fetchPriority='high'
                        alt='Virginia posando con un labrador'
                    />
                    <figcaption className='mt-2'>
                        <div className='font-body flex flex-col items-center justify-center'>
                            <p>Virginia Furiolo</p>
                            <p>Educadora, entrenadora y psicóloga canina</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Hero;