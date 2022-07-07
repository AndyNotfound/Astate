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
  const companyLogo = [adcp, wika, klbf, pntj, ptpp];
  return (
    <section id='contact'>
      <div className='contact-grid container'>
        <div className='company-grid'>
        {companyLogo.map(cLogo => (
          <div className='company-box'>
              <img src={cLogo} className='gray-scale' />
          </div>
        ))}
        </div>
        <div className='workwith'>
          <h2>Interested in <span className='focus'>working</span> with us?</h2>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.</p>
          <img src={logo} className='footer-logo' />
        </div>
        <div className='contact-form'>
          <h5>estimating your project?<pre />Let us know here</h5>
          <input type='text' placeholder='What&#39;s your name?'></input>
          <input type='email' placeholder='Your fancy email'></input>
          <textarea placeholder='Tell us about your project'></textarea>
        </div>
      </div>
    </section>
  )
}

export default Contact