import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router'
// AXIOS - FETCH
import axiosAPI from '../../lib/axios'
// TOAST
import toast from 'react-hot-toast'
// COMPONENTS
import VendorsNotFound from '../../components/vendor-components/VendorsNotFound'
import VendorNavbar from '../../components/vendor-components/VendorNavbar'

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

    // if fendor is not found, load VendorNotFound comp
    if (!vendor) return <VendorsNotFound />
  return (
   <div>
    <VendorNavbar />

    <div className='vendorDetails m-20 p-10 shadow-md bg-white rounded '>
    <h2 className='text-2xl font-bold mb-3'>{vendor.vendorName}</h2>
    <p>Email: {vendor.vendorEmail}</p>
    <p>Vendor Name: {vendor.vendorName}</p>
    <p>dba Name: {vendor.dbaName}</p>
    <p>Primary Contact: {vendor.primaryContact}</p>
    <p>Contact Role: {vendor.contactRole}</p>
    <p className='mb-10'>Tax ID: {vendor.taxId}</p>

    <Link 
        to={`/vendors/${vendor._id}/invoices`} 
        state={{vendor}}
        className='viewInvoicesBtn  bg-slate-400 p-4 rounded-lg'
    >
        View Invoices
    </Link>
</div>
   </div>
  )
}

export default VendorDetailPage
