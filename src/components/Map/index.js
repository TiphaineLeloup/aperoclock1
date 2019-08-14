import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectSpecial from 'src/containers/SelectSpecial';
import { Switch } from 'antd';
import GoogleMap from './GoogleMap';
import Marker from './Marker';
import { dispatch } from 'rxjs/internal/observable/pairs';

const VIEW_USERS = true;
const VIEW_EVENTS = false;

class SimpleMap extends React.Component {
  state = {
    view: VIEW_USERS,
    center: {
      lat: 48.866667,
      lng: 2.333333,
    },
    zoom: 5,
  };

  componentDidMount() {
    const { actualGroup, dispatchGetDetails, dispatchNewTitle } = this.props;
    dispatchNewTitle('La Map');
    if (actualGroup !== null) {
      dispatchGetDetails(actualGroup);
    }
  }

  componentDidUpdate() {
    const { actualGroup, detailGroup, dispatchGetDetails } = this.props;
    if (actualGroup !== null && detailGroup === null) {
      dispatchGetDetails(actualGroup);
    }
  }

  render() {
    const { center, detailGroup, view, zoom } = this.state;
    console.log("render");
    return (
      // Important! Always set the container height explicitly
      <>
        <SelectSpecial showGroups />
        <Switch
          checked={view}
          checkedChildren="Vue des utilisateurs"
          onChange={() => this.setState({
            view: !view,
          })}
          unCheckedChildren="Vue des événements"
        />
        <div style={{ height: '80vh', width: '100%' }}>
          <GoogleMap
            bootstrapURLKeys={{ key: 'AIzaSyAz3XbHpDyw8V9An-LSkTtgCMwbtvsgXX0' }}
            defaultCenter={center}
            yesIWantToUseGoogleMapApiInternals
            defaultZoom={zoom}
          >
            {/* <Marker
              lat={48.866667}
              lng={2.333333}
              title="My Marker"
            /> */}

            {
              view === VIEW_USERS && detailGroup !== null && (
                console.log(detailGroup)
              )
            }

          </GoogleMap>
        </div>
      </>
    );
  }
}

SimpleMap.propTypes = {
  actualGroup: PropTypes.number,
  detailGroup: PropTypes.any,
  dispatchGetDetails: PropTypes.func.isRequired,
  dispatchNewTitle: PropTypes.func.isRequired,
};

SimpleMap.defaultProps = {
  actualGroup: null,
  detailGroup: null,
};

export default SimpleMap;
