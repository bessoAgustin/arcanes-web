import paws from '../assets/paws.svg';
import methodCards from '../data/method-cards';
import MethodologyCard from './MethodologyCard';
import MethodologyModal from './MethodologyModal';
import { useState } from 'react';

const Methodology = () => {

    const [selectedId, setSelectedId] = useState(null);

    const selectedMethod = methodCards.find((card) => {
        return card.id === selectedId;
    });

    const handleSelect = (id) => {
        setSelectedId(id);
    };

    return (
        <section id="methodology" className="bg-primary text-white py-16">
            <div className="section-container">
                <div className='h2-container'>
                    <img src={paws} alt=''/>
                    <h2 className='heading-2'>Metodología</h2>
                </div>
                <h3 className="heading-3 underline font-normal italic">Sistema Holístico</h3>
                <p className="p-body max-w-3xl mx-auto text-center">
                    Trabajamos en equipo con nuestros perros rehabilitadores, los guías y tu perro. Siempre consideramos que cada perro y situación son únicas, por lo que utilizamos un amplio repertorio de recursos y metodologías, dependiendo de cada caso.
                </p>
                <ul className='flex w-full gap-x-4 gap-y-6 mt-8'>
                    {methodCards.map((card) => (
                        <li key={card.id} className='w-full'>
                            <MethodologyCard
                                id={card.id}
                                title={card.title}
                                image={card.image}
                                onSelect={handleSelect}
                            />
                        </li>
                    ))}
                </ul>

                {selectedMethod && 
                <MethodologyModal
                    method={selectedMethod}
                    onClose={() => setSelectedId(null)}
                />
                }
            </div>
        </section>
    )
}

export default Methodology;