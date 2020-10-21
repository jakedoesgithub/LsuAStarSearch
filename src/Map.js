import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';



export class MapObj extends Component {
  constructor(props) {
    super(props);
    this.path = {
      coords: props.path
    }
  }

  displayMarkers = () => {
    return this.path.coords.map((path, index) => {
      return <Marker key={index} id={index} position={{
        lat: path.lat,
        lng: path.lng
      }}
       />
    })
  }
  


  render() {
    const style = {
      width: '60vw',
      height: '60vh',
      margin: '5vh 10vw',
      overflow: 'hidden'
    };
    const { coords } = this.path;
    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={15}
        initialCenter={{lat: 30.4133, lng: -91.1800}}
        >
        {this.displayMarkers()}
        <Polyline
                path={coords}
                geodesic={true}
                options={{
                    strokeColor: "#ff2527",
                    strokeOpacity: 0.75,
                    strokeWeight: 3
                }}
            />
        </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDIjGYB6wbN-wgJIsYCT5GRr8hMEc2PgJk'
})(MapObj);
