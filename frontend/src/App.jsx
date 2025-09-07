import React from 'react'
import { Route, Routes } from 'react-router'

// pages
import HomePage from './pages/Homepage'
import VendorCreatePage from './pages/VendorCreatePage'
import VendorDetailPage from './pages/VendorDetailPage'

const App = () => {
  return <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-vendor' element={<VendorCreatePage/>} />
        <Route path='/vendor/:vendorId' element={<VendorDetailPage/>} />
      </Routes>
  </div>
}


export default App

