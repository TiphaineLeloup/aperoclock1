// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import commentActions from 'src/_actions/comment.actions';
import Comment from 'src/components/Comment';


const mapStateToProps = state => ({
  comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetAll: () => {
    const result = commentActions.getAllComments();
    result(dispatch);
  },
});

// Container
const CommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comment);

export default CommentsContainer;
