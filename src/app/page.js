"use client";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [selectedFoodGroup, setSelectedFoodGroup] = useState("");
  const [displayUsername, setDisplayUsername] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayUsername(user.displayName);

        if (user.displayName == null) {
          const userDisplayName = user.email.split("@")[0];

          const capitalizeUserDisplayName =
            userDisplayName.charAt(0).toUpperCase() + userDisplayName.slice(1);

          setDisplayUsername(capitalizeUserDisplayName);
        } else {
          setDisplayUsername(user.displayName);
        }
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successful...");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white py-4 px-6 flex flex-col md:flex-row items-center md:justify-between border-b border-gray-200">
          {/* <div className="mb-4 md:mb-0"> */}
          <div className="flex items-center text-lg text-orange-600 mx-3">
            <FaUserCircle size={16} className="mr-1" />
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Hi, {displayUsername}
            </span>
          </div>
          <input
            type="text"
            placeholder="Find Street Food"
            className="w-full md:w-5/10 lg:w-5/10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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

            <Link href="/login" onClick={logOut}>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800">
                Logout
              </button>
            </Link>
          </div>
        </nav>

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
            <Link href="/register">
              {" "}
              <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                Start Exploring
              </button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
