import { ReactElement, SetStateAction, useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { Plane, PlaneIcon } from "./plane-icon";
import { getFlights } from "../../../services/aviation.service";
import { FlightValueIndexesEnum } from "../../../enums/flights-value-indexes.enum";
import { RotatedMarker } from "leaflet-marker-rotation";
import L from "leaflet";

export const PlaneMarker = ({ mapRef }): ReactElement => {
  const [planes, setPlanes] = useState<any[]>([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getFlights().then((data) => {
        const response = data.data.states;
        setPlanes(
          response
            .slice(0, 20)
            .filter(
              (flight) =>
                flight[FlightValueIndexesEnum.LATITUDE] &&
                flight[FlightValueIndexesEnum.LONGTITUDE]
            )
        );
      });
    }
  }, []);

  if (!planes?.length) {
    return <></>;
  }

  return (
    <div>
      <>
        {planes?.map((plane, index) => {
          return (
            <Marker
              position={[
                plane[FlightValueIndexesEnum.LATITUDE],
                plane[FlightValueIndexesEnum.LONGTITUDE],
              ]}
              icon={
                new L.DivIcon({
                  html: Plane(),
                })
              }
              key={`${plane[FlightValueIndexesEnum.CALLSIGN]}_${index}`}
            >
              <Popup>{plane[FlightValueIndexesEnum.CALLSIGN]}</Popup>
            </Marker>
          );
        })}
      </>
    </div>
  );
};
