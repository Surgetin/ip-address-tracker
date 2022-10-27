import React from "react";


const MapSection = () => {     
    
    const infoData = [ 
        {
            header: "IP Address",
            fetchedInfo: "89.134.2.91",
        },
        {
            header: "Location",
            fetchedInfo: "location",
        },
        {
            header: "Timezone",
            fetchedInfo: `UTC ${"timezone"}`,
        },
        {
            header: "ISP",
            fetchedInfo: "Isp",
        },
    ]
    
    return (
        <div className="info_container">
            <div className="info_content">
                <div className="info_lists">
                    {infoData.map((info) => (
                        <div className="info_list">
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

export default MapSection