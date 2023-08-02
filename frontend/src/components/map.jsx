import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = { lat: 52.4146, lng: 0.752958 }; // Default center for the map

const SalaryCharts = ({ data }) => {
  // Aggregation logic to group data by category and calculate average salary
  const groupDataByCategory = (data) => {
    const groupedData = {};
    const averageSalaries = {};

    data.results.forEach((result) => {
      const categoryLabel = result.category.label;
      if (!groupedData[categoryLabel]) {
        groupedData[categoryLabel] = [];
        averageSalaries[categoryLabel] = 0;
      }
      groupedData[categoryLabel].push(result);
      averageSalaries[categoryLabel] += (result.salary_min + result.salary_max) / 2;
    });

    const labels = Object.keys(groupedData);
    labels.forEach((label) => {
      averageSalaries[label] /= groupedData[label].length;
    });

    return { labels, averageSalaries };
  };

  //! Google Maps API options - ERROR HERE.
  const libraries = ['places'];
  const { isLoaded, loadError } = useLoadScript({
    // googleMapsApiKey: 'AIzaSyCT3L_vNLSQ17JoSljnbQqFHV3_j5SAC4I', // YOUR_GOOGLE_MAPS_API_KEY
    libraries,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  // Render map markers for job locations
  const renderMarkers = () => {
    return data.results.map((result) => (
      <Marker key={result.id} position={{ lat: result.latitude, lng: result.longitude }} />
    ));
  };

  const { labels, averageSalaries } = groupDataByCategory(data);

  return (
    <>
      <h2>Job Locations Map</h2>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
      >
        {renderMarkers()}
      </GoogleMap>

      <h2>Job Categories and Average Salaries</h2>
      <ul>
        {labels.map((label) => (
          <li key={label}>{`${label}: ${averageSalaries[label].toFixed(2)}`}</li>
        ))}
      </ul>
    </>
  );
};

export default SalaryCharts;
