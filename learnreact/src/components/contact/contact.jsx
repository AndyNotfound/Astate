import React from 'react'
import './contact.css'
import menuItems from '../navbar/MenuItems'
import adcp from '../../assets/adcp.png'
import ptpp from '../../assets/ptpp.png'
import wika from '../../assets/wika.png'
import pntj from '../../assets/pntj.png'
import klbf from '../../assets/klbf.png'
import logo from '../../assets/logo.png'

export const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact-grid'>
        <div className='company-grid'>
          <img src={adcp} className='gray-scale' />
          <img src={wika} className='gray-scale' />
          <img src={ptpp} className='gray-scale' />
          <img src={pntj} className='gray-scale' />
          <img src={klbf} className='gray-scale' />
        </div>
        <div className='workwith'>
          <h2>Interested <span className='focus'>working</span><pre />with us?</h2>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.</p>
          <img src={logo} className='footer-logo' />
        </div>
        <ul className='link'>
          {menuItems.map((link, param) => {
              return(
                <li key={param}>
                  <a className='footer-link' href={link.url}>{link.label}</a>
                </li>
              )
          })}
        </ul>
        <div className='contact-form'>
          <h5><bold>estimate your project?<pre />Let us know here</bold></h5>
          <input type='text' placeholder='What&#39;s your name?'></input>
          <input type='email' placeholder='Your fancy email'></input>
          <textarea placeholder='Tell us about your project'></textarea>
        </div>
      </div>
    </section>
  )
}

export default Contact