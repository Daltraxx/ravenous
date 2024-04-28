import React, { useState } from 'react';
import partialWindowStyles from './SearchBar.module.css';
import fullWindowStyles from './SearchBarFull.module.css';

function SearchBar({ searchYelp, handleSearchSubmit, displayResultsView }) {
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

    //Assign className value of active if button is the selected sort option
    const getSortOptionClassName = (sortOptionValue) => {
        if (sortOptionValue === sort && isClicked) {
            if (displayResultsView) {
                return partialWindowStyles.active;
            } else {
                return fullWindowStyles.active;
            }
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
        if (!displayResultsView) {
            handleSearchSubmit();
        }
    
        searchYelp(business, location, sort);
    }

    return (
        <div className={displayResultsView? partialWindowStyles.SearchBarBackgroundImage : fullWindowStyles.SearchBarBackgroundImage}>
            <div className={displayResultsView? partialWindowStyles.SearchBarContentContainer : fullWindowStyles.SearchBarContentContainer}>
                <section className={displayResultsView? partialWindowStyles.SearchBarSortOptions : fullWindowStyles.SearchBarSortOptions}>
                    {renderSearchBarSortOptions()}
                </section>
                <form onSubmit={handleSubmit}>
                    <div className={displayResultsView? partialWindowStyles.SearchBarFields : fullWindowStyles.SearchBarFields}>
                        <input type='text' value={business} onChange={handleBusinessFieldChange} placeholder='Search Businesses' />
                        <input type='text' value={location} onChange={handleLocationFieldChange} placeholder='Where?' />
                    </div>
                    <div className={displayResultsView? partialWindowStyles.SearchBarSubmit : fullWindowStyles.SearchBarSubmit}>
                        <input type='submit' value='Search Businesses' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;