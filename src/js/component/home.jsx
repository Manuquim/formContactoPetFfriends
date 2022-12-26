import React from "react";
import Navbar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx"
import Card from "./Card.jsx"
import Footer from "./Footer.jsx"
import "/workspace/landingPage/src/styles/home.css"

//create your first component
const Home = () => {
	return (
		<div>
			<nav><Navbar /></nav>
			<div className="container">
				<Jumbotron />
				<div className="grupoCuatro my-4">
					<div class="row">
  						<div class="col-lg-3"> <Card /> </div>
						<div class="col-lg-3"> <Card /> </div>
						<div class="col-lg-3"> <Card /> </div>
						<div class="col-lg-3"> <Card /> </div>
					</div>
				</div>
			</div>
			<div><Footer /></div>			
		</div>
	);
};

export default Home;
