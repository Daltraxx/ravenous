import React from 'react';
//Each Business component should display an image, name, address, city, state, zipcode, category, rating, and review count.
//create a hardcoded business that can be used to generate a list of fake businesses and simulate the website’s functionality.

const testBusiness = {
    businessImage : "./KrustyKrab.png",
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
            <div /*holds business image*/>
                <img src={testBusiness.businessImage} alt={testBusiness.businessImageAlt}/>
            </div>
            <h2 /*holds business name*/>{testBusiness.businessName}</h2>
            <div /*holds business address*/>
                <p>{testBusiness.businessAddress}</p>
                <p>{testBusiness.businessCity}</p>
                <p>{`${testBusiness.businessState}, ${testBusiness.businessZipCode}`}</p>
            </div>
            <div /*other information*/>
                <p>{testBusiness.businessCategory}</p>
                <p>{testBusiness.businessRating}</p>
                <p>{testBusiness.businessReviewCount}</p>
            </div>
        </div>
    )
};

export default Business;