import React from 'react'
import SingleCard from '../Components/Card'
import restaurants from '../../../data'

const Listings = () => {
  return <div class="w-screen flex flex-col justify-center items-center">
    <h1 className="text-2xl font-bold mt-8 mt:mb-0 md:text-7xl">Current Businesses</h1>
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {
            restaurants.map((restaurant) => (
              <SingleCard
                key={restaurant.id}
                image={restaurant.image}
                CardTitle={restaurant.name}
                titleHref="/#"
                btnHref="5"
                CardDescription={restaurant.address}
                Button="View Details"
                id={restaurant.id}
              />
            )
            )
          }

        </div>
      </div>
    </section>
  </div>

}

export default Listings

