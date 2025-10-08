import React, { useState } from 'react'

const InvoiceCreatePage = () => {
  // INVOICE INFO 
  const [invoiceNumber, setInvoiceNumber] = useState('')
  const [invoiceUnits, setInvoiceUnits] = useState('')
  const [vendorName, setVendorName] = useState('')

  // LOADING STATE
  const [loading, setLoading] = useState(false) // false by default, once the form is submitted, it'll equal to true

  return (
    <div>
      Create Invoice For Vendor
    </div>
  )
}

export default InvoiceCreatePage
