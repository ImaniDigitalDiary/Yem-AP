import { ArrowLeftIcon } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router'

// axios api routes
import axios from 'axios'
import axiosAPI from '../../lib/axios'

const VendorCreatePage = () => {
  const [vendorName, setVendorName] = useState('')
  const [vendorEmail, setVendorEmail] = useState('')
  const [loading,setLoading] = useState(false) //by default it's fault, once form is submitted, it'll equal to true

  // useNavigate hook
  const navigate = useNavigate()

  // once form is submited...
  const handleSubmit = async (e) => {
    e.preventDefault() //avoid paid refresh on submit

    // validation - if vendor name or if vendor email is not provided, throw an error - .trim() to avoid an empty value
    if(!vendorName.trim() || !vendorEmail.trim()) {
      toast.error('All fields are required')
      return;
    }
    
    setLoading(true) 
      try {
        await axiosAPI.post('/vendors', {
          vendorName,
          vendorEmail
        })
        toast.success('Vendor created successfully')
        navigate('/vendors')
      } catch (error) {
          console.log('Error creating vendor', error)
          toast.error('Failed to create vendor')
      } finally {
           setLoading(false)
      }
    // console.log(vendorName)
    // console.log(vendorEmail)
  }


  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to={'/vendors'} className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5' />
            Back to Vendors
          </Link>

          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4'> Create New Vendor</h2>
              <form onSubmit={handleSubmit}>
                <div className='form-control mb-4'>
                  <label htmlFor="" className='label'>
                    <span className='label-text'>Vendor Name</span>
                  </label>
                  <input 
                    value={vendorName}
                    onChange={(e) => setVendorName(e.target.value)} //update state
                    type="text"  
                    placeholder='Vendor Name' 
                    className='input input-bordered'
                    name="" id="" />
                </div>
                <div className='form-control mb-4'>
                  <label htmlFor="" className='label'>
                    <span className='label-text'>Vendor Email</span>
                  </label>
                  <input 
                    value={vendorEmail}
                    onChange={(e) => setVendorEmail(e.target.value)} //update state
                    type="text"  
                    placeholder='Vendor Email' 
                    className='input input-bordered'
                    name="" id="" />
                </div>
                <div className='card-actions justify-end'>
                  <button type='submit' className='btn btn-primary' disabled={loading}>
                    {loading ? 'Creating...' : 'Create Vendor'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default VendorCreatePage
