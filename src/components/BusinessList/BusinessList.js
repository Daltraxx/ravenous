import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

function BusinessList({ mockBusinesses }) {
    const mockBusinessResults = mockBusinesses.map(mockBusiness => (
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
            key={mockBusiness.name}
        />
        ));
    return (
        <section className={styles.BusinessListContainer}>
            {mockBusinessResults}
        </section>
    )
}
export default BusinessList;