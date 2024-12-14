import React, { useState } from 'react'
import './Username.css';
import user from '../../assets/user.svg';
import reels from '../../assets/reels.png'

const Username = () => {
    const [menu, setmenu] = useState('posts');
    return (
        <div className='username insta-left'>
            <div className="username-profile">
                <div className="username-profile-img">
                    <img src={user} alt="" height='100px' />
                </div>
                <div className="username-profile-info">
                    <div className="user-tools">
                        <h4>itz.lover_ff</h4>
                        <button>Edit Profile</button>
                        <button>View archive</button>
                        <button>Ad tools</button>
                        <i className='fa-solid fa-cog'></i>
                    </div>
                    <div className="user-posts">
                        <span><b>5</b> posts</span>
                        <span><b>46</b> followers</span>
                        <span><b>22</b> follwing</span>
                    </div>
                    <div className="username-name">
                        <div className="name"><b>Deepu</b></div>
                        <div className="profile-name">@itz.lover_ff</div>
                    </div>
                    <div className="username-acc">
                        3 accounts reached in the last 30 days. <b>View insights</b>
                    </div>
                </div>
            </div>

            <div className="username-uploads">
                <ul className='username-menus'>
                    <li onClick={() => setmenu('posts')} className={menu === "posts" ? 'active' : ''}>posts</li>
                    <li onClick={() => setmenu('reels')} className={menu === "reels" ? 'active' : ''}>reels</li>
                    <li onClick={() => setmenu('saved')} className={menu === "saved" ? 'active' : ''}>saved</li>
                    <li onClick={() => setmenu('tagged')} className={menu === "tagged" ? 'active' : ''}>tagged</li>
                </ul>
                <div className='items'>
                    <div className="item">
                        <div className="item-img"><img src={reels} alt="" /></div>
                        <div className="item-count">
                                <span>
                                    <img src={reels} alt="" />
                                    <p>4</p>
                                </span>
                                <span>
                                    <img src={reels} alt="" />
                                    <p>2</p>
                                </span>
                        </div>
                        <div className="item-video"></div>
                    </div>
                    <div className="item">
                        <div className="item-img"><img src={reels} alt="" /></div>
                        <div className="item-count">
                                <span>
                                    <img src={reels} alt="" />
                                    <p>4</p>
                                </span>
                                <span>
                                    <img src={reels} alt="" />
                                    <p>2</p>
                                </span>
                        </div>
                        <div className="item-video"></div>
                    </div>
                    <div className="item">
                        <div className="item-img"><img src={reels} alt="" /></div>
                        <div className="item-count">
                                <span>
                                    <img src={reels} alt="" />
                                    <p>4</p>
                                </span>
                                <span>
                                    <img src={reels} alt="" />
                                    <p>2</p>
                                </span>
                        </div>
                        <div className="item-video"></div>
                    </div>
                    <div className="item">
                        <div className="item-img"><img src={reels} alt="" /></div>
                        <div className="item-count">
                                <span>
                                    <img src={reels} alt="" />
                                    <p>4</p>
                                </span>
                                <span>
                                    <img src={reels} alt="" />
                                    <p>2</p>
                                </span>
                        </div>
                        <div className="item-video"></div>
                    </div>
                    <div className="item">
                        <div className="item-img"><img src={reels} alt="" /></div>
                        <div className="item-count">
                                <span>
                                    <img src={reels} alt="" />
                                    <p>4</p>
                                </span>
                                <span>
                                    <img src={reels} alt="" />
                                    <p>2</p>
                                </span>
                        </div>
                        <div className="item-video"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Username;