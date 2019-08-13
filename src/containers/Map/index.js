// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Map from 'src/components/Map';
import globalActions from 'src/_actions/global.actions';

const mapStateToProps = state => ({
  title: state.reducerBase.title,
});

const mapDispatchToProps = dispatch => ({
  dispatchNewTitle: (title) => {
    dispatch(globalActions.changeTitle(title));
  },
});

// Container
const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);

// == Export
export default MapContainer;
