import React from 'react'
import './about.css'
import contract from '../../assets/contract.png'
import commission from '../../assets/commission.png'
import taxes from '../../assets/taxes.png'

export const About = () => {
  return (
    <section id='about'>
      <div className='advantage-grid'>
        <div className='advantage'>
            <img src={contract} className='advantage-icon' />
            <h5>property<pre />insurance</h5>
        </div>
        <div className='advantage'>
            <img src={taxes} className='advantage-icon' />
            <h5>tax<pre />advantage</h5>
        </div>
        <div className='advantage'>
            <img src={commission} className='advantage-icon' />
            <h5>lowest<pre />commission</h5>
        </div>
      </div>
    </section>
  )
}

export default About