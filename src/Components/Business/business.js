import React from 'react';
//Each Business component should display an image, name, address, city, state, zipcode, category, rating, and review count.
//create a hardcoded business that can be used to generate a list of fake businesses and simulate the website’s functionality.
import image from './KrustyKrab.png';

const testBusiness = {
    businessImage : image,
    businessImageAlt : "A picture of the Krusty Krab",
    businessName : "Krusty Krab",
    businessAddress : "831 Bottom Feeder Lane",
    businessCity : "Bikini Bottom",
    businessState : "Pacific Ocean",
    businessZipCode: "00000",
    businessCategory: "Fast Food",
    businessRating: 4.9,
    businessReviewCount: 1000000
};

function Business() {
    return (
        <div>
            <div>
                <img src={testBusiness.businessImage} alt={testBusiness.businessImageAlt}/>
            </div>
            <h2>{testBusiness.businessName}</h2>
            <div>
                <p>{testBusiness.businessAddress}</p>
                <p>{testBusiness.businessCity}</p>
                <p>{`${testBusiness.businessState}, ${testBusiness.businessZipCode}`}</p>
            </div>
            <div>
                <p>{`Category: ${testBusiness.businessCategory}`}</p>
                <p>{`Rating: ${testBusiness.businessRating}`}</p>
                <p>{`Review Count: ${testBusiness.businessReviewCount}`}</p>
            </div>
        </div>
    )
};

export default Business;