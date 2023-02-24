import React from 'react';
import styles from './Map.module.scss';
// import { MapContainer, TileLayer } from 'react-leaflet';
import Pavlodar from './../../assets/images/Pavlodar_Map.png'

const Map = ({coordinat, city}) => {
  return (
    <div
    className = {styles.page_right_card}
    >
      {/* <MapContainer
      center = {coordinat}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        "height": '400px'
      }}
    >
        <TileLayer 
          url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
      </MapContainer> */}
      <img src = {Pavlodar} alt="Pavlodar" />
    </div>
  )
}

export default Map