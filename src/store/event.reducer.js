import eventConstants from 'src/constants/eventConstants';
import globalConstants from 'src/constants/globalConstants';

const initialState = {
  events: []
  ,
};

const evenements = (state = initialState, action) => {
  switch (action.type) {
    case eventConstants.EVENT_GET_ALL_SUCCESS:
      return {
        events: action.events,
      };
    case globalConstants.GET_EVENTSGROUPS_SUCCESS:
      return {
        events: action.events,
      };
    default:
      return state;
  }
};

export default evenements;
