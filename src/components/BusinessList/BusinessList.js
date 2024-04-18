import React from 'react';
import styles from './BusinessList.module.css';

import Business from '../Business/Business';

function BusinessList({ mockBusinesses }) {
    return (
        <section className={styles.BusinessListContainer}>
            {mockBusinesses.map((mockBusiness) => {
                return <Business business={mockBusiness} key={mockBusiness.name} />;
            })}
        </section>
    )
}
export default BusinessList;