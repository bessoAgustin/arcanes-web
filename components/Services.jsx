import paws from '../assets/paws.svg'
import cachorros from '../assets/service-cachorros.webp'
import obediencia from '../assets/service-obediencia.webp'
import rehabilitacion from '../assets/service-rehabilitacion.webp'
import socializacion from '../assets/service-socializacion.webp'
import paseador from '../assets/service-paseador.webp'
import actividades from '../assets/service-actividades.webp'
import asesoramiento from '../assets/service-asesoramiento.webp'
import talleres from '../assets/service-talleres.webp'

const Services = () => {
    return (
        <section id='services'>
            <div className='max-w-5xl mx-auto flex flex-col items-center justify-center py-8 gap-10'>
                <div className='flex gap-3'>
                    <img src={paws} alt=''/>
                    <h2 className='font-heading font-medium text-4xl'>Servicios</h2>
                </div>
                <ul className='grid grid-cols-4 gap-x-4 gap-y-6    '>
                    <li>
                        <button type='button' className='flex flex-col gap-3 text-center bg-bg-surface shadow-md hover:shadow-lg transition-shadow duration-200 p-2 rounded-2xl w-full cursor-pointer focus-visible:ring'>
                            <img
                            src={cachorros}
                            alt=""
                            loading='lazy'
                            className='w-full aspect-square object-cover rounded-lg'
                            width='640' height='640'
                            decoding='async'
                            />
                            <span className='flex font-semibold min-h-[2lh] items-center justify-center'>
                                Escuela de Cachorros
                            </span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className='flex flex-col gap-3 text-center bg-bg-surface shadow-md hover:shadow-lg transition-shadow duration-200 p-2 rounded-2xl w-full cursor-pointer'>
                            <img
                            src={obediencia}
                            alt=""
                            loading='lazy'
                            className='w-full aspect-square object-cover rounded-lg'
                            width='512' height='278'
                            decoding='async'
                            />
                            <span className='flex font-semibold min-h-[2lh] items-center justify-center'>
                                Curso de Obediencia y Comunicación
                            </span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className='flex flex-col gap-3 text-center bg-bg-surface shadow-md hover:shadow-lg transition-shadow duration-200 p-2 rounded-2xl w-full cursor-pointer'>
                            <img
                            src={rehabilitacion}
                            alt=""
                            loading='lazy'
                            className='w-full aspect-square object-cover rounded-lg'
                            width='400' height='287'
                            decoding='async'
                            />
                            <span className='flex font-semibold min-h-[2lh] items-center justify-center'>
                                Rehabilitación del Comportamiento
                            </span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className='flex flex-col gap-3 text-center bg-bg-surface shadow-md hover:shadow-lg transition-shadow duration-200 p-2 rounded-2xl w-full cursor-pointer'>
                            <img
                            src={socializacion}
                            alt=""
                            loading='lazy'
                            className='w-full aspect-square object-cover rounded-lg'
                            width='400' height='380'
                            decoding='async'
                            />
                            <span className='flex font-semibold min-h-[2lh] items-center justify-center'>
                                Jornadas de Socialización
                            </span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className='flex flex-col gap-3 text-center bg-bg-surface shadow-md hover:shadow-lg transition-shadow duration-200 p-2 rounded-2xl w-full cursor-pointer'>
                            <img
                            src={paseador}
                            alt=""
                            loading='lazy'
                            className='w-full aspect-square object-cover rounded-lg'
                            width='384' height='324'
                            decoding='async'
                            />
                            <span className='flex font-semibold min-h-[2lh] items-center justify-center'>
                                Paseos Caninos
                            </span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className='flex flex-col gap-3 text-center bg-bg-surface shadow-md hover:shadow-lg transition-shadow duration-200 p-2 rounded-2xl w-full cursor-pointer'>
                            <img
                            src={actividades}
                            alt=""
                            loading='lazy'
                            className='w-full aspect-square object-cover rounded-lg'
                            width='384' height='324'
                            decoding='async'
                            />
                            <span className='flex font-semibold min-h-[2lh] items-center justify-center'>
                                Actividades Recreativas
                            </span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className='flex flex-col gap-3 text-center bg-bg-surface shadow-md hover:shadow-lg transition-shadow duration-200 p-2 rounded-2xl w-full cursor-pointer'>
                            <img
                            src={asesoramiento}
                            alt=""
                            loading='lazy'
                            className='w-full aspect-square object-cover rounded-lg'
                            width='384' height='324'
                            decoding='async'
                            />
                            <span className='flex font-semibold min-h-[2lh] items-center justify-center'>
                                Asesoramiento
                            </span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className='flex flex-col gap-3 text-center bg-bg-surface shadow-md hover:shadow-lg transition-shadow duration-200 p-2 rounded-2xl w-full cursor-pointer'>
                            <img
                            src={talleres}
                            alt=""
                            loading='lazy'
                            className='w-full aspect-square object-cover rounded-lg'
                            width='384' height='324'
                            decoding='async'
                            />
                            <span className='flex font-semibold min-h-[2lh] items-center justify-center'>
                                Charlas y Talleres
                            </span>
                        </button>
                    </li>
                </ul>

                <p>¡Míranos en acción en nuestra <a href="" className='underline'>galería de imágenes</a>!</p>
            </div>
        </section>
    )
}

export default Services;