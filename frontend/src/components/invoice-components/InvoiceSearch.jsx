import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'

// TOAST
import toast from 'react-hot-toast'

// AXIOS
import axios from 'axios'

const InvoiceSearch = ({invoices, setInvoices}) => {
    const [invoiceQuery, setInvoiceQuery] = useState('')
    const {vendorId} = useParams()

    const [originalInvoices, setOriginalInvoices] = useState([])
    const [hasSearched, setHasSearched] = useState(false)

    // fetch intial invoices on page load to keep a copy
    useEffect(() => {
        if (vendorId) {
            const fetchInitialInvoices = async () => {
                try {
                    const res = await axios.get(`/vendors/${vendorId}/invoices`)
                    if (Array.isArray(res.data)) {
                        setOriginalInvoices(res.data)
                        setInvoices(res.data) // Also update the parent component's state as well
                    }
                } catch (error) {
                    console.error('Failed to fetch initial invoices for search component', error)
                }
            }
            fetchInitialInvoices()
        }
    }, [vendorId, setInvoices])


    // fxn to fetch invoices based on search query from the backend 
    // const handleSearchInvoices = async (query) => {
    //     try {
    //         const response = await axios.get(`vendor/${vendorId}/invoices?search=${query}`)
    //         setInvoices(response.data)
    //     } catch (error) {
    //         console.log('Error fetching invoices', error)
    //         // if error, clear results to an empty array
    //         if (error.response && error.response.status === 404) {
    //             setInvoices([])
    //         } else {
    //             toast.error('Failed to fetch invoices')
    //         }
    //     }
    // }

    // live search effect (debounce effect)
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            handleSearchInvoices(invoiceQuery)
        }, 500)
        
        return () => clearTimeout(delayDebounce)
    }, [invoiceQuery, setInvoices])

  return (
    <div className='p-4'>
        <input 
            type="text" 
            placeholder="Search for invoices..." 
            value={invoiceQuery}
            onChange={(e) => setInvoiceQuery(e.target.value)}
        />

        <button
            className='btn btn-primary mt-2'
            onClick={() => handleSearchInvoices(invoiceQuery)  }
        >
            Search Invoices
        </button>
    </div>
  )
}

export default InvoiceSearch
