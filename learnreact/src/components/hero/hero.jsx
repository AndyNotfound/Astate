import React from 'react'
import './hero.css'
import agent from '../../assets/agent.png'

export const Hero = () => {
  return(
    <header>
      <div className='container'>
        <h5>Now in 50% off</h5>
        <h1>Find your modern and Affordable property.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      </div>
      <img src={agent}/>
    </header>
  )
}

export default Hero