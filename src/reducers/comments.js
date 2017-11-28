import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT } from '../actions/actionTypes';


export function comments(state = [], action) {
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
      return Object.assign({}, state, {
        comments: state.filter(comment => comment.id !== action.id)
      });

    case EDIT_COMMENT:
      return Object.assign({}, state, {
        // comments: state.comments.map(comment => (
        comments: state.map(comment => (
          {
            ...coment,
            text: comment.id === action.id ? action.text : comment.text
          }
        ))
      });

    // czy na pewno lepiej przebudować wszystkie komentarze gdy ktoś klika like'a ??
    case THUMB_UP_COMMENT:
      return Object.assign({}, state, {
        // comments: state.comments.map(comment => (
        comments: state.map(comment => (
          {
            ...coment,
            votes: comment.id === action.id ? comment.votes + 1 : comment.votes
          }
        ))
      });

    case THUMB_DOWN_COMMENT:
      return Object.assign({}, state, {
        // comments: state.comments.map(comment => (
        comments: state.map(comment => (
          {
            ...comment,
            votes: comment.id === action.id ? comment.votes - 1 : comment.votes
          }
        ))
      });

    default:
      return state;
  }
}
