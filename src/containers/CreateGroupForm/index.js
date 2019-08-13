// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import CreateGroupForm from 'src/components/CreateGroupForm';


const mapStateToProps = state => ({
  AddGroup: state.AddGroup,
});

const mapDispatchToProps = {};

// Container
const CreateGroupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGroupForm);

export default CreateGroupFormContainer;
