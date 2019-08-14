// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Events from 'src/components/Events';
import eventActions from 'src/_actions/event.actions';
import globalActions from 'src/_actions/global.actions';

const mapStateToProps = state => ({
  actualEvent: state.reducerBase.actualEvent,
  events: state.events.events,
  title: state.reducerBase.title,
  createEvent: state.createEvent,
});

const mapDispatchToProps = dispatch => ({
  dispatchNewTitle: (title) => {
    dispatch(globalActions.changeTitle(title));
  },
  dispatchEvent: (eventname, description) => {
    const result = eventActions.event(eventname, description);
    result(dispatch);
  },
});

// Container
const EventsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events);

// == Export
export default EventsContainer;
