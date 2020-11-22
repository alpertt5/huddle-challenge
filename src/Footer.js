import React from "react";
import "./Footer.css";

function Footer(){
    return (
        <div className="footer">
            <div className="get-started">
                <h1>Ready To Build Your Community?</h1>
                <button>Get Started For Free</button>
            </div>

            <img className="footer-logo"></img>
            <div className="info-section">

                <div className="contacts">
                    <div className="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua</p>
                    </div>

                    <div className="contact-item">
                        <i class="fas fa-phone-volume"></i>
                        <p>+1-543-123-4567</p>
                    </div>

                    <div className="contact-item">
                        <i class="fas fa-envelope"></i>
                        <p>example@huddle.com</p>
                    </div>

                </div>

                <div className="links">
                    <div className="link-section">
                        <a>About Us</a> <br></br>
                        <a>What We Do</a> <br></br>
                        <a>FAQ</a>
                    </div>

                    <div className="link-section">
                        <a>Career</a> <br></br>
                        <a>Blog</a> <br></br>
                        <a>Contact Us</a>
                    </div>
                </div>

                <div className="social-media">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>

                    <div className="copyright">
                    &copy; Copyright 2018 Huddle. All rights reserved.
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default Footer;