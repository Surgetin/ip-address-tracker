import React from "react";

const infos = [ 
    {
        header: "IP Address",
        fetchedInfo: "122.312.321.23"
    },
    {
        header: "Location",
        fetchedInfo: "Budapest, Kelenföld 1134"
    },
    {
        header: "Timezone",
        fetchedInfo: "UTC-05:00"
    },
    {
        header: "ISP",
        fetchedInfo: "Vodafone"
    },
]   

const MapSection = () => {
    return (
        <div className="info_container">
            <div className="info_content">
                <div className="info_lists">
                    {infos.map((info) => (
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