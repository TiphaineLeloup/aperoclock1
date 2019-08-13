// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import CreateEventForm from 'src/components/CreateEventForm';


const mapStateToProps = state => ({
  AddEvent: state.AddEvent,
});

const mapDispatchToProps = {};

// Container
const CreateEventFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateEventForm);

export default CreateEventFormContainer;
