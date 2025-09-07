import React from 'react'
import { Route, Routes } from 'react-router'

// pages
import VendorHomepage from './pages/vendor-pages/VendorHomepage'
import VendorCreatePage from './pages/vendor-pages/VendorCreatePage'
import VendorDetailPage from './pages/vendor-pages/VendorDetailPage'

import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme='nord'>
        <Routes>
          <Route path='/vendors' element={<VendorHomepage />} />
          <Route path='/create-vendor' element={<VendorCreatePage/>} />
          <Route path='/vendor/:vendorId' element={<VendorDetailPage/>} />
        </Routes>
    </div>
  )
}


export default App

