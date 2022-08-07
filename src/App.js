import React, { useState } from 'react';
import Carousel from './Carousel';
import Ipsum from './Ipsum';
import Navbar from './Navbar';
import { items } from './utils/starter';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Carousel />
      <div className="Main">
        <Navbar />
        <h1 className="header">Travel Impsum</h1>
        <p className="subheader">Placeholder text for those who love travel</p>
        <div className="button__container">
          <button className="button button-copy">Copy All</button>
          <button className="button button-refresh">Refersh</button>
          <Ipsum />
        </div>
      </div>
    </div>
  );
}

export default App;
