import React from 'react';
import './Login.css'
import {instaimg} from '../../assets/assests'
import Footer1 from '../../components/footer/Footer1';

function Login(props) {
    return (
       <>
        <div className='insta-login'> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="insta-sc">
                            <div className="back-img"><img src={instaimg.homePhone} alt="" /></div>
                            <div className="front-img"><img src={instaimg.screnshot1} alt="" /></div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="insta-login-card text-center">
                            <div className="login-form">
                                <div className="form-wapper">
                                    <form action="">
                                        <div className="logo-img"></div>
                                        <input type="text" placeholder='Phone number, username, or email' />
                                        <input type="password" placeholder='Password' />
                                        <button className='btn btn-primary'>Log in</button>
                                    </form>
                                    <div className="partision">
                                        <hr />
                                        <span>OR</span>
                                    </div>
                                    <div className="login-other">
                                        <h6><i className="fa-brands fa--square-facebook"></i> Log in with Facebook</h6>
                                        <a href="#"><span>Forget password?</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="new-acc">
                                <div>Don't have an account? <a href="">Sign up</a></div>
                            </div>
                            <div className="get-app mt-4">
                                <p>Get the app.</p>
                                <div className="find-app d-flex justify-content-center">
                                    <div className="down-img"><img src={instaimg.androidDow} alt="" /></div>
                                    <div className="down-img"><img src={instaimg.windowDow} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <Footer1 />
       </>
    );
}

export default Login;