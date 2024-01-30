'use client'

import MapView from '@/components/map/map_view';



export default function MapPage() {


 return (  
   <div className='w-full h-auto flex justify-center'>
      <div className="w-full h-96 md:w-3/4">
        <MapView  />
      </div>
   </div>
 );
}

