import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchSection from "./components/SearchSection";
import MapSection from "./components/MapSection";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_UIog4dlM2wvVN14D9kZMf1tmAMhxp&ipAddress=${ipAddress}`;

  useEffect(() => {
    const getData = async () => {
      axios.get(url).then((respone) => {
        setIpAddress(respone.data.ip);
        setLocation(respone.data.location.region);
        setTimezone(respone.data.location.timezone);
        setIsp(respone.data.isp);
        setLatitude(respone.data.location.lat);
        setLongitude(respone.data.location.lng);
      });
    };

    getData();
  }, [url]);

  return (
    <div className="App">
      <SearchSection
        ipAddress={ipAddress}
        location={location}
        timezone={timezone}
        isp={isp}
        setIpAddress={setIpAddress}
      />
      <MapSection latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;
