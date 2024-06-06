import React from 'react'

import {Features, Blog, Footer, Header, Possibility, WhatAI} from './containers'
import {CTA, Brand, Navbar} from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatAI />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App