import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import App from './components/App';
import Header from './components/Header';
import Login from './components/Login';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Header}>
      <Route path="tests" component={App}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
