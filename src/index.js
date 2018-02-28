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
<Router history={browserHistory}>
    <Route path={process.env.PUBLIC_URL + '/'} component={App}>
      <IndexRoute component={About} />
      <Route path="/Portfolio/static/js/modules/portfolios" component={Portfolios}/>
      <Route path="/Portfolio/static/js/modules/experience" component={Experience}/>
      <Route path="/Portfolio/static/js/modules/education" component={Education}/>
      <Route path="/Portfolio/static/js/modules/skills" component={Skills}/>
    </Route>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
