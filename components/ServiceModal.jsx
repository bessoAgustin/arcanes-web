import { useRef, useEffect } from 'react';

const ServiceModal = ({name, onClose, body}) => {

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

    return (
        <dialog className='bg-bg-surface backdrop:bg-black/50 rounded-2xl max-w-2xl w-full m-auto' ref={myRef} onClose={onClose} closedby='any' aria-labelledby='modal-title'>
            <div className='p-4'>
                <h2 className='heading-2' id='modal-title'>{name}</h2>
                <p>{body}</p>
                <button className='btn-secondary' onClick={closeModal}>
                    Cerrar
                </button>
            </div>
        </dialog>
  );
};

export default ServiceModal;