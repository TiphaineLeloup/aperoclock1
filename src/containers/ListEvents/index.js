// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ListEvents from 'src/components/ListEvents';


const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {};

// Container
const ListEventsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListEvents);

export default ListEventsContainer;
