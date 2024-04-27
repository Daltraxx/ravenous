const apiKey = 'Bearer sYFtxn62jXMaORAzMZrYKb2R3_KxuzZO_AULHua7tAVs6Ic4qpylArVf3dt0VSDp6-n5tLRL0xdplrZtpUXzXU84waLANLRRpuYw7Fp8XYXxodyHHTb-FUvbofQZZnYx';

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
    const options = {method: 'GET', headers: {accept: 'application/json', Authorization: apiKey}};

    try {
        const response = await fetch(urlToFetch, options);
        if (response.ok) {
            const jsonResponse = await response.json();
            const displayedBusinesses = jsonResponse.businesses;
            console.log(displayedBusinesses);
            return displayedBusinesses;
        }
    } catch(error) {
        return error;
    }
}

export default Yelp;