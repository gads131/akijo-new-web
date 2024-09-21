import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 1.327016,
  lng: 124.842014,
};

const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

function GoogleMapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // Ensure that the google object is available after the API is loaded
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const handleDirectionsClick = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
    window.open(url, "_blank");
  };

  return isLoaded ? (
    <div className="flex w-full max-w-full flex-col items-center justify-center rounded-lg border-2 border-slate-900 p-2 pt-12 shadow-lg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
      <button
        onClick={handleDirectionsClick}
        className="mt-4 rounded bg-lime-400 px-4 py-2 text-slate-700 hover:bg-lime-700 hover:text-slate-100"
      >
        Get Directions
      </button>
    </div>
  ) : (
    <></>
  );
}

export default GoogleMapComponent;
