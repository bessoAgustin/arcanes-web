import heroOriginal from '../assets/hero_img.webp';
import hero1000 from '../assets/hero_img_1000.webp';
import hero640 from '../assets/hero_img_640.webp';

const Hero = () => {
    return (
        <section className="bg-bg-main">
            <div className="max-w-5xl mx-auto flex flex-col py-4 gap-6">
                <h1 className="text-5xl font-semibold text-center font-heading mx-auto">Proporcionar <span className="text-h1-emphasis">comprensión</span>, <span className="text-h1-emphasis">educación</span> y una buena <span className="text-h1-emphasis">comunicación</span> a tu perro es tan importante y necesario como <span className="text-h1-emphasis">darle amor</span>.</h1>
                <p className="font-body text-text-main text-center text-4xl mx-auto font-normal">En Arcanes educamos, entrenamos y rehabilitamos el comportamiento para mejorar la relación entre perros y personas con pasión, respeto y mucho cariño.</p>
                <div className="flex gap-3 items-center justify-center">
                    <button className="bg-accent-primary border-accent-hover border text-text-main font-medium text-3xl font-body rounded-2xl p-2 w-48">
                        <a href="">Pide cita</a>
                    </button>
                    <button className="text-text-main font-medium text-3xl font-body rounded-2xl p-2 border-2 border-accent-secondary">
                        Ver servicios
                    </button>
                </div>
                <img
                src={heroOriginal}
                srcSet={`${hero640} 640w, ${hero1000} 1000w, ${heroOriginal} 1200w`}
                sizes='(min-width:1024px) 1024px, 100vw'
                width='1200' height='801'
                fetchPriority='high'
                alt='Virginia posando con un labrador'
                />
            </div>
        </section>
    )
}

export default Hero;