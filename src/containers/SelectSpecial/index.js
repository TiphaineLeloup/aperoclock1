// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SelectSpecial from 'src/components/SelectSpecial';
import globalActions from 'src/_actions/global.actions';

const mapStateToProps = state => ({
  actualGroup: state.actualGroup,
  groups: state.groups.groups,
});

const mapDispatchToProps = dispatch => ({
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
