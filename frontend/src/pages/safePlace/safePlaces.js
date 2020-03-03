import React, { useContext } from "react";
import Geocoder from "react-mapbox-gl-geocoder";
import ReactMapGL from "react-map-gl";
import { MyContext } from "../../context";

const mapAccess = {
  mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_KEY
};

const mapStyle = {
  width: "100vw",
  height: "77vh",
  position: "absolute"
};

const queryParams = {
  country: "mx"
};

const SafePlace = () => {
  const context = useContext(MyContext)

  const onSelect = (e, item) => {
    context.handleOnSelectMap(e)
    console.log(item)
  }

  const changeViewPort = newViewPort => {
    context.updateViewPort(newViewPort)
  }

  return (
    <MyContext.Consumer>
      {context => {
        const { viewport } = context.state;
        return (
          <div>
            <Geocoder
              {...mapAccess}
              onSelected={onSelect}
              viewport={viewport}
              hideOnSelect={true}
              queryParams={queryParams}
              inputPlaceholder='search'
            />
            <ReactMapGL
              {...mapAccess}
              {...viewport}
              {...mapStyle}
              onViewportChange={changeViewPort}
            />
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default SafePlace;
