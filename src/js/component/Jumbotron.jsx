import React from "react";
import "/workspace/landingPage/src/styles/Jumbotron.css"

const Jumbotron = (props) => {
    return (
        <div className="jumbotron pb-5" id="jumbotronColor">
            <div className="container">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.
                </p>
                <p>
                    <a class="btn btn-primary btn-lg" href="#" role="button">Call to Action</a>
                </p>
            </div>
        </div>
    );
};
export default Jumbotron;
