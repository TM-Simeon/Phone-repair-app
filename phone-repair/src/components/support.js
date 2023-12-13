import React from 'react';
// import {Link} from 'react-router-dom';
import './support.css';


const Support = () => {
	return (
		<div className="support">
			<div className="got-questions">
				<h1>YOU GOT QUESTIONS? <br/> WE GOT ANSWERS!</h1>
				<h4>Feel free to ask anything and i'll provide the best guidance and clarification<br></br>on any topic you have in mind</h4>
				
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
						<p>Gadget Glide is completely free, providing easy acccess for all users without hidden charges</p>
					</div>
					<div className="questions">
						<h3>How does the billing work?</h3>
						<p>Gadget Glide is completely free, providing easy acccess for all users without hidden charges</p>
					</div>
					<div className="show_more">
						<div id="show_more_icon"></div>
						<div id="show_more_text">
							<h4>show more</h4>
						</div>
					</div>
				</div>
				<div id="details"></div>
			</div>
			<div className="more-questions">
				<div id="more-questions-text">
					<h3>Still have some Questions?</h3>
					<p>Can't find the answer you are looking for? please chat with our team.</p>

				</div>
				<div id="get-in-touch"><h4>Get in touch</h4></div>
			</div>
		</div>
	)
}

export default Support;