import React from 'react'
import Header from '../components/Header'
import Marketing from '../components/Marketing'
import Back from '../components/Back'
import Engine from '../components/Engine'
import How from '../components/How'
import Website from '../components/Website'
import UseCase from '../components/UseCase'
import Ecommerce from '../components/Ecommerce'
import OutService from '../components/OutService'
import Learn from '../components/Learn'
import Ready from '../components/Ready'
import Footer from '../components/Footer'
type Props = {}

function Service({}: Props) {
  return (
    <div>
      <Header/>
      <Marketing/>
      <Back/>
      <Engine/>
      <How/>
      <Website/>
      <UseCase/>
      <Ecommerce/>
      <OutService/>
      <Learn/>
      <Ready/>
      <Footer/>
    </div>
  )
}

export default Service