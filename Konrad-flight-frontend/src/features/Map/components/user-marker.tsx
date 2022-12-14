import { ReactElement, SetStateAction, useEffect, useState } from "react";
import { useMap, Marker, Popup } from "react-leaflet";
import { Icon } from "./user-icon";

export const UserMarker = (): ReactElement => {
  const [position, setPosition] = useState(null);
  const map = useMap();

  const isGeoLocationAvailable = position !== null;

  const assignListeners = () => {
    map.locate().on("locationfound", function (e: any) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  };

  useEffect(() => {
    assignListeners();
  }, [map]);

  return isGeoLocationAvailable ? (
    <Marker position={position} icon={Icon}>
      <Popup>Jesteś tu</Popup>
    </Marker>
  ) : (
    <></>
  );
};
