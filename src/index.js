import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Education from './modules/Education';
import Portfolios from './modules/Portfolios';
import Experience from './modules/Experience';
import About from './modules/About';
import Skills from './modules/Skills';

ReactDOM.render((
  <div>hello</div>
), document.getElementById('root'));
registerServiceWorker();
