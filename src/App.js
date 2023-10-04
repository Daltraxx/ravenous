import React from 'react';

import BusinessList from './Components/BusinessList/BusinessList';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  return (
    <div>
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;