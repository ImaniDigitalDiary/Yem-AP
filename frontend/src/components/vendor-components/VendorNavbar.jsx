import React from 'react'

import { Link } from 'react-router'
import {PlusIcon} from 'lucide-react'

const VendorNavbar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
      <div className='mx-auto max-w-6xl p-4'>
        <div className='flex items-center justify-between'>
          {/* left side of div */}
          <h1 className='text-3xl font-bold text-primary font-mono tracking-tight'>
            Vendor Page
          </h1>
          {/* right side of div */}
          <div className='flex items-center gap-4'>
            <Link to={'/create-vendor'} className='btn btn-primary rounded-full'>
            <PlusIcon className='size-5' />
            <span>Create New Vendor</span>
            </Link>

          </div>

        </div>

      </div>
      
    </header>
  )
}

export default VendorNavbar
