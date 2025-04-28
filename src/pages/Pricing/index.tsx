import React from 'react'
import Header from '../components/Header'
import PricingWrite from '../components/PricingWrite'
import Boxes from '../components/Boxes'
import Frequently from '../components/Frequently'
import Addition from '../components/Addition'
import Footer from '../components/Footer'

function Pricing() {
  return (
    <div>
        <Header/>
        <PricingWrite/>
        <Boxes/>
        <Frequently/>
        <Addition/>
        <Footer/>
    </div>
  )
}

export default Pricing