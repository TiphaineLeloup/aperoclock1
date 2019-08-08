import alertConstants from 'src/constants/alertConstants';

const initialState = {
  alerts: [],
};

const alertes = (state = initialState, action) => {
  switch (action.type) {
    case alertConstants.ALERT_GET_ALL_SUCCESS:
      return {
        alerts: action.alerts,
      };
    default:
      return state;
  }
};

export default alertes;
