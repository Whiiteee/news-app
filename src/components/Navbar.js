import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <img src="https://st.depositphotos.com/57803962/55738/v/450/depositphotos_557382494-stock-illustration-news-icon-vector-illustration.jpg" alt="logo" />
        <a href='/home'><span><strong>Home</strong></span></a>
        <a href='/news'><span>News</span></a>
        <a href='/about-us'><span>About Us</span></a>
        <a href='/contact-us'><span>Contact Us</span></a>

      </div>
    )
  }
}

export default Navbar
