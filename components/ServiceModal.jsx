import { useRef, useEffect } from 'react';

const ServiceModal = ({name, onClose}) => {

    const myRef = useRef(null);

    useEffect(() => {
        if(!myRef.current.open) {
            myRef.current.showModal()
        };
    }, [])
    
    return (
        <dialog className='bg-bg-surface backdrop:bg-black/50 p-4 rounded-2xl max-w-2xl w-full m-auto' ref={myRef}>
            <h2>{name}</h2>
                <button className='btn-secondary' onClick={onClose}>
                    Cerrar
                </button>
        </dialog>
  );
};

export default ServiceModal;