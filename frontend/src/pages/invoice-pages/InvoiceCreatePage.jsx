import { useEffect, useState } from 'react'
import axiosAPI from '../../lib/axios'
import { useParams, useNavigate } from 'react-router'

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
        const response = await axiosAPI.get(`/vendors/${vendorId}`)
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
    <div>
      Create an invoice for {vendor?.vendorName}
    </div>
  )
}

export default InvoiceCreatePage
