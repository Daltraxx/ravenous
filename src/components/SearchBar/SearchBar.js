import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
    const [business, setBusiness] = useState("");
    const handleBusinessFieldChange = ({target}) => {
        setBusiness((prev) => target.value);
    }

    const [location, setLocation] = useState("");
    const handleLocationFieldChange = ({target}) => {
        setLocation((prev) => target.value);
    }

    const [sort, setSort] = useState('best_match');
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


    const parseFieldValue = (fieldValue) => {
        let urlString = fieldValue.replace(/\s+/g, '%20');
        return urlString;
    }

    //request will fail due to CORS, figure out later
    const getBusinesses = async() => {
        const apiKey = 'Bearer sYFtxn62jXMaORAzMZrYKb2R3_KxuzZO_AULHua7tAVs6Ic4qpylArVf3dt0VSDp6-n5tLRL0xdplrZtpUXzXU84waLANLRRpuYw7Fp8XYXxodyHHTb-FUvbofQZZnYx';
        const url = 'https://api.yelp.com/v3/businesses/search?';
        const termParam = `term=${parseFieldValue(business)}`;
        const locationParam = `location=${parseFieldValue(location)}`;
        const sortParam = 'sort_by=' + sort;
        const resultLimit = 'limit=20';
        const urlToFetch = url + locationParam + '&' + termParam + '&' + sortParam + '&' + resultLimit;
        const options = {method: 'GET', headers: {accept: 'application/json', Authorization: apiKey}};

        try {
            const response = await fetch(urlToFetch, options);
            if (response.ok) {
                const jsonResponse = await response.json();
                //console.log(jsonResponse);
                const displayedBusinesses = jsonResponse.results;
                return displayedBusinesses;
            }
        } catch(error) {
            console.log(error);
        }
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if (!business || !location) {
            alert('Please enter a value in each field!');
            return;
        }
        const businessResults = await getBusinesses();
        console.log(businessResults);
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