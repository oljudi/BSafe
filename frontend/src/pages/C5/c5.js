import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MAP_CCINCO from "../../services/mapc5";
import "./C5.css";

const style = {
  width: "100vw",
  height: "80vh",
  position: "absolute"
};

const Ccinco = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const center = [pos.coords.longitude, pos.coords.latitude];
          new mapboxgl.Marker().setLngLat(center).addTo(map);
        });
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/dark-v10",
          center: [-99.1353989, 19.4326018],
          zoom: 10
        });
        MAP_CCINCO.map().then(res => {
          res.data.features.forEach(function(marker) {
            const el = document.createElement("div");
            el.className = "marker";
            new mapboxgl.Marker(el)
              .setLngLat(marker.geometry.coordinates)
              .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                  "<h3>" +
                    "C5 Camera" +
                    "</h3><p>" +
                    marker.properties.estatus_conectividad +
                    "</p>"
                )
              )
              .addTo(map);
          });
        });
      }
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={style} />;
};

export default Ccinco;
