# Ravenous

This webapp takes user input and queries the Yelp API to display a list of relevant businesses.

## Description

From the landing page is able to enter search terms into business name and location field. They may also select a sort parameter - "Best Math", "Highest Rated", or "Most Reviewed". "Best Match" is the default sort if none is selected.

Upon submitting the search, a display page is rendered which shows the top 50 results along with relevant information, though this maximum can be altered in the Yelp API query. Clicking one of the businesses takes the user to a separate tab with the business's Google Maps location. Selecting one of the sort options will automatically re-query Yelp with the previous search terms and display the returned businesses. 

## Getting Started

### Dependencies

- Node Project Manager version 5.2 or higher
- A Yelp API key. The key should be pasted into the empty string after `'Bearer'` in the `apiKey` variable at the top of `/src/utils/Yelp.js`.
- Use of a service such as https://cors-anywhere.herokuapp.com/corsdemo to get past CORS restrictions when querying Yelp API through the browser.

### Executing Program

- The app can be run in development mode locally by using `npm start` from the project directory.

## Author

Dalton Pettus - [See GitHub Profile](https://github.com/Daltraxx)

## License

[MIT](https://choosealicense.com/licenses/mit/)