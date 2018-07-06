import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Cart from './layouts/Cart';
import Shipping from './layouts/Shipping';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ App } />
      <Route exact path='/cart' component={ Cart } />
      <Route exact path='/shipping' component={ Shipping } />
    </Switch>
  </BrowserRouter>
  ),
  document.getElementById('root')
);
registerServiceWorker();
