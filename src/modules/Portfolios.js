// modules/Repos.js
import React from 'react';

export default class Portfolios extends React.Component{
  render() {
    var imgstyle= {
          width: '258px',
          height: '210px'
};
    return (
    <div>
        <h2>Portfolios</h2>
    	<div class="card-container">
        <div class="row row-fixing">
          <div class="col-sm-3">
          <div class="project-box">
            <div class="icon-image">
              <img style={imgstyle} src="../java1.png" alt="Todoed" />
           </div>
          <div class="gap10"></div>
            <span class="place">Java<br /></span>
               <h6 class="company">Kiosk System</h6>
                <p class="company-text-projects">A small kiosk to improve the experience for grocery shopping in stores. The Kiosk System is a user-friendly  grocery shopping app for viewing items within the store or availability in another store.</p>
            <div class="button-box">
              <a class="wonder-links" href="https://github.com/Palakp41/Portfolio/tree/master/Project%201%20-%20Java">Code</a>
            </div>
          </div>
          </div>
        <div class="col-sm-3">
          <div class="project-box">
            <div class="icon-image">
              <img style={imgstyle} src="../java2.png" alt="Todoed" />
            </div>
            <div class="gap10"></div>
              <span class="place">Java<br /></span>
              <h6 class="company">Event Ticketing System</h6>
                <p class="company-text-projects">An event ticketing system to consolidate the ticket purchasing experience for stadiums and venues across the country. The event ticketing system is a user-friendly app to search by location for an event and select an event or event series from a list matching their location search criteria.</p>
            <div class="button-box">
                <a class="wonder-links" href="https://github.com/Palakp41/Portfolio/tree/master/Project%202%20-%20Java">Code</a>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
    );
  }
}