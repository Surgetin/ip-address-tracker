import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchSection from "./components/SearchSection";
import MapSection from "./components/MapSection";

const BASE_URL = "https://geo.ipify.org/api/v2/country,city?";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const url = `${BASE_URL}apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ipAddress}`;

  useEffect(() => {
    try {
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
    } catch (error) {
      console.trace(error);
    }
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
