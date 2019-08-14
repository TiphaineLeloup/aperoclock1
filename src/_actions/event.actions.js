import eventConstants from 'src/constants/eventConstants';
import eventService from 'src/_services/event.services';

function getAllEvents() {
  function success(events) {
    return { type: eventConstants.EVENT_GET_ALL_SUCCESS, events };
  }
  function failure(error) {
    return { type: eventConstants.EVENT_GET_ALL_FAILURE, error };
  }
  return (dispatch) => {
    eventService.getAll()
      .then(
        (events) => {
          dispatch(success(events));
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

function createEvent() {
  eventService.createEvent();
  return { type: eventConstants.EVENT_CREATE };
}

const eventActions = {
  getAllEvents,
  createEvent,
};

export default eventActions;
