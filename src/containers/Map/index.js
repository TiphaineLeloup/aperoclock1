// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Map from 'src/components/Map';
import globalActions from 'src/_actions/global.actions';
import groupActions from 'src/_actions/group.actions';


const mapStateToProps = state => ({
  actualGroup: state.reducerBase.actualGroup,
  detailGroup: state.groups.detailGroup,
  title: state.reducerBase.title,
});

const mapDispatchToProps = dispatch => ({
  dispatchNewTitle: (title) => {
    dispatch(globalActions.changeTitle(title));
  },
  dispatchGetDetails: (idGroup) => {
    const result = groupActions.getDetails(idGroup);
    result(dispatch);
  },
});

// Container
const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);

// == Export
export default MapContainer;
