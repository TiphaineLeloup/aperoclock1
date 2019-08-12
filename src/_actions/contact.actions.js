import contactConstants from 'src/constants/contactConstants';
import contactService from 'src/_services/contact.services';

function getAllContacts() {
  function success(contacts) {
    return { type: contactConstants.CONTACT_GET_ALL_SUCCESS, contacts };
  }
  function failure(error) {
    return { type: contactConstants.CONTACT_GET_ALL_FAILURE, error };
  }
  return (dispatch) => {
    contactService.getAll()
      .then(
        (contacts) => {
          dispatch(success(contacts));
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

const contactActions = {
  getAllContacts,
};

export default contactActions;
