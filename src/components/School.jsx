import paws from '../assets/paws.svg';

const School = () => {
    return (
        <section className='bg-bg-muted'>
            <div className='section-container'>
                <div className='h2-container'>
                    <img src={paws} alt=''/>
                    <h2 className='heading-2'>Formación</h2>
                </div>
                <p className='p-body max-w-2xl'>
                    Haz de tu vocación una profesión y fórmate con nosotros como entrenador/a en psicología canina.
                </p>
                <button type='button' className='btn-primary text-lg'>
                    <a href="">Me quiero formar</a>
                </button>
            </div>
    </section>
    )
}

export default School;