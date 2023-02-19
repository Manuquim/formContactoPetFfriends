import React from "react";
import Contacto from "../Contacto/Contacto.jsx"
import Footer from "../Footer/Footer.jsx"
import "./home.css";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
    		<div className="row">
				<div className="cuadro">
        			
					<div className="col-3 p-5">
						<img src="https://cdn.pixabay.com/photo/2016/03/31/19/23/cat-1294968_1280.png" 
					 	alt="animal" width="230" height="200" />
        			</div>
					<div className="col-4 p-5">
						<h2>CONTACTA CON </h2>
						<h2>PET FRIENDS</h2>
             			<p>info@petfriends.com</p>
       				</div>
       				<div className="col-5 py-2">
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
