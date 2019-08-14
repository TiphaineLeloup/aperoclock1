import groupConstants from 'src/constants/groupConstants';
import groupService from 'src/_services/group.services';

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

function getDetails(idGroup) {
  function success(details) {
    return { type: groupConstants.GROUP_GET_INFOS_SUCCESS, details };
  }
  function failure(error) {
    return { type: groupConstants.GROUP_GET_INFOS_FAILURE, error };
  }
  return (dispatch) => {
    groupService.getDetails(idGroup)
      .then(
        (details) => {
          dispatch(success(details));
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

const groupActions = {
  getAllgroups,
  getDetails,
};

export default groupActions;
