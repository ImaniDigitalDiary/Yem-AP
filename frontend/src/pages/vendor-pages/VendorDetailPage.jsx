import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
// AXIOS - FETCH
import axiosAPI from '../../lib/axios'
// TOAST
import toast from 'react-hot-toast'
// COMPONENTS
import VendorsNotFound from '../../components/vendor-components/VendorsNotFound'

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
    <div className='m-5 p-5 shadow-md bg-white rounded'>
        <h2 className='text-2xl font-bold mb-3'>{vendor.vendorName}</h2>
        <p>Email: {vendor.vendorEmail}</p>
    </div>
  )
}

export default VendorDetailPage
