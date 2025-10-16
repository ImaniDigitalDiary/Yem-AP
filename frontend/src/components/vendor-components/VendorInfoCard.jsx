import React from 'react'
import InvoicesNotFound from '../invoice-components/InvoicesNotFound'

import { Link } from 'react-router'
const VendorInfoCard = ({vendor}) => {
  if (!vendor) return <InvoicesNotFound />

  // an array of objects representing each vendor info group. Each group contains an array of objects with label and value properties.
  // all the vendor info that are displayed in the card are fetched from this array.
  const vendorInfoGroups = [
    [
      {label: 'Vendor DBA Name', value: vendor.dbaName },
      { label: 'Tax ID', value: vendor.taxId },
    ],
    [ {label: 'Vendor Address', value: vendor.vendorAddress } ],
    [
      { label: 'Primary Contact', value: vendor.primaryContact },
      { label: 'Contact Role', value: vendor.contactRole },
    ],
    [
      { label: 'ACH Email', value: vendor.vendorEmail },
      { label: 'Phone Number', value: vendor.phoneNumber },
    ],
  ]
  return (
    <div className='w-full max-w-3xl mx-auto border border-gray-400 rounded-3xl shadow-lg bg-slate-400 p-10'>
      <h2 className='text-3xl font-bold mb-8 uppercase text-center text-slate-900'>
        {vendor.vendorName}
      </h2>

      {/* GRID FOR A 2 COL LAYOUT */}
      {/* <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {vendorInfoGroups.map((vendorInfoGroupItem, index) => (
          <div key={index} className='flex flex-col'>
            <span className='font-semibold text-slate-900 mb-1'>
              {vendorInfoGroupItem.label}
            </span>
            <div className='bg-slate-700 text-gray-200 text-lg px-4 py-3 rounded-md break-words'>
              {vendorInfoGroupItem.value || '-'}
            </div>
          </div>
        ))} */}

        {vendorInfoGroups.map((group, i) => (
          <div key={i} className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {group.map((info, j) => (
              <div key={j} className='flex flex-col'>
                <span className='font-semibold text-slate-900 mb-1'>
                  {info.label}
                </span>
                <div>
                  {info.value || '-'}
                </div>
              </div>
            ))}
          </div>
        ))}

        
         

        {/* LINK TO VENDOR ID INVOICES */}
        <div>
          <Link
            to={`/vendors/${vendor._id}/invoices`}
            state={{vendor}}
            className='inline-block bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-xl transition-all duration-200'
          >
            View Invoices
          </Link>
        </div>
      </div>
  )
}

export default VendorInfoCard
