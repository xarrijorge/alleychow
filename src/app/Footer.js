import React from 'react';

const Footer = () => {

  return (
    <>
      <div className="w-4/5 lg:w-3/5 mx-auto bg-slate-400 h-72 shadow-lg rounded-3xl overflow-hidden flex flex-col justify-center items-center my-10 ">
        <div className="px-4 py-2">
          <h2 className="text-center text-gray-800 font-bold text-2xl mb-4">Receive Food Conveniently</h2>
          <p className="text-center text-gray-700 text-base mb-4">Join our team of satisfied customers</p>
          <button className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Join Now
          </button>
        </div>
      </div>

      <footer className="bg-transparent p-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-10">
          <div>
            <h2 className="font-bold text-4xl mb-4 md:text-6xl">Stay Updated with Deliciousness</h2>
            <p className='my-4'>Subcribe to get good food deliveries</p>

            <input type="email" placeholder="Enter your email" className="p-2 w-6/12 rounded border border-gray-300 mx-2 my-2" />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-10 rounded my-2">
              Sign Up
            </button>

          </div>
          <div className="space-y-4 rounded-2xl bg-slate-50 px-12 py-8">
            <h3 className="font-bold text-lg mb-2">Vegetarian Options</h3>
            <p>Explore a variety of plant-based dishes.</p>
            <h3 className="font-bold text-lg mb-2">Quick Meals</h3>
            <p>Whip up tasty meals in under 30 minutes</p>
            <h3 className="font-bold text-lg mb-2">Dessert Delights</h3>
            <p>Indulge in our selection of sweet treats</p>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-10 space-y-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-2">About Us</h3>
            <p>Information about the company.</p>
            <p>The Team.</p>
            <p>Whats New.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <p>Information about the company.</p>
            <p>The Team.</p>
            <p>Whats New.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-2">Recipe Category</h3>
            <p>Information about the company.</p>
            <p>The Team.</p>
            <p>Whats New.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-2">Weekly Recipe Digest</h3>
            <p>Information about the company.</p>
            <p>The Team.</p>
            <p>Whats New.</p>
          </div>
        </div>
      </footer>
    </>

  );
};

export default Footer;
