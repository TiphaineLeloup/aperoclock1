// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Groups from 'src/components/Groups';
import globalActions from 'src/_actions/global.actions';

const mapStateToProps = state => ({
  actualGroup: state.reducerBase.actualGroup,
  groups: state.groups.groups,
  title: state.reducerBase.title,
});

const mapDispatchToProps = dispatch => ({
  dispatchNewTitle: (title) => {
    dispatch(globalActions.changeTitle(title));
  },
});

// Container
const GroupsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Groups);

// == Export
export default GroupsContainer;
