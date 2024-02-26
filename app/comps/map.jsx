import React from 'react'
import { GoogleMap, useJsApiLoader , OverlayView} from '@react-google-maps/api';

import { MdLocationPin } from "react-icons/md";

const containerStyle = {
  width: '100%',
  height: '100%'
};

const markerStyle = {
 fontSize: '39px',
};



function MapContainer({lat, long}) {
  const center = {
    lat: lat,
    lng: long
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
       <OverlayView
      position={center}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <MdLocationPin style={markerStyle}/>
    </OverlayView>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapContainer)