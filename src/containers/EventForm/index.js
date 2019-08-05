// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import EventForm from 'src/components/EventForm';


const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {};

// Container
const EventFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventForm);

export default EventFormContainer;
