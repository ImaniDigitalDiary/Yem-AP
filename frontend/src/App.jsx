import React from 'react'
import { Route, Routes } from 'react-router'

// pages
import HomePage from './pages/Homepage'
import VendorCreatePage from './pages/VendorCreatePage'
import VendorDetailPage from './pages/VendorDetailPage'

import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme='nord'>
        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create-vendor' element={<VendorCreatePage/>} />
          <Route path='/vendor/:vendorId' element={<VendorDetailPage/>} />
        </Routes>
    </div>
  )
}


export default App

