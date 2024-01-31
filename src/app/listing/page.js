"use client";
import React from "react";
import restaurants from "../../../data";
import { useSearchParams } from "next/navigation";

const Listing = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const restaurant = restaurants.find((restaurant) => restaurant.id === +id);
  console.log(restaurant.name);

  return (
    // key={restaurant.id}
    // image={restaurant.image}
    // CardTitle={restaurant.name}
    // titleHref="/#"
    // btnHref="5"
    // CardDescription={restaurant.address}
    // Button="View Details"
    // id={restaurant.id}
    <client-only>
      <div class="py-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  class="w-full h-full object-cover"
                  src={restaurant.image}
                  alt="Product Image"
                />
              </div>
              <div class="flex -mx-2 mb-4">
                <div class="w-1/2 px-2">
                  <button class="w-full bg-orange-700 dark:bg-orange-600 text-white py-2 px-4 rounded-full font-bold hover:bg-orange-400 dark:hover:bg-orange-700">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="text-2xl font-bold  dark:text-gray-800 mb-2">
                {restaurant.name}
              </h2>
              <p class="text-gray-900 dark:text-gray-900 text-sm mb-4">
                {restaurant.address}
              </p>
              <div class="flex mb-4">
                <div class="mr-4">
                  <span class="font-bold text-gray-700 dark:text-gray-800">
                    Price:
                  </span>
                  <span class="text-gray-600 dark:text-gray-800">$29.99</span>
                </div>
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-800">
                    Availability:
                  </span>
                  <span class="text-gray-600 dark:text-gray-800">
                    Availabile
                  </span>
                </div>
              </div>

              <div>
                <span class="font-bold text-gray-700 dark:text-gray-800">
                  Food Details:
                </span>
                <p class="text-gray-800 dark:text-gray-800 text-sm mt-2">
                  {restaurant.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  );
};

export default Listing;