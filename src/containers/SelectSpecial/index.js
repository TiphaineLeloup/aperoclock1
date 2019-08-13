// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SelectSpecial from 'src/components/SelectSpecial';
import globalActions from 'src/_actions/global.actions';

const mapStateToProps = state => ({
  actualEvent: state.actualEvent,
  actualGroup: state.actualGroup,
  events: state.events.events,
  groups: state.groups.groups,
});

const mapDispatchToProps = dispatch => ({
  dispatchNewEvent: (idEvent) => {
    dispatch(globalActions.changeActualEvent(idEvent));
  },
  dispatchNewGroup: (idGroup) => {
    dispatch(globalActions.changeActualGroup(idGroup));
  },
});

// Container
const SelectSpecialContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectSpecial);

// == Export
export default SelectSpecialContainer;
