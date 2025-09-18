import React from 'react'


// ICONS
import { PenSquareIcon, Trash2Icon } from 'lucide-react'

const VendorsTable = ({vendors}) => {




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
                        <td>{vendor.vendorEmail}</td>
                        <td className='flex justify-between'>
                            <div className="penTrashIconsDiv">
                                <button>
                                    <PenSquareIcon />
                                </button>
                                <button>
                                    <Trash2Icon />
                                </button>
                            </div>
                            
                            <button>View Vendor Details</button>
                        </td>
                    </tr>
                ))}
                
            </tbody>

        </table>
      
    </div>
  )
}

export default VendorsTable
