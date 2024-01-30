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
    <client-only>
      <h1>{restaurant.name}</h1>
    </client-only>
  );
};

export default Listing;
