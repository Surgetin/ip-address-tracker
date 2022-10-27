import React from "react";

const InfoContainer = ({ip, location, timezone, isp}) => {     
    const infoData = [ 
        {
            header: "IP Address",
            fetchedInfo: ip,
        },
        {
            header: "Location",
            fetchedInfo: location,
        },
        {
            header: "Timezone",
            fetchedInfo: `UTC ${timezone}`,
        },
        {
            header: "ISP",
            fetchedInfo: isp,
        },
    ]
    
    return (
        <div className="info_container">
            <div className="info_content">
                <div className="info_lists">
                    {infoData.map((info) => (
                        <div key={info.key} className="info_list">
                            <h1 className="info_header">
                                {info.header}
                            </h1>
                            <p className="info_content">
                                {info.fetchedInfo}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoContainer