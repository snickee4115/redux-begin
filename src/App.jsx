import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Nav from './components/Nav'
import Products from './pages/Products'
import Signin from './pages/SIgnin'
import Cart from './pages/Cart'
import { useSelector } from 'react-redux'

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

function App() {
  const { user } = useSelector((state) => state.auth)

  const navigate = useNavigate()

  // useEffect(() => {
  //     if (!user) navigate('/signin')
  //     else navigate('/')
  // }, [user, navigate])

  return (
      <div className='App'>
          <Nav />

          {!user ? <UnAuthApp /> : <AuthApp />}
      </div>
  )
}

export default App