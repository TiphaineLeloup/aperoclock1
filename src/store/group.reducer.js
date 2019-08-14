import groupConstants from 'src/constants/groupConstants';
import globalConstants from 'src/constants/globalConstants';


const initialState = {
  detailGroup: null,
  groups: [],
};

const groups = (state = initialState, action) => {
  switch (action.type) {
    case groupConstants.GROUP_GET_ALL_SUCCESS:
      return {
        ...state,
        groups: action.groups,
      };
    case globalConstants.GET_EVENTSGROUPS_SUCCESS:
      return {
        ...state,
        groups: action.groups,
      };
    case globalConstants.CHANGE_ACTUAL_GROUP:
      return {
        ...state,
        detailGroup: null,
      };
    case groupConstants.GROUP_GET_INFOS_SUCCESS:
      return {
        ...state,
        detailGroup: action.details,
      };
    default:
      return state;
  }
};

export default groups;
