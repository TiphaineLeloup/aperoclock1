import userConstants from 'src/constants/userConstants';
import globalConstants from 'src/constants/globalConstants';


const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: {},
      };
    case globalConstants.GET_EVENTSGROUPS_SUCCESS:
      return {
        ...state,
        loggingIn: false,
      };
    default:
      return state;
  }
};

export default authentication;
