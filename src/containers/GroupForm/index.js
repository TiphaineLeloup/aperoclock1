// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import GroupForm from 'src/components/GroupForm';


const mapStateToProps = state => ({
  AddGroup: state.AddGroup,
});

const mapDispatchToProps = {};

// Container
const GroupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupForm);

export default GroupFormContainer;
