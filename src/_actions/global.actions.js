import globalConstants from 'src/constants/globalConstants';

function changeActualEvent(newActualEvent) {
  return {
    type: globalConstants.CHANGE_ActualEvent,
    newActualEvent,
  };
}


function changeActualGroup(newActualGroup) {
  return {
    type: globalConstants.CHANGE_ActualGroup,
    newActualGroup,
  };
}

function changeTitle(newTitle) {
  return {
    type: globalConstants.CHANGE_TITLE,
    newTitle,
  };
}

const globalActions = {
  changeActualEvent,
  changeActualGroup,
  changeTitle,
};

export default globalActions;
