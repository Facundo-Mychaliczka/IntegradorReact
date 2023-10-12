import React from 'react'
import Hero from '../../components/Hero/Hero'
import { HomeWrapper } from './HomeStyles'
import Destacados from '../../components/ProductosDestacados/Destacados'


const Home = () => {
  return (
    <>
        <HomeWrapper>
            <Hero/>
            <Destacados/>
        </HomeWrapper>
    </>
  )
}

export default Home