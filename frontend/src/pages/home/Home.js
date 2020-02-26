import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MAP_SERVICE from "../../services/map";

const style = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const Home = () => {
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
      MAP_SERVICE.heatmap().then(res => {
        console.log(res);
        map.on("load", () => {
          map.addSource("data", {
            type: "geojson",
            data: res.data
          });
          map.addLayer({
            id: "danger",
            type: "heatmap",
            source: "data",
            maxzoom: 15,
            paint: {
              "heatmap-intensity": {
                stops: [
                  [11, 1],
                  [15, 3]
                ]
              },
              "heatmap-opacity": {
                default: 1,
                stops: [
                  [14, 1],
                  [15, 0]
                ]
              }
            }
          });
          setMap(map);
          map.resize();
        });
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={style} />;
};

export default Home;
