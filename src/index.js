import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Education from './modules/Education';
import Portfolios from './modules/Portfolios';
import Experience from './modules/Experience';
import About from './modules/About';
import Skills from './modules/Skills';

ReactDOM.render((
<Router history={browserHistory}>
    <Route path={process.env.PUBLIC_URL + '/'} component={App}>
      <IndexRoute component={About} />
    </Route>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
