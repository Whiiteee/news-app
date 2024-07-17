import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export class App extends Component {
  render() {
    return (<>
      <Navbar/>
      <div className='body-div'>
        <News/>
      </div>
      </>
    )
  }
}

export default App
