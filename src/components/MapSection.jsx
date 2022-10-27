import React from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import icon from "./icon"
import ChangeMapView from './ChangeMapView'

const MapSection = ({latitude, longitude}) => {
    return (
        <div className="map_container">
            <MapContainer center={[latitude, longitude]} zoom={10} scrollWheelZoom={true} style={{ height: "100%", width: "100wh"}}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={icon} position={[latitude, longitude]} />
                <ChangeMapView latitude={latitude} longitude={longitude}/>
            </MapContainer>            
        </div>
    );
};

export default MapSection;

