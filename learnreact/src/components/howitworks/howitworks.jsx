import React from 'react'
import './howitworks.css'
import deal from '../../assets/deal.png'
import realestateagent from '../../assets/realestateagent.png'
import evaluate from '../../assets/evaluation.png'

export const Howitworks = () => {
  return (
    <section id='howItWorks' className='howItWorks__container'>
        <div className='how-it-works'>
            <h2>How It Works</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='how-it-works-grid'>
            <div className='how-it-works-box'>
              <img src={evaluate} className='how-it-works-icon' />
              <h5>evaluate property</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div className='how-it-works-box'>
              <img src={realestateagent} className='how-it-works-icon' />
              <h5>Meet your agent</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div className='how-it-works-box'>
              <img src={deal} className='how-it-works-icon' />
              <h5>close the deal</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
        </div>
    </section>
  )
}

export default Howitworks