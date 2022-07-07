import React from 'react'
import './stats.css'
import house from '../../assets/house.png'

function Stats() {
  return (
   <section id='stats' className='container'>
    <div className='stats__container'>
        <div className='detail'>
            <h2><span className='focus'>We offer </span>the best properties for you</h2>
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam</p>
            <div className='stats-grid'>
                <div className='stats-box'>
                    <h2 className='focus'>12</h2>
                    <p>Years<pre />Experience</p>
                </div>
                <div className='stats-box'>
                    <h2 className='focus'>70</h2>
                    <p>Awards<pre />Gained</p>
                </div>
                <div className='stats-box'>
                    <h2 className='focus'>400</h2>
                    <p>House<pre />Sold</p>
                </div>
            </div>
        </div>
        <img src={house} className='stats-image' />
    </div>
   </section>
  )
}

export default Stats