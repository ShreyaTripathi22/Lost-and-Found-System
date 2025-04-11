import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Workings from '../components/Workings';
import Stats from '../components/Stats';
import RecentItems from '../components/RecentItems';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer'
import WhyChooseUs from '../components/WhyChooseUs';
// Add other homepage sections here, like Cards, Testimonials, etc.

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      
      <Stats />
      <WhyChooseUs />
      <Workings />
      <RecentItems />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
