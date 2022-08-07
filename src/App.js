import React, { useState } from 'react';
import Carousel from './Carousel';
import Ipsum from './Ipsum';
import Navbar from './Navbar';
import { items } from './utils/starter';
import { generateIpsum } from './utils/helpers';
import './styles/App.css';

function App() {
  const [activeItem, setActiveItem] = useState(items[0]);
  const [ipsum, seIpsum] = useState(generateIpsum(activeItem.ipsumPool));

  let findItem = (newName) => {
    let newItem;
    for (let item of items) {
      if (item.name === newName) {
        newItem = item;
        break;
      }
    }
    return newItem;
  };

  let activateItem = (newName) => {
    setActiveItem(findItem(newName));
  };

  return (
    <div className="App">
      <Carousel activeInd={activeItem.ind} />
      <div className="Main">
        <Navbar activeItem={activeItem} activateItem={activateItem} />
        <div className="header__container">
          <h1 className="header">Travel Impsum</h1>
          <p className="subheader">
            Placeholder text for those who love travel
          </p>
        </div>
        <div>
          <div className="button__container">
            <button className="button button-copy">Copy All</button>
            <button className="button button-refresh">Refersh</button>
          </div>
          <Ipsum ipsum={ipsum} />
        </div>
      </div>
    </div>
  );
}

export default App;
