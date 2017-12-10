import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';
import { Provider as RebassProvider } from 'rebass';

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
    <RebassProvider>
      <App />
    </RebassProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
