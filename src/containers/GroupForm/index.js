// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import GroupForm from 'src/components/GroupForm';


const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {};

// Container
const GroupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupForm);

export default GroupFormContainer;
