import commentConstants from 'src/constants/commentConstants';
import commentService from 'src/_services/comment.services';

function getAllComments() {
  function success(comments) {
    return { type: commentConstants.COMMENT_GET_ALL_SUCCESS, comments };
  }
  function failure(error) {
    return { type: commentConstants.COMMENT_GET_ALL_FAILURE, error };
  }
  return (dispatch) => {
    commentService.getAll()
      .then(
        (comments) => {
          dispatch(success(comments));
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

const commentActions = {
  getAllComments,
};

export default commentActions;
