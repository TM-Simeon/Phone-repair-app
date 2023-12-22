import React, { useState } from 'react';
import './SingleTechnicianPage.css';
// import { Link, useParams, useLocation } from 'react-router-dom';
import technicianStar from '../../images/technicianStar.png';
import orangeStar from '../../images/OrangeStar.png';
import greyStar from '../../images/greyStar.png';


const SingleTechnicianPage = () => {
  // const { id } = useParams();
  // console.log(id, 'useParams id');
  // const { state } = useLocation();
  //   const {id, img, name, experience, location, stars} = state.technician
  // console.log(state, 'useLocation');
  //   const {img, name, experience, stars } =
  //     state;
  const [activeButton, setActiveButton] = useState('overview');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className='SingleTechnicianPage'>
      <div id="blue-div"></div>
      <div id="content-div">
        <div id="content-elements">
          <div id="content-div1and2">
            <div id="content-div1"></div>
            <div id="content-div2">
              <h1>Wahab Ibrahim</h1>
              <p>Location</p>
              <h3>Meadow Hall way Lekki phase 1</h3>
              <p>Experience</p>
              <h3>12 years</h3>
                <img src={orangeStar} alt="*" className="star"/>
                <img src={orangeStar} alt="*" className="star"/>
                <img src={orangeStar} alt="*" className="star"/>
                <img src={orangeStar} alt="*" className="star"/>
                <img src={greyStar} alt="*" className="star"/>
              <div>
                <div id="book">Book</div>
              </div>
            </div>
            <div id="links">
              <button 
                id="overview"
                className={activeButton === 'overview' ? 'active' : ''}
                onClick={() => handleButtonClick('overview')}
                >
                Overview
              </button>
              <button 
                id="review"
                className={activeButton === 'review' ? 'active' : ''}
                onClick={() => handleButtonClick('review')}
                >
                Review
              </button>
            </div>
            <div id={activeButton === 'overview' ? 'technicianBrief' : 'technicianBriefNone'}>
              <h3>Hi, I'm wahab</h3>
              <p>As a seasoned technician with years of hands-on <br></br>experience, I bring a wealth of experience to Gadget<br></br>Glide. Having successfully addressed</p>
              <h4>Show more</h4>
            </div>
            <div id={activeButton === 'overview' ? 'reviewBriefNone' : 'reviewBrief'}>
                <div id="dataLog">
                    <div className="scoreSpan">
                        <div className="dataLogUnit">
                          <h4 className="tagName">Communication</h4>
                          <h4 className="tagValue">80%</h4>
                          <div id="uncoloredPercent">
                            <div id="coloredPercent"></div>
                          </div>
                        </div>
                        <div className="dataLogUnit">
                          <h4 className="tagName">Subject Knowledge</h4>
                          <h4 className="tagValue">80%</h4>
                          <div id="uncoloredPercent">
                            <div id="coloredPercent"></div>
                          </div>
                        </div>
                    </div>
                    <div className="scoreSpan">
                        <h4 className="tagName">Problem solving</h4>
                        <h4 className="tagValue">80%</h4>
                        <div id="uncoloredPercent">
                            <div id="coloredPercent"></div>
                        </div>
                    </div>
                </div>
                <div id="textLog">
                  <h1>Real experience with technicians</h1>
                  <h4>october 23, 2023</h4>
                  <p>Amazing Fix! Shoutout to [Ibrahim] from Gadget Glide! They worked<br></br> wonders on my phonoe, and now it;s good as new! Super friendly and got<br></br> the job done quickly. Couldn't be happier with the service!</p>
                </div>

            </div>
          </div>
          <div id={activeButton === 'overview' ? 'content-div3' : 'content-div3None'}>
            <div id="give-padding">
              <h2>Background</h2>
              <div id="expert-details">
                <div id="details-half">
                  <span>Expertise</span>
                  <span>Mobile Phone</span>
                  <span>ipod</span>
                </div>
                <div id="divline"></div>
                <div id="details-half">
                  <span>Disciplines</span>
                  <span>Hardware</span>
                  <span>Software</span>
                </div>

              </div>
              <h4>Completed sessions</h4>
              <div className="completed-sessions">
                <div id="completed-sessions">
                  <img src={technicianStar} alt="star"/>
                </div>
                <h5>21 completed sessions</h5>
              </div>
              <h4>Available sessions</h4>
              <p>Book 1:1 sessions from the options based on your needs</p>
              <div id="booking-block">
                <div id="open-for-booking">Open for booking</div>
                <div id="book">Book</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SingleTechnicianPage;
