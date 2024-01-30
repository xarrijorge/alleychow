"use client"
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [selectedFoodGroup, setSelectedFoodGroup] = useState("");

  return (
      <nav className="bg-white py-4 px-6 flex flex-col md:flex-row items-center md:justify-between border-b border-gray-200">
        {/* <div className="mb-4 md:mb-0"> */}
        <input
          type="text"
          placeholder="Find Street Food"
          className="w-full md:w-6/10 lg:w-6/10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {/* </div> */}
        <div className="flex justify-between mt-4 md:mt-0 ">
          <select
            value={selectedFoodGroup}
            onChange={(e) => setSelectedFoodGroup(e.target.value)}
            className="ml-4 px-4 py-2 mx-4 rounded-md focus:outline-none "
          >
            <option value="">All Food Groups</option>
            <option value="1">Food Group 1</option>
            {/* Add more food group options */}
          </select>
          <button className="bg-orange-400 text-white px-12 rounded-md hover:bg-orange-600 ml-4 border mx-4">
            Search
          </button>
        </div>
      </nav>

      
   
  );
}
