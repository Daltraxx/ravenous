import React, {useState} from 'react';
import styles from './App.module.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import Yelp from '../../utils/Yelp';

function App() {
  //useState for storing array of businesses retrieved from Yelp API
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async(term, location, sort) => {
    const businesses = await Yelp(term, location, sort);
    if (Array.isArray(businesses)) {
      if (businesses.length === 0) {
        alert('No businesses found with these search parameters :(');
      }

      setBusinesses((prev) => businesses);

    } else {
      alert(businesses);
    }
  }
  
  //useState for determining whether results view is displayed or not
  const [displayResultsView, setDisplayResultsView] = useState(false);
  //toggles results view if a valid search is submitted
  const handleSearchSubmit = () => {
    setDisplayResultsView((prev) => true);
  }

    return (
      <div className={styles.App}>
        <header>
          <h1>Ravenous</h1>
          <nav>
            <SearchBar searchYelp={searchYelp} handleSearchSubmit={handleSearchSubmit} displayResultsView={displayResultsView} businesses={businesses.length > 0 ? true : false}/>
          </nav>
        </header>
        <main className={displayResultsView ? '' : styles.Hide}>
          <BusinessList businesses={businesses} />
        </main>
        <Footer />
      </div>
    );
}

export default App;

