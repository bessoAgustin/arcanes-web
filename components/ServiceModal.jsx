import { useRef, useEffect } from 'react';

const ServiceModal = ({title, onClose}) => {
    return (
        <dialog className='fixed inset-0 bg-bg-surface/90 backdrop-blur-sm p-4 rounded-2xl max-w-2xl w-full mx-auto'>
            <h2>{title}</h2>
                <button className='btn-secondary' onClick={onClose}>
                    Cerrar
                </button>
    </dialog>
  );
};

export default ServiceModal;