import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import axiosAPI from '../../lib/axios'
import toast from 'react-hot-toast'

// ICONS
import { LoaderIcon, ArrowLeftIcon, Trash2Icon, FilePlus2 } from 'lucide-react'

const EditVendorDetailsPage = () => {
  const [vendor, setVendor] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  // NAVIGATION
  const navigate = useNavigate()

 const {vendorId} = useParams() //get vendorId from App.jsx update route /:vendorId
  //  console.log({vendorId})

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const res = await axiosAPI.get(`/vendors/${vendorId}`)
        setVendor(res.data)
      } catch (error) {
        console.log('Error in fetching vendor', error)
        toast.error('Failed to fetch the vendor')
      } finally {
        setLoading(false)
      }
    }
    fetchVendor()
  }, [vendorId]) //param 
  // console.log({vendor})

  const handleDelete = async () => {
    if(!window.confirm(`Are you sure you want to delete vendor ${vendor.vendorName} ?`))
      return
    try {
        await axiosAPI.delete(`/vendors/${vendorId}`)
        toast.success(`Vendor ${vendor.vendorName} deleted`)
        navigate('/vendors')
    } catch (error) {
        console.log('Error deleting vendor', error)
        toast.error('Failed to delete vendor')
    }
  }

  const handleSaveUpdate = async () => {
    if (!vendor.vendorName.trim() || !vendor.vendorEmail.trim()) {
    toast.error('Please fill in all inputs')
    return;
    } 

    // when submit button is clicked, display a confirmation dialog to the user to confirm in window if use wants to update vendor before continuing with the save
    if (!window.confirm(`Are you sure you want to update vendor ${vendor.vendorName}?`)) 
      return
    
    setSaving(true) 
    try {
      await axiosAPI.put(`/vendors/${vendorId}`, vendor)
      toast.success('Vendor updated successfully')
      navigate('/vendors')
    } catch (error) { 
        console.log('Error saving vendor:', error)
        toast.error('Failed to update vendor')
    } finally {
      setSaving(false)
    }
  } 

  

  if (loading) {
    return (
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className='animate-spin size-10' />
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>     
          <div className='flex items-center justify-between mb-6'>  
            <Link to='/vendors' className='btn btn-ghost'>
              <ArrowLeftIcon className='h-5 w-5'/>
              Back to Vendors
            </Link>
            {/* <button>
              <Link to='#invoicePage'>
              </Link>
            </button> */}
            <button onClick={handleDelete} className='btn btn-error btn-outline'>
                <Trash2Icon className='h-5 w-5' />
                Delete Vendor
            </button>
          </div>
          <div className='card bg-base-100'>
            <div className='card-body'>
              {/* VENDOR NAME */}
              <div className='form-control mb-4'>
                <label htmlFor="" className='label'>
                  <span className='label-text'>Vendor Name</span>
                </label>
                <input 
                  value={vendor.vendorName}
                  onChange={(e) => setVendor({...vendor, vendorName: e.target.value})} //update state
                  type="text"  
                  placeholder='Vendor Name' 
                  className='input input-bordered'
                  name="" id="" />
              </div>
              {/* VENDOR EMAIL */}
              <div className='form-control mb-4'>
                <label htmlFor="" className='label'>
                  <span className='label-text'>Vendor Email</span>
                </label>
                <input 
                  value={vendor.vendorEmail}
                  onChange={(e) => setVendor({...vendor, vendorEmail: e.target.value})} //update state
                  type="text"  
                  placeholder='Vendor Email' 
                  className='input input-bordered'
                  name="" id="" />
              </div>
              {/* UPDATE BTN */}
              <div className='card-actions justify-end'>
                <button className='btn btn-primary' disabled={saving} onClick={handleSaveUpdate}>
                  {saving ? 'Saving...' : 'Save changes'}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditVendorDetailsPage
