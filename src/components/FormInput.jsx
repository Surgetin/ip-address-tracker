import React from "react";
import arrow from '../images/icon-arrow.svg';

const FormInput = () => {
    return (
        <div className="formInput">
            <form className="form_container">
                <input type="text" id="input" placeholder="Search for any IP address or domain"/>
                <button className="input_btn" onclick="handleIpTracker()">
                    <img src={arrow} alt="arrow"/>
                </button>
            </form>
        </div>
    );
};

export default FormInput