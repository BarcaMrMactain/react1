import { useEffect, useRef } from "react";

// Leaflet map og css
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = ({ lat = 56, lon = 10, weathertext = "" }) => {

  const refMapContainer = useRef(); //reference til div'en der indeholder kortet
  const refMap = useRef();          // reference til selve Leaflet kort-instansen
  const refMarker = useRef();

  console.log( lat, lon)

  //Bygger kortet første gang - skaber kortet
  useEffect(() => {

    // Hvis ikke kort-instansen findes iforvejen så.... bygger vi kortet
    if (!refMap.current) {

      refMap.current = L.map(refMapContainer.current).setView([56.406795099371465, 10.875946366813997], 17);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      } ).addTo( refMap.current );

      refMarker.current = L.marker([lat, lon]).addTo(refMap.current).bindPopup(weathertext).openPopup();
    }

  }, []);

  //Skift view på det allerede eksisterne kort - når der er ændringer til lat el. lon
  useEffect(() => {

    if (refMap.current) {
        refMap.current.setView([lat, lon], 13)
        refMarker.current.setLatLng([ lat, lon ]).bindPopup(weathertext).openPopup() //flyt markør ved skift af view
    }

  }, [lat, lon]);

  // når der er ændringer i kortets view


  return (

    <section className='w-full px-4 py-2 border border-white rounded-lg bg-transparent'>

      <div ref={ refMapContainer } className="w-full" style={{ minHeight: "320px" }}></div>

    </section>

  );
};

export default LeafletMap;
