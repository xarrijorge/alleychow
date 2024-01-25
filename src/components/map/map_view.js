'use client'
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

function HomePage() {
 const googleMapRef = useRef(null);

 useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    let map;

      loader.load().then(() => {
        // 5.6719752642817935, -0.15367046393232858
        map = new google.maps.Map(googleMapRef.current, {
          center: { lat: 5.6719752642817935, lng: -0.15367046393232858 },
          zoom: 18,
        });

        directionsService = new google.maps.DirectionsService();

        // Create a DirectionsRenderer object
        directionsRenderer = new google.maps.DirectionsRenderer();
  
        // Set the map for the directionsRenderer
        directionsRenderer.setMap(map);

        
      const marker = new google.maps.Marker({
        position: { lat: 5.6719752642817935, lng: -0.15367046393232858 },
        map: map,
      });
      const destination = { lat: 5.667271676040359, lng: -0.15220036481231994 };
      // 5.667271676040359, -0.15220036481231994
      directionsService.route(
        {
          origin: marker.getPosition(),
          destination: destination,
          travelMode: 'DRIVING',
        },
        (response, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        }
      );
    });

    // Cleanup function
    return () => {
      if (map) {
        google.maps.event.clearInstanceListeners(map);
      }
    };
 }, []);

 return <div  id="map" ref={googleMapRef} style={{height: '500px'}}/>;
}

export default HomePage;
