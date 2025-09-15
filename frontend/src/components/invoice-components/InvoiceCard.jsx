import React from 'react'


const InvoiceCard = ({ invoice }) => {
    console.log('InvoiceCard invoice:', invoice)
  return (
    <div className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#616f97]'>
      <div className='card-body'>
        <h3 className='card-title text-base-content'>{invoice.vendor?.vendorName}</h3>
        <h4 className='text-base-content/70 line-clamp-3'>Invoice# {invoice.invoiceNumber}</h4>
        <h4 className='text-base-content/70 line-clamp-3'>Units: {invoice.invoiceUnits}</h4>

      </div>
    </div>
  )
}

export default InvoiceCard
