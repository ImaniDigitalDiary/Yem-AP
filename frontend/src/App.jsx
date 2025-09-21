import React from 'react'
import { Route, Routes } from 'react-router'

// pages
import VendorHomepage from './pages/vendor-pages/VendorHomepage'
import VendorCreatePage from './pages/vendor-pages/VendorCreatePage'
import EditVendorDetailsPage from './pages/vendor-pages/EditVendorDetailsPage'
import InvoiceHomePage from './pages/invoice-pages/InvoiceHomePage'
import VendorDetailPage from './pages/vendor-pages/VendorDetailPage'

// import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme='nord'>
        <Routes>
          {/* VENDORS */}
          <Route path='/vendors' element={<VendorHomepage />} />
          <Route path='/create-vendor' element={<VendorCreatePage/>} />
          <Route path='/vendors/:vendorId/vendor-details' element={<VendorDetailPage />} />
          {/* <Route path='/vendor/:vendorId' element={<EditVendorDetailsPage/>} /> */}
          {/* INVOICES */}
          <Route path='/vendors/:vendorId/invoices' element={<InvoiceHomePage />} />
        </Routes>
    </div>
  )
}


export default App

