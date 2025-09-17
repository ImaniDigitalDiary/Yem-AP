import React from 'react'

const VendorsTable = ({vendors}) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th>Vendor Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {vendors.map((vendor) => (
                    <tr key={vendor._id}>
                        <th>{vendor.vendorName}</th>
                        <td>{vendor.vendorEmail}</td>
                    </tr>
                ))}
                
            </tbody>

        </table>
      
    </div>
  )
}

export default VendorsTable
