import { useEffect, useRef } from 'react';

const AboutUsModal = ({ isOpen, onClose }) => {
    
    const myRef = useRef(null);
    
    useEffect(() => {
        if (isOpen){
            if (myRef.current && !myRef.current.open) {
                myRef.current.showModal();
            }
            document.body.classList.add('overflow-y-hidden');
        } else {
            document.body.classList.remove('overflow-y-hidden');
        }
        return () => document.body.classList.remove('overflow-y-hidden');
    }, [isOpen]);

    const closeModal = () => {
        myRef.current.close();
    }

    return (
        <dialog className='modal' ref={myRef} onClose={onClose} closedby='any' aria-labelledby='modal-title' id='about-us-modal'>
            <div className='modal-container'>
                <h2 className='heading-2 text-accent-secondary' id='modal-title'>Nuestra Misión</h2>
                <p className='text-center'>
                    <strong>Ayudar a los perros a través de las personas y a las personas</strong>, guías o propietarios, <strong>a través de sus perros</strong>.
                    Siempre respetando el instinto más natural: el de SER un animal, un perro.
                </p>
                <h3 className='heading-3 text-accent-secondary' id='modal-title'>¿Cómo lo hacemos?</h3>
                <p className='text-center'>
                    Desde la <strong>comprensión</strong> y la <strong>interpretación</strong> del porqué de su conducta. Trabajamos a través de las necesidades más instintivas de los animales en su entorno durante el proceso de adaptación y la convivencia en la familia-manada. Con la <strong>pasión</strong> que nos genera nuestro trabajo, dedicamos toda la <strong>atención</strong> y el <strong>cariño</strong>, volcándonos en cada caso, consiguiendo llegar al sentimiento mas natural y sincero que todo ser vivo dispone…
                    Para nosotros es importante <strong>respetar siempre su instinto animal</strong> y las necesidades de ambos.
                </p>
                <div className='flex gap-4 justify-center mt-4'>
                    <button type='button' className='btn btn-secondary btn-sm' onClick={closeModal}>
                        Cerrar
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default AboutUsModal;