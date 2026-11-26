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
        <section id="methodology" className="bg-bg-main">
            <div className="section-container">
                <div className='h2-container'>
                    <img src={paws} alt='' className='paws'/>
                    <h2 className='heading-2'>Metodología</h2>
                </div>
                <h3 className="heading-3 underline font-normal italic">Sistema Holístico</h3>
                <p className="p-body max-w-3xl mx-auto text-center">
                    Trabajamos en equipo con nuestros perros rehabilitadores, los guías y tu perro. Siempre consideramos que cada perro y situación son únicas, por lo que utilizamos un amplio repertorio de recursos y metodologías, dependiendo de cada caso.
                </p>
                <ul className='flex overflow-x-auto snap-x snap-mandatory gap-4 py-4 lg:overflow-visible min-w-0 max-w-full'>
                    {methodCards.map((card) => (
                        <li key={card.id} className='shrink-0 snap-start basis-[85%] md:basis-[calc((100%-2rem)/3)] lg:basis-[calc((100%-4rem)/5)] min-w-0'>
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