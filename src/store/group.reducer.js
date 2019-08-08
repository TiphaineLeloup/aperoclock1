import groupConstants from 'src/constants/groupConstants';

const initialState = {
  groups: [],
};

const groupes = (state = initialState, action) => {
  switch (action.type) {
    case groupConstants.GROUP_GET_ALL_SUCCESS:
      return {
        groups: action.groups,
      };
    default:
      return state;
  }
};

export default groupes;
