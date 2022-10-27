import React from "react";
import FormInput from "./FormInput";
import InfoContainer from "./InfoContainer";

const SearchSection = ({ipAddress, location, timezone, isp}) => {
    return (
        <div className="search_container">
            <h1 className="search_heading">IP Address Tracker</h1>   
            
            <FormInput />
            <InfoContainer 
                ipAddress={ipAddress}
                location={location}
                timezone={timezone}
                isp={isp}
            />         
        </div>
    );
};

export default SearchSection;