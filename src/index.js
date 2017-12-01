import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import registerServiceWorker from './registerServiceWorker';

import './style/index.css';
import App from './containers/App';
import { addComment } from './actions/actions';
import reducer from './reducers/reducer';

const store = createStore(reducer);

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
// registerServiceWorker()

store.dispatch(addComment('pierwszy koment'));
store.dispatch(addComment('drugi koment'));
