import React from 'react';

import '../style/Comment.css';

const Comment = ({
  text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment
}) => (
  <li className="Comment">
    <div className="edit">
      <button
        onClick={() => removeComment(id)}
      ><i className="fa fa-remove" />
      </button>
      <button
        onClick={() => editComment(id)}
      ><i className="fa fa-edit" />
      </button>
    </div>
    <div className="text">
      {text}
    </div>
    <div className="likes">
      {votes}
    </div>
    <div className="votes">
      <button
        onClick={() => thumbUpComment(id)}
      ><i className="fa fa-thumbs-o-up" />
      </button>
      <button
        onClick={() => thumbDownComment(id)}
      ><i className="fa fa-thumbs-o-down" />
      </button>
    </div>
  </li>
);

export default Comment;
