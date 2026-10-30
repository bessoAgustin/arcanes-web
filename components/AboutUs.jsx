import aboutUs from '../assets/aboutUs.webp';
import aboutUs1000 from '../assets/aboutUs1000.webp';
import aboutUs640 from '../assets/aboutUs640.webp';
import paws from '../assets/paws.svg'

const AboutUs = () => {
    return (
        <section className='bg-bg-muted' id='about-us'>
            <div className='section-container'>
                <div className='h2-container'>
                    <img src={paws}/>
                    <h2 className='heading-2'>
                        ¿Qué es Arcanes?
                    </h2>
                </div>
                <p className='p-body'>
                Arcanes es un equipo de entrenadores caninos profesionales con una amplia formación y experiencia. A través de la educación, el entrenamiento y la rehabilitación del comportamiento, nos dedicamos a mejorar la comunicación, el entendimiento y la convivencia entre perros y personas. Ofrecemos varios servicios para mejorar la relación, calidad de vida y el bienestar entre ambas especies.
                </p>
                <button className='btn-secondary'>
                    <a href="">Saber más</a>
                </button>
                <img
                    className='w-full max-w-4xl aspect-video object-cover rounded-3xl'
                    src={aboutUs}
                    srcSet={`${aboutUs640} 640w, ${aboutUs1000} 1000w, ${aboutUs} 1200w`}
                    sizes='(min-width:1024px) 768px, 100vw'
                    width='1200' height='810'
                    loading='lazy'
                    decoding='async'
                    alt='Virginia paseando en playa y mar con perros'
                />
            </div>
        </section>
    )
}

export default AboutUs;