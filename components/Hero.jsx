import heroOriginal from '../assets/hero.webp';
import hero1000 from '../assets/hero_1000.webp';
import hero640 from '../assets/hero_640.webp';

const Hero = () => {
    return (
        <section className="bg-bg-main" id='hero'>
            <div className="max-w-5xl mx-auto flex flex-col py-20 gap-8">
                <h1 className="text-5xl font-semibold text-center font-heading mx-auto">
                    Proporcionar <span className="text-h1-emphasis">comprensión</span>, <span className="text-h1-emphasis">educación</span> y una buena <span className="text-h1-emphasis">comunicación</span> a tu perro es tan importante y necesario como <span className="text-h1-emphasis">darle amor</span>.
                </h1>
                <p className="font-body text-text-main text-center text-3xl mx-auto font-normal max-w-3xl">
                    En Arcanes educamos, entrenamos y rehabilitamos el comportamiento para mejorar la relación entre perros y personas con pasión, respeto y mucho cariño.
                </p>
                <div className="flex gap-3 items-center justify-center">
                    <button className="bg-accent-primary border-accent-hover border hover:bg-accent-hover text-text-main font-medium text-3xl font-body rounded-2xl p-2 w-48.5 h-13">
                        <a href="">
                            Pide cita
                        </a>
                    </button>
                    <button className="text-text-main font-medium text-3xl w-48.5 h-13 font-body rounded-2xl p-2 border-2 border-accent-secondary hover:bg-border">
                        <a href="">
                            Ver servicios
                        </a>
                    </button>
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