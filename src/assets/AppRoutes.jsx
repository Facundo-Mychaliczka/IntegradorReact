import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import ProductsPage from './pages/Products/Products'
import Error from './pages/Error/Error'
import Login from './pages/Login/Login'
import Membership from './pages/Membership/Membership'
import BuyPage from './pages/SuccessBuy/BuyPage'

const AppRoutes = () => {

  return (
    
    <>
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/membership' element={<Membership/>}/>
          <Route path='/BuyPage' element={<BuyPage/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes