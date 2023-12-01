import React from 'react'
import './footer.css';
import Image from './logo.PNG';
import Twitter from '../icons/twitter.png';
import Facebook from '../icons/facebook.png';
import Instagram from '../icons/instagram.png';
import {Link} from 'react-router-dom';



const Footer = () => {
	return (
		// <img src="../logo.png">
		<footer className="footer">
			<img src={Image} alt="logo"/>
			<h4>Effortless Repairs at Your Fingertips</h4>
			<img src={Twitter} alt="twitter icon"/>
			<img src={Facebook} alt="facebook icon"/>
			<img src={Instagram} alt="instagram icon"/>
			<div>
				<Link to="technician">Find a technician</Link>
				
			</div>
			<div>
				<a href="here">Chat with us</a>
			</div>

		</footer>

	)
}


export default Footer;