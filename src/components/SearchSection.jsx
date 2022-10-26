import React from "react";
import FormInput from "./FormInput";
import InfoContainer from "./InfoContainer";

export const SearchSection = () => {
    return (
        <div className="search_container">
            <h1 className="search_heading">IP Address Tracker</h1>   
            
            <FormInput />
            <InfoContainer/>         
        </div>
    );
};