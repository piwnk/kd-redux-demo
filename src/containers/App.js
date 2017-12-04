import React from 'react';
import '../style/App.css';

import CommentFormContainer from './CommentFormContainer';
import CommentsListContainer from './CommentsListContainer';

import DevTools from '../DevTools';

const App = () => (
  <div className="App">
    <CommentsListContainer />
    <CommentFormContainer />
    <DevTools />
  </div>
);

export default App;
