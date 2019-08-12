// == Initial State
const initialState = {
  actualGroup: null,
  actualEvent: null,
};

// == Types
const CHANGE_ACTUAL_EVENT = 'CHANGE_ACTUAL_EVENT';
const CHANGE_ACTUAL_GROUP = 'CHANGE_ACTUAL_GROUP';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ACTUAL_EVENT:
      return {
        ...state,
        actualEvent: action.event,
      };
    case CHANGE_ACTUAL_GROUP:
      return {
        ...state,
        actualGroup: action.group,
      };

    default:
      return state;
  }
};

// == Action Creators
export const changeEvent = event => ({
  type: CHANGE_ACTUAL_EVENT,
  event,
});

export const changeGroup = group => ({
  type: CHANGE_ACTUAL_GROUP,
  group,
});


// == Selectors


// == Export
export default reducer;
