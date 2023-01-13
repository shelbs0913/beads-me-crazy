import React from 'react';
import "./Navbar.css"
import {
    Link,
} from 'react-router-dom';

export default function Navbar() {
  return <>
    <div>
        <nav className="navbar">
          <Link to='/'>Home</Link> &nbsp;
          <Link to='/shop'>Shop</Link> &nbsp;
          <Link to='/stones'>Stones</Link> &nbsp;
          <Link to='/newsletter'>Newsletter</Link> &nbsp;
          <Link to='/events'>Events</Link>   
        </nav>
      </div>
  </>
}
