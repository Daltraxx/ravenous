import React, {useState} from 'react';
import styles from './App.module.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../utils/Yelp';

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async(term, location, sort) => {
    const businesses = await Yelp(term, location, sort);
    setBusinesses((prev) => businesses);
    console.log(businesses);
  }

  return (
    <div className={styles.App}>
      <header>
        <h1>Ravenous</h1>
        <nav>
          <SearchBar searchYelp={searchYelp}/>
        </nav>
      </header>
      <main>
        <BusinessList businesses={businesses} />
      </main>
    </div>
  );
}

export default App;
