import React from 'react';

/*The search bar should contain two inputs, one for the user’s search terms and the selected location. Don’t forget a search button as well. 
The search bar should also offer sorting options such as Best Match, Highest Rated, and Most Reviewed. 
This functionality will be fully incorporated in a later part of the project, but for now, concentrate on building the buttons and the structure needed to communicate with the Yelp API.*/

const sortOptions = {
    "Best Match" : "best_match",
    "Highest Rated" : "rating",
    "Most Reviewed" : "review_count"
};

function SearchBar() {
    function renderSortOptions() {
        return Object.keys(sortOptions).map((sortOption) => {
            let sortOptionValue = sortOptions[sortOption];
            return <li key={sortOptionValue}>{sortOption}</li>;
        });
    };

    return (
        <div /*search bar container*/>
            <div /*search bar sort options*/>
                <ul>{renderSortOptions()}</ul>
            </div>
            <div /*form with two inputs and submit*/>
                <form method="get" action="https://api.yelp.com/v3/businesses/search">
                    <label for="term">Search Terms</label>
                    <input type="text" id="term" name="term" />
                    <label for="location">Location</label>
                    <input type="text" id="location" name="location" />
                    <input type="submit" value="Search" />
                </form>
            </div>
        </div>
    )
};

export default SearchBar;