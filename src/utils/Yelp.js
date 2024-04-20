const apiKey = 'Bearer sYFtxn62jXMaORAzMZrYKb2R3_KxuzZO_AULHua7tAVs6Ic4qpylArVf3dt0VSDp6-n5tLRL0xdplrZtpUXzXU84waLANLRRpuYw7Fp8XYXxodyHHTb-FUvbofQZZnYx';

const parseFieldValue = (fieldValue) => {
    let urlString = fieldValue.replace(/\s+/g, '%20');
    return urlString;
}

const Yelp = async() => {
    const url = 'https://api.yelp.com/v3/businesses/search?';

    //const termParam = `term=${parseFieldValue(business)}`;
    const termParam = `term=${parseFieldValue('McDonalds')}`;
    //const locationParam = `location=${parseFieldValue(location)}`;
    const locationParam = `location=${parseFieldValue('San Diego')}`;
    //const sortParam = 'sort_by=' + sort;
    const sortParam = 'sort_by=best_match';
    
    const resultLimit = 'limit=20';
    const urlToFetch = url + locationParam + '&' + termParam + '&' + sortParam + '&' + resultLimit;
    const options = {method: 'GET', headers: {accept: 'application/json', Authorization: apiKey}};

    console.log(urlToFetch);
    try {
        const response = await fetch(urlToFetch, options);
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

//export default Yelp;

Yelp();