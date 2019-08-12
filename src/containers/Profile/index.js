// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Profile from 'src/components/Profile';
import profileActions from 'src/_actions/group.actions';


const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetAll: () => {
    const result = profileActions.getAllGuests();
    result(dispatch);
  },
});


// Container
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ProfileContainer;
