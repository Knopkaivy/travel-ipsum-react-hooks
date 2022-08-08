import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Carousel from './Carousel';
import Ipsum from './Ipsum';
import Navbar from './Navbar';
import { items } from './utils/starter';
import { generateIpsum, findItem } from './utils/helpers';
import './styles/App.css';

function App() {
  const [activeItem, setActiveItem] = useState(items[0]);
  const [ipsum, setIpsum] = useState(generateIpsum(activeItem.ipsumPool));
  const [copied, setCopied] = useState(false);

  let activateItem = (newName) => {
    setActiveItem(findItem(newName, items));
  };

  let copyAll = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  let refreshIpsum = () => {
    setIpsum(generateIpsum(activeItem.ipsumPool));
  };

  useEffect(() => setIpsum(generateIpsum(activeItem.ipsumPool)), [activeItem]);

  return (
    <div className="App">
      <Carousel activeInd={activeItem.ind} />
      <div className="Main">
        <Navbar activeItem={activeItem} activateItem={activateItem} />
        <div className="header__container">
          <h1 className="header">Travel Ipsum</h1>
          <p className="subheader">
            Placeholder text for those who love travel
          </p>
        </div>
        <div>
          <div className="button__container">
            <CopyToClipboard text={ipsum} onCopy={copyAll}>
              <button className="button button-copy">
                {copied ? 'Copied' : 'Copy All'}
              </button>
            </CopyToClipboard>
            <button className="button button-refresh" onClick={refreshIpsum}>
              Refersh
            </button>
          </div>
          <Ipsum ipsum={ipsum} />
        </div>
      </div>
    </div>
  );
}

export default App;
