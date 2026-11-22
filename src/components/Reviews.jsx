import GoogleReviewsWidget from 'google-reviews-widget';
import paws from '../assets/paws.svg';

const Reviews = () => {
  return (
    <section id="reviews" className="bg-bg-main">
        <div className="section-container">
            <div className= "h2-container">
                <img src={paws} alt=''/>
                <h2 className='heading-2'>Reseñas</h2>
            </div>
            <GoogleReviewsWidget instanceId="TE9bnFpP4WP8nw9LkD4w" />
        </div>
    </section>
    )
}

export default Reviews;