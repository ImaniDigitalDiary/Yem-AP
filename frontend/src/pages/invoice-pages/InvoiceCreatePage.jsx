import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import axiosAPI from '../../lib/axios'
import toast from 'react-hot-toast'
const InvoiceCreatePage = () => {
  // INVOICE INFO 
  const [invoiceNumber, setInvoiceNumber] = useState('')
  const [invoiceUnits, setInvoiceUnits] = useState('')
  // const [vendorName, setVendorName] = useState('')

  // LOADING STATE
  const [loading, setLoading] = useState(false) // false by default, once the form is submitted, it'll equal to true

  // useNavigate hook
  const navigate = useNavigate()

  // param
  const {vendorId} = useParams()

  const handleInvoiceSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
      try {
        await axiosAPI.post(`/vendors/${vendorId}/invoices`, {
          invoiceNumber,
          invoiceUnits
        })
        toast.success('Invoice created successfully')
        navigate(`/vendors/${vendorId}/invoices`)
      } catch (error) {
          console.log('Error creating invoice', error)
          toast.error('Failed to create invoice')
      } finally {
        setLoading(false)
      }
      console.log(invoiceNumber)
      console.log(invoiceUnits)
  }

  return (
    <div className='min-h-screen bg-base-200'>
      {/* card */}
      <div className='card bg-base-100'>
        <div className='card-body'>
          <h2 className='card-title text-2xl mb-4'>
            Create Invoice For Vendor
          </h2>
          {/* FORM */}
          <form onSubmit={handleInvoiceSubmit} id='invoiceForm'>
{/* FORM - INVOICE INFO */}
            <div className='flex justify-around'>
              {/* invoice number */}
              <div className='form-control mb-4 invoiceNumber'>
                <label className='label'>Invoice#</label>
                <input
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)} //update state to targeted value
                className='input input-bordered'
                type="text" 
                />
              </div>
              <div className='form-control mb-4 invoiceUnits'>
                <label className='label'>Invoice Units</label>
                <input
                  value={invoiceUnits}
                  onChange={(e) => setInvoiceUnits(e.target.value)}
                  className='input input-bordered'
                  type="text" 
                />
              </div>

              <div className='card-actions justify-end'>
                <button
                  onClick={() => navigate(`/vendors/${vendorId}/invoices`)}
                  type='submit' className='btn btn-primary createInvoiceSubmitBtn' disabled={loading}>
                  {loading ? 'Creating...' : 'Create Invoice'}
                </button>
              </div>
  

            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default InvoiceCreatePage
