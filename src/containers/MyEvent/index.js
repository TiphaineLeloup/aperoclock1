// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MyEvent from 'src/components/MyEvent';


const mapStateToProps = state => ({
  myEvent: state.myEvent,
});

const mapDispatchToProps = {};

// Container
const MyEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyEvent);

export default MyEventContainer;
