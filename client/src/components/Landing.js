import React from 'react';

const Landing = () => {
    return(
        <div className="landing-container">
            <div className="landing-title">
                <h1>Welcome to Emaily</h1>
                <h2>Reach your customers and receive feedback on your products and services.</h2>
            </div>
            <div className="examples"> 
                <div className="example-card">
                    <p>
                        <i className="fas fa-envelope-open-text"></i> 
                        <b>Membership Customers</b></p>
                    <p>Thank you for your support. We'd love your feedback.</p>
                </div>
                <div className="example-card">

                    <p>
                        <i className="fas fa-envelope-open-text"></i> 
                        <b>Membership Customers</b></p>
                    <p>Thank you for your support. We'd love your feedback.</p>
                </div>
                <div className="example-card">
                    <p>
                        <i className="fas fa-envelope-open-text"></i> 
                        <b>Membership Customers</b></p>
                    <p>Thank you for your support. We'd love your feedback.</p>
                </div>
            </div>
    </div>
    );
};

export default Landing;