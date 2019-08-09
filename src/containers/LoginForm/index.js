import { connect } from 'react-redux';

import userActions from 'src/_actions/user.actions';
import LoginForm from 'src/components/LoginForm';

const mapStateToProps = state => ({
  loggingIn: state.loggingIn,
});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: (username, password) => {
    const result = userActions.login(username, password);
    result(dispatch);
  },
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginFormContainer;
