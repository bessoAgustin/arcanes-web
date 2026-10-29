import paws from '../assets/paws.svg'
import services from '../data/services';
import ServiceCard from './ServiceCard';


const Services = () => {

    const logServiceId = (id) => {
        console.log(id)
    }

    return (
        <section id='services'>
            <div className='max-w-5xl mx-auto flex flex-col items-center justify-center py-8 gap-10'>
                <div className='flex gap-3'>
                    <img src={paws} alt=''/>
                    <h2 className='font-heading font-medium text-4xl'>Servicios</h2>
                </div>
                <ul className='grid grid-cols-4 gap-x-4 gap-y-6'>
                    {services.map((service) => (
                        <li key={service.id}>
                            <ServiceCard 
                            id={service.id}
                            name={service.name}
                            image={service.image}
                            onSelect={logServiceId}
                            />
                        </li>
                    ))}
                </ul>

                <p>¡Míranos en acción en nuestra <a href="" className='underline'>galería de imágenes</a>!</p>
            </div>
        </section>
    )
}

export default Services;