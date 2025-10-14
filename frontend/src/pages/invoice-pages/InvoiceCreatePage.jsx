import { useEffect, useState } from 'react'
import axiosAPI from '../../lib/axios'
import { useParams, useNavigate } from 'react-router'
import toast from'react-hot-toast'

const InvoiceCreatePage = () => {
  const [vendor, setVendor] = useState(null)
  const [invoiceNumber, setInvoiceNumber] = useState('')
  const [invoiceUnits, setInvoiceUnits] = useState('')
  
  // grab vendorId
  const {vendorId} = useParams()

  // navigation
  const navigate = useNavigate()
  
  // fetch the vendor id that is creating the invoice
  useEffect(() => {
    const fetchVendor = async () => {
      try {
        // get vendor by id
        const response = await axiosAPI.get
        // const response = await axiosAPI.get(`/vendors/${vendorId}`)
        // store the fetched vendor in the vendor state
        setVendor(response.data)
      } catch (error) {
        console.log('Error fetching vendor', error)
      }
    }
    if (vendorId) {
      fetchVendor()
    }
  }, [vendorId])

 const handleCreateInvoice = async (e) => {
    e.preventDefault()
    try {
      const response = await axiosAPI.post(`/vendors/${vendorId}/invoices`, {
        invoiceNumber,
        invoiceUnits
      })
      console.log('Invoice created successfully', response.data)
      toast.success('Invoice created successfully')
      // once the invoice is created successfully, navigate back to it's vendor details page
      navigate(`/vendors/${vendorId}/vendor-details`)
    } catch (error) {
      console.log('Error creating invoice', error)
      toast.error('Failed to create invoice')
    }
 }


  return (
    <div className='createInvoiceContainer container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Create an invoice for {vendor?.vendorName}</h1>
      <form onSubmit={handleCreateInvoice} className='space-y-4'>
        <div>
          <label htmlFor="invoiceNumber" className='block text-sm font-medium text-gray-700'>Invoice Number</label>
          <input 
            type="text" 
            value={invoiceNumber} 
            id="invoiceNumber" 
            onChange={(e) => setInvoiceNumber(e.target.value)}
            className='input input-bordered w-full max-w-xs'
            required
          />
        </div>
        <div>
          <label htmlFor="invoiceUnits" className='block text-sm font-medium text-gray-700'>Invoice Units</label>
          <input 
            type="number" 
            value={invoiceUnits} 
            id="invoiceUnits" 
            onChange={(e) => setInvoiceUnits(e.target.value)}
            className='input input-bordered w-full max-w-xs'
            required
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary'
        >
          Create Invoice
        </button>
      </form>
    </div>
  )
}

export default InvoiceCreatePage
