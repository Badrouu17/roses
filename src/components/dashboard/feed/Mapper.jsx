import React, { useState, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const Mapper = ({ google }) => {
  const [currentLocation, setCurrentLocation] = useState({
    lng: 3.087458,
    lat: 36.732251,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  });

  return (
    <div className="previous py-12 px-12 flex flex-row content-center justify-around align-middle">
      <div class="w-3/4 bg-white rounded overflow-hidden shadow flex flex-col justify-start align-middle">
        <div className="flex flex-col items-center content-center justify-center align-middle">
          <p className=" mb-2 text-6xl text-red-500 text-center lobster-font">
            choose where to send 🌹
          </p>
          <div class="w-3/4 bg-white rounded overflow-hidden shadow flex flex-col justify-around align-middle">
            <Map
              containerStyle={{
                position: "relative",
                height: "32vh",
              }}
              google={google}
              zoom={16}
              center={currentLocation}
            >
              <Marker
                title={"You are here"}
                name={"Your location"}
                position={currentLocation}
              />
            </Map>
          </div>
          <button
            class="w-1/3 h-12 text-2xl mt-8 mb-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

const apiKey = "AIzaSyBeUZhH5kEQhF6FyB2bjAfI5yETsNbQWAQ";

export default GoogleApiWrapper({
  apiKey,
})(Mapper);
