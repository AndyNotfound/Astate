import React from 'react'
import Nav from './components/nav/nav'
import Hero from './components/hero/hero'
import Service from './components/service/service'
import Contact from './components/contact/contact'
import About from './components/about/about'

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Service />
      <Contact />
    </>
  )
}

export default App