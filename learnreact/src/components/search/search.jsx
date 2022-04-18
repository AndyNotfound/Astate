import React from 'react'
import { ImLocation } from 'react-icons/im'
import { MdRoofing } from 'react-icons/md'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import {IconContext} from 'react-icons'
import './search.css'

export const Search = () => {
  return (
    <IconContext.Provider value={{size: '1.5em'}}>
        <section id='search' className='container'>
            <div className='search__container'>
                <div className='box'>
                    <ImLocation />
                    <div className='label'>
                        <h5>Location</h5>
                        <p>Add Location</p>
                    </div>
                </div>
                <div className='box'>
                    <MdRoofing />
                    <div className='label'>
                        <h5>Property types</h5>
                        <p>Property name</p>
                    </div>
                </div>
                <div className='box'>
                    <AiOutlineDollarCircle />
                    <div className='label'>
                        <h5>Max price</h5>
                        <p>Price</p>
                    </div>
                </div>
                <div className='search'>
                    <input type="search" id="propertySearch" name="propertySearch" placeholder='search property' className='search-bar' />
                    <BsSearch className='search-icon' size='3em'/>
                </div>
            </div>
        </section>
    </IconContext.Provider>
  )
}

export default Search