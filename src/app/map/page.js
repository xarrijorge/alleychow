'use client'
import dynamic from 'next/dynamic';
import { useState } from 'react';
import MapLayout from './layout';

const MapView = dynamic(() => import('@/components/map/map_view'));

// Dummy data
const places = [
 { id: 1, lat: 5.6719752642817935, lng: -0.15367046393232858, name: 'Place 1' },
 { id: 2, lat: 5.667271676040359, lng: -0.15220036481231994, name: 'Place 2' },
 // Add more places here...
];

export default function MapPage() {
 const [showSidebar, setShowSidebar] = useState(false);

 return (
    <div className="flex flex-col md:flex-row h-screen">
      <button
        className="md:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {/* Hamburger icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className={`fixed md:static transition-transform duration-200 ease-in-out transform md:translate-x-0 ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:w-1/4 w-72 h-screen bg-white shadow-lg z-50`}>
        {/* Sidebar */}
        {/* top of sidebar */}
        <div className="w-full max-w-xs mx-auto rounded overflow-hidden shadow-lg my-10">
        <img className="mx-6 w-12" src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" alt="User Icon"/>
        <div className="px-6 py-4">
            <div className="font-bold text-lg mb-2">Mr Imasiku</div>
            <p className="text-gray-700 text-base">
              imasiku@sartoreality.com
            </p>
            </div>
        </div>
        <div className='shadow-lg h-full '>
            <ul className="overflow-auto my-12 ">
            {places.map((place) => (
                <li key={place.id} className="p-4 hover:bg-orange-200">
                <button>{place.name}</button>
                </li>
            ))}
            </ul>
        </div>

      </div>
      <div className="w-full h-full md:w-3/4">
        {/* Main section */}
        <MapView  />
      </div>
    </div>
 );
}

MapPage.getLayout = function getLayout(page) {
  return (
    <MapLayout>
      {page}
    </MapLayout>
  )
}