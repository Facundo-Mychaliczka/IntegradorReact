import React, { useEffect } from 'react'
import {LayoutWrapper} from './LayoutStyles'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom'


const Layout = ({children}) => {
  const {pathname} =useLocation();
  useEffect(() => {
      window.scrollTo(0,0);
    }, [pathname]);


  return (
    <>
    <LayoutWrapper>
      <Header/>
        {children}
      <Footer/> 
    </LayoutWrapper>
    </>
  )
}

export default Layout