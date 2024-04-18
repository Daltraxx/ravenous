import React from 'react';
import styles from './Business.module.css';

function Business({ business }) {
    return (
        <section className={styles.BusinessContainer}>
            <img src={business.image} alt={business.alt}/>
            <h2>{business.name}</h2>
            <div className={styles.BusinessDetailsContainer}>
                <div className={styles.BusinessAddressContainer}>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipcode}</p>
                </div>
                <div className={styles.BusinessRatingContainer}>
                    <h3>{business.category}</h3>
                    <p>{business.rating} stars</p>
                    <p>{business.reviewCount} reviews</p>
                </div>
            </div>
        </section>
    )
}

export default Business;