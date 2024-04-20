import React from 'react';
import styles from './Business.module.css';

function Business({ business }) {

    //check location addresses and don't include null values
    const location = business.location;
    let locationString = '';
    switch (location) {
        case location.address1 && location.address2:
            locationString = `${location.address1} ${location.address2}`;
            break;
        case location.address1 && location.address2 && location.address3:
            locationString = `${location.address1} ${location.address2} ${location.address3}`;
        default:
            locationString = location.address1;
    }

    return (
        <section className={styles.BusinessContainer}>
            <div className={styles.imageContainer} >
                <img src={business.image_url} alt={business.name}/>
            </div>
            <h2>{business.name}</h2>
            <div className={styles.BusinessDetailsContainer}>
                <div className={styles.BusinessAddressContainer}>
                    <p>{locationString}</p>
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