// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import EventForm from 'src/components/EventForm';


const mapStateToProps = state => ({
  AddEvent: state.AddEvent,
});

const mapDispatchToProps = {};

// Container
const EventFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventForm);

export default EventFormContainer;
