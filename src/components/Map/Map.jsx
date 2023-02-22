import React from 'react';
import styles from './Map.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({coordinat, city}) => {
  return (
    <div className={styles.page_right_card}>
      {/* <MapContainer 
        center={coordinat}
        zoom={13}
        // scrollWheelZoom={false}
        style={{ height: '400px', width: '400px'}}
      >
        <TileLayer url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg" />
        <Marker position={coordinat}> */}
          {/* <Popup> */}
          {city}
          {/* </Popup> */}
        {/* </Marker>
      </MapContainer> */}
    </div>
  )
}

export default Map