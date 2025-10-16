import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router'
// AXIOS - FETCH
import axiosAPI from '../../lib/axios'
// TOAST
import toast from 'react-hot-toast'
// COMPONENTS
import VendorsNotFound from '../../components/vendor-components/VendorsNotFound'
import VendorNavbar from '../../components/vendor-components/VendorNavbar'
import VendorCard from '../../components/vendor-components/VendorInfoCard'
import VendorInfoCard from '../../components/vendor-components/VendorInfoCard'

const VendorDetailPage = () => {
    const [vendor, setVendor] = useState(null)

    // grab vendorId param 
    const {vendorId} = useParams()

    // fetch a specific vendor once vendor details link is click
    useEffect(() => {
        const fetchVendor = async () => {
            try {
                const res = await axiosAPI.get(`/vendors/${vendorId}`)
                setVendor(res.data)
            } catch (error) {
                console.log('Error in fetching vendor', error)
                toast.error('Failed to fetch vendor')
            }
        }
        fetchVendor()
    }, [vendorId])

    // if vendor is not found, load VendorNotFound comp
    if (!vendor) return <VendorsNotFound />
  return (
    <div className='min-h-screen bg-slate-200'>
        <VendorNavbar />
        <div className='flex items-center justify-center py-10'>
            <VendorInfoCard vendor={vendor} />
        </div>
    </div>

    
  )
}

export default VendorDetailPage

{/* center card middle of page */}
    {/* <div className='flex items-center justify-center'> 
        <div className='flex flex-col vendorDetails w-full border border-gray-500 rounded-3xl shadow-xl  m-20 p-10  bg-slate-400 '>
            <h2 className='text-2xl font-bold mb-3 uppercase'>{vendor.vendorName}</h2>

            <div className='flex flex-row gap-7 row1'>
                <div className='dbaName'>
                    <h1>Vendor dba Name</h1>
                    <div className='bg-slate-700 text-xl text-gray-300 px-3 py-5'>{vendor.dbaName}</div>
                </div>
                <div className='taxId'>
                    <h1>Tax ID</h1>
                    <div className='bg-slate-700   text-xl text-gray-300 px-3 py-5'>{vendor.taxId}</div>
                </div>
            </div>

            <div className='flex flex-row gap-7 row2'>
                <div className='vendorAddress'>
                    <h1>Vendor Address</h1>
                    <div className='bg-slate-700 text-xl text-gray-300 px-3 py-5'>{vendor.vendorAddress}</div>
                </div>
            </div>

            <div className='flex flex-row gap-7 row3'>
                <div className='primContactName'>
                    <h1>Primary Contact</h1>
                    <div className='bg-slate-700 text-xl text-gray-300 px-3 py-5'>{vendor.primaryContact}</div>
                </div>
                <div className='contactRole'>
                    <h1>Contact Role</h1>
                    <div className='bg-slate-700 text-xl text-gray-300 px-3 py-5'>{vendor.contactRole}</div>
                </div>
            </div>


             <div className='flex flex-row gap-7 row3'>
                <div className='achEmail'>
                    <h1>ACH Email</h1>
                    <div className='bg-slate-700  text-xl text-gray-300 px-3 py-2'>{vendor.vendorEmail}</div>
                </div>
                <div className='phoneNumber'>
                    <h1>Phone Number</h1>
                    <div className='bg-slate-700  text-xl text-gray-300 px-3 py-5'>{vendor.phoneNumber}</div>
                </div>
            </div>

            
                
                <Link to={`/vendors/${vendor._id}/invoices`} state={{vendor}} className='viewInvoicesBtn  bg-slate-400 p-4 rounded-lg'>
                    View Invoices
                </Link>
            
        </div>
    </div>
   </div> */}
