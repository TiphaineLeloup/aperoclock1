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
          bootstrapURLKeys={{ key: 'AIzaSyCFDKKfjcU6nmSJH1vxOYUMWw1n73zwRIQ' }}
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



// GOOGLE MAP REACT
// import React, { Component } from 'react';
// import {
//   Map,
//   InfoWindow,
//   Marker,
//   GoogleApiWrapper,
// } from 'google-maps-react';

// class MapContainer extends Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>

//         <Marker
//           onClick={this.onMarkerClick}
//           name="Current location"
//         />

//         <InfoWindow onClose={this.onInfoWindowClose} />
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyCFDKKfjcU6nmSJH1vxOYUMWw1n73zwRIQ'),
// })(MapContainer);
