import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

const style = {
  width: "100vw",
  height: "30vh",
  position: "absolute"
};

function Map() {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v10", // stylesheet location
        center: [-99.1353989, 19.4326018],
        zoom: 11
      });
      map.on("load", () => {
        map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true
            },
            position: "bottom",
            trackUserLocation: true
          })
        );
        setMap(map);
        map.resize();
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={style} />;
}

export default Map;
