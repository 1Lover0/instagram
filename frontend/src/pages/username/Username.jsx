import React from 'react';
import './Username.css'

function Username() {
    return (
        <div>
             <div className='container mt-4'>

            {/* profile view  */}
            <div className="row">
                <div className="col-lg-3 m-auto mb-4">
                    <div className="user-profile-img-box">
                        <div className="user-profile-content">
                            <div className='prfile-content-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="user-profile-image">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="d-flex profile-details">
                        <div className='profile-image' ><img src="" alt="" /></div>
                        <div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div>itz.lover_ff</div>
                                <div className='d-flex gap-2 align-items-center'>
                                    <div className='user-tool-deco'>Edit profile</div>
                                    <div className='user-tool-deco'>View archive</div>
                                    <div className='user-tool-deco'>Ad tools</div>
                                    <div><i className='fa-solid fa-gear'></i></div>
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <div>5 posts</div>
                                <div>46 followers</div>
                                <div>22 following</div>
                            </div>
                            <div>
                                <div>Deepu</div>
                                <div className='profile-name-username'>itz.lover_ff</div>
                            </div>
                            <div>3 accounts reahed in the last days. <strong>View insight</strong></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* new Highlight adding */}
            <div className="row">
                <div className="add-highlight">
                    <div className="add-high-box">
                        <p><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                        </svg></p>
                        <div>New</div>
                    </div>
                </div>
            </div>


            {/* reels and posts  */}
            <div className="row border-top">
                <div className='d-flex gap-5 justify-content-center'>
                    <div>POSTS</div>
                    <div>REELS</div>
                    <div>SAVED</div>
                    <div>TAGGED</div>
                </div>
                <div className='all-posts'>
                    
                </div>
            </div>
        </div>
        </div>
    );
}

export default Username;