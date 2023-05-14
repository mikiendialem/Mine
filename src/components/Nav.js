import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <>
      <div className='nav'>
        <div className='lo'><span>Red</span>Store</div>
        <div className='ul'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><span className="material-symbols-outlined">shopping_bag</span></li>
          </ul>
        </div>
      </div>
      <div className='hol'>
        <div className='tx1'>
          <h1>All Products</h1>
        </div>
        <div className='tx2'>
          <select name="choose" id="choose">
            <option value="x">Default Short</option>
            <option value="y">Short by sale</option>
            <option value="z">Short by popularity</option>
            <option value="w">Short by Price</option>
            <option value="a">Short by rating</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Nav;
