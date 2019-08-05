// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Profile from 'src/components/Profile';


const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {};

// Container
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ProfileContainer;
