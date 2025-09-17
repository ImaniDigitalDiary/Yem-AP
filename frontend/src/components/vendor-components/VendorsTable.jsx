import React from 'react'

const VendorsTable = (invoice) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th>{invoice.vendor.vendorName}</th>
                    <th>{invoice.vendor.vendorEmail}</th>
                    <th>View Vendor Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>

                </tr>
            </tbody>

        </table>
      
    </div>
  )
}

export default VendorsTable
