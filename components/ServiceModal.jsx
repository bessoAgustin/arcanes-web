import { useState } from 'react';
import services from '../data/services';

const ServiceModal = (title, body, callout, note, whatsappMessage) => {
    return (
        <dialog className='fixed inset-0 bg-bg-surface/90 backdrop-blur-sm p-4 rounded-2xl max-w-2xl w-full mx-auto'>
            <h2>{title}</h2>
            <p>{body}</p>
            <p>{callout}</p>
            <p>{note}</p>
            <p>{whatsappMessage}</p>
        </dialog>
    )
}

export default ServiceModal