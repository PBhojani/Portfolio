import React, { Component } from 'react';
import './App.css';
import NavLink from './modules/NavLink';

class App extends Component {
  render() {
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/Portfolio/" onlyActiveOnIndex={true}>About</NavLink></li>
        </ul>
		</div>
    );
  }
}

export default App;
