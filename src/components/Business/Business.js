import React from 'react';
import styles from './Business.module.css';

function Business(props) {
    return (
        <section className={styles.BusinessContainer}>
            <img src={props.src} alt={props.alt}/>
            <h2>{props.businessName}</h2>
            <div className={styles.BusinessDetailsContainer}>
                <div className={styles.BusinessAddressContainer}>
                    <p>{props.businessAddress}</p>
                    <p>{props.businessCity}</p>
                    <p>{props.businessState} {props.businessZipcode}</p>
                </div>
                <div className={styles.BusinessRatingContainer}>
                    <h3>{props.businessCategory}</h3>
                    <p>{props.businessRating} stars</p>
                    <p>{props.businessReviewCount} reviews</p>
                </div>
            </div>
        </section>
    )
}

export default Business;