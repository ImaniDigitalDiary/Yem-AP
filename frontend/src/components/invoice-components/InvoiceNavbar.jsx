import React from 'react'
import { Link } from 'react-router'

// ICONS
import { Search } from 'lucide-react'

const InvoiceNavbar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
      <div className='mx-auto max-w-6xl p-4'>
        <div className='flex items-center justify-between'>
          {/* left side of div */}
          <h1 className='text-3xl font-bold text-primary font-mono tracking-tight'>
            Invoice Page
          </h1>
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
