import L from "leaflet";
import icon from "../images/icon-location.svg";

export default L.icon({
  iconSize: [30, 40],
  iconAnchor: [10, 40],
  popupAnchor: [2, -40],
  iconUrl: icon,
});
