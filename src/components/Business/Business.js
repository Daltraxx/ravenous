import React from 'react';

function Business(props) {
    return (
        <section>
            <img src={props.src} alt={props.alt}/>
            <h2>{props.businessName}</h2>
            <p>{props.businessAddress}</p>
            <p>{props.businessCity}</p>
            <p>{props.businessState} {props.businessZipcode}</p>
            <h3>{props.businessCategory}</h3>
            <p>{props.businessRating}</p>
            <p>{props.businessReviewCount}</p>
        </section>
    )
}

export default Business;