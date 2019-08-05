// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MyEvent from 'src/components/MyEvent';


const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {};

// Container
const MyEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyEvent);

export default MyEventContainer;
