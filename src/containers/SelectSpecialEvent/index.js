// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SelectSpecialEvent from 'src/components/SelectSpecial';
import globalActions from 'src/_actions/global.actions';

const mapStateToProps = state => ({
  actualEvent: state.actualEvent,
  events: state.events.events,
});

const mapDispatchToProps = dispatch => ({
  dispatchNewEvent: (idEvent) => {
    dispatch(globalActions.changeActualEvent(idEvent));
  },
});

// Container
const SelectSpecialEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectSpecialEvent);

// == Export
export default SelectSpecialEventContainer;
