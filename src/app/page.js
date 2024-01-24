"use client"
import Image from "next/image";
import { useState } from "react";
import Navigation from "./components/navigation";

export default function Home() {
  const [selectedFoodGroup, setSelectedFoodGroup] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation / >

      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="bg-orange-400 w-full md:w-5/12 rounded-lg p-8 flex items-center justify-center order-1 md:order-2">
          <Image
            src="/wakyee.png" // Replace with your image path
            alt="Street Food"
            width={400}
            height={300}
            priority
          />
        </div>

        <div className="flex flex-col items-start space-y-4 md:w-7/12 order-2 md:order-1">
          <h1 className="text-2xl font-bold mt-8 mt:mb-0 md:text-7xl">
            Welcome to Street Food Listing
          </h1>
          <p className="text-lg text-gray-600">
            Discover local food vendors in your area.
          </p>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Start Exploring
          </button>
        </div>
      </main>
    </div>
  );
}
