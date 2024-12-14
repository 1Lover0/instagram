import React from 'react';
import './Navbar.css';
import insta from '../../assets/insta.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href="#" className='navbar-logo'>
        <img src={insta} alt="" />
      </a>
      <div className="navbar-item">
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Explore</li>
          <li>Reels</li>
          <li>Messages</li>
          <li>Notifications</li>
          <li>Create</li>
          <li>Profile</li>
        </ul>
        <ul>
          <li>Threads</li>
          <li>More</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar