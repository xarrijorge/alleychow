"use client";
import React, { useState, useEffect } from "react";
import restaurants from "../../../data";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Listing = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const restaurant = restaurants.find((restaurant) => restaurant.id === +id);
  const URI = "https://graph.facebook.com/v19.0/225937017268827/messages"
  const router = useRouter();

  const accessToken = process.env.NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN;
  const [phoneNumber, setPhoneNumber] = useState("")
  const [description, setDescription] = useState("")
  const [displayUsername, setDisplayUsername] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [position, setPosition] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }, () => {
      alert('Unable to retrieve your location');
    });
  }

  const data = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: '+233535590537',
    type: 'text',
    text: {
      preview_url: false,
      body: `Order from ${displayUsername}\nfor ${restaurant.name}\nat ${restaurant.address}\nfor $40.\n${phoneNumber ? 'Contact at ' + phoneNumber : 'No contact information'}\nDescription : ${description}\nLocation :  href=https://www.google.com/maps/search/?api=1&query=${position?.latitude},${position?.longitude}`,
    },
  };

  const validatePhoneNumber = (number) => {
    const pattern = /^\+?\d{1,3}\d{9}$/;
    return pattern.test(number);
  };


  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    getLocation()
    setIsValid(validatePhoneNumber(phoneNumber));
  }, [phoneNumber]);

  const orderNow = () => {
    // getLocation()
    console.log(displayUsername)
    console.log(data.text.body)
    axios.post(URI, data, { headers })
      .then(response => {
        console.log('Message sent successfully:', response.data);
        router.push('/');
      })
      .catch(error => {
        console.error('Error sending message:', error.data);
      });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayUsername(user.displayName);
      }
    });
  }, []);

  return (
    <>
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={restaurant.image}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <form>
                    <label>Your Contact Number</label>
                    <input
                      type="text"
                      value={phoneNumber}
                      placeholder="Provide Your Phone number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full md:w-6/10 lg:w-6/10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <label>Location Description</label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.currentTarget.value)}
                      placeholder="Enter your Location here..."
                      className="w-full md:w-6/10 lg:w-6/10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </form>
                  {
                    validatePhoneNumber(phoneNumber) && position &&
                    <button onClick={orderNow} className="w-full bg-orange-700 dark:bg-orange-600 text-white py-2 px-4 rounded-full font-bold hover:bg-orange-400 dark:hover:bg-orange-700">
                      Order Now
                    </button>
                  }
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
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-800">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-800">$29.99</span>
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