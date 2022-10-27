import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchSection from "./components/SearchSection";
import MapSection from "./components/MapSection";

function App() {
  const [localIp, setLocalIp] = useState("");
  const [ip, setIP] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const [latitude, setLatitude] = useState("40.65");
  const [longitude, setLongitude] = useState("-73.94");

  const url = `https://geo.ipify.org/api/v2/country?apiKey=at_miiZFc28lwpXDJQFOVItcXbaKlzay&ipAddress=${localIp}`;

  const getData = async () => {
    axios.get(url).then((respone) => {
      setIP(respone.data.ip);
      setLocation(respone.data.location.region);
      setTimezone(respone.data.location.timezone);
      setIsp(respone.data.isp);
      setLatitude(respone.location.lat);
      setLongitude(respone.location.lng);
      console.log(respone);
    });

    const res = await axios.get("https://geolocation-db.com/json/");
    setLocalIp(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return (
    <div className="App">
      <SearchSection
        ipAddress={ip}
        location={location}
        timezone={timezone}
        isp={isp}
      />
      <MapSection latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;
