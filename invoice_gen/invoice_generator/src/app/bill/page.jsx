import React from 'react'
import BillGen from '../components/BillGen'
import DetailsPage from '../components/DetailsPage'
import AddItem from '../components/AddItem'

function page() {
  return (
    <div className='flex justify-between'>
      <div>
        <BillGen/>
      </div>
      <div>
        <AddItem/>
      </div>
    </div>
  )
}

export default page
