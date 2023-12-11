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
			<div className="testimonials">
				<h1 id="testimonials">TESTIMONIALS</h1>
				<div id="testimonials">
					<span className="testimonial_picture"></span>
					<span className="testimonial_picture2">
					<p id="testimonial_p">this is the content for this section to have the picture so
					that no matter how the conteent increases, we still are in control of the very shape
					of the said paragraph we are working with</p>
					</span>
				</div>
				<div>
				<button id="find_button">left</button>
				<button id="find_button">right</button>
				</div>
				<div id="testimonials">
					<span className="testimonial_picture2">
					<p id="testimonial_p">this is the content for this section to have the picture so
					that no matter how the conteent increases, we still are in control of the very shape
					of the said paragraph we are working with</p>
					</span>
					<span className="testimonial_picture"></span>

				</div>
			</div>
			<div id="wrapper">
			<div className="section">
				<div id="container">
				<p> if i put some content here</p>

				</div>
				<div id="container2">
				<p> if i put some content here</p>

				</div>

				
			</div>
			</div>
		</div>
	)
}

export default Home;

