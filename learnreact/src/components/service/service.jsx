import React, { Component } from "react";
import Slider from "react-slick";
import Post from "./Post";
import './service.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { GoLocation } from 'react-icons/go'

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <IoIosArrowForward
      className='arrow'
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <IoIosArrowBack
      className='arrow'
      style={{ ...style, color:'#FF9900'}}
      onClick={onClick}
    />
  );
}

class Service extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      className: 'post-card',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <section id='service'>
        <div className="container__service">
          <div className="service-header">
            <h2>Our <span className='focus'>Featured </span>Property.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
          <Slider {...settings}>
          {Post.map((postedItem, idx) => {
              return(  
                <div className="post">
                   <div key={idx} className='post-box'>
                  <div class="post-image">
                    <figure>
                      <img src={postedItem.img}  />
                    </figure>
                  </div>
                  <div className="post-detail">
                    <h5>{postedItem.title}</h5>
                    <div className='post-location'>
                      <GoLocation className='location-icon'/>
                      <p>{postedItem.location}</p>
                    </div>
                    <div className="post-price">
                      <h5>{postedItem.price}</h5>
                      <a className='button' href={postedItem.link}>Read More</a>
                    </div>
                  </div>
                </div>
                </div>
              )
          })}
          </Slider>
        </div>
      </section>
    );
  }
}

export default Service;