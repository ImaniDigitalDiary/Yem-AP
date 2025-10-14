import React from 'react'
import { Link, useParams } from 'react-router'

// ICONS 
import { NotebookIcon } from 'lucide-react'

const InvoicesNotFound = () => {
  const vendorId = useParams().vendorId

  return (
    <div className='flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center'>    
        <div className='bg-primary/10 rounded-full p-8'>
            <NotebookIcon className='size-10 text-primary' />
        </div>
        <h3 className='text-2xl font-bold'>No available invoices</h3>
        <p className='text-base-content/70'>
            Ready to transform your business? Create your first invoice for vendor to get started.
        </p>
        <Link to={`/vendors/${vendorId}/create-invoice`} className='btn btn-primary'>
            Create Your First Invoice For Vendor
        </Link>
      
    </div>
  )
}

export default InvoicesNotFound
