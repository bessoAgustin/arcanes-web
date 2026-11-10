import { useRef, useEffect } from 'react';
import { phone } from '../data/contact';

const ServiceModal = ({ service, onClose }) => {

    const { name, body, list, callout, note } = service;

    const myRef = useRef(null);

    useEffect(() => {
        if(!myRef.current.open) {
            myRef.current.showModal();
        }
        document.body.classList.add('overflow-y-hidden');
        return () => document.body.classList.remove('overflow-y-hidden');
    }, [])

    const closeModal = () => {
        myRef.current.close();
    }

    console.log('Type of body:', typeof body, 'Value:', body);
    return (
        <dialog className='bg-bg-surface backdrop:bg-black/50 rounded-2xl max-w-2xl w-full m-auto' ref={myRef} onClose={onClose} closedby='any' aria-labelledby='modal-title'>
            <div className='p-4 gap-2 flex flex-col'>
                <h2 className='heading-2' id='modal-title'>{name}</h2>
                {body?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
                {list?.length > 0 && (
                    <ul className='list-disc list-inside marker:text-accent-secondary'>
                        {list.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                )}
                {callout && <p className='font-bold'>{callout}</p>}
                {note && <p className='text-text-muted font-medium'>{note}</p>}
                <div className='flex gap-4 justify-center mt-4'>
                    <a href={`https://wa.me/${phone}?text=${encodeURIComponent(service.whatsappMessage)}`} target='_blank' rel='noopener noreferrer' className='btn btn-primary btn-sm'>
                        Me interesa
                    </a>
                    <button className='btn btn-secondary btn-sm' onClick={closeModal}>
                        Cerrar
                    </button>
                </div>
            </div>
        </dialog>
  );
};

export default ServiceModal;