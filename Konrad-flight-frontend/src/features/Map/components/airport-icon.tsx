import icon from "../../../assets/icon.png";
import L from "leaflet";

export const Icon = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconSize: new L.Point(20, 25),
});
