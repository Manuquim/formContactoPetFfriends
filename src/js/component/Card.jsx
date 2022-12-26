import React from "react";
import "/workspace/landingPage/src/styles/Card.css"

const Card = (props) =>{
    return (    
            <div className="card mb-3">
                <img src="https://via.placeholder.com/500x300" className="card-img-top" alt=" " />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, vero. 
                    Temporibus suscipit, nostrum natus tempore nam minus eos reprehenderit fugit et quaerat 
                    pariatur consequatur tenetur ducimus quis aliquid! Quasi, perferendis..</p>
                </div>
                <div className="card-footer">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Find Out More!</a>
                </div>
            </div>        
    );
}

export default Card;