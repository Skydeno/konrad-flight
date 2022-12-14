import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import classes from "./Map.module.scss";
import "leaflet/dist/leaflet.css";
import { UserMarker } from "./components/user-marker";
import {
  INITIAL_MAP_ZOOM,
  MAP_CENTER_LOCALIZATION,
  MAP_TILE_LAYER_ATTRIBUTION,
  MAP_TILE_LAYER_URL,
} from "./consts/map.const";
import { LatLngTuple } from "leaflet";
import { PlaneMarker } from "./components/plane-markers";
import { AirportMarker } from "./components/airport-marker";

export const Map = () => {
  const mapRef = useRef(null);

  return (
    <div id="map" className={classes.mapContainer}>
      <MapContainer
        center={MAP_CENTER_LOCALIZATION as LatLngTuple}
        zoom={INITIAL_MAP_ZOOM}
        style={{ height: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          attribution={MAP_TILE_LAYER_ATTRIBUTION}
          url={MAP_TILE_LAYER_URL}
        />
        <PlaneMarker mapRef={mapRef} />
        <UserMarker />
      </MapContainer>
    </div>
  );
};
