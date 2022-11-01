import React from "react";
import arrow from '../images/icon-arrow.svg';

const FormInput = ({setIpAddress}) => {     
    return (
        <div className="formInput">
            <form className="form_container" onSubmit={e => {e.preventDefault();}}>
                <input type="text" id="input" onChange={(e) => setIpAddress(e.target.value)} required={true} placeholder="Search for any IP address or domain"/>
                <button type="submit" className="input_btn">
                    <img src={arrow} alt="arrow"/>
                </button>
            </form>
        </div>
    );
};

export default FormInput
