import paws from '../assets/paws.svg';
import location from '../assets/boxicons_location.svg';
import phone from '../assets/boxicons_phone.svg';
import clock from '../assets/boxicons_clock.svg';
import { useState } from 'react';

const Contact = () => {

    const [formData, setFormData] = useState({name:'', phone:'', message:''})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}))
        if (status != 'idle') setStatus('idle')
    }

    const [status, setStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting')

        try {
            console.log('Form submitted: ', formData)
            setFormData({name:'', phone:'', message:''})
            setStatus('sent')
        } catch {
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="bg-bg-muted">
            <div className="section-container">
                <div className= "h2-container">
                    <img src={paws} alt='' className='paws'/>
                    <h2 className='heading-2'>Contacto</h2>
                </div>
                <form className="flex flex-col gap-4 w-full max-w-sm mx-auto items-center text-center" onSubmit={handleSubmit}>
                    <input type="text" name='name' required placeholder="Tu nombre" value={formData.name} className='w-full' onChange={handleChange}/>
                    <input type="tel" name='phone' required value={formData.phone} placeholder="Tu número de teléfono" className='w-full' onChange={handleChange}/>
                    <textarea placeholder="Tu mensaje" required name='message' value={formData.message} className='w-full' onChange={handleChange}></textarea>
                    <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>{status === 'submitting' ? 'Enviando...' : 'Enviar'}</button>
                </form>
                {status === 'sent' && (
                <p className="text-sm text-green-700" role="status">
                    ¡Mensaje enviado! Te responderemos lo antes posible.
                </p>
                )}
                {status === 'error' && (
                <p className="text-sm text-red-700" role="alert">
                    No se pudo enviar el mensaje. Puedes <a href="tel:+34695724495" target='_blank' rel='noopener noreferrer'>llamarnos</a> o <a href='https://wa.me/34695724495' target='_blank' rel='noopener noreferrer'>escribirnos por WhatsApp</a>.
                </p>
                )}                
                <div className='flex flex-col gap-2 text-center max-w-lg'>
                    <p className="md:p-body md:text-lg">¿Prefieres consultar en persona?</p>
                    <p className='md:p-body md:text-lg'>Visítanos en nuestro local, donde brindamos asesoramiento canino y en nuestra tienda ofrecemos artículos especializados, alimentación natural para tu perro y muchas sorpresas más.</p>
                    <p className='md:p-body md:text-lg'>¡Te va a encantar nuestra GUARIDA URBANA canina!</p>
                </div>
                <div className="flex flex-col gap-y-6 items-start">
                    <div className="contact">
                        <img src={location} alt=''/>
                        <a href="https://maps.app.goo.gl/Np3TXD76vE79sNgU8" target="_blank" rel="noopener noreferrer" className="p-body md:text-xl underline text-start">Av. de la Plata 111, Quatre Carreres, València (46006)</a>
                    </div>
                    <div className="contact">
                        <img src={phone} alt=''/>
                        <a href="tel:+34695724495" className="p-body md:text-xl underline">(+34) 695 724 495</a>
                    </div>
                    <div className="contact">
                        <img src={clock} alt=''/>
                        <p className="p-body md:text-lg">Lun-Mié: 5:00 PM - 9:00 PM</p>
                    </div>
                </div>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.484809122753!2d-0.36228192348409166!3d39.45837497160996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048c39683c0bf%3A0x8e5195ffeab52b4!2sArcanes%20Entrenamiento%20y%20Psicolog%C3%ADa%20Canina!5e0!3m2!1sen!2ses!4v1795359301169!5m2!1sen!2ses" className="rounded-lg w-full max-w-2xl h-64 md:h-80 lg:h-96" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" aria-label='Ubicación de Arcanes en Google Maps'>
                </iframe>
            </div>
        </section>
    )
}

export default Contact;