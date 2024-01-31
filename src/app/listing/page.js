"use client";
import React from "react";
import restaurants from "../../../data";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const Listing = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const restaurant = restaurants.find((restaurant) => restaurant.id === +id);
  const URI = "https://graph.facebook.com/v19.0/225937017268827/messages"

  const accessToken = process.env.NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN;

  const data = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: '+233535590537',
    type: 'text',
    text: {
      preview_url: false,
      body: 'Hello from the frontend',
    },
  };

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };


  const orderNow = () => {
    axios.post(URI, data, { headers })
    // .then(response => {
    //   console.log('Message sent successfully:', response.data);
    // })
    // .catch(error => {
    //   console.error('Error sending message:', error.response.data);
    // });
    console.log('testing')
  }

  return (
    <>
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
                  <button onClick={() => orderNow} class="w-full bg-orange-700 dark:bg-orange-600 text-white py-2 px-4 rounded-full font-bold hover:bg-orange-400 dark:hover:bg-orange-700">
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
                    Available
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
    </>
  );
};

export default Listing;