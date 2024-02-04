import React from 'react';
import Style from "./Header.module.scss";
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className={Style.header}>
      <Nav />
      <div className={Style.links}>
        <Link to={"/"}>Home</Link>
        <Link to={"*"}>Store</Link>
        <Link to={"*"}>ACCESSORIES</Link>
        <Link to={"/bed-products/"}>BRAND</Link>
        <Link to={"*"}>PAGES</Link>
        <Link to={"*"}>NEWS</Link>
        <Link to={"*"}>CONTACT US</Link>
      </div>
    </header>
  );
}

export default Header;