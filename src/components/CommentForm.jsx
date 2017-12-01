import React from 'react';

import '../style/CommentForm.css';

export default ({ addComment }) => (
  <form
    className="CommentForm"
    onSubmit={e => addComment(e.target.firstElementChild.value)}
  >
    <input
      className="CommentInput"
      placeholder="Comment"
    />
  </form>
);
