import React from 'react';
import styles from './Business.module.css';

function Business({ business }) {
    return (
        <section className={styles.BusinessContainer}>
            <img src={business.image_url} alt={business.name}/>
            <h2>{business.name}</h2>
            <div className={styles.BusinessDetailsContainer}>
                <div className={styles.BusinessAddressContainer}>
                    <p>{`${business.location.address1} ${business.location.address2} ${business.location.address3}`}</p>
                    <p>{business.location.city}</p>
                    <p>{business.location.state} {business.location.zip_code}</p>
                </div>
                <div className={styles.BusinessRatingContainer}>
                    <h3>{business.categories[0].title}</h3>
                    <p>{business.rating} stars</p>
                    <p>{business.review_count} reviews</p>
                </div>
            </div>
        </section>
    )
}

export default Business;