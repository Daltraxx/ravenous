import React from 'react';
//Each Business component should display an image, name, address, city, state, zipcode, category, rating, and review count.
//create a hardcoded business that can be used to generate a list of fake businesses and simulate the website’s functionality.

const testBusiness = {
    businessImage : "KrustyKrab.png",
    businessName : "Krusty Krab",
    businessAddress : "831 Bottom Feeder Lane",
    businessCity : "Bikini Bottom",
    businessState : "Pacific Ocean",
    businessZipCode: "00000",
    businessCategory: "Fast Food",
    businessRating: 4.9,
    businessReviewCount: 1000000
};

function BusinessComponent() {
    return (
        <div>
            <div /*holds business image*/>
                <img />
            </div>
            <h2 /*holds business name*/></h2>
            <div /*holds business address*/>
                <p>{/*address*/}</p>
                <p>{/*city*/}</p>
                <p>{/*state and zipcode*/}</p>
            </div>
            <div /*other information*/>
                <p>{/*category*/}</p>
                <p>{/*rating*/}</p>
                <p>{/*review count*/}</p>
            </div>
        </div>
    )
};

export default BusinessComponent;