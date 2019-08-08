import guestConstants from 'src/constants/guestConstants';
import guestService from 'src/_services/guest.services';

function getAllGuests() {
  function success(guests) {
    return { type: guestConstants.GUEST_GET_ALL_SUCCESS, guests };
  }
  function failure(error) {
    return { type: guestConstants.GUEST_GET_ALL_FAILURE, error };
  }
  return (dispatch) => {
    guestService.getAll()
      .then(
        (guests) => {
          dispatch(success(guests));
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

const guestActions = {
  getAllGuests,
};

export default guestActions;
