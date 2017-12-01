import { connect } from 'react-redux';

import Comment from '../components/Comment';
import { thumbUpComment, thumbDownComment, removeComment, editComment } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: id => dispatch(thumbUpComment(id)),
  thumbDownComment: id => dispatch(thumbDownComment(id)),
  removeComment: id => dispatch(removeComment(id)),
  editComment: id => dispatch(editComment(id)),
});

export default connect(null, mapDispatchToProps)(Comment);
