import uuid from 'uuid';

import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actionTypes';

// ACTIONS
export const addComment = text => ({
  type: ADD_COMMENT,
  text,
  id: uuid.v4()
});
export const editComment = (id, text) => ({
  id,
  text,
  type: EDIT_COMMENT
});

export const removeComment = id => ({
  id,
  type: REMOVE_COMMENT
});

export const thumbUpComment = id => ({
  id,
  type: THUMB_UP_COMMENT
});

export const thumbDownComment = id => ({
  id,
  type: THUMB_DOWN_COMMENT
});

// export function addComment(text) {
//   return {
//     type: ADD_COMMENT,
//     text,
//     id: uuid.v4()
//   }
// }

// export function editComment (id, text) {
//   return {
//     type: EDIT_COMMENT,
//     id,
//   text}
// }

// export function removeComment (id) {
//   return {
//     type: REMOVE_COMMENT,
//   id}
// }

// export function thumbUpComment (id) {
//   return {
//     type: THUMB_UP_COMMENT,
//   id}
// }

// export function thumbDownComment (id) {
//   return {
//     type: THUMB_DOWN_COMMENT,
//   id}
// }
