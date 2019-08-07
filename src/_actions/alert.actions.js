import alertConstants from 'src/constants/alertConstants';
import alertService from 'src/_services/alert.services';

function getAllEvents() {
  function success(alerts) {
    return { type: alertConstants.ALERT_GET_ALL_SUCCESS, alerts };
  }
  function failure(error) {
    return { type: alertConstants.ALERT_GET_ALL_FAILURE, error };
  }
  return (dispatch) => {
    alertService.getAll()
      .then(
        (alerts) => {
          dispatch(success(alerts));
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

const alertActions = {
  getAllEvents,
};

export default alertActions;
