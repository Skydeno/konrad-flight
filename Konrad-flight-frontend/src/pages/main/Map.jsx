import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import classes from "./Map.module.scss";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import icon from "../../assets/icon.png";
import L from "leaflet";

const Icon = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconSize: new L.Point(20, 25),
});

function Location() {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={Icon}>
      <Popup>Jesteś tu</Popup>
    </Marker>
  );
}

export const Map = () => {
  return (
    <div id="map" className={classes.mapContainer}>
      <MapContainer
        center={[54.369312, 18.605108]}
        zoom={7}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Location />
      </MapContainer>
    </div>
  );
};
