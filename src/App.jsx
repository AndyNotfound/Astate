import React from 'react'
import Hero from './components/hero/hero'
import Service from './components/service/service'
import Contact from './components/contact/contact'
import About from './components/about/about'
import Navbar from './components/navbar/navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Contact />
    </>
  )
}

export default App