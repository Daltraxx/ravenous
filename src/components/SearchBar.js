import React, { useState } from 'react';

function SearchBar() {
    const [business, setBusiness] = useState(null);
    const handleBusinessFieldChange = ({target}) => {
        setBusiness((prev) => target.value);
    }

    const [location, setLocation] = useState(null);
    const handleLocationFieldChange = ({target}) => {
        setLocation((prev) => target.value);
    }

    const [sort, setSort] = useState('sort_by=best_match');
    const bestMatchButton = () => {
        setSort((prev) => 'sort_by=best_match');
    }
    const highestRatedButton = () => {
        setSort((prev) => 'sort_by=rating');
    }
    const mostReviewedButton = () => {
        setSort((prev) => 'sort_by=review_count');
    }


    const parseFieldValue = (fieldValue) => {
        let urlString = fieldValue.replace(/\s+/g, '%20');
        return urlString;
    }

    //likely need api key
    const getBusinesses = async() => {
        const url = 'https://api.yelp.com/v3/businesses/search?';
        const termParam = `term=${parseFieldValue(business)}`;
        const locationParam = `location=${parseFieldValue(location)}`;
        const resultLimit = 'limit=20';
        const urlToFetch = url + locationParam + '&' + termParam + '&' + resultLimit;
        const options = {method: 'GET', headers: {accept: 'application/json', Authorization: 'PLACE API KEY HERE'}};

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
    

    return (
        <form>
            <button onClick={bestMatchButton}>Best Match</button>
            <button onClick={highestRatedButton}>Highest Rated</button>
            <button onClick={mostReviewedButton}>Most Reviewed</button>
            <input type='text' value={business} onChange={handleBusinessFieldChange} placeholder='Search Businesses' />
            <input type='text' value={location} onChange={handleLocationFieldChange} placeholder='Where?' />
            <button type='submit'>Search Businesses</button>
        </form>
    )
}

export default SearchBar;