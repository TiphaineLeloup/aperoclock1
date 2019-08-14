// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import groupActions from 'src/_actions/group.actions';
import ListGroups from 'src/components/ListGroups';


const mapStateToProps = state => ({
  groups: state.groups,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetAll: () => {
    // const result = groupActions.getAllgroups();
    // result(dispatch);
  },
});

// Container
const ListGroupsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListGroups);

export default ListGroupsContainer;
