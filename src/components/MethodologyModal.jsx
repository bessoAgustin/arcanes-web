import { useRef, useEffect } from 'react';

const MethodologyModal = ({ method, onClose }) => {

    const { title, description, image } = method;

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
        <dialog className='modal max-w-md' ref={myRef} onClose={onClose} closedby='any' aria-labelledby='modal-title'>
            <div className='modal-container gap-6'>
                <img src={image} alt='' className='' />
                <h2 className='heading-2' id='modal-title'>{title}</h2>
                <p className='max-w-md mx-auto'>{description}</p>
                <a className='btn btn-secondary btn-sm' onClick={closeModal}>
                        Cerrar
                </a>
            </div>
        </dialog>
  );
};

export default MethodologyModal;