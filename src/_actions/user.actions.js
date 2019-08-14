import userConstants from 'src/constants/userConstants';
import userService from 'src/_services/user.services';
import history from 'src/_helpers/history';

function login(username, password) {
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
  return (dispatch) => {
    userService.login(username, password)
      .then(
        (user) => {
          history.push('/');
          dispatch(success(user));
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

function logout() {
  userService.logout();
  history.push('/');
  localStorage.removeItem('actualEvent');
  localStorage.removeItem('actualGroup');
  return { type: userConstants.LOGOUT };
}

const userActions = {
  login,
  logout,
};

export default userActions;
