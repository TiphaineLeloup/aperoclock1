// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MyGroup from 'src/components/MyGroup';


const mapStateToProps = state => ({
  myGroup: state.myGroup,
});

const mapDispatchToProps = {};

// Container
const MyGroupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyGroup);

export default MyGroupContainer;
