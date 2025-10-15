import React from 'react'
import { Link, useNavigate } from 'react-router'

// TOAST
import toast from'react-hot-toast'

// AXIOS API ROUTES
import axiosAPI from '../../lib/axios'

// ICONS
import { PenSquareIcon, Trash2Icon } from 'lucide-react'

const VendorsTable = ({vendors, setVendors}) => {
    const naviagte = useNavigate()

    // handleEditVendorDetails fxn
    const handleEditVendorDetails = (vendorId) => {
        try {
            // naviate to the edit vendor details page for the specific vendorId that was clicked
            naviagte(`/vendors/${vendorId}/edit-vendor-details`)
            // toast.success('Navigated to edit vendor details page')
        } catch (error) {
            console.log('Error navigating to edit vendor details page', error)
            toast.error('Failed to navigate to edit vendor details page')
        }
    }

    // handleDeleteVendor fxn
    const handleDeleteVendor = async (vendorId) => {
        // confirm the vendor deletion
        if (!window.confirm('Are you sure you want to delete this vendor?')) 
            return
        try {
            // fetch vendor by vendorId and delete it
            await axiosAPI.delete(`/vendors/${vendorId}`)
            // update the state to remove the deleted vendor from the state (UI)
            setVendors(vendors.filter((vendor) => vendor._id !== vendorId))
            toast.success('Vendor deleted successfully')
        } catch (error) {
            console.log('Error deleting vendor', error)
            toast.error('Failed to delete vendor')
        }
    }

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg m-5'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th className='px-6 py-3'>Vendor Name</th>
                    <th className='px-6 py-3'>Email</th>
                    <th className='px-6 py-3'>Action</th>
                </tr>
            </thead>
            <tbody>
                {vendors.map((vendor) => (
                    <tr key={vendor._id}
                        className='hover:bg-gray-500  bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'
                    >
                        <th className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{vendor.vendorName}</th>
                        <td className='pl-3'>{vendor.vendorEmail}</td>
                        <td className='flex justify-between pl-2 mr-2'>
                            <div className='pt-2'>
                                <button onClick={() => handleEditVendorDetails(vendor._id)}>
                                    <PenSquareIcon />
                                </button>
                                <button
                                    onClick={() => handleDeleteVendor(vendor._id)}
                                >
                                    <Trash2Icon />
                                </button>
                            </div>
                            <div className='self-center pt-2'>
                               <Link to={`/vendors/${vendor._id}/vendor-details`}>
                                    View Vendor Details
                                </Link> 
                            </div>
                            
                        </td>
                    </tr>
                ))}
                
            </tbody>

        </table>
      
    </div>
  )
}

export default VendorsTable
