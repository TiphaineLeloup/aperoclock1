import eventServices from 'src/_services/event.services';
import globalConstants from 'src/constants/globalConstants';
import groupServices from 'src/_services/group.services';
import eventConstants from 'src/constants/eventConstants';
import groupConstants from 'src/constants/groupConstants';


function changeActualEvent(newActualEvent) {
  return {
    type: globalConstants.CHANGE_ACTUAL_EVENT,
    newActualEvent,
  };
}


function changeActualGroup(newActualGroup) {
  return {
    type: globalConstants.CHANGE_ACTUAL_GROUP,
    newActualGroup,
  };
}

function changeTitle(newTitle) {
  return {
    type: globalConstants.CHANGE_TITLE,
    newTitle,
  };
}

function getEventsGroupsSuccess(events, groups) {
  return {
    type: globalConstants.GET_EVENTSGROUPS_SUCCESS,
    events,
    groups,
  };
}

function getEventsGroups(dispatch) {
  eventServices.getAll().then(
    (events) => {
      groupServices.getAll().then(
        (groups) => {
          dispatch(getEventsGroupsSuccess(events, groups));
        },
      );
    },
  );
}

const globalActions = {
  changeActualEvent,
  changeActualGroup,
  changeTitle,
  getEventsGroups,
};

export default globalActions;
