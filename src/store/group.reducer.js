import groupConstants from 'src/constants/groupConstants';
import globalConstants from 'src/constants/globalConstants';


const initialState = {
  groups: [],
};

const groupes = (state = initialState, action) => {
  switch (action.type) {
    case groupConstants.GROUP_GET_ALL_SUCCESS:
      return {
        groups: action.groups,
      };
    case globalConstants.GET_EVENTSGROUPS_SUCCESS:
      return {
        groups: action.groups,
      };
    default:
      return state;
  }
};

export default groupes;
