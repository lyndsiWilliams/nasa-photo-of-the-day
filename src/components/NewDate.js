import React from "react";

const Footer = props => {
    console.log(props);

    return (
        <div>
            <button onClick={() => alert(props.list.service_version)}>Server Version</button> {/* ser_ver */}
            <button onClick={() => alert("HD/SD switch!")}>Want to see it in HD?</button> {/* switch src between url and hdurl */}
            <button onClick={() => alert(props.list.media_type)}>Media Type</button> {/* med_type */}
        </div>
    );
};

export default Footer;