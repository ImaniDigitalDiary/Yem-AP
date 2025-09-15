import React, { useEffect, useState } from 'react'
// COMPONENTS
import InvoiceNavBar from '../../components/invoice-components/InvoiceNavbar'
import RateLimitedUI from '../../components/RateLimitedUI'
import InvoiceCard from '../../components/invoice-components/InvoiceCard'
import InvoicesNotFound from '../../components/invoice-components/InvoicesNotFound'


// AXIOS API ROUTES
import axiosAPI from '../../lib/axios'

// TOAST
import toast from 'react-hot-toast'
import { useParams } from 'react-router'


const InvoiceHomePage = () => {
  const {vendorId} = useParams()
  const [isRateLimited, setRateLimited] = useState(false) //a boolean - true by default in order to see in the UI
  const [invoices, setInvoices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        // using axios instead of fetch
        const res = await axiosAPI.get(`/vendors/${vendorId}/invoices`)
        console.log('invoices api response:' , res.data)
        setInvoices(res.data)
        setRateLimited(false) //set to false bc if we're able to get the data, we're not rate limited
        // const data = await res.json() ....this would be for fetch
      } catch (error) {
          console.log('Error fetching invoices', error)
          // console.log(error)
          if(error.response?.status === 429) {
            setRateLimited(true)
          } else {
            toast.error('Failed to load invoices')
          }
      } finally {
        setLoading(false)
      }
    }
    if (vendorId) { // only fetch if vendorId is available
      fetchInvoices()

    }
  }, [vendorId]) //refetch is the vendorId changes
  return (
    <div className='min-h-screen'>
      <InvoiceNavBar />

      {isRateLimited && <RateLimitedUI />}

      <div className='mx-w-7xl mx-auto p-4 mt-6'>
        {loading && <div className='text-center text-primary py-10'>Loading invoices...</div>}

        {invoices.length === 0 && !isRateLimited && <InvoicesNotFound />}

        {invoices.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* get invoice and map through. for every single invoice, return a comp */}
            {invoices.map(invoice => (
              <InvoiceCard key={invoice._id} invoice={invoice}  setInvoices={setInvoices}/>
            ))

            }
          </div>
        )} 
      </div>
    </div>
  )
}

export default InvoiceHomePage
