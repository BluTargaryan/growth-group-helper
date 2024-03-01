import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';


const icon = L.icon({ iconUrl: "/marker-icon.png" });

const Map = () => {
  return (
    <MapContainer center={[52.413975, -1.498518]} zoom={20} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
       <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      <Marker position={[52.413975, -1.498518]} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map