import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 1.327016, // Example latitude, replace with your latitude 1.327016, 124.842014

  lng: 124.842014, // Example longitude, replace with your longitude
};

const MapComponent = () => {
  const handleDirectionsClick = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center">
      <LoadScript googleMapsApiKey="AIzaSyBSKPuyos3hx3EJkQgoZEOGFzY74aegUFs">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <button
        onClick={handleDirectionsClick}
        className="hover:bg-emerald-7=00 mt-12 rounded bg-emerald-500 px-4 py-2 text-white"
      >
        Get Directions
      </button>
    </div>
  );
};

export default MapComponent;
