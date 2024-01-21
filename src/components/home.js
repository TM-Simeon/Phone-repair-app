import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import './phonehome.css'
import service_search from '../images/service_search.png';
import appointment_schedule from '../images/appointment_schedule.png'
import make_payment from '../images/make_payment.png'
// import bad_phone_screen from '../images/bad_phone_screen.png'
import first_screen from '../images/first_screen.png'
import second_screen from '../images/second_screen.png'
import third_screen from '../images/third_screen.png'
// import bad_tablet_screen from '../images/bad_tablet_screen.png'
import male_testimony from '../images/male_testimony.png'
import female_testimony from '../images/female_testimony.png'
import fixing_process from '../images/picture_18.png'
import mail_certified from '../images/email_certified.png'
import timer from '../images/timer.png'
import vector from '../images/vector.png'
import bikeman from '../images/bikeman.png'


const Home = () => {
	return (
		<div className="home">
			<div className="we-do">
				<h1>WE LINK USERS WITH RELIABLE <br/> TECHNICIANS.</h1>
				<h4>we take pride in ensuring your phone runs smoothly</h4>
				<div id="findTechnicianButton">
					<Link to="technician">
					<button>Find a technician</button>
					</Link>
				</div>
			</div>
			<div id="phone-samples">
					<span className="phone_sample">
    					<img src={first_screen} alt="first screen"/>
					</span>
					<span className="phone_sample1">
						<img src={second_screen} alt="second screen"/>
					</span>
					<span className="phone_sample2">
						<img src={third_screen} alt="third screen"/>
					</span>
			</div>
			<div className="booking">
				<h1 id="booking"><span className="word_color">BOOK A TECHNICIAN IN</span><span className="word_color1"> THREE</span><span className="word_color"> STEPS</span></h1>
				<div id="service_picture">
					<span className="service_picture">
    					<img src={service_search} alt="service search"/>
    					<p>Find a<br/> technician</p>
					</span>
					<span className="arrow1">
						<p>&#8594;</p>
					</span>
					<span className="service_picture">
						<img src={appointment_schedule} alt="appointment schedule"/>
    					<p>Appointment<br/> scheduling</p>
					</span>
					<span className="arrow1">
						<p>&#8594;</p>
					</span>
					<span className="service_picture">
						<img src={make_payment} alt="make payment"/>
    					<p>Make<br/> payment</p>
					</span>

				</div>
				<div id="findTechnicianButton">
					<Link to="technician">
					<button>Find a technician</button>
					</Link>
				</div>
			</div>
			<div className="testimonials">
				<h1 id="testimonials_header">TESTIMONIALS</h1>
				<div id="testimonials">
					<span className="testimonial_picture">
						<img src={female_testimony} alt="female testimony"/>
					</span>
					<span className="testimonial_picture2">
					<p id="testimonial_p">Top-notch service! The technician promptly fixed my phone, explained the issue, and gave valuable maintenance tips.</p>
					</span>
				</div>
				<div id="arrow_box">
					<Link to="#">
						<div id="arrow_left"><i class="arrow left"></i></div>
					</Link>
					<Link to="#">
						<div id="arrow_right"><i class="arrow2 right"></i></div>
					</Link>
				</div>
				<div id="testimonials">
					<span className="testimonial_picture2">
					<p id="testimonial_p">The professionalism, technical expertise, and friendly demeanour made the repair experience seam-less. Highly recommend for anyone in need of reliable phone repairs</p>
					</span>
					<span className="testimonial_picture">
						<img src={male_testimony} alt="male testimony"/>
					</span>

				</div>
			</div>
			<div className="section">
				<div id="find_your">
					<div id="find_your_nearby_technician"><h1>Find your nearby Phone Technician</h1></div>
					<div id="find_a_technician"><h2>Find a technician</h2></div>
				</div>
				<div id="why_us">
					<h1 id="why_for_large_screen">WHY CHOOSE US?</h1>

					<div id="box1">
						<img src={fixing_process} alt="fixing process"/>
					</div>
					<h1 id="why_for_small_screen">WHY CHOOSE US?</h1>
					<h3 id="why_for_small_screen1">we are intentional about the services we provide</h3>


					<div id="box2">
						<div id="inner_box1">
							<div id="circle">
								<div id="flex_circle">
									<img src={mail_certified} alt="mail certified"/>
								</div>
							</div>
							<div id="text_content">
								<h2 id="heading">Certified Technicians</h2>
								<p id="text">professionals who have undergone specific training and testing to acquire recognized certifications in their field. These certifications demonstrate a level of expertise and competence in performing tasks related to their profefssion </p>
							</div>
							
						</div>
						<div id="inner_box2">
							<div id="circle">
							<div id="flex_circle">
								<img src={bikeman} alt="bike man"/>
							</div>
							</div>
							<div id="text_content">
								<h2 id="heading">Express Service</h2>
								<p id="text">Customers opting for express service usually receive priority handling. This may include expedited processing, quicker response times, and faster  resolution of their requests or transactions.</p>
							</div>
							
						</div>
						<div id="inner_box2">
							<div id="flex_circle">
								<img src={vector} alt="vector"/>
							</div>
							<div id="text_content">
								<h2 id="heading">Time Management</h2>
								<p id="text">Efficient time management is a key feature, allowing technicians to complete repairs within a reasonable  timeframe and minimize downtime for the customer. </p>
							</div>
							
						</div>
						<div id="inner_box3">
							<div id="flex_circle">
								<img src={timer} alt="timer"/>
							</div>
							<div id="text_content">
								<h2 id="heading">Protection Plan</h2>
								<p id="text">A protection plan is a service or agreement offered by a provider to safeguard against potential risks, damages, or unforeseen events. These plans are commonly associated with services. </p>
							</div>
							
						</div>

					</div>

				</div>
			</div>
		</div>
	)
}

export default Home;

