const apiKey = 'Bearer ' + '';

const Yelp = async(term, location, sort) => {
    //url with api use prepended to get past CORS restrictions
    const url = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?';
    const parseFieldValue = (fieldValue) => {
        let urlString = fieldValue.replace(/\s+/g, '%20');
        return urlString;
    }

    const termParam = `term=${parseFieldValue(term)}`;
    
    const locationParam = `location=${parseFieldValue(location)}`;
    
    const sortParam = 'sort_by=' + sort;
    
    
    const resultLimit = 'limit=20';
    const urlToFetch = url + locationParam + '&' + termParam + '&' + sortParam + '&' + resultLimit;
    console.log(urlToFetch);
    const options = {method: 'GET', headers: {accept: 'application/json', Authorization: apiKey}};

    try {
        const response = await fetch(urlToFetch, options);
        if (response.status === 400) {
            return 'These search terms result in a 400 error!';
        }
        if (response.ok) {
            const jsonResponse = await response.json();
            const displayedBusinesses = jsonResponse.businesses;
            console.log(displayedBusinesses);
            return displayedBusinesses;
        }
    } catch(error) {
        console.log(error);
    }
}

export default Yelp;