import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ searchYelp }) {
    const [business, setBusiness] = useState("");
    const handleBusinessFieldChange = ({target}) => {
        setBusiness((prev) => target.value);
    }

    const [location, setLocation] = useState("");
    const handleLocationFieldChange = ({target}) => {
        setLocation((prev) => target.value);
    }

    const [sort, setSort] = useState('best_match');

    //use state for not automatically highlighting a sort option upon the page being viewed
    const [isClicked, setIsClicked] = useState(false);


    const searchBarSortOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };

    const getSortOptionClassName = (sortOptionValue) => {
        if (sortOptionValue === sort && isClicked) {
            return styles.active;
        }

        return '';
    }

    const handleSortOptionChange = (sortOptionValue) => {
        setIsClicked((prev) => true);
        setSort((prev) => sortOptionValue);
    }

    const renderSearchBarSortOptions = () => {
        return Object.keys(searchBarSortOptions).map((sortOption) => {
            let sortOptionValue = searchBarSortOptions[sortOption];
            return (
                <button
                className={getSortOptionClassName(sortOptionValue)}
                key={sortOptionValue}
                onClick={() => handleSortOptionChange(sortOptionValue)}
                >{sortOption}
                </button>
            )
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!business || !location) {
            alert('Please enter a value in each field!');
            return;
        }
        searchYelp(business, location, sort);
    }

    return (
        <div className={styles.SearchBar}>
            <section className={styles.SearchBarSortOptions}>
                {renderSearchBarSortOptions()}
            </section>
            <form onSubmit={handleSubmit}>
                <div className={styles.SearchBarFields}>
                    <input type='text' value={business} onChange={handleBusinessFieldChange} placeholder='Search Businesses' />
                    <input type='text' value={location} onChange={handleLocationFieldChange} placeholder='Where?' />
                </div>
                <div className={styles.SearchBarSubmit}>
                    <input type='submit' value='Search Businesses' />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;