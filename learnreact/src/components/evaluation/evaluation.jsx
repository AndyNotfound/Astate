import React from 'react'
import './evaluation.css'
import { IoMdCheckmark } from 'react-icons/io'
import apartment from '../../assets/aptg.png'

function Evaluation() {
  return (
    <section id='evaluation' className='container'>
        <div className='evaluation__container'>
            <div className='evaluation-image'>
                <img src={apartment} />
            </div>
            <div className='detail'>
                <h2>Evaluate your <span className='focus'>property</span></h2>
                <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.</p>
                <div className='evaluation-check'>
                    <div className='checked'>
                        <IoMdCheckmark />
                        <p>45K partners have worked with us</p>
                    </div>
                    <div className='checked'>
                        <IoMdCheckmark />
                        <p>Professional and experienced human resources</p>
                    </div>
                    <div className='checked'>
                        <IoMdCheckmark />
                        <p>Provide the best service for users</p>
                    </div>
                </div>
                <a className='button'>see more</a>
            </div>
        </div>
    </section>
  )
}

export default Evaluation