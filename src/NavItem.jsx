import React from 'react';
import './styles/NavItem.css';

const NavItem = ({ active, activateItem, name }) => {
  let handleActivateItem = (event) => {
    activateItem(event.target.textContent);
  };
  return (
    <div
      className={`NavItem ${active && 'NavItem-active'}`}
      onClick={handleActivateItem}
    >
      {name}
    </div>
  );
};

export default NavItem;
