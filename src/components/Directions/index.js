import React from 'react';
import MapViewDirection from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirection
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyBxLPBCilS_zmFRpDGMuzdMk66THz9W21I"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
