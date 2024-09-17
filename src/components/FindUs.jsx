import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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
        className="relative flex flex-col items-center justify-center "
      >
        <h2 className="flex justify-center text-base font-bold uppercase tracking-wider text-slate-900 lg:text-3xl">
          Temukan kami
        </h2>
        <div className="mt-1 h-1 w-1/5 max-w-xs items-center justify-center bg-red-400 object-center"></div>
        <div className="mx-auto mt-8 flex w-full max-w-4xl flex-col items-center rounded border  p-1 shadow-lg">
          <LoadScript
            googleMapsApiKey={
              import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY
            }
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
          <button
            onClick={handleDirectionsClick}
            className="hover:bg-emerald-7=00 my-4 rounded bg-lime-400 px-4 py-2 text-slate-700 hover:bg-lime-700 hover:text-slate-100"
          >
            Get Directions
          </button>
        </div>
      </div>
    </>
  );
};

export default FindUs;
