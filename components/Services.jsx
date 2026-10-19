import paws from '../assets/paws.svg'

const Services = () => {
    return (
        <section>
            <div className='max-w-5xl mx-auto flex flex-col items-center justify-center py-8 gap-10'>
                <div className='flex gap-3'>
                    <img src={paws}/>
                    <h2 className='font-heading font-medium text-4xl'>
                        Servicios
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Services;