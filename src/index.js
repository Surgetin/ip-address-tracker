import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { SearchSection } from "./components/SearchSection";
import { MapSection } from "./components/MapSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchSection />
    <MapSection />
  </React.StrictMode>
);
