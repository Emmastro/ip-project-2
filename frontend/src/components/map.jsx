import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const SalaryCharts = ({ jobs }) => {
  // Set the center of the map to the first job's location
  const center = {
    lat: jobs[0].latitude,
    lng: jobs[0].longitude,
  };

  // Define the map options
  const mapOptions = {
    zoom: 8,
    center: center,
  };

  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={{ width: '100%', height: '500px' }} options={mapOptions}>
        {jobs.map((job) => (
          <Marker key={job.id} position={{ lat: job.latitude, lng: job.longitude }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default SalaryCharts;
