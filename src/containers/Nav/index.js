import { connect } from 'react-redux';

import userActions from 'src/_actions/user.actions';
import userConstants from 'src/constants/userConstants';
import Nav from 'src/components/Nav';

const mapStateToProps = (state) => {
  const { loggedIn } = state.authentication;
  return {
    loggedIn,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchLogout: () => {
    userActions.logout();
    dispatch({
      type: userConstants.LOGOUT,
    });
  },
});

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

export default NavContainer;
