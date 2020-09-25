import React, { Component } from "react";
import dotenv from "dotenv";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// dotenv.config()
// const mapApiKey = process.env.GOOGLEMAPAPIKEY;
class EventCenterMap extends Component {
  style = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  render() {
    return (
      <div className="event-center-location">
        <Map
          containerStyle={this.style}
          google={this.props.google}
          zoom={14}
          position={{
            lat: 6.4419929,
            lng: 3.3530625,
          }}
        >
          {/* <Marker 
                onClick={this.onMarkerClick} 
                name={"Current location"} 
                
                /> */}

          {/* <InfoWindow onClose={this.onInfoWindowClose}
                props={this.children}
                > */}
          {/* <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div> */}
          {/* </InfoWindow> */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyASWL5ehnF730-BE6_RaqAvuyHvqQvQUe8",
})(EventCenterMap);
