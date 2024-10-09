import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar m-0 navbar-expand-lg bg-dark fixed-left">
                    <div className='nav-box '>
                        <ul className="navbar-nav flex-md-column ">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Explore</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reels</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Messages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Notifications</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Create</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Profile</a>
                            </li>
                        </ul>
                        <ul className='navbar-nav flex-md-column nav-subox2'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Threads</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">More</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                        </form>
                    </div>
            </nav>
        </div>
    );
}

export default Navbar;