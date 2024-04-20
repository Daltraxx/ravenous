import React from 'react';
import styles from './BusinessList.module.css';

import Business from '../Business/Business';

function BusinessList({ businesses }) {
    return (
        <section className={styles.BusinessListContainer}>
            {businesses.map((business) => {
                return <Business business={business} key={business.name} />;
            })}
        </section>
    )
}

export default BusinessList;