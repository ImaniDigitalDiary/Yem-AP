import React, { useEffect, useState } from 'react'
// components
import Navbar from '../../components/Navbar'
import RateLimitedUI from '../../components/RateLimitedUI'
import VendorCard from '../../components/vendor-components/VendorCard'
import VendorsNotFound from '../../components/VendorsNotFound'

// axios api routes
import axios from 'axios'
import axiosAPI from '../../lib/axios'

// toast
import toast from 'react-hot-toast'

const VendorHomepage = () => {
  const [isRateLimited, setRateLimited] = useState(false) //a boolean - true by default in order to see in the UI
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        // using axios instead of fetch
        const res = await axiosAPI.get('/vendors')
        console.log(res.data)
        setVendors(res.data)
        setRateLimited(false) //set to false bc if we're able to get the data, we're not rate limited
        // const data = await res.json() ....this would be for fetch
      } catch (error) {
          console.log('Error fetching vendors')
          console.log(error)
          if(error.response?.status === 429) {
            setRateLimited(true)
          } else {
            toast.error('Failed to load vendors')
          }
      } finally {
        setLoading(false)
      }
    }

    fetchVendors()
  }, [])
  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className='mx-w-7xl mx-auto p-4 mt-6'>
        {loading && <div className='text-center text-primary py-10'>Loading vendors...</div>}

        {vendors.length === 0 && !isRateLimited && <VendorsNotFound />}

        {vendors.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* get vendor and map through. for every single vendor, return a comp */}
            {vendors.map(vendor => (
              <VendorCard key={vendor._id} vendor={vendor}  setVendors={setVendors}/>
            ))

            }
          </div>
        )} 
      </div>
    </div>
  )
}

export default VendorHomepage
