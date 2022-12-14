import icon from "../../../assets/airplane-icon.png";
import L from "leaflet";
import classes from "./plane-icon.module.scss";

export const PlaneIcon = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconSize: new L.Point(20, 25),
  className: classes.planeIcon,
});

export const Plane = () => {
  const el = document.createElement("div");
  el.setAttribute("width", "150px");
  el.setAttribute("height", "150px");
  el.setAttribute("background-color", "red");

  return el;
};
