import heroOriginal from '../assets/hero.webp';
import hero1000 from '../assets/hero_1000.webp';
import hero640 from '../assets/hero_640.webp';
import { phone } from '../data/contact';

const Hero = () => {
    return (
        <section className="bg-bg-main" id='hero'>
            <div className="section-container py-20">
                <h1 className="text-5xl font-semibold text-center font-heading mx-auto">
                    Proporcionar <span className="text-h1-emphasis">comprensión</span>, <span className="text-h1-emphasis">educación</span> y una buena <span className="text-h1-emphasis">comunicación</span> a tu perro es tan importante y necesario como <span className="text-h1-emphasis">darle amor</span>.
                </h1>
                <p className="font-body text-text-main text-center text-3xl mx-auto font-normal max-w-3xl">
                    En Arcanes educamos, entrenamos y rehabilitamos el comportamiento para mejorar la relación entre perros y personas con pasión, respeto y mucho cariño.
                </p>
                <div className="flex gap-3 items-center justify-center">
                    <a href={`https://wa.me/${phone}?text=${encodeURIComponent('Hola, me gustaría agendar una cita.')}`} target="_blank" rel="noopener noreferrer" className='btn btn-primary text-center'>
                        Pide cita
                    </a>
                    <a href="#services" className='btn btn-secondary text-center'>
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