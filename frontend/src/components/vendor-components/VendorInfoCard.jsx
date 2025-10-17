import React from 'react'
import { Link, useParams } from 'react-router'

// COMPONENTS
import InvoicesNotFound from '../invoice-components/InvoicesNotFound'

// ICONS
import { House } from 'lucide-react'

const VendorInfoCard = ({vendor}) => {
  if (!vendor) return <InvoicesNotFound />

  const {vendorId} = useParams()
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

      // <div className='flex flex-col'>
        <div className='w-full max-w-3xl mx-10  border-4 border-slate-500 rounded-3xl shadow-2xl bg-slate-400 p-10 px-8'>
          <div className='vendorDetailNav flex flex-row gap-4 justify-end font-thin'>
            {/* Link to Edit Vendor Details */}
            <Link 
              to={`/vendors/${vendor._id}/edit-vendor-details`} 
              className='hover:text-blue-800'
            >
              Edit Vendor Info
            </Link>
            <Link 
              to={`/vendors`}
              className='hover:text-blue-800 flex gap-1'
            >
              Vendors <House />
            </Link>
          </div>
          <div key={vendorId} className='text-3xl font-bold mb-8 uppercase text-gray-800 tracking-wide'>
            {vendor.vendorName }
            <br />
            <span className='text-xl pb-3 font-thin'>
            {/* displays the id of the vendor -would later like to update to not show mongodb id but to render in new array starting at 1 for first vendor and going upwards while still keeping mongodb id on backend */}
            Vendor ID# <strong>{vendor?._id} </strong>
          </span>
          </div>
          

            {vendorInfoGroups.map((group, i) => (
              <div key={i} className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {group.map((info, j) => (
                  <div key={j} className='flex flex-col'>
                    <span className='font-thin text-slate-800 mb-0 tracking-wide'>
                      {info.label}
                    </span>
                    <div className='mb-5'>
                      {info.value || '-'}
                    </div>
                  </div>
                ))}
              </div>
            ))}

            
            

            {/* LINK TO VENDOR ID INVOICES */}
            <div className=''>
              <div className='mt-3'>
                <Link
                  to={`/vendors/${vendor._id}/invoices`}
                  state={{vendor}}
                  className='inline-block bg-slate-700 hover:bg-slate-800 text-white px-14 py-3 mt-3 rounded-2xl transition-all duration-200'
                >
                  View Invoices
                </Link>
              </div>
            </div>
        </div>
      // </div>      
  )
}

export default VendorInfoCard



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