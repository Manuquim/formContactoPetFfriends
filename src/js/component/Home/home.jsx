import React from "react";
import Contacto from "../Contacto.jsx"
import "./home.css";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
    		<div className="row">
        		<div className="col-6">
             		<h2>CONTACTA CON </h2>
					<h2>PET FRIENDS</h2>
             		<p>info@petfriends.com</p>
        		</div>
        		<div className="col-6">
					<img src="https://cdn.pixabay.com/photo/2016/03/31/19/23/cat-1294968_1280.png" alt="animal" width="150" height="150" />
       			</div>
    		</div>
    		<div className="row">
				<div className="cuadro">
        			<div className="col-4">
             			1 of 3
        			</div>
        			<div className="col-4">
						MAP	
       				</div>
       				<div className="col-4">
            			<Contacto/>
        			</div>
				</div>
   			</div>
   			<div className="row">
        		<div className="col-3 footer p-4">
					© 2023 Copyright: PetFriends.com
				</div>
   			</div>
		</div>
	);
};

export default Home;
