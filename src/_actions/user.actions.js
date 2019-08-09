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
          console.log("success");
          dispatch(success(user));
          history.push('/');
        },
        (error) => {
          console.log("error");
          dispatch(failure(error));
        },
      );
  };
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

const userActions = {
  login,
  logout,
};

export default userActions;
