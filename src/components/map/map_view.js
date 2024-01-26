'use client'
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

function MapView() {
 const googleMapRef = useRef(null);

  // List of places
  // 5.67028300690168, -0.15249768908456168
  // 5.669956015850352, -0.15213779515707945
  // 5.670991486877253, -0.15401941449532894
  const places = [
    { lat: 5.67028300690168, lng: -0.15249768908456168 },
    { lat: 5.669956015850352, lng: -0.15213779515707945 },
    { lat: 5.670991486877253, lng: -0.15401941449532894 },
    // Add more places here...
  ];

 useEffect(() => {

    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    let map;
    let markers = []

    loader.load().then(() => {
        // 5.6719752642817935, -0.15367046393232858
        map = new google.maps.Map(googleMapRef.current, {
          center: { lat: 5.670497108084926, lng: -0.15376514161178176  },
          zoom: 18,
          styles: [
            {
              featureType: "all",
              stylers: [
                { hue: "#000000" },
                { saturation: -100 },
              ],
            },
          ],
        });

        markers.forEach((marker) => {
          marker.setMap(null);
        });
        // 5.670497108084926, -0.15376514161178176
      const marker = new google.maps.Marker({
        position: { lat: 5.670497108084926, lng: -0.15376514161178176 },
        map: map,
        icon: {
          url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', // Replace with the URL of your icon
        },
      });
      if ('geolocation' in navigator) {
        const handleSuccess = (position) => {
          const { latitude, longitude } = position.coords;
          marker.setPosition({ lat: latitude, lng: longitude });
          map.setCenter({ lat: latitude, lng: longitude });
        };
    
        const handleError = (error) => {
          console.log(`An error occurred: ${error}`);
        };
    
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        };
    
        navigator.geolocation.watchPosition(handleSuccess, handleError, options);
     } else {
        alert('Geolocation is not supported by your browser.');
     }
      markers.push(marker)
      places.forEach((place)=>{
        new google.maps.Marker({
          position: place,
          map: map,
          // icon: {
          //   url: 'http://maps.gstatic.com/mapfiles/ms2/micons/restaurant.png', 
          //   scaledSize: new google.maps.Size(40, 40)// Replace with the URL of your icon
          // },
        });
      })
      // 5.667271676040359, -0.15220036481231994

  });

    // Cleanup function
    return () => {
      if (map) {
        google.maps.event.clearInstanceListeners(map);
      }
    };
 }, []);

 return <div  id="map" ref={googleMapRef} style={{height: '100%'}}/>;
}

export default MapView;
