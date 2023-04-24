import React, { Component } from 'react'

import Navbar from './components/Navbar.js'
import News from './components/News.js'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

export default App
