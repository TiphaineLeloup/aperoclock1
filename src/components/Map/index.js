import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
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
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAz3XbHpDyw8V9An-LSkTtgCMwbtvsgXX0' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
