import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'

// TOAST
import toast from 'react-hot-toast'

// AXIOS
import axios from 'axios'
import axiosAPI from '../../lib/axios'

const InvoiceSearch = ({invoices, setInvoices}) => {
    const [invoiceQuery, setInvoiceQuery] = useState('')
    const {vendorId} = useParams()

   
    // fxn to fetch invoices based on search query from the backend 
    const handleSearchInvoices = async (query) => {
        try {
            const response = await axios.get(`vendor/${vendorId}/invoices?search=${query}`)
            setInvoices(response.data)
        } catch (error) {
            console.log('Error fetching invoices', error)
            // if error, clear results to an empty array
            if (error.response && error.response.status === 404) {
                setInvoices([])
            } else {
                toast.error('Failed to fetch invoices')
            }
        }
    }

    // live search effect (debounce effect)
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            handleSearchInvoices(invoiceQuery)
        }, 500)
        
        return () => clearTimeout(delayDebounce)
    }, [invoiceQuery, setInvoices, vendorId])

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
