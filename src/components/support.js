import React from 'react';
import {Link} from 'react-router-dom';
import './support.css';
import './supportmobile.css';
import qanda from '../images/qanda.png'
import qandamobile from '../images/qandamobile.png'


const Support = () => {
	return (
		<div className="support">
				<div id="details1">
					<img src={qandamobile} alt="" id="qanda1"/>
				</div>
			<div className="got-questions">
				<h1>YOU GOT QUESTIONS? <br/> WE GOT ANSWERS!</h1>
				<h4>Feel free to ask anything and i'll provide the best guidance and clarification on any topic you have in mind</h4>
				
			</div>
			<div id="support-block">

				<div id="questions">
					<div className="questions">
						<h3>Is the site free for all users?</h3>
						<p>Gadget Glide is completely free, providing easy acccess for all users without hidden charges</p>
					</div>
					<div className="questions">
						<h3>Are the technicians verified?</h3>
						<p>We assure technician expertise and professionalism through rigorous vetting, ensuring top-notch service and device security</p>
					</div>
					<div className="questions">
						<h3>What is your cancellation policy?</h3>
						<p>No worries! Manage or cancel appointments hassle-free by visiting the technician's profile within our 3-day timeframe.</p>
					</div>
					<div className="questions">
						<h3>How does the billing work?</h3>
						<p>Payment is securely processed through our platform before service completion, with technicians setting prices and providing a clear breakdown before confirmation.</p>
					</div>
					<div className="show_more">
						<Link to="#">
							<div id="show_more_icon">
								<div id="arrow_down"></div>
							</div>
						</Link>
						<Link to="#">
							<div id="show_more_text">
								<h4>show more</h4>
							</div>
						</Link>
					</div>
				</div>
				<div id="details">
					<img src={qanda} alt="Q & A" id="qanda"/>
				</div>
			</div>
			<div className="more-questions">
				<div id="more-questions-text">
					<a href="support" id="linksToSupport"><h3>Still have some Questions?</h3></a>
					<a href="support" id="linksToSupport"><p>Can't find the answer you are looking for? please chat with our team.</p></a>

				</div>
				<Link to="#">
					<div id="get-in-touch"><h4>Get in touch</h4></div>
				</Link>
			</div>
		</div>
	)
}

export default Support;