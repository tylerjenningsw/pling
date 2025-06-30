import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in React Leaflet
// @ts-expect-error - Leaflet typing issue
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

interface MapViewProps {
  center: [number, number]
  waypoints?: { lat: number; lng: number }[]
  showFullScreen?: boolean
  className?: string
}

function MapController({ center }: { center: [number, number] }) {
  const map = useMap()
  
  useEffect(() => {
    map.setView(center)
  }, [center, map])
  
  return null
}

export function MapView({ 
  center, 
  waypoints = [], 
  showFullScreen = false,
  className = ''
}: MapViewProps) {
  const containerClassName = showFullScreen 
    ? 'fixed inset-0 z-50' 
    : `rounded-ios-card overflow-hidden ${className}`
    
  const pathPositions = waypoints.map(point => [point.lat, point.lng] as [number, number])
  
  return (
    <div className={containerClassName}>
      <MapContainer
        center={center}
        zoom={14}
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{ minHeight: showFullScreen ? '100vh' : '200px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapController center={center} />
        
        {/* User marker */}
        <Marker position={center} />
        
        {/* Route */}
        {pathPositions.length > 0 && (
          <Polyline 
            positions={pathPositions}
            color="#007AFF"
            weight={4}
            opacity={0.8}
          />
        )}
        
        {/* Waypoint markers */}
        {waypoints.map((point, index) => (
          <Marker 
            key={index} 
            position={[point.lat, point.lng]}
            opacity={0.6}
          />
        ))}
      </MapContainer>
    </div>
  )
}