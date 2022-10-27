import React from "react";

const InfoContainer = ({ipAddress, location, timezone, isp}) => {     
    const infoData = [ 
        {
            id: 1,
            header: "IP Address",
            fetchedInfo: ipAddress,
        },
        {
            id: 2,
            header: "Location",
            fetchedInfo: location,
        },
        {
            id: 3,
            header: "Timezone",
            fetchedInfo: `UTC ${timezone}`,
        },
        {
            id: 4,
            header: "ISP",
            fetchedInfo: isp,
        },
    ]
    
    return (
        <div className="info_container">
            <div className="info_content">
                <div className="info_lists">
                    {infoData.map((info) => (
                        <div key={info.id} className="info_list">
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