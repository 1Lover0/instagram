import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-left">
                <div class="container flex-lg-column">
                    <a class="navbar-brand mb-lg-2" href="#">
                    <div className='brand-image'>Instagram</div>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-bar" aria-controls="navbar-bar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex flex-column" id="navbar-bar">
                        <ul class="navbar-nav flex-lg-column">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Search</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Explore</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Reels</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Messages</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Notifications</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Create</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Profile</a>
                            </li>
                            <li class="nav-item mt-5">
                                <a class="nav-link" href="#">Threads</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">More</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;