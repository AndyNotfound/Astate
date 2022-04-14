import React from 'react'
import logo from '../../assets/logo.png'
import Hero from '../hero/hero'
import About from '../about/about'
import Service from '../service/service'
import Contact from '../contact/contact'
import './nav.css'

export const Nav = () => {
  return (
    <nav className='navbar'>
      <img src={logo} className='logo'/>
      <div className='nav-link'>
        <a href={Hero}>Home</a>
        <a href={About}>About</a>
        <a href={Service}>Service</a>
        <a href={Contact} className='btn'>Contact</a>
      </div>
    </nav>
  )
}

export default Nav