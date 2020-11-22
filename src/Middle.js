import React from "react";
import "./Middle.css";


function Middle(){
    return (
        <div className="middle-container">
            <div className="card">
                <div className="text-section-card">
                    <h1>Grow Together</h1>
                    <p>Generate meaningful discussions with your audience and build a strong, loyal community. 
                    Think of the insightful conversations you miss out on with a feedback form. </p>
                </div>
                <div className="image-section-card">
                    <img className="card-image img1"></img>
                </div>
            </div>

            <div className="card card2">
                <div className="image-section-card">
                    <img className="card-image img2"></img>
                </div>
                <div className="text-section-card">
                    <h1>Flowing Conversations</h1>
                    <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads 
                    have just-in-time loading for a more natural flow. </p>
                </div>
            </div>

            <div className="card">
                <div className="text-section-card">
                    <h1>Your Users</h1>
                    <p>It takes no time at all to integrate Huddle with your app's authentication solution. 
                    This means, once signed in to your app, your users can start chatting immediately.</p>
                </div>
                <div className="image-section-card">
                    <img className="card-image img3"></img>
                </div>
            </div>
        </div>
    );
}


export default Middle;