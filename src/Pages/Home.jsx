import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Workings from '../components/Workings';
// Add other homepage sections here, like Cards, Testimonials, etc.

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Workings/>
    </div>
  );
};

export default Home;
