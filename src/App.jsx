import React from 'react'
import Navbar from './components/Navbar'
import Hero from './Section/Hero'
import AboutUs from './Section/AboutUs'
import Layout from './components/Layout'

const App = () => {
  return (
  <Layout>
      <Navbar />
      <section><Hero /></section>
      <section><AboutUs /></section>
      <section>Test</section>
      <section>Test</section>
      <section>Test</section>
  </Layout>
    
  )
}

export default App