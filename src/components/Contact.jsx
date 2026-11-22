import paws from '../assets/paws.svg';
import location from '../assets/boxicons_location.svg';
import phone from '../assets/boxicons_phone.svg';
import clock from '../assets/boxicons_clock.svg';

const Contact = () => {
    return (
        <section id="contact" className="bg-bg-muted">
            <div className="section-container">
                <div className= "h2-container">
                    <img src={paws} alt=''/>
                    <h2 className='heading-2'>Contacto</h2>
                </div>
                <div className="flex flex-col gap-4 w-1/3 items-center text-center">
                    <input type="text" placeholder="Tu nombre" />
                    <input type="phone" placeholder="Tu número de teléfono" />
                    <textarea placeholder="Tu mensaje"></textarea>
                    <button type="submit" className="btn btn-primary text-2xl p-1 w-1/2 mt-2">Enviar</button>
                </div>
                <p className="p-body text-center max-w-lg">¿Prefieres consultar en persona?<br /><br />Visítanos en nuestro local, donde brindamos asesoramiento canino y en nuestra tienda ofrecemos artículos especializados, alimentación natural para tu perro y muchas sorpresas más.<br /><br />¡Te va a encantar nuestra GUARIDA URBANA canina!</p>
                <div className="flex flex-col gap-y-4 max-w-3xl mx-auto mt-4 items-start">
                    <div className="flex justify-center items-center gap-x-2">
                        <img src={location} alt=''/>
                        <a href="https://maps.app.goo.gl/Np3TXD76vE79sNgU8" target="_blank" rel="noopener noreferrer" className="p-body text-lg underline">Av. de la Plata 111, Quatre Carreres, València (46006)</a>
                    </div>
                    <div className="flex justify-center items-center gap-x-2">
                        <img src={phone} alt=''/>
                        <a href="tel:+34695724495" className="p-body text-lg underline">(+34) 695 724 495</a>
                    </div>
                    <div className="flex justify-center items-center gap-x-2">
                        <img src={clock} alt=''/>
                        <p className="p-body text-lg">Lun-Mié: 5:00 PM - 9:00 PM</p>
                    </div>
                </div>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.484809122753!2d-0.36228192348409166!3d39.45837497160996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048c39683c0bf%3A0x8e5195ffeab52b4!2sArcanes%20Entrenamiento%20y%20Psicolog%C3%ADa%20Canina!5e0!3m2!1sen!2ses!4v1795359301169!5m2!1sen!2ses" width="600" height="450" className="rounded-lg" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin">
                </iframe>
            </div>
        </section>
    )
}

export default Contact;