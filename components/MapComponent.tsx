"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

// Fix marker icon issue in Leaflet
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

interface MapComponentProps {
  position: [number, number];
}

const MapComponent = ({ position }: MapComponentProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate async data fetching
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds to simulate loading delay
  }, []);

  // Handle hydration issue for SSR
  useEffect(() => {
    if (typeof window === "undefined") return;
  }, []);

  return (
    <div className="relative h-96 w-full rounded-lg overflow-hidden z-10">
      {isLoading ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ClipLoader color="#3498db" size={50} />
        </div>
      ) : (
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          />
          <Marker position={position}>
            <Popup>Your location</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default MapComponent;
