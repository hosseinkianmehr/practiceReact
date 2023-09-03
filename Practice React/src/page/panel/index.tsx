import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './user/dashboard'
import Product from './product/product'
import Products from './product/products'
import Main from './main'
import { Page } from '..'
import Footer from '../../component/footer/footer'
import { Header } from '../../component/header/header'

const Panel = () => {
  return (
    <>

      <Header/>
      <div style={{marginTop:100}}>
      <Routes>
        <Route path="dashbord/" element={<Dashboard />} />
        <Route path="dashbord/store" element={<Dashboard />} />
        <Route path='/:product/:name' element={<Product />} />
        <Route path='/:product' element={<Products />} />
        <Route path='' element={<Main />} />
      </Routes>
      </div>
    <Footer/>

    </>
  )
}

export default Panel