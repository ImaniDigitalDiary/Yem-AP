import React from 'react'



const VendorInvoiceTable = ({invoices}) => {
  
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg m-5'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-md text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th colSpan={2} className='p-4'>{
            // since all invoices belong to the same vendor for each invoice list, just need to grab the first invoice from vendor to be able to use vendor info- aka why use [0] before my optional chaining (?.) 
            // REMEMBER** - without optional chaining - error will show as 'Cannot read properies of undefined' (future ref) - with opt. chaining, will return undefined
            invoices[0]?.vendor?.vendorName}
            </th>
          </tr>
          <tr>
            <th>Invoice Number</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice._id}>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.invoiceUnits}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default VendorInvoiceTable
