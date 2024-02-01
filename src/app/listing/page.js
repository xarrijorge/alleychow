"use client";
import React from "react";
import restaurants from "../../../data";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const Listing = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const restaurant = restaurants.find((restaurant) => restaurant.id === +id);
  const URI = "https://graph.facebook.com/v19.0/225937017268827/messages";

  const accessToken = process.env.NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN;

  const data = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: "+233535590537",
    type: "text",
    text: {
      preview_url: false,
      body: "Hello from the frontend",
    },
  };

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const orderNow = () => {
    axios
      .post(URI, data, { headers })
      .then((response) => {
        console.log("Message sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending message:", error.response.data);
      });
    // console.log('testing')
  };

  return (
    <>
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              {/* <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={restaurant.image}
                  alt={restaurant.name}
                  width={400}
                  height={300}
                  priority
                />
              </div> */}
              <div className="p-4 w-full max-h-75 overflow-hidden border-b-2 border-solid border-gray-300">
                <img
                  className="w-full max-w-full cursor-pointer"
                  src={restaurant.image}
                  alt={restaurant.name}
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </div>

              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    onClick={orderNow}
                    className="w-full bg-orange-700 dark:bg-orange-600 text-white py-2 px-4 rounded-full font-bold hover:bg-orange-400 dark:hover:bg-orange-700"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold  dark:text-gray-800 mb-2">
                {restaurant.name}
              </h2>
              <p className="text-gray-900 dark:text-gray-900 text-sm mb-4">
                {restaurant.address}
              </p>
              <p className="text-gray-900 dark:text-gray-900 text-sm mb-4">
                {restaurant.foodList.map((food) => (
                  <li>{food}</li>
                ))}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-800">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-800">
                    {restaurant.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-800">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-800">
                    Available
                  </span>
                </div>
              </div>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-800">
                  Food Details:
                </span>
                <p className="text-gray-800 dark:text-gray-800 text-sm mt-2">
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
