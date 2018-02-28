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
              <li><NavLink to="/Portfolio/" onlyActiveOnIndex={true}>About</NavLink></li>
              <li><NavLink to="/Portfolio/static/js/modules/experience">Experience</NavLink></li>
              <li><NavLink to="/Portfolio/static/js/modules/education">Education</NavLink></li>
              <li><NavLink to="/Portfolio/static/js/modules/skills">Skills</NavLink></li>
              <li><NavLink to="/Portfolio/static/js/modules/portfolios">Portfolios</NavLink></li>
            </ul>
        </div>
		</nav>
		</div>
    );
  }
}

export default App;
