import React from 'react'
import Header from '../components/Header'
import Together from '../components/Together'
import Impact from '../components/Impact'
import Journey from '../components/Journey'
import Inrease from '../components/Inrease'
import Cards from '../components/Cards'
import Core from '../components/Core'
import Client from '../components/Client'
import Smile from '../components/Smile'
import Award from '../components/Award'
import Expertise from '../components/Expertise'
import Join from '../components/Join'
import Footer from '../components/Footer'
type Props = {}

export default function Index({}: Props) {
  return (
    <>
      <Header/>
      <Together/>
      <Journey/>
      <Inrease/>
      <Impact/>
      <Cards/>
      <Core/>
      <Client/>
      <Smile/>
      <Award/>
      <Expertise/>
      <Join/>
      <Footer/>
    </>
  )
}