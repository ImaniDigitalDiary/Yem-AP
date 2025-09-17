// import React, { useEffect, useState } from 'react'
// // components
// import VendorNavbar from '../../components/vendor-components/VendorNavbar'
// import RateLimitedUI from '../../components/RateLimitedUI'
// import VendorCard from '../../components/vendor-components/VendorCard'
// import VendorsNotFound from '../../components/VendorsNotFound'

// // axios api routes
// import axios from 'axios'
// import axiosAPI from '../../lib/axios'

// // toast
// import toast from 'react-hot-toast'

// const VendorHomepage = () => {
//   const [isRateLimited, setRateLimited] = useState(false) //a boolean - true by default in order to see in the UI
//   const [vendors, setVendors] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchVendors = async () => {
//       try {
//         // using axios instead of fetch
//         const res = await axiosAPI.get('/vendors')
//         console.log(res.data)
//         setVendors(res.data)
//         setRateLimited(false) //set to false bc if we're able to get the data, we're not rate limited
//         // const data = await res.json() ....this would be for fetch
//       } catch (error) {
//           console.log('Error fetching vendors')
//           console.log(error)
//           if(error.response?.status === 429) {
//             setRateLimited(true)
//           } else {
//             toast.error('Failed to load vendors')
//           }
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchVendors()
//   }, [])
//   return (
//     <div className='min-h-screen'>
//       <VendorNavbar />

//       {isRateLimited && <RateLimitedUI />}

//       <div className='mx-w-7xl mx-auto p-4 mt-6'>
//         {loading && <div className='text-center text-primary py-10'>Loading vendors...</div>}

//         {vendors.length === 0 && !isRateLimited && <VendorsNotFound />}

//         {vendors.length > 0 && !isRateLimited && (
//           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//             {/* get vendor and map through. for every single vendor, return a comp */}
//             {vendors.map(vendor => (
//               <VendorCard key={vendor._id} vendor={vendor}  setVendors={setVendors}/>
//             ))

//             }
//           </div>
//         )} 
//       </div>
//     </div>
//   )
// }

// export default VendorHomepage





// ***********************************
import React, { useEffect } from 'react'
import { useState } from 'react'

// COMPONENTS
import VendorNavbar from '../../components/vendor-components/VendorNavbar'
import VendorsTable from '../../components/vendor-components/VendorsTable'
import VendorsNotFound from '../../components/vendor-components/VendorsNotFound'


// AXIOS
import axiosAPI from '../../lib/axios'

const VendorHomepage = () => {
  const [vendors, setVendors] = useState([]) 


  // fetch vendors from backend
  useEffect(() => {
    const fetchVendors = async () => {
    try {
      // create response variable, grab axios api routes and get vendors from param
      const vendorFetchResponse = await axiosAPI.get('/vendors')
      // store fetched vendors in component state so the UI can rendor them
      setVendors(vendorFetchResponse.data)
    } catch (error) {
      console.log('Error fetching vendors')
      console.log(error)
    }
  }
  fetchVendors()
}, [])

  return (
    <div>
      <VendorNavbar />
      <div>
        {/* if vendors array length is equal to 0, then render VendorsNotFound component */}
        {vendors.length === 0 && <VendorsNotFound/> }

        {/* if vendors array length is greater than 0, then map through the vendor array then return the vendor table with vendors  */}
        {vendors.length > 0 && (
              <VendorsTable vendors={vendors} setVendors={setVendors} />
            )}
      </div>
    </div>
  )
}

export default VendorHomepage

