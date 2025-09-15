import React from 'react'


const InvoiceCard = ({vendor, invoice}) => {
  return (
    <div className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#616f97]'>
      <div className='card-body'>
        <h3 className='card-title text-base-content'>{vendor.vendorName}</h3>
        <h4 className='text-base-content line-clamp-3'>Invoice# {invoice.invoiceNumber}</h4>

      </div>
    </div>
  )
}

export default InvoiceCard
