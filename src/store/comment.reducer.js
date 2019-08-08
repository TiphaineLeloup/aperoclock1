import commentConstants from 'src/constants/commentConstants';

const initialState = {
  comments: [],
};

const commentaires = (state = initialState, action) => {
  switch (action.type) {
    case commentConstants.COMMENT_GET_ALL_SUCCESS:
      return {
        comments: action.comments,
      };
    default:
      return state;
  }
};

export default commentaires;
