import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import type { Stadium } from '../types/stadium'
import { StadiumCard } from './StadiumCard'

interface StadiumMapProps {
  stadiums: Stadium[]
}

export function StadiumMap({ stadiums }: StadiumMapProps) {
  return (
    <MapContainer
      center={[51.15, 10.45]}
      zoom={6}
      scrollWheelZoom
      className="stadium-map"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stadiums.map((stadium) => (
        <Marker
          key={stadium.id}
          position={[stadium.latitude, stadium.longitude]}
        >
          <Popup minWidth={260}>
            <StadiumCard stadium={stadium} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
