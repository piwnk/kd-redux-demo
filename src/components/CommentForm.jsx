import React from 'react';

import '../style/CommentForm.css';

export default ({ addComment }) => (
  <form
    className="CommentForm"
    onSubmit={(e) => {
      e.preventDefault();
      const comment = e.target.firstElementChild.value;
      e.target.firstElementChild.value = '';
      return addComment(comment);
    }}
  >
    <input
      className="CommentInput"
      placeholder="Write something..."
    />
  </form>
);
