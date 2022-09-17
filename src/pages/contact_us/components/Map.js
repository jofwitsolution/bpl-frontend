import React from "react";

const Map = () => {
  return (
    <div className="jof-map container-fluid px-0">
      <div className="jof-map__outer">
        <div className="jof-map__canvas">
          <iframe
            title="BPL office map"
            width="1080"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=1%20Slate%20Lane,%20Nuneaton,%20CV10%209FL%20United%20Kingdom.&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
