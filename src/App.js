import React from 'react'
import Draft from './components/Draft'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './Navbar'

// The app component
const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Draft />

      <Footer />
    </div>
  )
}

export default App
