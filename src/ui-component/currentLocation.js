import React from 'react';
import { Geolocation } from 'react-geolocation';

const YourComponent = () => {
  const handlePosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // Use the latitude and longitude values as needed
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
  };

  const handleError = (error) => {
    console.error(error.message);
  };

  return (
    <div>
      <Geolocation
        onSuccess={handlePosition}
        onError={handleError}
      />
    </div>
  );
};

export default YourComponent;
