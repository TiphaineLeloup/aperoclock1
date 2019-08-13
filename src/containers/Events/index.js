// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Events from 'src/components/Events';
import globalActions from 'src/_actions/global.actions';

const mapStateToProps = state => ({
  actualEvent: state.reducerBase.actualEvent,
  events: state.events.events,
  title: state.reducerBase.title,
});

const mapDispatchToProps = dispatch => ({
  dispatchNewTitle: (title) => {
    dispatch(globalActions.changeTitle(title));
  },
});

// Container
const EventsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events);

// == Export
export default EventsContainer;
