import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
 <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/products' element={<Product/>}></Route>
      <Route path='/contact-us' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
</>
  )
}

export default App