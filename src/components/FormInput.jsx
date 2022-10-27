import React from "react";
import arrow from '../images/icon-arrow.svg';

const FormInput = () => {
    
    return (
        <div className="formInput">
            <form className="form_container">
                <input type="text" id="input" required={true} placeholder="Search for any IP address or domain"/>
                <button type="submit" className="input_btn" onclick="handleIpTracker()">
                    <img src={arrow} alt="arrow"/>
                </button>
            </form>
        </div>
    );
};

export default FormInput