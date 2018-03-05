import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import About from './modules/About';
import Experience from './modules/Experience';

ReactDOM.render((
<Router history={browserHistory}>
    <Route path={process.env.PUBLIC_URL + '/'} component={App}>
      <IndexRoute component={About} />
      <Route path="/experience" component={Experience}/>
      </Route>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
