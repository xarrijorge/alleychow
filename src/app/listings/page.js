import React from 'react'
import SingleCard from '../Components/Card'

const Listings = () => {
  return <div class="w-screen flex flex-col justify-center items-center">
    <h1 className="text-2xl font-bold mt-8 mt:mb-0 md:text-7xl">Current Businesses</h1>
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SingleCard
            image="https://i.ibb.co/r2zns1m/image-01.jpg"
            CardTitle="50+ Best creative website themes & templates"
            titleHref="/#"
            btnHref="5"
            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard
            image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
            CardTitle="Creative Card Component designs graphic elements"
            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard
            image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
            CardTitle="The ultimate UX and UI guide to card design"
            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
            Button="View Details"
          />
        </div>
      </div>
    </section>
  </div>

}

export default Listings

