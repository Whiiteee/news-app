import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <a href='/home'><span><strong>Home</strong></span></a>
        <a href='/news'><span>News</span></a>
        <a href='/about-us'><span>About Us</span></a>
        <a href='/contact-us'><span>Contact Us</span></a>

      </div>
    )
  }
}

export default Navbar
