import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const VendorCard = ({vendor}) => {
  return (
    <div>
      <Link 
        to={`/vendor/${vendor._id}`}
        className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#616f97]'
    >
        <div className="card-body">
            <h3 className='card-title text-base-content'>{vendor.vendorName}</h3>
            <p className='text-base-content/70 line-clamp-3'>{vendor.vendorEmail}</p>

            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60'>
                    {vendor.createdAt}
                </span>
                <div className='flex items-center gap-1'>
                    <PenSquareIcon className='size-4'/>
                    <button className='btn btn-ghost btn-sm'>
                        <Trash2Icon className='size-4' />
                    </button>
                </div>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default VendorCard
