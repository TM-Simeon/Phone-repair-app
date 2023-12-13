import React from 'react';
import './SingleTechnicianPage.css';
// import { Link, useParams, useLocation } from 'react-router-dom';

const SingleTechnicianPage = () => {
  // const { id } = useParams();
  // console.log(id, 'useParams id');
  // const { state } = useLocation();
  //   const {id, img, name, experience, location, stars} = state.technician
  // console.log(state, 'useLocation');
  //   const {img, name, experience, stars } =
  //     state;
  return (
    <div className='SingleTechnicianPage'>
      <div id="grey-div"></div>
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
            </div>
            <div id="technicianBrief">
              <h3>Hi, I'm wahab</h3>
              <p>As a seasoned technician with years of hands-on <br></br>experience, I bring a wealth of experience to Gadget<br></br>Glide. Having successfully addressed</p>
              <h4>Show more</h4>
            </div>
          </div>
          <div id="content-div3">
            <div id="give-padding">
              <h2>Background</h2>
              <div id="expert-details">
                <div id="details-half">
                  <span>Expertise</span>
                  <span>Mobile Phone</span>
                  <span>ipod</span>
                </div>
                <hr></hr>
                <div id="details-half">
                  <span>Disciplines</span>
                  <span>Hardware</span>
                  <span>Software</span>
                </div>

              </div>
              <h4>Completed sessions</h4>
              <div className="completed-sessions">
                <div id="completed-sessions"></div>
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
