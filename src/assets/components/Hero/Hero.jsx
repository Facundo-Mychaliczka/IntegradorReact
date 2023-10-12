import React from 'react'
import AorusLogo from '../../images/Logos e icons/AorusLog.png'
import { HeroImage, HeroWrapper } from './HeroStyles'

const Hero = () => {
  return (
    <>
     <HeroWrapper>
        <HeroImage src={AorusLogo}/>
        <h1>AORUS ES UNA EMPRESA LÍDER EN TARJETAS MADRE, TARJETAS GRAFICAS, LAPTOPS, HARDWARE DE JUEGOS Y SISTEMAS DE ALTO RENDIMIENTO.</h1>
     </HeroWrapper>
    
    </>
  )
}

export default Hero