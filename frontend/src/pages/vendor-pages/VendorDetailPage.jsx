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
                console.log('Vendor API response:', res.data)
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

