import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';

import './index.css';
import App from './App.react';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
