import React from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import icon from "./icon"

const position = [51.505, -0.09]

export const MapSection = () => {
    return (
        <div className="map_container">
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: "100%", width: "100wh"}}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={icon} position={position} />
            </MapContainer>            
        </div>
    );
};

