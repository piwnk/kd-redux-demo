import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT } from '../actions/actionTypes';


const comments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          votes: 0
        }
      ];

    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.id);

    case EDIT_COMMENT:
      return state.map(comment => (
        {
          ...comment,
          text: comment.id === action.id ? action.text : comment.text
        }
      ));

    case THUMB_UP_COMMENT:
      return state.map(comment => (
        {
          ...comment,
          votes: comment.id === action.id ? comment.votes + 1 : comment.votes
        }
      ));

    case THUMB_DOWN_COMMENT:
      return state.map(comment => (
        {
          ...comment,
          votes: comment.id === action.id ? comment.votes - 1 : comment.votes
        }
      ));

    default:
      return state;
  }
};

export default comments;
