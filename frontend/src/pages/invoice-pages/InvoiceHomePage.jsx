import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import InvoiceNavbar from '../../components/invoice-components/InvoiceNavbar'
import axiosAPI from '../../lib/axios'

const InvoiceHomePage = () => {
  

  return (
    <div className='min-h-screen'>
      <InvoiceNavbar />
    </div>
  )
}

export default InvoiceHomePage
