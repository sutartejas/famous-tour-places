import './App.css';
import Places from './components/Places';
import Header from './components/Header';
import data from './components/data';
import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <Places data={data} />
    </div>

  );
}

export default App;
