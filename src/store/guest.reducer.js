import guestConstants from 'src/constants/guestConstants';

const initialState = {
  guests: [],
};

const invites = (state = initialState, action) => {
  switch (action.type) {
    case guestConstants.GUEST_GET_ALL_SUCCESS:
      return {
        guests: action.guests,
      };
    default:
      return state;
  }
};

export default invites;
