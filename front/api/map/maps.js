import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { icon } from "leaflet";

const Map = () => {
    const ICON = icon({
        iconUrl: "/img/LogoPagina.svg",
        iconSize: [55, 55],
      })
    
  return (
    <MapContainer center={[-34.585250136738544,-58.44405126383858]} zoom={18} scrollWheelZoom={true} dragable={false} style={{height: "100%", width: "100%"} }>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2F0ZXBlY3UiLCJhIjoiY2w3M2J2ZDNzMTZzYjN2cXA3aWtvdzlzMSJ9.QNQF5jWdWBzacHjxkpkk9w`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
        />
      <Marker 
        position={[-34.585250136738544,-58.44405126383858]}
        icon={ICON}
        draggable={false}
        animate={true}
      >
        <Popup>
          Te esperamos !!!
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map