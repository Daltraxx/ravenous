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
    setBusinesses((prev) => businesses);
    console.log(businesses);
  }
  

  const [displayResultsView, setDisplayResultsView] = useState(false);
  
  const handleSearchSubmit = () => {
    setDisplayResultsView((prev) => true);
  }

  if (!displayResultsView) {
    return (
      <div className={styles.App}>
        <header>
          <h1>Ravenous</h1>
        </header>
        <main>
          <nav>
            <SearchBar searchYelp={searchYelp} handleSearchSubmit={handleSearchSubmit} resultsView={false}/>
          </nav>
        </main>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className={styles.App}>
        <header>
          <h1>More Ravenous</h1>
          <nav>
            <SearchBar searchYelp={searchYelp} resultsView={true}/>
          </nav>
        </header>
        <main>
          <BusinessList businesses={businesses} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

