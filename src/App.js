import React from 'react';
import Provider from './contexts/Provider';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Provider>
      <Header />
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
