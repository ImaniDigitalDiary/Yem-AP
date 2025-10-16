import { ArrowLeftIcon } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router'

// axios api routes
import axios from 'axios'
import axiosAPI from '../../lib/axios'

const VendorCreatePage = () => {
  // BASIC VENDOR INFO
  const [vendorName, setVendorName] = useState('')
  const [dbaName, setDbaName] = useState('')
  const [vendorAddress, setVendorAddress] = useState('')
  const [taxId, setTaxId] = useState('')
  // CONTACT INFO
  const [primaryContact, setPrimaryContact] = useState('')
  const [contactRole, setContactRole] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [vendorEmail, setVendorEmail] = useState('')

  const [loading,setLoading] = useState(false) //by default it's fault, once form is submitted, it'll equal to true

  // useNavigate hook
  const navigate = useNavigate()

  // once form is submited...
  const handleSubmit = async (e) => {
    e.preventDefault() //avoid paid refresh on submit

    // validation - if vendor name or if vendor email is not provided, throw an error - .trim() to avoid an empty value
    // if(!vendorName.trim() || !vendorEmail.trim()) {
    //   toast.error('All fields are required')
    //   return;
    // }
    
    setLoading(true) 
      try {
        await axiosAPI.post('/vendors', {
          vendorName,
          dbaName,
          vendorAddress,
          taxId,
          primaryContact,
          contactRole,
          vendorEmail,
          phoneNumber
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
{/* navigation */}
          <Link to={'/vendors'} className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5' />
            Back to Vendors
          </Link>
{/* card */}
          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4'> Create New Vendor</h2>
              <form onSubmit={handleSubmit}>
{/* START: BASIC VENDOR INFO  */}
                {/* vendor name & dba name flex container */}
                <div className='flex justify-around'>
                  {/* VENDOR NAME */}
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
                      name="vendorName" id="vendorName" />
                  </div>
                  {/* DBA NAME */}
                  <div className='form-control mb-4'>
                    <label htmlFor="" className='label'>
                      <span className='label-text'>dba Name</span>
                    </label>
                    <input 
                      value={dbaName}
                      onChange={(e) => setDbaName(e.target.value)} //update state
                      type="text"  
                      placeholder='dba Name' 
                      className='input input-bordered'
                      name="dbaName" id="dbaName" />
                  </div>
                </div>
                {/* vendor type & tax id flex container */}
                <div className='flex justify-around'>
                  {/* VENDOR TYPE  - RADIO DROPDOWN*/}
                  <div className='form-control mb-4'>
                    <label htmlFor="" className='label'>
                      <span className='label-text'>Vendor Address</span>
                    </label>
                    <input 
                      value={vendorAddress}
                      onChange={(e) => setVendorAddress(e.target.value)} //update state
                      type="text"  
                      placeholder='123 Smile Lane, Suite 200, New York, NY 10001' 
                      className='input input-bordered'
                      name="vendorAddress" id="vendorAddress" />
                  </div>
                  {/* TAX ID */}
                  <div className='form-control mb-4'>
                    <label htmlFor="" className='label'>
                      <span className='label-text'>Tax ID</span>
                    </label>
                    <input 
                      value={taxId}
                      onChange={(e) => setTaxId(e.target.value)} //update state
                      type="text"  
                      placeholder='Tax ID' 
                      className='input input-bordered'
                      name="taxId" id="taxId" />
                  </div>
                </div>
{/* END: BASIC VENDOR INFO  */}  

{/* START: CONTACT INFO */}
                {/* primary contact & contact role flex container */}
                <div className='flex justify-around'>
                  {/* PRIMARY CONTACT */}
                  <div className='form-control mb-4'>
                    <label htmlFor="" className='label'>
                      <span className='label-text'>Primary Contact</span>
                    </label>
                    <input 
                      value={primaryContact}
                      onChange={(e) => setPrimaryContact(e.target.value)} //update state
                      type="text"  
                      placeholder='Primary Contact' 
                      className='input input-bordered'
                      name="primaryContact" id="primaryContact" />
                  </div>
                  {/* CONTACT ROLE */}
                  <div className='form-control mb-4'>
                    <label htmlFor="" className='label'>
                      <span className='label-text'>Contact Role</span>
                    </label>
                    <input 
                      value={contactRole}
                      onChange={(e) => setContactRole(e.target.value)} //update state
                      type="text"  
                      placeholder='Contact Role' 
                      className='input input-bordered'
                      name="contactRole" id="contactRole" />
                  </div>
                </div>
                {/* phone number & vendor email flex container */}
                <div className='flex justify-around'>
                  {/* PHONE NUMBER */}
                  <div className='form-control mb-4'>
                    <label htmlFor="" className='label'>
                      <span className='label-text'>Phone Number</span>
                    </label>
                    <input 
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)} //update state
                      type="text"  
                      placeholder='Phone Number' 
                      className='input input-bordered'
                      name="phoneNumber" id="phoneNumber" />
                  </div>
                  {/* VENDOR EMAIL */}
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
                      name="vendorEmail" id="vendorEmail" />
                  </div>
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
