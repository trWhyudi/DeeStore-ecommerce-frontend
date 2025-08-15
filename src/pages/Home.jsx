import React from 'react';
import Hero from '../components/Hero';
import Shop from '../components/Shop';
import Offer from '../components/Offer';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <section id="home">
        <Hero />
      </section>

      {/* shop section */}
      <section id="shop">
        <Shop />
      </section>

      {/* offer section */}
      <section id="offer">
        <Offer />
      </section>

      {/* contact section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
