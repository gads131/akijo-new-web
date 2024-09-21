import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import GoogleMapComponent from "./GoogleMapComponent";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 1.327016, // 1.327016, 124.842014

  lng: 124.842014,
};

const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

const FindUs = () => {
  const handleDirectionsClick = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div
        id="find-us"
        className="flex w-full flex-col items-center justify-center"
      >
        <h2 className="flex justify-center text-base font-bold uppercase tracking-wider text-slate-900 lg:text-3xl">
          Temukan kami
        </h2>
        <div className="mt-1 h-1 w-1/5 max-w-xs items-center justify-center bg-red-400 object-center"></div>
        <div className="min-w-[400px] rounded-md object-cover pt-12 md:min-w-[600px] lg:min-w-[800px]">
          <GoogleMapComponent />
        </div>
      </div>
    </>
  );
};

export default FindUs;
