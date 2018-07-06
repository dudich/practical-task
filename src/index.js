import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import Cart from './layouts/Cart';
import Shipping from './layouts/Shipping';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';

ReactDOM.render((
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ App } />
      <Route exact path='/cart' component={ Cart } />
      <Route exact path='/shipping' component={ Shipping } />
    </Switch>
  </BrowserRouter>
  </Provider>
  ),
  document.getElementById('root')
);
registerServiceWorker();
