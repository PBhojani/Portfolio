import React, { Component } from 'react';
import './App.css';
import NavLink from './modules/NavLink';

class App extends Component {
  render() {
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>About</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
        </ul>
		</div>
    );
  }
}

export default App;
