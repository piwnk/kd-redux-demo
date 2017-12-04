import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';

import DevTools from './DevTools';


// import registerServiceWorker from './registerServiceWorker';

import './style/index.css';
import App from './containers/App';
// import { addComment } from './actions/actions';
import reducer from './reducers/reducer';

const logger = createLogger();
const store = createStore(
  reducer,
  // applyMiddleware(logger)
  DevTools.instrument()

);

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
// registerServiceWorker()

// store.dispatch(addComment('pierwszy koment'));
// store.dispatch(addComment('drugi koment'));
