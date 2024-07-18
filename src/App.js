import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Footer from './components/Footer'

export class App extends Component {
  render() {
    return (<>
      <Navbar/>
      <div className='body-div'>
        <News/>
      </div>
      <Footer/>
      </>
    )
  }
}

export default App
