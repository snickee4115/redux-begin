import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Products from './pages/Products'
import Signin from './pages/SIgnin'
import Cart from './pages/Cart'
import { useSelector } from 'react-redux'

function App() {

  // const { user } = useSelector((state)=>state.auth)

  function UnAuthApp() {
    return (
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<Products />} />
      </Routes>)
  }

  function AuthApp() {
    return (
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/' element={<Products />} />
      </Routes>
    )
  }

  return (
    <div className='App'>
      <Nav />
      {/* {!user ? <UnAuthApp/> : <AuthApp/>} */}
      <AuthApp/>
    </div>
  )
}

export default App
