import React from "react";
import Contacto from "../Contacto/Contacto.jsx"
import Footer from "../Footer/Footer.jsx"
import "./home.css";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
    		<div className="row">
				<div className="col-6 imagen-animal">
					<img src="https://cdn.pixabay.com/photo/2016/03/31/19/23/cat-1294968_1280.png" 
					 alt="animal" width="180" height="180" />
       			</div>
        		<div className="col-4">
             		<h2>CONTACTA CON </h2>
					<h2>PET FRIENDS</h2>
             		<p>info@petfriends.com</p>
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
       				<div className="col-4 py-2">
            			<Contacto/>
        			</div>
				</div>
   			</div>
			<div className="row">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
