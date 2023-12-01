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
		</div>
	)
}

export default Home;

