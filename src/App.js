import React, { Component } from 'react';
import './App.css';
import NavLink from './modules/NavLink';

class App extends Component {
  render() {
    return (
      <div>
		<nav class="navbar navbar-inverse bg-inverse navbar-collapse collapse">
        <div class="container-fluid">
          <div class="navbar-header">
            <h4>Palak Bhojani</h4>
          </div>
            <ul class="nav navbar-nav" role="nav">
              <li><NavLink to="/" onlyActiveOnIndex={true}>About</NavLink></li>
              <li><NavLink to="/experience">Experience</NavLink></li>
              <li><NavLink to="/education">Education</NavLink></li>
              <li><NavLink to="/skills">Skills</NavLink></li>
              <li><NavLink to="/portfolios">Portfolios</NavLink></li>
            </ul>
        </div>
		</div>
    );
  }
}

export default App;
