import React from "react";
import "./Opening.css";

function Opening(){
    return (
        <div className="opening">
            <div className="header">
                <img className="logo"></img>
                <button className="try">Try It Free</button>
            </div>

            <div className="content">
                <div className="text-section">
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                    Create connections with your users as you engage in genuine discussion. </p>
                    <button>Get Started For Free</button>
                </div>

                <div className="image-section">
                    <img className="browser"></img>
                </div>
            </div>

            <div></div>
        </div>
    );
}

export default Opening;