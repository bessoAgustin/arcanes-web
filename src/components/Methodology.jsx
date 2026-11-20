import paws from '../assets/paws.svg';
import methodCards from '../data/method-cards.js';
import MethodologyCard from './MethodologyCard.jsx';

const Methodology = () => {
    return (
        <section id="methodology" className="bg-primary text-white py-16">
            <div className="section-container">
                <div className='h2-container'>
                    <img src={paws} alt=''/>
                    <h2 className='heading-2'>Metodología</h2>
                </div>
                <h3 className="heading-3">Sistema Holístico</h3>
                <p className="p-body max-w-3xl mx-auto text-center">
                    Trabajamos en equipo con nuestros perros rehabilitadores, los guías y tu perro. Siempre consideramos que cada perro y situación son únicas, por lo que utilizamos un amplio repertorio de recursos y metodologías, dependiendo de cada caso.
                </p>
                <ul className='flex gap-x-4 gap-y-6 mt-8'>
                    {methodCards.map((card) => (
                        <li key={card.id} className='w-full'>
                            <MethodologyCard
                                id={card.id}
                                title={card.title}
                                image={card.image}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Methodology;