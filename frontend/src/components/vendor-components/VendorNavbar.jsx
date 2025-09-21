import React from 'react'

import { Link } from 'react-router'
import {PlusIcon} from 'lucide-react'

const VendorNavbar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
      <div className='mx-auto max-w-6xl p-4'>
        <div className='flex items-center justify-between'>
          {/* left side of div */}
          <div className='flex-col'>
            <Link to={`/vendors`}
              className='text-4xl font-bold text-primary font-mono tracking-widest'>
              Yem<span className='text-cyan-600'>AP</span>
            </Link>
            <div className='uppercase text-center'>
                <Link to={`/vendors`}
                  className='text-cyan-800 font-bold tracking-tight'>
                  Vendors
                </Link>
            </div>
          </div>
          {/* right side of div */}
         {/* <div className='flex flex-col'> */}
           <div className='flex items-center gap-4'>
            <Link to={'/create-vendor'} className='btn btn-primary rounded-full'>
            <PlusIcon className='size-5' />
            <span>Create New Vendor</span>
            </Link>
          </div>
         {/* </div> */}
        </div>
      </div>      
    </header>
  )
}

export default VendorNavbar
