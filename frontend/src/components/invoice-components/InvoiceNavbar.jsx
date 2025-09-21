import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router'

// ICONS
import { Search } from 'lucide-react'

const InvoiceNavbar = () => {
  const location = useLocation()
  const {vendor} = location.state || 'Unavailable'
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
                  {vendor?.vendorName} Invoices
                </Link>
            </div>
          </div>
          {/* right side of div */}
          <div className='flex items-center gap-4'>
            <Link to={'/invoices'} className='btn btn-primary rounded-full'>
            <Search className='size-5' />
            <span>Search Invoices</span>
            </Link>
          </div>
        </div>
      </div>      
    </header>
  )
}

export default InvoiceNavbar
