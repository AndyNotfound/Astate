import React, { Component } from 'react';
import logo from '../../assets/logo.png'
import menuItems from './MenuItems';
import { GiHamburgerMenu} from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { IconContext } from 'react-icons';
import './navbar.css'

class Navbar extends Component{
    state = {clicked: false}
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render(){
        return (
            <nav id='navbar' className='navbarItems'>
                    <img src={logo} className='navbar-logo'/>
                    <IconContext.Provider value={{size: '2em', color:'ghostwhite'}}>
                        <div className='menu-icon' onClick={this.handleClick}>
                            {this.state.clicked? <IoMdClose /> : <GiHamburgerMenu />}
                        </div>
                    </IconContext.Provider>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {menuItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>{item.label}</a>
                                </li>
                            )
                        })}
                    </ul>
            </nav>
        )
    }
}
export default Navbar