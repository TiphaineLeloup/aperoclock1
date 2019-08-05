// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ListGroups from 'src/components/ListGroups';


const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {};

// Container
const ListGroupsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListGroups);

export default ListGroupsContainer;
