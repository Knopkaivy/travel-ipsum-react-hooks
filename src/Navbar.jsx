import React from 'react';
import NavItem from './NavItem';
import { items } from './utils/starter';
import './styles/Navbar.css';

const Navbar = () => {
  const itemList = items.map((item) => {
    return <NavItem name={item.name} key={item.name} />;
  });
  return <div className="Navbar">{itemList}</div>;
};

export default Navbar;
