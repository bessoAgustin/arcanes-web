import paws from '../assets/paws.svg';
import services from '../data/services';
import ServiceCard from './ServiceCard';
import { useState } from 'react';


const Services = () => {

    const [selectedId, setSelectedId] = useState(null);

    const handleSelect = (id) => {
        setSelectedId(id);
    }
    
    const selectedService = services.find((service) => {
        return service.id === selectedId;
    });

    //borrar cuando el modal ya esté en funcionamiento
    console.log(selectedId);
    console.log(selectedService);
    //

    return (
        <section id='services'>
            <div className='section-container'>
                <div className='h2-container'>
                    <img src={paws} alt=''/>
                    <h2 className='heading-2'>Servicios</h2>
                </div>
                <ul className='grid grid-cols-4 gap-x-4 gap-y-6'>
                    {services.map((service) => (
                        <li key={service.id}>
                            <ServiceCard
                            id={service.id}
                            name={service.name}
                            image={service.image}
                            onSelect={handleSelect}
                            />
                        </li>
                    ))}
                </ul>

                <p className='p-body'>
                    ¡Míranos en acción en nuestra <a href="" className='underline'>galería de imágenes</a>!
                </p>
            </div>
        </section>
    )
}

export default Services;