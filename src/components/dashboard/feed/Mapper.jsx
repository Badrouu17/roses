import React, { useState, useEffect } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import { Link, useParams } from "react-router-dom";

const Mapper = ({ google }) => {
  const { rose_name, qnt } = useParams();
  const [location, setLocation] = useState({
    lng: 0,
    lat: 0,
  });

  const [currentLocation, setCurrentLocation] = useState({
    lng: 3.087458,
    lat: 36.732251,
  });
  let [clicked, setClicked] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  });

  const placeMarker = (mapProps, map, e) => {
    if (clicked === 0) {
      let marker = new google.maps.Marker({
        position: e.latLng,
        map: map,
      });
      map.panTo(e.latLng);
      setLocation({ lng: e.latLng.lng(), lat: e.latLng.lat() });
      setClicked(clicked + 1);
    }
  };

  return (
    <div className="previous py-12 px-12 flex flex-row content-center justify-around align-middle">
      <div className="w-3/4 bg-white rounded overflow-hidden shadow flex flex-col justify-start align-middle">
        <div className="flex flex-col items-center content-center justify-center align-middle">
          <p className=" mb-2 text-6xl text-red-500 text-center lobster-font">
            choose where to send 🌹
          </p>
          <div className="w-3/4 bg-white rounded overflow-hidden shadow flex flex-col justify-around align-middle">
            <Map
              containerStyle={{
                position: "relative",
                height: "32vh",
              }}
              google={google}
              zoom={16}
              center={currentLocation}
              onClick={placeMarker}
            >
              <Marker
                title={"You are here"}
                name={"Your location"}
                position={currentLocation}
              />
              <InfoWindow visible={true} position={currentLocation}>
                <div>
                  <h1>your current location</h1>
                </div>
              </InfoWindow>
            </Map>
          </div>
          {clicked === 1 ? (
            <Link
              to={`/dashboard/feed/${rose_name}/${qnt}/${location.lng}-${location.lat}`}
              className=" w-1/3 h-12 text-2xl mt-8 mb-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              NEXT
            </Link>
          ) : (
            <Link
              to={`/dashboard/feed/${rose_name}/${qnt}`}
              className="opacity-50 cursor-not-allowed w-1/3 h-12 text-2xl mt-8 mb-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              NEXT
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const apiKey = "AIzaSyBeUZhH5kEQhF6FyB2bjAfI5yETsNbQWAQ";

export default GoogleApiWrapper({
  apiKey,
})(Mapper);
