import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MAP_SERVICE from "../../services/map";
import PLACE_SERVICE from "../../services/index";
import "./Home.css";

const style = {
  width: "100vw",
  height: "80vh",
  position: "absolute"
};

const Home = () => {
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
        PLACE_SERVICE.getPlaces().then(res => {
          console.log(res);
          res.places.forEach(function(marker) {
            const el = document.createElement("div");
            el.className = "markerSafe";
            new mapboxgl.Marker(el)
              .setLngLat(marker.geometry.coordinates)
              .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                  "<h3>" +
                    marker.name +
                    "</h3><p>" +
                    marker.description +
                    "</p>"
                )
              )
              .addTo(map);
          });
        });
        MAP_SERVICE.heatmap().then(res => {
          map.on("load", () => {
            map.addSource("data", {
              type: "geojson",
              data: res.data
            });
            map.addLayer({
              id: "danger",
              type: "heatmap",
              source: "data",
              maxzoom: 24,
              paint: {
                "heatmap-intensity": {
                  stops: [
                    [15, 1],
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
      }
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={style} />;
};

export default Home;
