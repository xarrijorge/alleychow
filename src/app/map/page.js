'use client'

import MapView from '@/components/map/map_view';



export default function MapPage() {
  const places = [
    { lat: 5.67028300690168, lng: -0.15249768908456168 },
    // Add more places here...
  ];

 return (  
   <div className='w-full h-auto flex justify-center'>
      <div className="w-full h-96 md:w-3/4">
        <MapView places={places}  />
      </div>
   </div>
 );
}

