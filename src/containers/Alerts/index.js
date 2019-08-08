// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import alertActions from 'src/_actions/alert.actions';
import Alert from 'src/components/Alert';


const mapStateToProps = state => ({
  alerts: state.alerts,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetAll: () => {
    const result = alertActions.getAllAlerts();
    result(dispatch);
  },
});

// Container
const AlertsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert);

export default AlertsContainer;
