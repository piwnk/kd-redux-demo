import React from 'react';
import '../style/App.css';

import CommentFormContainer from './CommentFormContainer';
import CommentsListContainer from './CommentsListContainer';

const App = () => (
  <div className="App">
    <CommentsListContainer />
    <CommentFormContainer />
  </div>
);

export default App;
