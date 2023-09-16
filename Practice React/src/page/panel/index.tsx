import { Route, Routes } from 'react-router-dom'
import Dashboard from './user/dashboard'
import Product from './product/product'
import Products from './product/products'
import Main from './main'
import Footer from '../../component/footer/footer'
import { Header } from '../../component/header/header'
import Notfind from './Notfind'

const Panel = () => {
  return (
    <>

      <Header/>
      <div style={{marginTop:100}}>
      <Routes>
        <Route path="dashbord/" element={<Dashboard />} />
        <Route path="dashbord/store" element={<Dashboard />} />
        <Route path='/:product/:id' element={<Product />} />
        <Route path='/product' element={<Products />} />
        <Route path='' element={<Main />} />
        <Route path='*' element={<Notfind />} />
      </Routes>
      </div>
    <Footer/>

    </>
  )
}

export default Panel