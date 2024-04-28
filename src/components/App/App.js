import React, {useState} from 'react';
import styles from './App.module.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import Yelp from '../../utils/Yelp';

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async(term, location, sort) => {
    const businesses = await Yelp(term, location, sort);
    if (Array.isArray(businesses)) {
      if (businesses.length === 0) {
        alert('No businesses found with these search parameters :(');
      }

      setBusinesses((prev) => businesses);
      console.log(businesses);
    } else {
      alert(businesses);
    }
  }
  

  const [displayResultsView, setDisplayResultsView] = useState(false);
  
  const handleSearchSubmit = () => {
    setDisplayResultsView((prev) => true);
  }

    return (
      <div className={styles.App}>
        <header>
          <h1>Ravenous</h1>
          <nav>
            <SearchBar searchYelp={searchYelp} handleSearchSubmit={handleSearchSubmit} displayResultsView={displayResultsView}/>
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

