import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers/index'
import App from './containers/app';

const middleware = [thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

render(<Provider store={store}><App /></Provider>, document.getElementById("app"));