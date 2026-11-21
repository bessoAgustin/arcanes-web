import paws from '../assets/paws.svg';
import { phone } from '../data/contact';
import formacion from '../assets/formacion.webp';
import formacion1000 from '../assets/formacion1000.webp';
import formacion640 from '../assets/formacion640.webp';

const School = () => {
    return (
        <section className='bg-bg-muted' id='school'>
            <div className='section-container'>
                <div className='h2-container'>
                    <img src={paws} alt=''/>
                    <h2 className='heading-2'>Formación</h2>
                </div>
                <p className='p-body max-w-2xl'>
                    Haz de tu vocación una profesión y fórmate con nosotros como entrenador/a en psicología canina.
                </p>
                    <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent('Hola Arcanes! Me gustaría formarme con vosotros!')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='btn btn-primary text-center'>
                        Quiero formarme
                    </a>
                    <img
                        className='w-full max-w-4xl aspect-video object-cover rounded-3xl'
                        src={formacion}
                        srcSet={`${formacion640} 640w, ${formacion1000} 1000w, ${formacion} 1200w`}
                        sizes='(min-width:1024px) 768px, 100vw'
                        width='1200' height='810'
                        loading='lazy'
                        decoding='async'
                        alt='Virginia paseando en la playa con perros'
                    />
            </div>
    </section>
    )
}

export default School;