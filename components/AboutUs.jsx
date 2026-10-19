import aboutUs from '../assets/aboutUs.webp';
import aboutUs1000 from '../assets/aboutUs1000.webp';
import aboutUs640 from '../assets/aboutUs640.webp';
import paws from '../assets/paws.svg'

const AboutUs = () => {
    return (
        <section className='bg-bg-muted'>
            <div className='max-w-5xl mx-auto flex flex-col items-center justify-center py-8 gap-10'>
                <div className='flex gap-3'>
                    <img src={paws}/>
                    <h2 className='font-heading font-medium text-4xl'>
                        ¿Qué es Arcanes?
                    </h2>
                </div>
                <p className='font-body text-center max-w-4xl text-2xl'>
                Arcanes es un equipo de entrenadores caninos profesionales con una amplia formación y experiencia. A través de la educación, el entrenamiento y la rehabilitación del comportamiento, nos dedicamos a mejorar la comunicación, el entendimiento y la convivencia entre perros y personas. Ofrecemos varios servicios para mejorar la relación, calidad de vida y el bienestar entre ambas especies.
                </p>
                <button className="text-text-main font-medium text-2xl font-body rounded-2xl p-2 border-2 border-accent-secondary hover:bg-border">
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