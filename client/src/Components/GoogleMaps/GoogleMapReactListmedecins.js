import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "red",

      marginLeft: "4px",
      marginTop: "2px",
      width: "12px",
      height: "12px",
      border: "solid 1px currentColor",

      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "7px 7px 7px 0",

      transform: "rotate(-45deg)",
    }}
  >
    {text}
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: { lat: 36.890014430962076, lng: 10.185348737251772 },
    zoom: 15,
  };

  render() {
    return (
      <div style={{ height: "200px", width: "500px" }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={36.890014430962076}
            lng={10.185348737251772}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
