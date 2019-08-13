// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import eventActions from 'src/_actions/event.actions';
import ListEvents from 'src/components/ListEvents';


const mapStateToProps = state => ({
  events: state.events,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetAll: () => {
    // const result = eventActions.getAllEvents();
    // result(dispatch);
  },
});

// Container
const ListEventsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListEvents);

export default ListEventsContainer;
