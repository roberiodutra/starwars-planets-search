import React from 'react';
import Provider from './contexts/Provider';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <Provider>
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
