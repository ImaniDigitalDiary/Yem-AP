import React from 'react'
import { NotebookIcon } from 'lucide-react'
import { Link } from 'react-router'

const VendorsNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center'>    
        <div className='bg-primary/10 rounded-full p-8'>
            <NotebookIcon className='size-10 text-primary' />
        </div>
        <h3 className='text-2xl font-bold'>No available vendors</h3>
        <p className='text-base-content/70'>
            Ready to transform your business? Create your first vendor to get started.
        </p>
        <Link to='/create-vendor' className='btn btn-primary'>
            Create Your First Vendor
        </Link>
      
    </div>
  )
}

export default VendorsNotFound
