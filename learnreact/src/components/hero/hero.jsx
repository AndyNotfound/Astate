import React from 'react'
import './hero.css'
import agent from '../../assets/agent.png'
import { Search } from '../search/search'

export const Hero = () => {
  return(
    <>
      <header id='hero'>
        <div className='main'>
          <h5>Now in <span className='warn'> 50% off</span></h5>
          <h1>Find your modern and <span className='focus'> Affordable </span>property.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>
        <div className='image'>
          <img src={agent} />
        </div>
        < Search />
      </header>
      
  </>
  )
}

export default Hero