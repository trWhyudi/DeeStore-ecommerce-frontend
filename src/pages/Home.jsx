import React from 'react'
import Hero from '../components/Hero'
import Shop from '../components/Shop'
import Offer from '../components/Offer'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <Hero />
      {/* shop section */}
      <Shop />
      {/* Offer section */}
      <Offer />
      {/* contact section */}
      <Contact />
    </div>
  )
}

export default Home