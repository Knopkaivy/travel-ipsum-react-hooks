import React from 'react';
import NavItem from './NavItem';
import { items } from './utils/starter';
import './styles/Navbar.css';

const Navbar = ({ activeItem, activateItem }) => {
  const itemList = items.map((item) => {
    return (
      <NavItem
        active={item.name === activeItem.name}
        activateItem={activateItem}
        name={item.name}
        key={item.name}
      />
    );
  });
  return <div className="Navbar">{itemList}</div>;
};

export default Navbar;
