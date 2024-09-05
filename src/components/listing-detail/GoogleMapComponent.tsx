// components/GoogleMapComponent.tsx
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center: google.maps.LatLngLiteral = {
  lat: 37.7749, // Default to San Francisco
  lng: -122.4194,
};

interface GoogleMapComponentProps {
  apiKey: string;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ apiKey }) => {
  const [location, setLocation] = useState<google.maps.LatLngLiteral>(center);
  const [address, setAddress] = useState<string>('');

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleSearch = async () => {
    if (!address) return;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        setLocation({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter an address"
      />
      <button onClick={handleSearch}>Search</button>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={location}
          zoom={12}
        >
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
