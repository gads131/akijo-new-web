import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 1.327016, // 1.327016, 124.842014

  lng: 124.842014,
};

const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

const MapComponent = () => {
  const handleDirectionsClick = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center">
      <useJsApiLoader
        loadingElement="async"
        googleMapsApiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </useJsApiLoader>
      <button
        onClick={handleDirectionsClick}
        className="hover:bg-emerald-7=00 mt-12 rounded bg-orange-500 px-4 py-2 text-white"
      >
        Get Directions
      </button>
    </div>
  );
};

export default MapComponent;
