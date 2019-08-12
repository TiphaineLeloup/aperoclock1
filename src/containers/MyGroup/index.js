// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MyGroup from 'src/components/MyEvent';


const mapStateToProps = state => ({
  myEvent: state.myEvent,
});

const mapDispatchToProps = {};

// Container
const MyGroupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyGroup);

export default MyGroupContainer;
