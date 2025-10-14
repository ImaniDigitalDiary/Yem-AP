import React from 'react'
import { Route, Routes } from 'react-router'

// pages
import VendorHomepage from './pages/vendor-pages/VendorHomepage'
import VendorCreatePage from './pages/vendor-pages/VendorCreatePage'
import EditVendorDetailsPage from './pages/vendor-pages/EditVendorDetailsPage'
import InvoiceHomePage from './pages/invoice-pages/InvoiceHomePage'
import VendorDetailPage from './pages/vendor-pages/VendorDetailPage'
import InvoiceCreatePage from './pages/invoice-pages/InvoiceCreatePage'
// import InvoiceDetailPage from './pages/invoice-pages/InvoiceDetailPage'

// import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme='nord'>
        <Routes>
        {/* VENDOR ROUTES */}
          {/* displays all vendors */}
          <Route path='/vendors' element={<VendorHomepage />} />
          {/* page to create a vendor */}
          <Route path='/create-vendor' element={<VendorCreatePage/>} />
          {/* displays all details for under a vendor id */}
          <Route path='/vendors/:vendorId/vendor-details' element={<VendorDetailPage />} /> 
          {/* page to edit a vendor */}
          <Route path='/vendors/:vendorId/edit-vendor-details' element={<EditVendorDetailsPage/>} />
          
          


        {/* INVOICE ROUTES */}
          {/* displays all invoices under a vendor id */}
          <Route path='/vendors/:vendorId/invoices' element={<InvoiceHomePage />} />
          {/* page to create an invoice for a vendor */}
          <Route path='/vendors/:vendorId/create-invoice' element={<InvoiceCreatePage />} />

          {/* page to view a single invoice detail */}
          {/* <Route path='/vendors/:vendorId/invoices/:invoiceId' element={<InvoiceDetailPage />} /> */}
        </Routes>
    </div>
  )
}


export default App

