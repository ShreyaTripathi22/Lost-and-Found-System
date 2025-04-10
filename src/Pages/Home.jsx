import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
// Add other homepage sections here, like Cards, Testimonials, etc.

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      {/* Add more components below as needed */}
    </div>
  );
};

export default Home;
