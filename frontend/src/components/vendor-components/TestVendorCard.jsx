import { PenSquareIcon, Trash2Icon, FilePlus2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { formatDate } from '../../lib/utils'
import axiosAPI from '../../lib/axios'
import toast from 'react-hot-toast'

const VendorCard = ({vendor, setVendors, invoices}) => {

    const handleDelete = async (e, vendorId) => {
        e.preventDefault() // get rid of the navigation behavior or making the whole card a link and just make each icon a link

        if(!window.confirm(`Are you sure you want to delete vendor ${vendor.vendorName} ?` )) 
            return
        try {
            await axiosAPI.delete(`/vendors/${vendorId}`)
            setVendors((prevVendors) => prevVendors.filter((vendor) => vendor._id !== vendorId)) //updated ui immediately - once note is deleted successfully, get all previous vendors and filter out the one that was deleted
            toast.success('Vendor deleted successfully')
        } catch (error) {
            console.log('Erorr in handle delete', error)
            toast.error('Failed to delete vendor')
        }
    }

  return (
    <div className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#616f97]'>
        <div className="card-body">
            <h3 className='card-title text-base-content'>{vendor.vendorName}</h3>
            <p className='text-base-content/70 line-clamp-3'>{vendor.vendorEmail}</p> 
            <div className='card-actions justify-between items-center mt-4'>
                {/* use the formatDate fxn  from utils.js with new Date that will take the date and give it a more readible format */}
                {/* <span className='text-sm text-base-content/60'>
                    {formatDate(new Date(vendor.createdAt))} 
                </span> */}

                <Link to={`/vendor/${vendor._id}`}>
                <div className='editIcon flex items-center gap-1'>
                    <PenSquareIcon className='size-4'/>
                    </div>
                </Link>
                    <button className='btn btn-ghost btn-sm' onClick={(e) => handleDelete(e, vendor._id)}>
                        <Trash2Icon className='size-4' />
                    </button>
                
            </div>
        </div>
    </div>
  )
}

export default VendorCard
