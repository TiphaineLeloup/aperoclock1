// == Types
import globalConstants from 'src/constants/globalConstants';

// == Initial State
const initialState = {
  actualGroup: localStorage.getItem('actualGroup')
    ? JSON.parse(localStorage.getItem('actualGroup')) : null,
  actualEvent: localStorage.getItem('actualEvent')
    ? JSON.parse(localStorage.getItem('actualEvent')) : null,
  baseTitle: 'AperO\'Clock',
  title: '',
};


// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case globalConstants.CHANGE_ACTUAL_EVENT:
      return {
        ...state,
        actualEvent: action.newActualvent,
      };
    case globalConstants.CHANGE_ACTUAL_GROUP:
      return {
        ...state,
        actualGroup: action.newActualGroup,
      };
    case globalConstants.CHANGE_TITLE:
      document.title = action.newTitle + (action.newTitle !== '' ? ' - ' : '') + state.baseTitle;
      return {
        ...state,
        title: action.newTitle,
      };

    default:
      return state;
  }
};


// == Export
export default reducer;
