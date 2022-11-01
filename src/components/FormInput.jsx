import React, { useState } from "react";
import arrow from '../images/icon-arrow.svg';

const FormInput = ({ getData }) => {   
    const [searchedIP, setSearchedIP] = useState("")

    const handleFetchIpAddress = (e) => {
        e.preventDefault()
        getData()
    };

    const handleFetchInput = (e) => {
        const value = e.target.value
        setSearchedIP(value)
        console.log(value)
    }
    
    return (
        <div className="formInput">
            <form className="form_container" onSubmit={handleFetchIpAddress}>
                <input type="text" value={searchedIP} onChange={handleFetchInput} id="input" required={true} placeholder="Search for any IP address or domain"/>
                <button type="submit" className="input_btn">
                    <img src={arrow} alt="arrow"/>
                </button>
            </form>
        </div>
    );
};

export default FormInput
