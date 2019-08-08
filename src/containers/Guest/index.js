// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import guestActions from 'src/_actions/guest.actions';
import Guest from 'src/components/Guest';


const mapStateToProps = state => ({
  guests: state.guests,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetAll: () => {
    const result = guestActions.getAllGuests();
    result(dispatch);
  },
});

// Container
const GuestsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Guest);

export default GuestsContainer;
