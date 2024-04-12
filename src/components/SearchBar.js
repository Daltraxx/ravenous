import React, { useState } from 'react';

function SearchBar() {
    const [businessParam, setBusinessParam] = useState(null);
    const handleBusinessParamChange = ({target}) => {
        setBusinessParam((prev) => target.value);
    }

    const [locationParam, setLocationParam] = useState(null);
    const handleLocationParamChange = ({target}) => {
        setLocationParam((prev) => target.value);
    }

    return (
        <form>
            <input type='text' value={businessParam} onChange={handleBusinessParamChange} />
            <input type='text' value={locationParam} onChange={handleLocationParamChange} />
            <button type='submit'>Search Businesses</button>
        </form>
    )
}

export default SearchBar;