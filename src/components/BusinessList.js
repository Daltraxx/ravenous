import React from 'react';
import Business from './Business';
import mockBusinessArray from '../mockData/mockBusinessData';

function BusinessList() {
    return (
        mockBusinessArray.map(mockBusiness => (
            <Business 
            src={mockBusiness.image} 
            alt={mockBusiness.alt} 
            businessName={mockBusiness.name}
            businessAddress={mockBusiness.address}
            businessCity={mockBusiness.city}
            businessState={mockBusiness.state}
            businessZipcode={mockBusiness.zipcode}
            businessCategory={mockBusiness.category}
            businessRating={mockBusiness.rating}
            businessReviewCount={mockBusiness.reviewCount}
            />
        ))
    )
}
export default BusinessList;