import React from 'react';
import styles from './App.module.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

import mockBusinessArray from '../../mockData/mockBusinessData';

function App() {
  return (
    <div className={styles.App}>
      <header>
        <h1>Ravenous</h1>
        <nav>
          <SearchBar />
        </nav>
      </header>
      <main>
        <BusinessList mockBusinesses={mockBusinessArray}/>
      </main>
    </div>
  );
}

export default App;
