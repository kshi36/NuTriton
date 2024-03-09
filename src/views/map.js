import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import React,{useRef,useEffect} from "react";
import Iframe from 'react-iframe'

import 'mapbox-gl/dist/mapbox-gl.css'

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import FontawesomeMarkers from "mapbox-gl-fontawesome-markers";

mapboxgl.accessToken = 'pk.eyJ1IjoieGlvbmdkIiwiYSI6ImNsdGozcW9hejBsaDgyaXA1djE4YzcyZXkifQ.z-6FL9gKcIZvQJt5FPD4CA';

export default function Map_n() {

//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(-117.2344);
//     const [lat, setLat] = useState(32.8753);
    

//     // const [viewport, setViewport] = useState({
//     //     width: 600,
//     //     height: 600
//     //   });
//     //link redirection functionality
//     useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: 'mapbox://styles/mapbox/outdoors-v12',
//         center: [lng, lat],
//         zoom: 16,
//     });
//     });
    
//     const geojson = {
//         type: 'FeatureCollection',
//         features: [
//           {
//             type: 'Feature',
//             geometry: {
//               type: 'Point',
//               coordinates: [-117.2344, 32.8753]
//             },
//             properties: {
//               title: 'Mapbox',
//               description: 'Washington, D.C.'
//             }
//           },
//           {
//             type: 'Feature',
//             geometry: {
//               type: 'Point',
//               coordinates: [-122.414, 37.776]
//             },
//             properties: {
//               title: 'Mapbox',
//               description: 'San Francisco, California'
//             }
//           }
//         ]
//       };
    
// //     var el = document.createElement('div');     
// //     el.className = "marker";                                  
// // el.style.backgroundImage = 'url(https://placekitten.com/g/50/)';              
// // el.style.width = '50px';                                                      
// // el.style.height = '50px';
// // el.style.borderRadius = '50%';                                                     
// // new mapboxgl.Marker(el).setLngLat([-117.2344, 32.8753]).addTo(map.map);

// for (const feature of geojson.features) {
//     // create a HTML element for each feature
//     const el = document.createElement('div');
//     el.className = 'marker';
  
//     // make a marker for each feature and add to the map
//     map.marker = new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map.map);
//   }
    
//   map.marker = new FontawesomeMarkers({
//     icon: 'fa-solid fa-pizza-slice',
//     iconColor: 'steelblue',
//     color: '#fa7132'
// })
//   .setLngLat([-117.2344, 32.8753])
//   .addTo(map.map);

    return (
        <div class='main' >
        {/* <div ref={mapContainer} className="map-container" style={{height: 800}} /> */}
        <iframe id="if1" width="120%" height="800" style={{visibility:"visible"}} src="https://act.ucsd.edu/maps/"></iframe>
        </div>


        
    );
}
