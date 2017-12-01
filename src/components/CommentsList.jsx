import React from 'react';

import Comment from '../containers/CommentContainer';

import '../style/CommentsList.css';

const CommentsList = ({ comments }) => (
  <ul className="CommentsList">
    {comments.map(comment => (
      <Comment
        key={comment.id}
        {...comment}
      />
    ))}
  </ul>
);

export default CommentsList;
