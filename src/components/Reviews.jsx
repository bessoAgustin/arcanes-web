import paws from '../assets/paws.svg';
import GoogleReviewsWidget from 'google-reviews-widget';

const Reviews = () => {

    return (
        <section id="reviews" className="bg-bg-main">
            <div className="section-container">
                <div className= "h2-container">
                    <img src={paws} alt='' className='paws'/>
                    <h2 className='heading-2'>Reseñas</h2>
                </div>
                <p className='p-body'>Mira lo que dicen de nosotros:</p>
                <GoogleReviewsWidget.default instanceId="TE9bnFpP4WP8nw9LkD4w"/>
            </div>
        </section>
    )
}

export default Reviews;