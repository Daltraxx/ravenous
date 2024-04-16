import React from 'react';

function Business(props) {
    return (
        <section>
            <img src={props.src} alt={props.alt}/>
            <h2>{props.businessName}</h2>
            <div>
                <p>{props.businessAddress}</p>
                <p>{props.businessCity}</p>
                <p>{props.businessState} {props.businessZipcode}</p>
            </div>
            <div>
                <h3>{props.businessCategory}</h3>
                <p>{props.businessRating} stars</p>
                <p>{props.businessReviewCount} reviews</p>
            </div>
        </section>
    )
}

export default Business;