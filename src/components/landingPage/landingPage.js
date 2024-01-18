import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Carousels from './carousel'
import SecondSection from './secondSection'
import Categories from '../categories/categories'
import Products from '../products/products'

const LandingPage = () => {
  return (
    <div>
      
      <Header/>
      <Carousels/>
      <SecondSection/>
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default LandingPage