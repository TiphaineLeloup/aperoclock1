import React, { Component } from 'react';

import GoogleMap from './GoogleMap';
import Marker from './Marker';
import DrawerMarker from 'src/components/Drawer';

class SimpleMap extends Component {
  state = {
    center: {
      lat: 48.866667,
      lng: 2.333333,
    },
    zoom: 11,
  };

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

export default SimpleMap;
