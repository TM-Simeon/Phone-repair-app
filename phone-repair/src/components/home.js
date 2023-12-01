import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

const Home = () => {
	return (
		<div className="home">
			<div className="we-do">
				<h1>WE LINK USERS WITH RELIABLE <br/> TECHNICIANS</h1>
				<h4>we take pride in ensuring your phone runs smoothly</h4>
				<Link to="technician">
				<button>Find a technician</button>
				</Link>
			</div>
			<div className="phone-samples">

			</div>
			<div className="booking">
				<h1 id="booking">BOOK A TECHNICIAN IN THREE STEPS</h1>
				<div id="service_picture">
					<span className="service_picture"></span>
					<span className="service_picture"></span>
					<span className="service_picture"></span>

				</div>
				<button id="find_button">find a technician</button>
			</div>
		</div>
	)
}

export default Home;

