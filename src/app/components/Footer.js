import React from 'react';

const Footer = () => {

  return (
    <>
      <footer className="bg-transparent p-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-10">
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-2">About Us</h3>
            <p>Our Vision</p>
            <p>Our Mission</p>
            <p>Meet the Team</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <p>linked In</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-2">Recipe Category</h3>
            <p>Local street food</p>
            <p>Swallow</p>
            <p>Break fast</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-2">Weekly Recipe Digest</h3>
            <p>Wakye</p>
            <p>Indomi and egg</p>
            <p>Fried Rice</p>
          </div>
        </div>
      </footer>
    </>

  );
};

export default Footer;
