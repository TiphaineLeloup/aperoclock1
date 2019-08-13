import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DrawerMarker from 'src/components/Drawer';
import GoogleMap from './GoogleMap';
import Marker from './Marker';

class SimpleMap extends Component {
  state = {
    center: {
      lat: 48.866667,
      lng: 2.333333,
    },
    zoom: 11,
  };

  componentDidMount() {
    const { dispatchNewTitle } = this.props;
    dispatchNewTitle('La Map');
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyAz3XbHpDyw8V9An-LSkTtgCMwbtvsgXX0' }}
          defaultCenter={this.state.center}
          yesIWantToUseGoogleMapApiInternals
          defaultZoom={this.state.zoom}
        >
          <Marker
            lat={48.866667}
            lng={2.333333}
            text="My Marker"
          />
          <DrawerMarker />

        </GoogleMap>
      </div>
    );
  }
}

SimpleMap.propTypes = {
  dispatchNewTitle: PropTypes.func.isRequired,
};

export default SimpleMap;
