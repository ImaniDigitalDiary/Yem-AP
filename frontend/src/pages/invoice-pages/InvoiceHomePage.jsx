import React, { useEffect, useState } from 'react'
// COMPONENTS
import InvoiceNavBar from '../../components/invoice-components/InvoiceNavbar'
import RateLimitedUI from '../../components/RateLimitedUI'
// import InvoiceCard from '../../components/invoice-components/InvoiceCard'
import InvoicesNotFound from '../../components/invoice-components/InvoicesNotFound'
import VendorInvoiceTable from '../../components/invoice-components/VendorInvoiceTable'


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

        {/* if invoices length is equal to 0 and isRateLimited true (bc already set to false) then return InvoiceNotFound component */}
        {invoices.length === 0 && !loading && !isRateLimited && <InvoicesNotFound />}

        {/* if invoices length is greater than 0, return InvoiceTable component */}
        {invoices.length > 0 && (
          <VendorInvoiceTable invoices={invoices} setInvoices={setInvoices}/>
        )}

      </div>
    </div>
  )
}

export default InvoiceHomePage
