import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { useRef } from "react";

export default function Map({ locations = [], onMarkerClick = () => {} }) {
    const mapRef = useRef(null);

    if (locations.length === 0) {
        return (
            <div className="w-full h-full animate-pulse bg-gradient-to-br from-gray-200 to-gray-300" />
        );
    }

    return (
        <MapContainer
            center={locations.length > 0 ? [locations[0].lat, locations[0].lng] : [0, 0]}
            zoom={14}
            style={{ height: "100%", width: "100%"}}
            zoomControl={false}
            attributionControl={false}
            ref={mapRef}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((location) => (
                <Marker
                    key={`${location.lat},${location.lng}`}
                    icon={ICON}
                    position={[location.lat, location.lng]}
                    eventHandlers={{
                        click: () => onMarkerClick(location)
                    }}
                />
            ))}
        </MapContainer>
    )
}


const ICON = icon({
  iconUrl: "/assets/marker.png",
  iconSize: [30, 45],
})
