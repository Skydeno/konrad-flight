import { ReactElement, SetStateAction, useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "./airport-icon";

export const AirportMarker = (airport): ReactElement => {
  const [airports, setAirports] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    airportsData().then((value) => {
      if (mounted) {
        setAirports(value);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {/* {loading === true ? (
        <></>
      ) : (
        airports.map((airport) => {
          <Marker
            position={[airport.lat, airport.lng]}
            icon={Icon}
            key={airport.icao_code}
          >
            <Popup>{airport.name}</Popup>
          </Marker>;
        })
      )} */}
    </>
  );
};
