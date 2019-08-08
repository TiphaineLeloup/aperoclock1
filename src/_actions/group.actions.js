import groupConstants from 'src/constants/eventConstants';
import groupService from 'src/_services/event.services';

function getAllgroups() {
  function success(groups) {
    return { type: groupConstants.GROUP_GET_ALL_SUCCESS, groups };
  }
  function failure(error) {
    return { type: groupConstants.GROUP_GET_ALL_FAILURE, error };
  }
  return (dispatch) => {
    groupService.getAll()
      .then(
        (groups) => {
          dispatch(success(groups));
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

const groupActions = {
  getAllgroups,
};

export default groupActions;
